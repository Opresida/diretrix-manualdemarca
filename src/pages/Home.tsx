import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/sections/Hero'
import { DNA } from '@/components/sections/DNA'
import { Cromia } from '@/components/sections/Cromia'
import { Tipografia } from '@/components/sections/Tipografia'
import { Estacionario } from '@/components/sections/Estacionario'
import { Digital } from '@/components/sections/Digital'
import { Premium } from '@/components/sections/Premium'
import { Combos } from '@/components/sections/Combos'
import { Roadmap } from '@/components/sections/Roadmap'
import { useReveal } from '@/hooks/useReveal'

export default function Home() {
  useReveal()

  return (
    <>
      <div className="bg-ambient" />
      <Nav />
      <main>
        <Hero />
        <DNA />
        <Cromia />
        <Tipografia />
        <Estacionario />
        <Digital />
        <Premium />
        <Combos />
        <Roadmap />
      </main>
      <Footer />
    </>
  )
}
