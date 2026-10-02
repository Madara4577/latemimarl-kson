import { ContactSection, Hero, ProjectsSection, SimpleSection, StepsSection, StorySection } from '@/components/sections'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <StepsSection />
      <StorySection />
      <SimpleSection />
      <ContactSection />
    </main>
  )
}
