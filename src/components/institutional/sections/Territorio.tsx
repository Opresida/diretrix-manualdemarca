export function Territorio() {
  return (
    <section id="territorio" className="inst-territorio">
      <div className="inst-territorio-grid">
        <div className="inst-territorio-meta">
          <div className="inst-section-label">Território · Manaus</div>
          <h2 className="inst-territorio-title">
            Operação amazônica.
            <br />
            <span className="playfair-italic">Padrão institucional.</span>
          </h2>
          <p className="inst-territorio-lede">
            A DIRETRIX nasceu em Manaus e mantém aqui sua operação. Não é detalhe
            geográfico — é diferencial competitivo. O Polo Industrial movimenta
            R$ 169 bilhões por ano e exige tecnologia de classe global. Nós atendemos
            essa exigência sem o overhead das grandes praças.
          </p>

          <div className="inst-territorio-tags">
            <span className="inst-territorio-tag">Sede física · Av. André Araújo</span>
            <span className="inst-territorio-tag">Equipe local sênior</span>
            <span className="inst-territorio-tag">Atendimento BR + LatAm</span>
          </div>
        </div>

        {/* Mapa estilizado (SVG abstrato — Amazônia + ponto Manaus) */}
        <figure className="inst-territorio-map" aria-label="Mapa estilizado de Manaus e região amazônica">
          <svg viewBox="0 0 400 360" className="inst-territorio-map-svg">
            <defs>
              <radialGradient id="map-glow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="rgba(0, 168, 107, 0.35)" />
                <stop offset="100%" stopColor="rgba(0, 168, 107, 0)" />
              </radialGradient>
              <pattern id="grid-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.6" fill="rgba(255, 255, 255, 0.06)" />
              </pattern>
            </defs>

            {/* Background grid */}
            <rect width="400" height="360" fill="url(#grid-dots)" />

            {/* Glow no ponto Manaus */}
            <circle cx="180" cy="170" r="120" fill="url(#map-glow)" />

            {/* Silhueta abstrata da Amazônia (curvas estilizadas) */}
            <path
              d="M 60 90 Q 100 70 160 80 T 280 100 Q 320 120 340 160 T 320 240 Q 280 280 220 290 T 100 270 Q 60 240 50 180 T 60 90 Z"
              fill="rgba(0, 168, 107, 0.04)"
              stroke="rgba(0, 168, 107, 0.25)"
              strokeWidth="1"
              strokeDasharray="3 4"
            />

            {/* Linhas de fluxo (rios estilizados) */}
            <path
              d="M 70 180 Q 130 170 180 175 T 320 200"
              fill="none"
              stroke="rgba(0, 168, 107, 0.4)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M 90 220 Q 150 215 200 220 T 310 235"
              fill="none"
              stroke="rgba(0, 168, 107, 0.25)"
              strokeWidth="1"
              strokeLinecap="round"
            />

            {/* Ponto Manaus + pulse */}
            <circle cx="180" cy="170" r="8" fill="#00a86b">
              <animate
                attributeName="r"
                values="6;12;6"
                dur="2.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="1;0.4;1"
                dur="2.6s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="180" cy="170" r="3" fill="#fff" />

            {/* Label */}
            <text
              x="200"
              y="166"
              fontFamily="'Inter', monospace"
              fontSize="10"
              fontWeight="700"
              letterSpacing="2"
              fill="#fff"
            >
              MANAUS
            </text>
            <text
              x="200"
              y="180"
              fontFamily="'Inter', monospace"
              fontSize="8"
              letterSpacing="1.5"
              fill="rgba(255, 255, 255, 0.5)"
            >
              03°06′S · 60°01′W
            </text>
          </svg>
          <figcaption className="inst-territorio-map-caption">
            Polo Industrial de Manaus · capital amazônica · GMT-4
          </figcaption>
        </figure>
      </div>

      <div className="inst-territorio-stats">
        <div className="inst-territorio-stat">
          <span className="inst-territorio-stat-num">R$ 169 bi</span>
          <span className="inst-territorio-stat-label">Movimentado pelo PIM em 2024</span>
        </div>
        <div className="inst-territorio-stat">
          <span className="inst-territorio-stat-num">450+</span>
          <span className="inst-territorio-stat-label">Empresas no Polo Industrial</span>
        </div>
        <div className="inst-territorio-stat">
          <span className="inst-territorio-stat-num">100%</span>
          <span className="inst-territorio-stat-label">Equipe sênior local</span>
        </div>
      </div>
    </section>
  )
}
