import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { TransitionLink } from '@/components/page-transition'
import { getProject, projects } from '@/lib/site-data'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  return project ? { title: project.title, description: project.summary } : {}
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const index = projects.findIndex((p) => p.slug === slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-16 md:px-10 md:pt-24">
        <TransitionLink
          href="/projeler"
          label="projeler"
          className="inline-flex items-center gap-2 text-sm tracking-[0.15em] text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          <span data-transition-label>projeler</span>
        </TransitionLink>
        <p className="mt-10 text-xs uppercase tracking-[0.4em] text-muted-foreground">{project.category}</p>
        <h1 className="mt-4 text-5xl font-light tracking-tight md:text-8xl">{project.title}</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{project.summary}</p>
      </section>

      <div className="relative h-[75svh] min-h-[420px] w-full overflow-hidden bg-muted">
        <Image src={project.src} alt={project.title} fill priority sizes="100vw" className="object-cover" />
      </div>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1fr_2fr] md:px-10 md:py-28">
        <dl className="grid h-fit grid-cols-2 gap-6 border-t border-border pt-6 text-sm md:grid-cols-1">
          {[
            ['Konum', project.location],
            ['Alan', project.area],
            ['Yıl', project.year],
            ['Kapsam', project.category],
          ].map(([term, value]) => (
            <div key={term}>
              <dt className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{term}</dt>
              <dd className="mt-1.5">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="space-y-6 text-xl font-light leading-relaxed md:text-2xl">
          {project.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 sm:grid-cols-2 md:px-10">
        {project.gallery.slice(1).map((src, i) => (
          <div key={src} className={`relative aspect-[4/5] overflow-hidden bg-muted ${i === 1 ? 'sm:mt-24' : ''}`}>
            <Image
              src={src}
              alt={`${project.title} detay ${i + 1}`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-[1500ms] hover:scale-105"
            />
          </div>
        ))}
      </section>

      <section className="border-t border-border">
        <TransitionLink
          href={`/projeler/${next.slug}`}
          label={next.title}
          className="group mx-auto flex max-w-7xl items-center justify-between px-6 py-16 md:px-10 md:py-24"
        >
          <span>
            <span className="block text-xs uppercase tracking-[0.4em] text-muted-foreground">sonraki proje</span>
            <span data-transition-label className="mt-3 block text-4xl font-light md:text-6xl">
              {next.title}
            </span>
          </span>
          <span className="flex size-14 items-center justify-center rounded-full border border-foreground/20 transition-all group-hover:bg-foreground group-hover:text-background">
            <ArrowRight className="size-5" aria-hidden="true" />
          </span>
        </TransitionLink>
      </section>
    </main>
  )
}
