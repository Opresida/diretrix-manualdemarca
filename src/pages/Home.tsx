import { InstitutionalNav } from '@/components/institutional/InstitutionalNav'
import { Hero } from '@/components/institutional/sections/Hero'
import { Manifesto } from '@/components/institutional/sections/Manifesto'
import { Pilares } from '@/components/institutional/sections/Pilares'
import { Footer } from '@/components/shared/Footer'
import { useReveal } from '@/hooks/useReveal'

export default function Home() {
  useReveal()

  return (
    <>
      <div className="bg-ambient" />
      <InstitutionalNav />
      <main>
        <Hero />
        <Manifesto />
        <Pilares />
        {/* Sessões 4-7 entram nas próximas commits */}
      </main>
      <Footer />
    </>
  )
}
