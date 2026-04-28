interface ComboData {
  badge: string
  badgeClass: string
  variant: 'standard' | 'premium'
  title: string
  desc: string
  items: string[]
  extraStyle?: React.CSSProperties
  delay?: string
}

const COMBOS: ComboData[] = [
  {
    badge: 'Kit Novos Clientes',
    badgeClass: 'bg-green',
    variant: 'standard',
    title: 'Primeira Impressão',
    desc:
      'O pacote essencial para onboarding, transmitindo solidez e profissionalismo imediato.',
    items: [
      'Envelope Corporativo',
      'Cartão de Visita',
      'Folha Timbrada',
      'Caixa Kraft Simples',
    ],
  },
  {
    badge: 'Kit Premium VIP',
    badgeClass: 'bg-gold',
    variant: 'premium',
    title: 'Proposta Executiva',
    desc:
      'Apresentações que fecham grandes negócios. Uma experiência tátil e inesquecível.',
    items: [
      'Pasta Executiva (Hot Stamping)',
      'Folhas Timbradas (Proposta)',
      'Envelope de Apresentação',
      'Fechamento com Wax Seal',
    ],
    delay: '0.1s',
    extraStyle: { transform: 'scale(1.05)', zIndex: 10 },
  },
  {
    badge: 'Kit Retenção',
    badgeClass: 'bg-green',
    variant: 'standard',
    title: 'Relacionamento',
    desc:
      'Brindes de alto padrão enviados periodicamente para fidelizar clientes-chave.',
    items: [
      'Notepad Executivo',
      'Caneta Personalizada',
      'Cartão de Nota (Agradecimento)',
      'Adesivos / Labels Premium',
    ],
    delay: '0.2s',
  },
]

export function Combos() {
  return (
    <section className="section" id="combos">
      <div className="reveal">
        <div className="section-label">Kits de Conversão</div>
        <h2 className="section-title">Combos Recomendados</h2>
        <p className="section-desc">
          Agrupamento estratégico de touchpoints físicos para momentos específicos da
          jornada do cliente.
        </p>
      </div>

      <div className="grid-3">
        {COMBOS.map((c) => (
          <div
            key={c.title}
            className={`card combo-card ${c.variant} reveal`}
            style={{
              transitionDelay: c.delay,
              ...c.extraStyle,
            }}
          >
            <span className={`combo-badge ${c.badgeClass}`}>{c.badge}</span>
            <h3 className="luxury-title">{c.title}</h3>
            <p className="luxury-desc">{c.desc}</p>
            <ul className={`combo-list ${c.variant === 'premium' ? 'gold-list' : ''}`}>
              {c.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
