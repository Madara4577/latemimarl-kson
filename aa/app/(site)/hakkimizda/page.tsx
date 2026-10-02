import type { Metadata } from 'next'
import { PageIntro, SimpleSection, StorySection } from '@/components/sections'

export const metadata: Metadata = { title: 'Hakkımızda' }

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="biz kimiz"
        title="hakkımızda"
        text="Late Mimarlık, İstanbul'da malzemeye, ışığa ve zamansızlığa odaklanan butik bir tasarım stüdyosudur."
      />
      <StorySection />
      <SimpleSection />
    </main>
  )
}
