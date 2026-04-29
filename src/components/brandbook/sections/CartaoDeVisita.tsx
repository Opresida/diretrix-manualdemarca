import { useState } from 'react'
import type { BusinessCardData } from '@/lib/pdf/diretrix-businessCard'

const DEFAULT: BusinessCardData = {
  name: 'Andressa Silva de Lima',
  role: 'Diretora Executiva',
  email: 'corporativo@diretrix.com.br',
  phone: '+55 92 ······',
  location: 'Manaus · BR · GMT-4',
  website: 'diretrix.com.br',
}

/* ════════════ PREVIEW: FRENTE (visual) ════════════ */
function CardFrenteVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className="cv-card"
      style={{
        background: 'var(--azul)',
        boxShadow: '0 30px 60px -15px rgba(0,0,0,0.95), 0 0 0 1px rgba(255,255,255,0.06)',
      }}
    >
      <div className="cv-card-spine cv-card-spine--left" />

      <div className={`cv-card-content ${compact ? 'cv-card-content--compact' : ''}`}>
        {/* Hairline gold sutil sobre o logo */}
        <div className="cv-card-hairline" />

        {/* DIRETRIX. wordmark */}
        <div className="cv-card-logo">
          DIRETRIX<span style={{ color: 'var(--verde)' }}>.</span>
        </div>

        {/* Tagline pillars */}
        <div className="cv-card-pillars">
          CONSULTORIA · TREINAMENTO · ESTRATÉGIA
        </div>

        {/* Claim editorial central */}
        <div className="cv-card-claim">
          <em style={{ color: 'var(--gold)' }}>Não vendemos esperança.</em>
          <br />
          <em style={{ color: 'var(--branco)' }}>Vendemos critério.</em>
        </div>

        {/* Footer: coords + URL */}
        <div className="cv-card-foot">
          <span className="cv-card-coords">03°06′S · 60°01′W · MANAUS</span>
          <span className="cv-card-url">DIRETRIX.COM.BR</span>
        </div>
      </div>
    </div>
  )
}

/* ════════════ PREVIEW: VERSO (visual) ════════════ */
function CardVersoVisual({
  data = DEFAULT,
  compact = false,
}: {
  data?: BusinessCardData
  compact?: boolean
}) {
  return (
    <div
      className="cv-card"
      style={{
        background: 'var(--preto)',
        boxShadow: '0 30px 60px -15px rgba(0,0,0,0.95), 0 0 0 1px rgba(255,255,255,0.06)',
      }}
    >
      <div className="cv-card-spine cv-card-spine--right" />

      {/* "D." ghost gigante */}
      <div className="cv-card-ghost">D.</div>

      <div className={`cv-card-content ${compact ? 'cv-card-content--compact' : ''}`}>
        <div className="cv-card-name">{data.name}</div>
        <div className="cv-card-role">{data.role.toUpperCase()}</div>

        <div className="cv-card-divider" />

        <div className="cv-card-grid">
          <div>
            <span className="cv-card-key">E-mail</span>
            <span className="cv-card-val">{data.email}</span>
          </div>
          <div>
            <span className="cv-card-key">Tel</span>
            <span className="cv-card-val">{data.phone}</span>
          </div>
          <div>
            <span className="cv-card-key">Sede</span>
            <span className="cv-card-val">{data.location}</span>
          </div>
          <div>
            <span className="cv-card-key">Web</span>
            <span className="cv-card-val cv-card-val--bold">{data.website}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ════════════ GENERATOR ════════════ */
export function CartaoDeVisita() {
  const [data, setData] = useState<BusinessCardData>(DEFAULT)
  const [downloading, setDownloading] = useState(false)
  const [downloaded, setDownloaded] = useState(false)
  const [includeBleed, setIncludeBleed] = useState(true)
  const [includeCropMarks, setIncludeCropMarks] = useState(true)

  const update = (key: keyof BusinessCardData, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }))
  }
  const reset = () => setData(DEFAULT)

  const handleDownload = async () => {
    setDownloading(true)
    try {
      const { generateBusinessCardPDF } = await import('@/lib/pdf/diretrix-businessCard')
      await generateBusinessCardPDF(data, {
        bleed: includeBleed,
        cropMarks: includeCropMarks,
      })
      setDownloaded(true)
      setTimeout(() => setDownloaded(false), 2500)
    } catch (err) {
      console.error('PDF export failed', err)
      alert('Erro ao gerar o PDF. Verifique o console.')
    } finally {
      setDownloading(false)
    }
  }

  return (
    <section className="section" id="cartao">
      <div className="reveal">
        <div className="section-label">Documento Obrigatório · Cartão de Visita</div>
        <h2 className="section-title">Cartão de Visita</h2>
        <p className="section-desc">
          Design exclusivo Diretrix — referência conceitual à pasta executiva
          (lombada gold vertical) e ao manifesto institucional. Preencha os
          dados, valide o preview e gere o PDF vetorial em 85×55mm pronto
          para gráfica.
        </p>
      </div>

      {/* Showcase com preview empilhado das 2 faces */}
      <div className="cv-showcase">
        <div>
          <div className="cv-side-label">Frente</div>
          <CardFrenteVisual />
        </div>
        <div>
          <div className="cv-side-label">Verso</div>
          <CardVersoVisual data={data} />
        </div>
      </div>

      {/* Especificações de impressão */}
      <div className="cv-specs">
        {[
          { label: 'Dimensão', value: '85 × 55 mm', meta: 'Padrão internacional' },
          { label: 'Papel', value: '350 g/m²', meta: 'Couché fosco · soft touch' },
          { label: 'Acabamento', value: 'Hot stamping gold', meta: 'Lombada e tagline' },
          { label: 'Sangria', value: '+3 mm', meta: 'CMYK · 300 dpi' },
        ].map((s) => (
          <div key={s.label} className="cv-spec">
            <span className="cv-spec-label">{s.label}</span>
            <span className="cv-spec-value">{s.value}</span>
            <span className="cv-spec-meta">{s.meta}</span>
          </div>
        ))}
      </div>

      {/* Gerador */}
      <div className="cv-gen-grid">
        <div className="cv-gen-form">
          <div className="cv-gen-form-head">
            <span className="type-tag">Dados do cartão</span>
            <button type="button" onClick={reset} className="email-gen-reset">
              Resetar
            </button>
          </div>

          <CVField id="cv-name" label="Nome completo" value={data.name} onChange={(v) => update('name', v)} placeholder="Andressa Silva de Lima" maxLength={32} />
          <CVField id="cv-role" label="Cargo / função" value={data.role} onChange={(v) => update('role', v)} placeholder="Diretora Executiva" maxLength={36} />
          <CVField id="cv-email" label="E-mail" type="email" value={data.email} onChange={(v) => update('email', v)} placeholder="voce@diretrix.com.br" maxLength={48} />
          <CVField id="cv-phone" label="Telefone" value={data.phone} onChange={(v) => update('phone', v)} placeholder="+55 92 ······" maxLength={24} />
          <CVField id="cv-location" label="Localização" value={data.location} onChange={(v) => update('location', v)} placeholder="Manaus · BR · GMT-4" maxLength={32} />
          <CVField id="cv-website" label="Website" value={data.website} onChange={(v) => update('website', v)} placeholder="diretrix.com.br" maxLength={32} />

          {/* Opções de impressão */}
          <div className="cv-gen-options">
            <span className="cv-gen-options-label">Opções de impressão</span>
            <CVToggle label="Sangria 3 mm" hint="Acrescenta 3mm em cada lado (91×61mm total)" checked={includeBleed} onChange={setIncludeBleed} />
            <CVToggle label="Marcas de corte" hint="Crop marks nos 4 cantos" checked={includeCropMarks} onChange={setIncludeCropMarks} />
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={handleDownload}
            disabled={downloading}
            className="email-gen-btn email-gen-btn--primary"
          >
            {downloaded
              ? '✓ PDF baixado'
              : downloading
                ? 'Gerando PDF…'
                : 'Baixar PDF (gráfica)'}
          </button>
          <span className="email-gen-hint">
            ↳ PDF vetorial · 2 páginas (frente + verso) · 85×55 mm · RGB
            <br />
            Para gráficas que exigem CMYK puro, abra no Illustrator/InDesign
            e exporte como CMYK.
          </span>
        </div>

        {/* Preview ao vivo dos dados aplicados */}
        <div className="cv-gen-preview-col">
          <div className="cv-gen-preview-head">
            <span className="type-tag">Preview ao vivo · Verso</span>
          </div>
          <div className="cv-gen-preview-frame">
            <CardVersoVisual data={data} />
          </div>
        </div>
      </div>
    </section>
  )
}

function CVField({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  maxLength,
}: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
  maxLength?: number
}) {
  return (
    <div className="email-gen-field">
      <label htmlFor={id} className="email-gen-field-label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
        className="email-gen-field-input"
      />
    </div>
  )
}

function CVToggle({
  label,
  hint,
  checked,
  onChange,
}: {
  label: string
  hint?: string
  checked: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="cv-toggle"
      aria-pressed={checked}
    >
      <span className={`cv-toggle-track ${checked ? 'is-on' : ''}`}>
        <span className="cv-toggle-thumb" />
      </span>
      <span className="cv-toggle-meta">
        <span className="cv-toggle-label">{label}</span>
        {hint && <span className="cv-toggle-hint">{hint}</span>}
      </span>
    </button>
  )
}
