import { InstitutionalNav } from '@/components/institutional/InstitutionalNav'
import { Hero } from '@/components/institutional/sections/Hero'
import { Manifesto } from '@/components/institutional/sections/Manifesto'
import { Pilares } from '@/components/institutional/sections/Pilares'
import { MetodoVisivel } from '@/components/institutional/sections/MetodoVisivel'
import { Territorio } from '@/components/institutional/sections/Territorio'
import { LiderancaVisivel } from '@/components/institutional/sections/LiderancaVisivel'
import { Equipe } from '@/components/institutional/sections/Equipe'
import { DiagnosticoCTA } from '@/components/institutional/sections/DiagnosticoCTA'
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
        <LiderancaVisivel />
        <Equipe />
        <DiagnosticoCTA />
      </main>
      <Footer />
    </>
  )
}
