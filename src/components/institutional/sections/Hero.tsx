export function Hero() {
  return (
    <section className="inst-hero">
      {/* Vídeo de fundo full-bleed */}
      <video
        className="inst-hero-bg-video"
        src="/videos/HERO%20TELA%201090X1080.webm"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      {/* Overlay dark gradient — preserva legibilidade do texto à esquerda */}
      <div className="inst-hero-bg-overlay" aria-hidden="true" />

      <div className="inst-hero-inner">
      <div className="inst-hero-eyebrow">
        <span className="inst-hero-eyebrow-dot" aria-hidden="true" />
        Diretrix · Soluções Corporativas
      </div>

      <h1 className="inst-hero-title">
        Antes da tecnologia,
        <br />
        <span className="inst-hero-accent">a decisão.</span>
      </h1>

      <p className="inst-hero-sub">
        Consultoria estratégica em TI e formação executiva para empresas que recusam
        adotar antes de entender.
      </p>

      <div className="inst-hero-actions">
        <a href="#diagnostico" className="inst-btn inst-btn-primary">
          Agendar Diagnóstico
          <span className="inst-btn-arrow" aria-hidden="true">→</span>
        </a>
        <a href="#metodo" className="inst-btn inst-btn-ghost">
          Ver método em uso
        </a>
      </div>

      {/* Linha de prova institucional */}
      <div className="inst-hero-foot">
        <div className="inst-hero-foot-item">
          <span className="inst-hero-foot-num">01</span>
          <span className="inst-hero-foot-text">
            Diagnóstico antes de prescrição
          </span>
        </div>
        <div className="inst-hero-foot-item">
          <span className="inst-hero-foot-num">02</span>
          <span className="inst-hero-foot-text">Critério antes de código</span>
        </div>
        <div className="inst-hero-foot-item">
          <span className="inst-hero-foot-num">03</span>
          <span className="inst-hero-foot-text">
            Operação amazônica · padrão institucional
          </span>
        </div>
      </div>
      </div>
    </section>
  )
}
