'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { TransitionLink } from '@/components/page-transition'
import { Poppins } from 'next/font/google'
import { navLinks } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const logoFont = Poppins({ subsets: ['latin', 'latin-ext'], weight: ['400'] })

export function Logo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  return (
    <span
      className={cn(
        logoFont.className,
        'flex flex-col items-start leading-none',
        variant === 'light' ? 'text-white' : 'text-black',
      )}
    >
      <span data-transition-label className="relative flex items-center text-[26px] md:text-[30px]">
        <span className="tracking-[0.12em]">La</span>
        <span
          aria-hidden="true"
          className={cn(
            'mx-[0.12em] block h-[1.55em] w-[2px] -translate-y-[0.08em]',
            variant === 'light' ? 'bg-white/45' : 'bg-[#d9d9d9]',
          )}
        />
        <span className="tracking-[0.12em]">te</span>
      </span>
      <span className="mt-1 text-[11px] tracking-[0.52em] md:text-[12px]">mimarlık</span>
    </span>
  )
}

function NavList({ links, className }: { links: readonly { href: string; label: string }[]; className?: string }) {
  const pathname = usePathname()
  return (
    <ul className={cn('flex items-center gap-10', className)}>
      {links.map((link) => {
        const active = pathname === link.href || pathname.startsWith(`${link.href}/`)
        return (
          <li key={link.href}>
            <TransitionLink
              href={link.href}
              label={link.label}
              aria-current={active ? 'page' : undefined}
              className={cn(
                'relative text-sm tracking-[0.12em] transition-colors hover:text-foreground',
                active ? 'text-foreground' : 'text-muted-foreground',
                'after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-foreground after:transition-all after:duration-500',
                active ? 'after:w-full' : 'after:w-0 hover:after:w-full',
              )}
            >
              <span data-transition-label>{link.label}</span>
            </TransitionLink>
          </li>
        )
      })}
    </ul>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-20 px-6 py-4 md:px-10 lg:gap-32">
        <TransitionLink
          href="/"
          label="Late"
          aria-label="Late Mimarlık ana sayfa"
          className="shrink-0"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </TransitionLink>

        <nav aria-label="Ana menü" className="hidden flex-1 md:block">
          <NavList links={navLinks} className="justify-between" />
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobil-menu"
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <nav
        id="mobil-menu"
        aria-label="Mobil menü"
        className={cn(
          'grid overflow-hidden transition-all duration-500 md:hidden',
          open ? 'grid-rows-[1fr] border-t border-border' : 'grid-rows-[0fr]',
        )}
      >
        <ul className="min-h-0 px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <TransitionLink
                href={link.href}
                label={link.label}
                onClick={() => setOpen(false)}
                aria-current={pathname === link.href ? 'page' : undefined}
                className="block py-3 text-2xl"
              >
                <span data-transition-label>{link.label}</span>
              </TransitionLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
