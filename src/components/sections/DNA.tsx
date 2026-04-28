const PILARES = [
  {
    title: 'Arquitetura',
    desc: 'Estruturas modulares que garantem consistência absoluta em escala global. Navegamos pela complexidade.',
  },
  {
    title: 'Precisão',
    desc: 'Cada pixel é posicionado seguindo grids matemáticos e proporções áureas para uma execução perfeita.',
  },
  {
    title: 'Vanguarda',
    desc: 'Sempre um passo à frente, antecipando tendências e definindo os novos padrões da estética corporativa.',
  },
]

export function DNA() {
  return (
    <section className="section" id="dna">
      <div className="reveal">
        <div className="section-label">Filosofia</div>
        <h2 className="section-title">Pilares do Ecossistema</h2>
        <p className="section-desc">
          A Diretrix nasceu para guiar empresas no caos digital, oferecendo clareza
          através de design estratégico e tecnologia de ponta.
        </p>
      </div>

      <div className="grid-3">
        {PILARES.map((p, i) => (
          <div
            key={p.title}
            className="card reveal"
            style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
          >
            <h3
              style={{
                color: 'var(--verde)',
                marginBottom: 12,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              {p.title}
            </h3>
            <p style={{ fontSize: 14, color: 'var(--texto)', lineHeight: 1.7 }}>
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
