export function Tipografia() {
  return (
    <section className="section" id="tipo">
      <div className="reveal">
        <div className="section-label">Voz Visual</div>
        <h2 className="section-title">Sistema Tipográfico</h2>
        <p className="section-desc">
          A tríade tipográfica perfeita: O peso institucional, a elegância editorial e a
          performance técnica.
        </p>
      </div>

      {/* Display — Poppins */}
      <div className="type-block reveal">
        <div className="type-bar">
          <div className="type-bar-left">
            <span className="type-tag">Display</span>
            <span style={{ fontSize: 13, color: 'var(--texto)', fontWeight: 600 }}>
              Poppins
            </span>
          </div>
          <div className="type-weights">
            <span className="weight-pill">Medium</span>
            <span className="weight-pill">Bold</span>
            <span
              className="weight-pill"
              style={{ borderColor: 'var(--verde)', color: 'var(--verde)' }}
            >
              ExtraBold
            </span>
          </div>
        </div>
        <div className="type-content">
          <div className="display-text">AUTHORITY.</div>
          <p className="body-text">
            Utilizada para títulos de grande impacto, transmitindo autoridade e
            modernidade. O peso ExtraBold garante legibilidade em escalas monumentais.
          </p>
        </div>
      </div>

      {/* Editorial — Playfair Display */}
      <div className="type-block reveal" style={{ transitionDelay: '0.1s' }}>
        <div className="type-bar">
          <div className="type-bar-left">
            <span
              className="type-tag"
              style={{ background: 'rgba(212,175,55,0.1)', color: 'var(--gold)' }}
            >
              Editorial
            </span>
            <span style={{ fontSize: 13, color: 'var(--texto)', fontWeight: 600 }}>
              Playfair Display
            </span>
          </div>
          <div className="type-weights">
            <span className="weight-pill">Regular</span>
            <span
              className="weight-pill"
              style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
            >
              Italic
            </span>
          </div>
        </div>
        <div className="type-content">
          <div className="playfair-text">The art of mathematical precision.</div>
          <p className="body-text">
            Introduzida para momentos de sofisticação e contraste humano dentro do
            ecossistema tecnológico, ideal para convites, citações e assinaturas VIP.
          </p>
        </div>
      </div>

      {/* Body — Inter */}
      <div className="type-block reveal" style={{ transitionDelay: '0.2s' }}>
        <div className="type-bar">
          <div className="type-bar-left">
            <span
              className="type-tag"
              style={{ background: 'rgba(255,255,255,0.05)', color: '#FFF' }}
            >
              Body
            </span>
            <span style={{ fontSize: 13, color: 'var(--texto)', fontWeight: 600 }}>
              Inter
            </span>
          </div>
          <div className="type-weights">
            <span className="weight-pill">Light</span>
            <span
              className="weight-pill"
              style={{ borderColor: '#FFF', color: '#FFF' }}
            >
              Regular
            </span>
            <span className="weight-pill">SemiBold</span>
          </div>
        </div>
        <div className="type-content">
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 24,
              marginBottom: 20,
              color: '#FFF',
            }}
          >
            Clareza, legibilidade e performance absoluta.
          </div>
          <p className="body-text">
            Inter é a escolha técnica para interfaces e documentos densos. Sua
            neutralidade permite que o conteúdo seja o protagonista, mantendo o aspecto
            altamente tecnológico e funcional.
          </p>
        </div>
      </div>
    </section>
  )
}
