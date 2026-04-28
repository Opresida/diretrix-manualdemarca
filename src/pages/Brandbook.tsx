import { BrandbookNav } from '@/components/brandbook/BrandbookNav'
import { Footer } from '@/components/shared/Footer'
import { Hero } from '@/components/brandbook/sections/Hero'
import { DNA } from '@/components/brandbook/sections/DNA'
import { Cromia } from '@/components/brandbook/sections/Cromia'
import { Tipografia } from '@/components/brandbook/sections/Tipografia'
import { Estacionario } from '@/components/brandbook/sections/Estacionario'
import { Digital } from '@/components/brandbook/sections/Digital'
import { Premium } from '@/components/brandbook/sections/Premium'
import { Combos } from '@/components/brandbook/sections/Combos'
import { Roadmap } from '@/components/brandbook/sections/Roadmap'
import { useReveal } from '@/hooks/useReveal'

export default function Brandbook() {
  useReveal()

  return (
    <>
      <div className="bg-ambient" />
      <BrandbookNav />
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
