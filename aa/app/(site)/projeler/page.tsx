import type { Metadata } from 'next'
import Image from 'next/image'
import { ProjectSlider } from '@/components/project-slider'
import { PageIntro } from '@/components/sections'
import { TransitionLink } from '@/components/page-transition'
import { projects } from '@/lib/site-data'

export const metadata: Metadata = { title: 'Projeler' }

export default function ProjectsPage() {
  return (
    <main>
      <PageIntro eyebrow="seçili işler" title="projeler" text="Her biri sahibinin hikayesini taşıyan, sade ve şık mekanlar." />
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <ProjectSlider />
      </section>
      <section className="mx-auto grid max-w-7xl gap-x-8 gap-y-14 px-6 pb-28 sm:grid-cols-2 md:px-10">
        {projects.map((p, i) => (
          <article key={p.slug} className={i % 2 === 1 ? 'sm:mt-20' : ''}>
            <TransitionLink href={`/projeler/${p.slug}`} label={p.title} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <Image
                  src={p.src || '/placeholder.svg'}
                  alt={p.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <h2 data-transition-label className="text-2xl font-light">
                  {p.title}
                </h2>
                <span className="text-xs tracking-[0.2em] text-muted-foreground">{p.year}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{p.category}</p>
            </TransitionLink>
          </article>
        ))}
      </section>
    </main>
  )
}
