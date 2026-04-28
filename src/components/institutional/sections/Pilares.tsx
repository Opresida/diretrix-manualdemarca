import { Link } from 'wouter'

interface Pilar {
  num: string
  manchete: string
  sub: string
  href: string
  ancora: string // termo curto para o diagrama
}

const PILARES: Pilar[] = [
  {
    num: '01',
    manchete: 'O diagnóstico que precede o sistema.',
    sub: 'Mapeamos a operação técnica antes de propor mudança. Onde a empresa está, onde precisa estar, e qual o caminho real entre os dois.',
    href: '/consultoria-ti',
    ancora: 'Contexto',
  },
  {
    num: '02',
    manchete: 'Liderança não se aprende no LinkedIn.',
    sub: 'Formamos gestores que decidem com método, comunicam sob pressão e constroem times que executam — sem o teatro motivacional de prateleira.',
    href: '/treinamentos-profissionais',
    ancora: 'Liderança',
  },
  {
    num: '03',
    manchete: 'Capacidade técnica é vantagem perene.',
    sub: 'Trilhas densas em ferramentas e linguagens que continuam relevantes em 5 anos. Não a moda da semana — a competência que sobrevive ao ciclo.',
    href: '/treinamentos-informatica',
    ancora: 'Capacidade',
  },
]

export function Pilares() {
  return (
    <section id="pilares" className="inst-pilares">
      <header className="inst-pilares-head">
        <div className="inst-section-label">3 Pilares · Sistema Diretrix</div>
        <h2 className="inst-pilares-title">
          Três frentes conectadas.
          <br />
          <span className="playfair-italic">Uma única lógica.</span>
        </h2>
        <p className="inst-pilares-lede">
          Cada pilar resolve um estágio diferente da mesma questão: como uma empresa
          decide com clareza, lidera com método e executa com competência. A sequência
          importa.
        </p>
      </header>

      {/* Diagrama vetorial: 3 pilares conectados */}
      <div className="inst-pilares-diagram">
        {/* Linha de fluxo entre os pilares (decorativa) */}
        <svg
          className="inst-pilares-flow"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="flow-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(0, 168, 107, 0.1)" />
              <stop offset="33%" stopColor="rgba(0, 168, 107, 0.5)" />
              <stop offset="66%" stopColor="rgba(0, 168, 107, 0.5)" />
              <stop offset="100%" stopColor="rgba(0, 168, 107, 0.1)" />
            </linearGradient>
          </defs>
          <line
            x1="0"
            y1="40"
            x2="1200"
            y2="40"
            stroke="url(#flow-gradient)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          {/* Nós nos pontos onde os pilares ancoram */}
          <circle cx="200" cy="40" r="4" fill="#00a86b" />
          <circle cx="600" cy="40" r="4" fill="#00a86b" />
          <circle cx="1000" cy="40" r="4" fill="#00a86b" />
          {/* Setas entre os nós */}
          <polygon points="395,36 410,40 395,44" fill="rgba(0,168,107,0.6)" />
          <polygon points="795,36 810,40 795,44" fill="rgba(0,168,107,0.6)" />
        </svg>

        <div className="inst-pilares-grid">
          {PILARES.map((p, idx) => (
            <article key={p.num} className="inst-pilar reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <header className="inst-pilar-head">
                <span className="inst-pilar-num">{p.num}</span>
                <span className="inst-pilar-ancora">{p.ancora}</span>
              </header>

              <h3 className="inst-pilar-manchete">{p.manchete}</h3>

              <p className="inst-pilar-sub">{p.sub}</p>

              <Link href={p.href}>
                <a className="inst-pilar-link">
                  Aprofundar
                  <span aria-hidden="true">→</span>
                </a>
              </Link>
            </article>
          ))}
        </div>

        {/* Legenda de fluxo abaixo */}
        <div className="inst-pilares-legenda">
          <span>Diagnóstico</span>
          <span className="inst-pilares-legenda-arrow" aria-hidden="true">→</span>
          <span>Liderança</span>
          <span className="inst-pilares-legenda-arrow" aria-hidden="true">→</span>
          <span>Capacidade</span>
        </div>
      </div>
    </section>
  )
}
