export function Estacionario() {
  return (
    <section className="section" id="fisico">
      <div className="reveal">
        <div className="section-label">Físico / Fase 1</div>
        <h2 className="section-title">Papelaria Essencial</h2>
        <p className="section-desc">
          O núcleo do nosso sistema físico. Materiais com alto valor percebido que
          transmitem autoridade imediata no primeiro contacto.
        </p>
      </div>

      {/* Stage 1: Pasta + Letterhead */}
      <div className="stage-3d">
        {/* Pasta Executiva */}
        <div className="folder reveal">
          <div className="folder-logo">DIRETRIX.</div>
          <div>
            <div className="folder-title">Strategic Proposal</div>
            <div className="folder-tag">Confidential Document • 2026</div>
          </div>
          <div className="folder-elastic" />
        </div>

        {/* Papel Timbrado */}
        <div className="letterhead reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="lh-header">
            <div style={{ fontWeight: 900, fontSize: 18 }}>DIRETRIX.</div>
            <div style={{ fontSize: 8, opacity: 0.6, textAlign: 'right' }}>
              SÃO PAULO • BRASIL
            </div>
          </div>
          <div className="lh-stripe" />
          <div className="lh-body">
            <div className="lh-watermark">D</div>
            <div style={{ fontSize: 10, color: '#AAA', marginBottom: 30 }}>
              27 MAR 2026
            </div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 18,
                fontStyle: 'italic',
                borderLeft: '3px solid var(--verde)',
                paddingLeft: 15,
                marginBottom: 20,
                color: 'var(--azul)',
              }}
            >
              Documento Oficial
            </div>
            <div
              style={{ width: '100%', height: 2, background: '#EEE', marginBottom: 10 }}
            />
            <div
              style={{ width: '80%', height: 2, background: '#EEE', marginBottom: 10 }}
            />
            <div
              style={{ width: '95%', height: 2, background: '#EEE', marginBottom: 10 }}
            />
            <div
              style={{ width: '70%', height: 2, background: '#EEE', marginBottom: 40 }}
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 30,
                  height: 30,
                  background: 'var(--azul)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--verde)',
                  fontWeight: 900,
                  fontSize: 12,
                }}
              >
                D
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 11, color: 'var(--azul)' }}>
                  Alexandre Silva
                </div>
                <div style={{ fontSize: 9, color: '#999' }}>CDO Diretrix</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stage 2: Envelope + Note + Notepad */}
      <div className="stage-3d">
        {/* Envelope */}
        <div className="envelope reveal">
          <div className="env-flap" />
          <div className="wax-seal">D</div>
          <div className="env-stripe">
            <span className="env-stripe-text">
              DIRETRIX MASTERBRAND • AV. PAULISTA, 2500 • SÃO PAULO
            </span>
          </div>
        </div>

        {/* Note Card */}
        <div className="note-card reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="note-fold" />
          <div className="note-logo">D.</div>
          <div className="note-text">Thank You</div>
        </div>

        {/* Notepad */}
        <div className="notepad reveal" style={{ transitionDelay: '0.4s' }}>
          <div className="notepad-logo">DIRETRIX</div>
          <div className="notepad-ribbon" />
        </div>
      </div>

      {/* Stage 3: Cartões de Visita */}
      <div className="stage-3d" style={{ marginTop: 40 }}>
        <div className="bcard reveal">
          <div className="bcard-front">
            <div style={{ fontWeight: 900, fontSize: 22, color: '#FFF' }}>
              DIRETRIX<span style={{ color: 'var(--verde)' }}>.</span>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, color: '#FFF' }}>
                Mauricio Rocha
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: 'var(--verde)',
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  marginTop: 5,
                  fontWeight: 600,
                }}
              >
                Presidente
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: 'rgba(255,255,255,0.4)',
                  marginTop: 20,
                }}
              >
                presidente@diretrix.com.br
              </div>
            </div>
          </div>
        </div>
        <div
          className="bcard reveal"
          style={{
            transitionDelay: '0.2s',
            transform: 'rotateX(15deg) rotateY(5deg)',
          }}
        >
          <div className="bcard-back">
            <div className="bcard-back-logo">D</div>
          </div>
        </div>
      </div>
    </section>
  )
}
