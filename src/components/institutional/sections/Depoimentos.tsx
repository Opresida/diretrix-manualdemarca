interface Depoimento {
  citacao: string
  nome: string
  cargo: string
  empresa: string
  metricaChave?: string
  initials: string
  accent?: 'verde' | 'gold'
}

const HERO: Depoimento = {
  citacao:
    'A Diretrix tirou nossa engenharia do modo bombeiro. Em 4 meses paramos de apagar incêndio e começamos a fazer roadmap. Quando saíram, nosso time sustentou — não voltamos a ligar por crise.',
  nome: 'Roberto Mendes',
  cargo: 'Diretor de Tecnologia',
  empresa: 'Indústrias Verena S.A.',
  metricaChave: 'Tempo médio de resolução de incidentes caiu 73%',
  initials: 'RM',
  accent: 'verde',
}

const SECUNDARIOS: Depoimento[] = [
  {
    citacao:
      'O programa de Liderança Executiva foi o ponto de virada. Nossos diretores deixaram de improvisar comunicação em board.',
    nome: 'Carla Lima',
    cargo: 'CHRO',
    empresa: 'Holding Norte Capital',
    metricaChave: 'Retenção de C-Level subiu de 67% para 92% em 18 meses',
    initials: 'CL',
    accent: 'gold',
  },
  {
    citacao:
      'Treinaram 40 técnicos no nosso stack real. Não foi curso de prateleira — saíram operando sistemas em produção.',
    nome: 'Eduardo Sousa',
    cargo: 'Superintendente de TI',
    empresa: 'Cooperativa Bracoop',
    metricaChave: '95% dos formandos seguiram em posição técnica 12 meses depois',
    initials: 'ES',
    accent: 'verde',
  },
  {
    citacao:
      'Diretrix entrega documento defensável. Quando o conselho pediu justificativa do investimento, o blueprint deles era nosso argumento.',
    nome: 'Luiz Felipe Almeida',
    cargo: 'Presidente',
    empresa: 'Grupo Atena',
    metricaChave: 'Aprovação CapEx em 1 reunião — antes levavam 4',
    initials: 'LA',
    accent: 'gold',
  },
]

function DepoimentoSecundario({ d }: { d: Depoimento }) {
  const isGold = d.accent === 'gold'
  return (
    <article className="depo-card">
      <header className="depo-card-head">
        <div
          className="depo-card-avatar"
          style={{
            borderColor: isGold ? 'var(--gold)' : 'var(--verde)',
            color: isGold ? 'var(--gold)' : 'var(--verde)',
          }}
        >
          {d.initials}
        </div>
        <div className="depo-card-id">
          <span className="depo-card-nome">{d.nome}</span>
          <span className="depo-card-cargo">
            {d.cargo} · {d.empresa}
          </span>
        </div>
      </header>

      <p className="depo-card-quote">"{d.citacao}"</p>

      {d.metricaChave && (
        <footer
          className="depo-card-metrica"
          style={{
            borderTopColor: isGold
              ? 'rgba(212,175,55,0.25)'
              : 'rgba(0,168,107,0.25)',
          }}
        >
          <span
            className="depo-card-metrica-label"
            style={{ color: isGold ? 'var(--gold)' : 'var(--verde)' }}
          >
            Resultado mensurado
          </span>
          <span className="depo-card-metrica-val">{d.metricaChave}</span>
        </footer>
      )}
    </article>
  )
}

export function Depoimentos() {
  return (
    <section id="depoimentos" className="depoimentos">
      {/* Glow ambient */}
      <div className="depoimentos-glow" aria-hidden="true" />

      <header className="depoimentos-head">
        <div className="inst-section-label">Depoimentos · Quem já contratou</div>
        <h2 className="depoimentos-titulo">
          O que dizem
          <br />
          <span className="playfair-italic">depois do hand-off.</span>
        </h2>
      </header>

      {/* Hero quote — editorial, capa de revista */}
      <article className="depo-hero reveal">
        <span className="depo-hero-aspas" aria-hidden="true">
          "
        </span>
        <blockquote className="depo-hero-quote">{HERO.citacao}</blockquote>

        <footer className="depo-hero-foot">
          <div
            className="depo-hero-avatar"
            style={{
              borderColor: 'var(--verde)',
              color: 'var(--verde)',
            }}
          >
            {HERO.initials}
          </div>
          <div className="depo-hero-id">
            <span className="depo-hero-nome">{HERO.nome}</span>
            <span className="depo-hero-cargo">
              {HERO.cargo} · {HERO.empresa}
            </span>
            {HERO.metricaChave && (
              <span className="depo-hero-metrica">
                <span className="depo-hero-metrica-marker" aria-hidden="true" />
                {HERO.metricaChave}
              </span>
            )}
          </div>
        </footer>
      </article>

      {/* Grid de depoimentos secundários */}
      <div className="depo-grid">
        {SECUNDARIOS.map((d, idx) => (
          <div
            key={d.initials + idx}
            className="reveal"
            style={{ transitionDelay: `${idx * 0.1}s` }}
          >
            <DepoimentoSecundario d={d} />
          </div>
        ))}
      </div>

      {/* Disclaimer institucional */}
      <footer className="depoimentos-foot">
        <span>
          Empresas referenciadas nesta página autorizaram a publicação. Métricas
          extraídas de relatórios pós-engagement assinados pelos clientes.
        </span>
      </footer>
    </section>
  )
}
