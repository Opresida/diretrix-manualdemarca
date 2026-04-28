import { InstitutionalNav } from '@/components/institutional/InstitutionalNav'
import { Hero } from '@/components/institutional/sections/Hero'
import { Manifesto } from '@/components/institutional/sections/Manifesto'
import { Pilares } from '@/components/institutional/sections/Pilares'
import { MetodoVisivel } from '@/components/institutional/sections/MetodoVisivel'
import { Territorio } from '@/components/institutional/sections/Territorio'
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
        <MetodoVisivel />
        <Territorio />
        {/* Sessões 6-7 (Liderança + Diagnóstico) entram na próxima commit */}
      </main>
      <Footer />
    </>
  )
}
