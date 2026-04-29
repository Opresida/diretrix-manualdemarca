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

function OGImageContent({ data }: { data: OGData }) {
  return (
    <div
      style={{
        position: 'relative',
        width: OG_W,
        height: OG_H,
        backgroundColor: '#05070D',
        overflow: 'hidden',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Grid background */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(0,168,107,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,168,107,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow central */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 65% at 50% 50%, rgba(0,168,107,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Hairline lime no topo */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 320,
          height: 2,
          background: 'linear-gradient(90deg, transparent, #00A86B 50%, transparent)',
        }}
      />

      {/* Tag superior */}
      <div
        style={{
          position: 'absolute',
          top: 80,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            fontFamily: "'Inter', monospace",
            fontSize: 16,
            textTransform: 'uppercase',
            letterSpacing: '4px',
            color: '#00A86B',
            padding: '10px 20px',
            border: '1px solid rgba(0,168,107,0.35)',
            borderRadius: 4,
            backgroundColor: 'rgba(0,168,107,0.05)',
            fontWeight: 700,
          }}
        >
          {data.tag}
        </span>
      </div>

      {/* Título central */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 100px',
        }}
      >
        <h1
          style={{
            fontSize: 84,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            color: '#FFFFFF',
            margin: 0,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {data.title}
          <br />
          <span
            style={{
              color: '#00A86B',
              fontStyle: 'italic',
              fontWeight: 700,
              fontFamily: "'Playfair Display', Georgia, serif",
              textShadow: '0 0 50px rgba(0,168,107,0.45)',
            }}
          >
            {data.accent}
          </span>
        </h1>
      </div>

      {/* Logo DIRETRIX. */}
      <div
        style={{
          position: 'absolute',
          bottom: 80,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'baseline',
          gap: 0,
        }}
      >
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 44,
            fontWeight: 800,
            letterSpacing: '-1px',
            color: '#FFFFFF',
            lineHeight: 1,
          }}
        >
          DIRETRIX
        </span>
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 44,
            fontWeight: 800,
            color: '#00A86B',
            lineHeight: 1,
            textShadow: '0 0 16px rgba(0,168,107,0.6)',
          }}
        >
          .
        </span>
      </div>

      {/* Footer URL */}
      <div
        style={{
          position: 'absolute',
          bottom: 36,
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: "'Inter', monospace",
          fontSize: 12,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.40)',
          fontWeight: 500,
        }}
      >
        {data.url}
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
