const CORES = [
  { name: 'Verde Diretrix', hex: '#00A86B', bg: 'var(--verde)', role: 'Primária / Inovação' },
  { name: 'Azul Profundo', hex: '#0A1F44', bg: 'var(--azul)', role: 'Secundária / Prestígio' },
  { name: 'Obsidiana', hex: '#05070D', bg: 'var(--preto)', role: 'Fundo / Contraste' },
  { name: 'Ouro Moderno', hex: '#D4AF37', bg: 'var(--gold)', role: 'Destaque / Luxury' },
]

export function Cromia() {
  return (
    <section className="section" id="cromia">
      <div className="reveal">
        <div className="section-label">Cromia</div>
        <h2 className="section-title">Paleta Institucional</h2>
        <p className="section-desc">
          Uma combinação de profundidade tecnológica e energia orgânica, com toques de
          luxo para aplicações premium.
        </p>
      </div>

      <div className="grid-4">
        {CORES.map((c, i) => (
          <div
            key={c.hex}
            className="swatch reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="swatch-preview" style={{ background: c.bg }}>
              <span className="swatch-chip">{c.hex}</span>
            </div>
            <div className="swatch-info">
              <div className="swatch-name">{c.name}</div>
              <div className="swatch-role">{c.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
