'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { TransitionLink } from '@/components/page-transition'
import { projects } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const INTERVAL_MS = 3000

export function ProjectSlider({ aspect = 'aspect-[4/5] sm:aspect-[16/9]' }: { aspect?: string }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = projects.length

  const go = useCallback((next: number) => setIndex((next + count) % count), [count])

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL_MS)
    return () => clearInterval(id)
  }, [paused, count, index])

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Projeler"
    >
      <div className={cn('relative w-full overflow-hidden bg-muted', aspect)}>
        {projects.map((project, i) => (
          <TransitionLink
            key={project.slug}
            href={`/projeler/${project.slug}`}
            label={project.title}
            aria-hidden={i !== index}
            tabIndex={i === index ? 0 : -1}
            aria-label={`${project.title} projesini aç`}
            className={cn(
              'group absolute inset-0 block transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
              i === index ? 'z-10 scale-100 opacity-100' : 'pointer-events-none scale-110 opacity-0',
            )}
          >
            <Image
              src={project.src || '/placeholder.svg'}
              alt={project.title}
              fill
              priority={i === 0}
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-foreground/60 to-transparent" />
            <span className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-background md:bottom-8 md:left-8 md:right-8">
              <span>
                <span className="block text-xs uppercase tracking-[0.3em] opacity-90">
                  {project.category} · {project.year}
                </span>
                <span data-transition-label className="mt-2 block text-3xl font-light md:text-4xl">
                  {project.title}
                </span>
              </span>
              <span className="flex size-11 items-center justify-center rounded-full border border-background/60 transition-colors group-hover:bg-background group-hover:text-foreground">
                <ArrowUpRight className="size-4" />
              </span>
            </span>
          </TransitionLink>
        ))}
        <p className="sr-only" aria-live="polite">
          {projects[index].title}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {projects.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              onClick={() => go(i)}
              aria-label={`${i + 1}. projeye git`}
              aria-current={i === index}
              className="relative h-px w-8 py-2 md:w-12"
            >
              <span className="absolute inset-x-0 top-1/2 h-px bg-border" />
              <span
                key={i === index ? `active-${index}` : 'idle'}
                className={cn(
                  'absolute left-0 top-1/2 h-px bg-foreground',
                  i === index ? (paused ? 'w-full' : 'animate-[slider-progress_3s_linear_forwards]') : 'w-0',
                )}
              />
            </button>
          ))}
          <span className="ml-3 text-xs tracking-[0.2em] text-muted-foreground">
            {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Önceki proje"
            className="flex size-11 items-center justify-center rounded-full border border-foreground/20 transition-colors hover:bg-foreground hover:text-background"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Sonraki proje"
            className="flex size-11 items-center justify-center rounded-full border border-foreground/20 transition-colors hover:bg-foreground hover:text-background"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
      <style>{`@keyframes slider-progress { from { width: 0 } to { width: 100% } }`}</style>
    </div>
  )
}
