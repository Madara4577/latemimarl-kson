import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ProjectSlider } from '@/components/project-slider'
import { ContactForm } from '@/components/contact-form'
import { TransitionLink } from '@/components/page-transition'
import { steps } from '@/lib/site-data'

export function SpacedTitle({ text, className = '' }: { text: string; className?: string }) {
  return (
    <h2 className={`text-center font-serif text-3xl font-light tracking-[0.6em] md:text-5xl ${className}`}>
      <span aria-hidden="true">{text.split('').join(' ')}</span>
      <span className="sr-only">{text}</span>
    </h2>
  )
}

export function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[82svh] min-h-[520px] w-full overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="Krem tonlarında kemerli, sade bir iç mekan"
          fill
          priority
          sizes="100vw"
          className="animate-[hero-zoom_14s_ease-out_forwards] object-cover"
        />
        <div className="absolute inset-0 bg-foreground/25" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-background">
          <h1 className="font-serif text-6xl font-light tracking-[0.4em] md:text-8xl">
            <span aria-hidden="true">L a t e</span>
            <span className="sr-only">Late Mimarlık</span>
          </h1>
          <p aria-hidden="true" className="mt-4 text-sm uppercase tracking-[0.8em] md:text-base">
            m i m a r l ı k
          </p>
          <Link
            href="/projeler"
            className="mt-12 rounded-full border border-background/70 px-8 py-3 text-xs tracking-[0.3em] transition-all hover:scale-105 hover:bg-background hover:text-foreground"
          >
            projeleri keşfet
          </Link>
        </div>
      </div>
      <style>{`@keyframes hero-zoom { from { transform: scale(1.12) } to { transform: scale(1) } }`}</style>
    </section>
  )
}

export function ProjectsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <SpacedTitle text="projeler" className="mb-14 md:text-left" />
      <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <ProjectSlider aspect="aspect-[4/5] sm:aspect-[4/3]" />
        <div className="lg:pt-2">
          <p className="mb-8 text-xs uppercase tracking-[0.4em] text-muted-foreground">bize kendinden bahset</p>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export function StepsSection() {
  return (
    <section className="bg-card">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-[1fr_1.4fr] md:px-10 md:py-32">
        <div>
          <h2 className="font-serif text-5xl font-light leading-[1.05] tracking-wide md:text-7xl">
            MEKANI
            <br />
            <em className="font-normal">ÖZEL KIL</em>
          </h2>
          <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">
            Her projenin benzersiz olduğunu biliyoruz. Bu nedenle, sizin için özelleştirilmiş süreçlerimizle
            projenizin her aşamasında mükemmelliği sağlıyoruz. İşte, bizimle birlikte atacağınız adımlar.
          </p>
        </div>
        <ol className="grid gap-px overflow-hidden bg-border sm:grid-cols-2">
          {steps.map((step) => (
            <li key={step.no} className="group bg-card p-8 transition-colors duration-500 hover:bg-background">
              <span className="font-serif text-4xl italic text-accent">{step.no}</span>
              <h3 className="mt-6 text-lg tracking-[0.2em]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function StorySection() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-20 md:px-10 md:py-32">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src="/images/hikaye.png"
          alt="Mimarın elleri traverten ve meşe örnekleri arasında plan çiziyor"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1500ms] hover:scale-105"
        />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">hakkımızda</p>
        <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.15em] md:text-6xl">BİZİM HİKAYEMİZ</h2>
        <p className="mt-8 font-serif text-2xl font-light italic leading-relaxed md:text-3xl">
          Sadece göze değil, hafızaya hitap ediyoruz.
        </p>
        <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
          Mimarlık imzalı her parça; dokunulduğunda ustalığı, bakıldığında ise köklü bir tasarım kültürünün
          sükûnetini hissettirir.
        </p>
        <Link
          href="/hakkimizda"
          className="mt-10 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm tracking-[0.2em] transition-all hover:gap-4"
        >
          devamını oku <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  )
}

export function SimpleSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[70svh] min-h-[480px]">
        <Image src="/images/sade.png" alt="Kavisli krem sıva merdiven detayı" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-xl bg-background/90 p-10 text-center backdrop-blur-sm md:p-14">
            <h2 className="font-serif text-4xl font-light tracking-[0.4em] md:text-5xl">SADE VE ŞIK</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Gelecekteki eviniz için bizimle iletişime geçin, beraber tasarlayalım.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 text-left text-sm">
              <div className="col-span-2">
                <dt className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Stüdyo</dt>
                <dd className="mt-1">emirgan, 123 Anywhere St</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Tarih</dt>
                <dd className="mt-1">22 Ekim 2030 · 14:00</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Dress Code</dt>
                <dd className="mt-1">Garden party</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 text-center md:px-10 md:py-32">
      <h2 className="text-4xl font-light leading-tight tracking-[0.1em] md:text-6xl">
        SİZİNLE ÇALIŞMAK İÇİN
        <br />
        HEYECANLIYIZ
      </h2>
      <p className="mx-auto mt-8 max-w-md leading-relaxed text-muted-foreground">
        gelecekteki işbirliklerimiz için şimdiden sabırsızlanmaktayız.
      </p>
      <TransitionLink
        href="/iletisim"
        label="iletişim"
        className="mt-10 inline-flex rounded-full bg-primary px-10 py-3.5 text-sm tracking-[0.3em] text-primary-foreground transition-all hover:scale-105"
      >
        <span data-transition-label>iletişime geç</span>
      </TransitionLink>
    </section>
  )
}

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-10 pt-20 text-center md:px-10 md:pt-28">
      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">{eyebrow}</p>
      <h1 className="mt-6 font-serif text-4xl font-light tracking-[0.5em] md:text-6xl">
        <span aria-hidden="true">{title.split('').join(' ')}</span>
        <span className="sr-only">{title}</span>
      </h1>
      {text ? <p className="mx-auto mt-8 max-w-xl leading-relaxed text-muted-foreground">{text}</p> : null}
    </section>
  )
}
