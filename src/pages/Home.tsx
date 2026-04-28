import { InstitutionalNav } from '@/components/institutional/InstitutionalNav'
import { Footer } from '@/components/shared/Footer'
import { useReveal } from '@/hooks/useReveal'

export default function Home() {
  useReveal()

  return (
    <>
      <div className="bg-ambient" />
      <InstitutionalNav />
      <main>
        {/* Placeholder — sessões reais entram na Fase 5 */}
        <section className="inst-hero">
          <div className="inst-hero-eyebrow">Diretrix Institucional · v1.0</div>
          <h1 className="inst-hero-title">
            Antes da tecnologia,
            <br />
            <span className="inst-hero-accent">a decisão.</span>
          </h1>
          <p className="inst-hero-sub">
            Consultoria estratégica em TI e formação executiva para empresas que recusam
            adotar antes de entender.
          </p>
          <div className="inst-hero-shell-note">
            <span className="inst-hero-shell-dot" />
            Em construção — site institucional sendo erguido por fases. Manual de marca
            disponível em <a href="/brandbook">/brandbook</a>.
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
