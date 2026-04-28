interface Phase {
  phase: string
  title: string
  items: string[]
  gold?: boolean
}

const PHASES: Phase[] = [
  {
    phase: 'FASE 1',
    title: 'Implementação Imediata (Alto Impacto / Baixo Custo)',
    items: [
      'Envelope Corporativo (A4 com aba reforçada)',
      'Cartão de Nota Premium (Essencial para follow-ups)',
      'Capa de Proposta / Apresentação',
      'Etiquetas Premium (Adesivos multiuso)',
      'Background de Vídeo (Zoom/Teams corporativo)',
    ],
  },
  {
    phase: 'FASE 2',
    title: 'Próximos 3 Meses (Brindes e Consistência)',
    items: [
      'Caneta Personalizada com Gravação a Laser',
      'Caderneta / Notepad Executivo',
      'Marca de Água no Papel Timbrado',
      'Banner / Rollup de Alta Qualidade para Eventos',
    ],
  },
  {
    phase: 'FASE 3',
    title: 'Luxury (Diferencial Competitivo Extremo)',
    items: [
      'Pasta Executiva (Capa Dura / Hot Stamping)',
      'Selador de Cera (Wax Seal em Metal Customizado)',
      'Caixa de Envio Personalizada Premium',
      'Pochete / Bolsa Brinde VIP',
    ],
    gold: true,
  },
]

export function Roadmap() {
  return (
    <section className="section" id="roadmap">
      <div className="reveal">
        <div className="section-label">Execução Estratégica</div>
        <h2 className="section-title">Roadmap de Produção</h2>
        <p className="section-desc">
          Cronograma priorizado por matriz de Impacto vs. Custo para garantir a
          padronização gradual, eficiente e financeiramente viável.
        </p>
      </div>

      <div
        className="card reveal"
        style={{ maxWidth: 900, margin: '0 auto', padding: 60 }}
      >
        {PHASES.map((p, i) => (
          <div
            key={p.phase}
            className="roadmap-item"
            style={i === PHASES.length - 1 ? { marginBottom: 0 } : undefined}
          >
            <div
              className="roadmap-phase"
              style={p.gold ? { color: 'var(--gold)' } : undefined}
            >
              {p.phase}
            </div>
            <div className={`roadmap-content${p.gold ? ' gold-phase' : ''}`}>
              <h4 style={p.gold ? { color: 'var(--gold)' } : undefined}>{p.title}</h4>
              <ul>
                {p.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
