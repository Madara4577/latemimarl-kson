import type { Metadata } from 'next'
import { PageIntro, StepsSection } from '@/components/sections'
import { services } from '@/lib/site-data'

export const metadata: Metadata = { title: 'Hizmetler' }

export default function ServicesPage() {
  return (
    <main>
      <PageIntro eyebrow="ne yapıyoruz" title="hizmetler" />
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <ul className="divide-y divide-border border-y border-border">
          {services.map((s, i) => (
            <li
              key={s.title}
              className="group grid items-baseline gap-4 py-10 transition-all duration-500 hover:pl-4 md:grid-cols-[80px_1fr_1fr]"
            >
              <span className="font-serif text-xl italic text-accent">{String(i + 1).padStart(2, '0')}</span>
              <h2 className="font-serif text-3xl font-light md:text-4xl">{s.title}</h2>
              <p className="text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ul>
      </section>
      <StepsSection />
    </main>
  )
}
