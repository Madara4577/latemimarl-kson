import type { Metadata } from 'next'
import Image from 'next/image'
import { PageIntro } from '@/components/sections'
import { team } from '@/lib/site-data'

export const metadata: Metadata = { title: 'Ekip' }

export default function TeamPage() {
  return (
    <main>
      <PageIntro eyebrow="stüdyo" title="ekip" text="Küçük, tutkulu ve detaya düşkün bir ekibiz." />
      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-10">
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          <Image
            src="/images/ekip.png"
            alt="Late Mimarlık ekibi stüdyoda maket üzerinde çalışıyor"
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover transition-transform duration-[1500ms] hover:scale-105"
          />
        </div>
        <ul className="mt-16 grid gap-10 sm:grid-cols-3">
          {team.map((m) => (
            <li key={m.name} className="border-t border-foreground/40 pt-6">
              <h2 className="font-serif text-3xl font-light">{m.name}</h2>
              <p className="mt-2 text-sm tracking-[0.2em] text-muted-foreground">{m.role}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
