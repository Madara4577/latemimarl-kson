'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
  type ComponentProps,
  type CSSProperties,
  type MouseEvent,
} from 'react'

type TransitionState = {
  href: string
  label: string
  rect: DOMRect
  style: CSSProperties
}

const TransitionContext = createContext<(state: TransitionState) => void>(() => {})

const EASE = 'cubic-bezier(0.76, 0, 0.24, 1)'
const FADE_MS = 450
const GROW_MS = 950
const LIFT_MS = 850

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [state, setState] = useState<TransitionState | null>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const busy = useRef(false)

  const start = useCallback(
    (next: TransitionState) => {
      if (busy.current) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        router.push(next.href)
        return
      }
      busy.current = true
      router.prefetch(next.href)
      setState(next)
    },
    [router],
  )

  useLayoutEffect(() => {
    const overlay = overlayRef.current
    const backdrop = backdropRef.current
    const text = textRef.current
    if (!state || !overlay || !backdrop || !text) return

    const { rect } = state
    const vw = window.innerWidth
    const vh = window.innerHeight
    const width = text.offsetWidth || rect.width
    const height = text.offsetHeight || rect.height
    const targetWidth = vw * 0.96
    const scale = targetWidth / width
    const dx = (vw - targetWidth) / 2 - rect.left
    const dy = (vh - height * scale) / 2 - rect.top

    backdrop.animate([{ opacity: 0 }, { opacity: 1 }], { duration: FADE_MS, easing: 'ease-out', fill: 'forwards' })
    text.animate(
      [{ transform: 'translate(0, 0) scale(1)' }, { transform: `translate(${dx}px, ${dy}px) scale(${scale})` }],
      { duration: GROW_MS, easing: EASE, fill: 'forwards' },
    )

    const pushTimer = window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
      router.push(state.href, { scroll: false })
    }, FADE_MS + 50)

    const liftTimer = window.setTimeout(() => {
      const lift = overlay.animate(
        [{ transform: 'translateY(0)' }, { transform: 'translateY(-100%)' }],
        { duration: LIFT_MS, easing: EASE, fill: 'forwards' },
      )
      lift.onfinish = () => {
        busy.current = false
        setState(null)
      }
    }, GROW_MS + 150)

    return () => {
      window.clearTimeout(pushTimer)
      window.clearTimeout(liftTimer)
    }
  }, [state, router])

  return (
    <TransitionContext.Provider value={start}>
      {children}
      {state ? (
        <div ref={overlayRef} aria-hidden="true" className="pointer-events-auto fixed inset-0 z-[100] overflow-hidden">
          <div ref={backdropRef} className="absolute inset-0 bg-background opacity-0" />
          <span
            ref={textRef}
            className="absolute origin-top-left whitespace-nowrap text-foreground will-change-transform"
            style={{ ...state.style, left: state.rect.left, top: state.rect.top }}
          >
            {state.label}
          </span>
        </div>
      ) : null}
    </TransitionContext.Provider>
  )
}

type TransitionLinkProps = ComponentProps<typeof Link> & { href: string; label: string }

export function TransitionLink({ href, label, onClick, children, ...props }: TransitionLinkProps) {
  const start = useContext(TransitionContext)
  const pathname = usePathname()

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event)
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return
    event.preventDefault()
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const anchor = event.currentTarget
    const source = anchor.querySelector<HTMLElement>('[data-transition-label]') ?? anchor
    const computed = window.getComputedStyle(source)
    start({
      href,
      label,
      rect: source.getBoundingClientRect(),
      style: {
        fontFamily: computed.fontFamily,
        fontSize: computed.fontSize,
        fontWeight: computed.fontWeight,
        letterSpacing: computed.letterSpacing,
        lineHeight: computed.lineHeight,
        textTransform: computed.textTransform as CSSProperties['textTransform'],
      },
    })
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
