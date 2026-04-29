import { useState, useEffect, useRef } from 'react'

const OG_W = 1200
const OG_H = 630

interface OGData {
  tag: string
  title: string
  accent: string
  url: string
}

const DEFAULT: OGData = {
  tag: 'Consultoria · Treinamento · Estratégia',
  title: 'Antes da tecnologia,',
  accent: 'a decisão.',
  url: 'diretrix.com.br',
}

/**
 * OG Image Diretrix — DESIGN EXCLUSIVO
 *
 * Conceito: "documento institucional" / "brochure premium".
 *
 * Diferenciação proposital do Mazari (centralizado):
 *  - Layout ASSIMÉTRICO, todo o conteúdo flush-left
 *  - Background gradient diagonal preto → azul profundo (não preto puro)
 *  - 4 cantos L-bracket gold (referência editorial premium)
 *  - Hairline gold vertical à esquerda (continuidade com a lombada
 *    do letterhead da assinatura)
 *  - Coordenadas geográficas Manaus no rodapé direito (territorial anchor)
 *  - Watermark "D" gigante em azul translúcido no canto direito
 *  - Logo no topo-esquerda (não no centro)
 */
function OGImageContent({ data }: { data: OGData }) {
  return (
    <div
      style={{
        position: 'relative',
        width: OG_W,
        height: OG_H,
        background:
          'linear-gradient(135deg, #05070D 0%, #0A1F44 65%, #0D2658 100%)',
        overflow: 'hidden',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Watermark "D" gigante translúcido no canto direito */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: -120,
          top: -80,
          fontSize: 800,
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: 'italic',
          fontWeight: 700,
          color: 'rgba(212,175,55,0.05)',
          lineHeight: 0.85,
          pointerEvents: 'none',
          letterSpacing: '-0.05em',
        }}
      >
        D
      </div>

      {/* Glow ambiente lime suave */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 50% 50% at 20% 60%, rgba(0,168,107,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* ═══ 4 CANTOS L-BRACKET GOLD ═══ */}
      {/* Top-left */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 36,
          left: 36,
          width: 32,
          height: 32,
          borderTop: '2px solid #D4AF37',
          borderLeft: '2px solid #D4AF37',
        }}
      />
      {/* Top-right */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 36,
          right: 36,
          width: 32,
          height: 32,
          borderTop: '2px solid #D4AF37',
          borderRight: '2px solid #D4AF37',
        }}
      />
      {/* Bottom-left */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 36,
          left: 36,
          width: 32,
          height: 32,
          borderBottom: '2px solid #D4AF37',
          borderLeft: '2px solid #D4AF37',
        }}
      />
      {/* Bottom-right */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 36,
          right: 36,
          width: 32,
          height: 32,
          borderBottom: '2px solid #D4AF37',
          borderRight: '2px solid #D4AF37',
        }}
      />

      {/* Hairline gold vertical à esquerda — continuidade com a lombada da assinatura */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 100,
          bottom: 100,
          left: 80,
          width: 2,
          background:
            'linear-gradient(180deg, transparent, #D4AF37 30%, #D4AF37 70%, transparent)',
        }}
      />

      {/* ═══ HEADER (top-left) ═══ */}
      <div
        style={{
          position: 'absolute',
          top: 90,
          left: 110,
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        {/* DIRETRIX. logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 0,
          }}
        >
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: '-0.7px',
              color: '#FFFFFF',
              lineHeight: 1,
            }}
          >
            DIRETRIX
          </span>
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 32,
              fontWeight: 800,
              color: '#00A86B',
              lineHeight: 1,
              textShadow: '0 0 12px rgba(0,168,107,0.6)',
            }}
          >
            .
          </span>
        </div>

        {/* Tag pillars em mono caps gold */}
        <div
          style={{
            fontFamily: "'Inter', monospace",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '4px',
            color: '#D4AF37',
            textTransform: 'uppercase',
          }}
        >
          {data.tag}
        </div>
      </div>

      {/* ═══ TÍTULO PRINCIPAL (alinhado à esquerda, vertical center) ═══ */}
      <div
        style={{
          position: 'absolute',
          left: 110,
          right: 200,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <h1
          style={{
            fontSize: 92,
            fontWeight: 800,
            lineHeight: 0.98,
            letterSpacing: '-0.03em',
            color: '#FFFFFF',
            margin: 0,
            fontFamily: "'Poppins', sans-serif",
            textAlign: 'left',
          }}
        >
          {data.title}
          <br />
          <span
            style={{
              color: '#D4AF37',
              fontStyle: 'italic',
              fontWeight: 700,
              fontFamily: "'Playfair Display', Georgia, serif",
              textShadow: '0 0 60px rgba(212,175,55,0.45)',
              letterSpacing: '-0.02em',
            }}
          >
            {data.accent}
          </span>
        </h1>
      </div>

      {/* ═══ FOOTER LEFT — Tagline editorial ═══ */}
      <div
        style={{
          position: 'absolute',
          bottom: 90,
          left: 110,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          maxWidth: 480,
        }}
      >
        <div
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: 'italic',
            fontSize: 18,
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.4,
          }}
        >
          Não vendemos esperança.{' '}
          <span style={{ color: '#D4AF37', fontWeight: 700 }}>
            Vendemos critério.
          </span>
        </div>
      </div>

      {/* ═══ FOOTER RIGHT — Coordenadas + URL ═══ */}
      <div
        style={{
          position: 'absolute',
          bottom: 90,
          right: 90,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 8,
          textAlign: 'right',
        }}
      >
        {/* Coordenadas Manaus — territorial anchor */}
        <div
          style={{
            fontFamily: "'Inter', monospace",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '3px',
            color: 'rgba(212,175,55,0.85)',
            textTransform: 'uppercase',
          }}
        >
          03°06′S · 60°01′W
        </div>
        {/* URL */}
        <div
          style={{
            fontFamily: "'Inter', monospace",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '4px',
            color: '#FFFFFF',
            textTransform: 'uppercase',
          }}
        >
          {data.url}
        </div>
      </div>
    </div>
  )
}

export function OpenGraph() {
  const [data, setData] = useState<OGData>(DEFAULT)
  const [downloading, setDownloading] = useState(false)
  const [downloaded, setDownloaded] = useState(false)

  const wrapperRef = useRef<HTMLDivElement>(null)
  const visibleRef = useRef<HTMLDivElement>(null)
  const captureRef = useRef<HTMLDivElement>(null)

  // Scale o preview pra caber no container responsivo
  useEffect(() => {
    const wrapper = wrapperRef.current
    const visible = visibleRef.current
    if (!wrapper || !visible) return
    const apply = () => {
      const w = wrapper.clientWidth
      visible.style.transform = `scale(${w / OG_W})`
    }
    apply()
    const observer = new ResizeObserver(apply)
    observer.observe(wrapper)
    return () => observer.disconnect()
  }, [])

  const update = (key: keyof OGData, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }))
  }
  const reset = () => setData(DEFAULT)

  const handleDownload = async () => {
    if (!captureRef.current) return
    setDownloading(true)
    try {
      const html2canvasMod = await import('html2canvas')
      const html2canvas = html2canvasMod.default
      const canvas = await html2canvas(captureRef.current, {
        backgroundColor: '#05070D',
        scale: 1,
        width: OG_W,
        height: OG_H,
        windowWidth: OG_W,
        windowHeight: OG_H,
        useCORS: true,
        logging: false,
      })
      await new Promise<void>((resolve) => {
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              resolve()
              return
            }
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = 'diretrix-og-1200x630.png'
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
            URL.revokeObjectURL(url)
            resolve()
          },
          'image/png',
          1.0,
        )
      })
      setDownloaded(true)
      setTimeout(() => setDownloaded(false), 2500)
    } catch (err) {
      console.error('OG export failed', err)
      alert('Erro ao exportar OG image. Verifique o console.')
    } finally {
      setDownloading(false)
    }
  }

  return (
    <section className="section" id="opengraph">
      <div className="reveal">
        <div className="section-label">Digital · Open Graph</div>
        <h2 className="section-title">OG Image · 1200×630</h2>
        <p className="section-desc">
          Imagem de preview para compartilhamento em redes sociais (Facebook,
          LinkedIn, WhatsApp, Twitter/X). Edite os campos, gere o PNG vetorial
          em 1200×630 e use no <code style={{ color: 'var(--verde)' }}>{`<meta property="og:image">`}</code> do site.
        </p>
      </div>

      <div className="og-gen-grid">
        {/* Form */}
        <div className="og-gen-form">
          <div className="og-gen-form-head">
            <span className="type-tag">Conteúdo da imagem</span>
            <button type="button" onClick={reset} className="email-gen-reset">
              Resetar
            </button>
          </div>

          <OGField id="og-tag" label="Tag superior" value={data.tag} onChange={(v) => update('tag', v)} placeholder="Consultoria · Treinamento · Estratégia" />
          <OGField id="og-title" label="Título — linha 1" value={data.title} onChange={(v) => update('title', v)} placeholder="Antes da tecnologia," />
          <OGField id="og-accent" label="Título — linha 2 (italic)" value={data.accent} onChange={(v) => update('accent', v)} placeholder="a decisão." />
          <OGField id="og-url" label="URL no rodapé" value={data.url} onChange={(v) => update('url', v)} placeholder="diretrix.com.br" />

          <button
            type="button"
            onClick={handleDownload}
            disabled={downloading}
            className="email-gen-btn email-gen-btn--primary og-gen-download"
          >
            {downloaded
              ? '✓ PNG baixado'
              : downloading
                ? 'Gerando…'
                : 'Baixar Imagem · 1200×630'}
          </button>

          <span className="email-gen-hint">
            ↳ PNG vetorial · pixel-perfect · 1× pixel ratio · pronto para
            <code style={{ marginLeft: 4, color: 'var(--verde)' }}>{`og:image`}</code>
          </span>
        </div>

        {/* Preview escalado */}
        <div className="og-gen-preview-col">
          <div className="og-gen-preview-head">
            <span className="type-tag">Preview ao vivo</span>
          </div>
          <div
            ref={wrapperRef}
            className="og-gen-preview-frame"
            style={{ aspectRatio: `${OG_W} / ${OG_H}` }}
          >
            <div
              ref={visibleRef}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: OG_W,
                height: OG_H,
                transformOrigin: '0 0',
              }}
            >
              <OGImageContent data={data} />
            </div>
          </div>
        </div>
      </div>

      {/* Capture target offscreen — sempre 1200×630 fixos */}
      <div
        ref={captureRef}
        aria-hidden
        style={{
          position: 'fixed',
          top: 0,
          left: '-99999px',
          width: OG_W,
          height: OG_H,
          pointerEvents: 'none',
          zIndex: -1,
        }}
      >
        <OGImageContent data={data} />
      </div>
    </section>
  )
}

function OGField({
  id,
  label,
  value,
  onChange,
  placeholder,
}: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
}) {
  return (
    <div className="email-gen-field">
      <label htmlFor={id} className="email-gen-field-label">
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="email-gen-field-input"
      />
    </div>
  )
}
