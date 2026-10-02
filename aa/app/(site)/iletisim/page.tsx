import type { Metadata } from 'next'
import { ContactSection, PageIntro } from '@/components/sections'

export const metadata: Metadata = { title: 'İletişim' }

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow="sorular? iletişime geçin!"
        title="iletişim"
        text="123 bilmemne sk. istanbul | tr · Tel: 123-456-789 · late@gmail.com"
      />
      <ContactSection />
    </main>
  )
}
