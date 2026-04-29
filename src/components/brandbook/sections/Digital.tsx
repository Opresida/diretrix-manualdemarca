import { useState, useMemo, useEffect, useRef } from 'react'
import {
  buildSignatureHTML,
  buildSignatureFile,
  buildSignaturePlainText,
  type SignatureData,
  type SignatureVariant,
} from '@/lib/email/diretrix-signature'

const DEFAULT: SignatureData = {
  name: 'Andressa Silva de Lima',
  role: 'Diretora Executiva',
  email: 'corporativo@diretrix.com.br',
  phone: '+55 92 ······',
  location: 'Manaus · BR · GMT-4',
  website: 'diretrix.com.br',
  linkedin: '',
}

export function Digital() {
  const [data, setData] = useState<SignatureData>(DEFAULT)
  const [variant, setVariant] = useState<SignatureVariant>('dark')
  const [copiedKind, setCopiedKind] = useState<null | 'html' | 'rich'>(null)
  const [downloaded, setDownloaded] = useState(false)

  const html = useMemo(() => buildSignatureHTML(data, variant), [data, variant])
  const fileHTML = useMemo(() => buildSignatureFile(data, variant), [data, variant])
  const plainText = useMemo(() => buildSignaturePlainText(data), [data])

  const update = (key: keyof SignatureData, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }))
  }
  const reset = () => setData(DEFAULT)

  const handleCopyHTML = async () => {
    try {
      await navigator.clipboard.writeText(html)
      setCopiedKind('html')
      setTimeout(() => setCopiedKind(null), 2000)
    } catch (err) {
      console.error(err)
      alert('Falha ao copiar. Tente baixar o arquivo HTML.')
    }
  }

  const handleCopyRich = async () => {
    try {
      if (typeof ClipboardItem !== 'undefined' && navigator.clipboard?.write) {
        const item = new ClipboardItem({
          'text/html': new Blob([html], { type: 'text/html' }),
          'text/plain': new Blob([plainText], { type: 'text/plain' }),
        })
        await navigator.clipboard.write([item])
      } else {
        const tmp = document.createElement('div')
        tmp.contentEditable = 'true'
        tmp.innerHTML = html
        tmp.style.cssText =
          'position:fixed;opacity:0;pointer-events:none;left:-9999px;'
        document.body.appendChild(tmp)
        const range = document.createRange()
        range.selectNodeContents(tmp)
        const sel = window.getSelection()
        sel?.removeAllRanges()
        sel?.addRange(range)
        document.execCommand('copy')
        sel?.removeAllRanges()
        document.body.removeChild(tmp)
      }
      setCopiedKind('rich')
      setTimeout(() => setCopiedKind(null), 2000)
    } catch (err) {
      console.error(err)
      alert('Falha ao copiar como rich-text. Use "Copiar HTML".')
    }
  }

  const handleDownload = () => {
    const blob = new Blob([fileHTML], { type: 'text/html;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    const safeName = data.name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
    a.href = url
    a.download = `diretrix-signature-${safeName || 'sem-nome'}.html`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    setDownloaded(true)
    setTimeout(() => setDownloaded(false), 2500)
  }

  return (
    <section className="section" id="digital">
      <div className="reveal">
        <div className="section-label">Digital · Assinatura de E-mail</div>
        <h2 className="section-title">Assinatura Editável</h2>
        <p className="section-desc">
          Preencha os campos, visualize ao vivo e copie o HTML pronto para colar
          no Gmail, Outlook ou Apple Mail. Table-based, CSS inline, fontes do
          sistema — funciona em qualquer client.
        </p>
      </div>

      <div className="email-gen-grid">
        {/* Form */}
        <div className="email-gen-form">
          <div className="email-gen-form-head">
            <span className="type-tag">Dados da assinatura</span>
            <button type="button" onClick={reset} className="email-gen-reset">
              Resetar
            </button>
          </div>

          <SigField id="g-name" label="Nome completo" value={data.name} onChange={(v) => update('name', v)} placeholder="Andressa Silva de Lima" />
          <SigField id="g-role" label="Cargo" value={data.role} onChange={(v) => update('role', v)} placeholder="Diretora Executiva" />
          <SigField id="g-email" label="E-mail" type="email" value={data.email} onChange={(v) => update('email', v)} placeholder="voce@diretrix.com.br" />
          <SigField id="g-phone" label="Telefone" value={data.phone} onChange={(v) => update('phone', v)} placeholder="+55 92 ······" />
          <SigField id="g-location" label="Localização" value={data.location} onChange={(v) => update('location', v)} placeholder="Manaus · BR · GMT-4" />
          <SigField id="g-website" label="Website" value={data.website} onChange={(v) => update('website', v)} placeholder="diretrix.com.br" />
          <SigField id="g-linkedin" label="LinkedIn (opcional)" value={data.linkedin || ''} onChange={(v) => update('linkedin', v)} placeholder="linkedin.com/in/..." />

          <div className="email-gen-variant">
            <span className="email-gen-variant-label">Variante</span>
            <div className="email-gen-variant-grid">
              {(['dark', 'light'] as const).map((v) => {
                const active = variant === v
                return (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={`email-gen-variant-pill ${active ? 'is-active' : ''}`}
                  >
                    <span
                      className="email-gen-variant-swatch"
                      style={{
                        background: v === 'dark' ? '#05070D' : '#FFFFFF',
                        borderColor:
                          v === 'dark' ? 'rgba(255,255,255,0.12)' : '#E5E5E5',
                      }}
                    />
                    {v === 'dark' ? 'Dark' : 'Light'}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="email-gen-actions">
            <button
              type="button"
              onClick={handleCopyRich}
              className="email-gen-btn email-gen-btn--primary"
            >
              {copiedKind === 'rich' ? '✓ Pronto pra colar' : 'Copiar Rich-Text'}
            </button>

            <div className="email-gen-actions-row">
              <button
                type="button"
                onClick={handleCopyHTML}
                className="email-gen-btn email-gen-btn--ghost"
              >
                {copiedKind === 'html' ? '✓ Copiado' : 'Copiar HTML'}
              </button>
              <button
                type="button"
                onClick={handleDownload}
                className="email-gen-btn email-gen-btn--ghost"
              >
                {downloaded ? '✓ Baixado' : 'Baixar .html'}
              </button>
            </div>

            <span className="email-gen-hint">
              ↳ <strong>Rich-Text</strong> cola pronto no Gmail/Outlook ·{' '}
              <strong>HTML</strong> = código fonte
            </span>
          </div>
        </div>

        {/* Preview + código */}
        <div className="email-gen-preview-col">
          <div className="email-gen-preview-head">
            <span className="type-tag">
              Preview · {variant === 'dark' ? 'Dark' : 'Light'}
            </span>
          </div>
          <SignaturePreview html={html} variant={variant} />

          <div className="email-gen-source-head">
            <span className="type-tag">Código fonte</span>
          </div>
          <pre className="email-gen-source">{html}</pre>

          <div className="email-gen-howto">
            <span className="type-tag">Como instalar</span>
            <ul>
              <li>
                <strong>Gmail:</strong> Configurações → Geral → Assinatura.
                Clique no editor → Copiar Rich-Text aqui → Cole (Ctrl+V).
              </li>
              <li>
                <strong>Outlook:</strong> Arquivo → Opções → Email →
                Assinaturas. Cole com Ctrl+V no editor.
              </li>
              <li>
                <strong>Apple Mail:</strong> Mail → Preferências → Assinaturas.
                Cole e <strong>desmarque</strong> "Always match my default
                message font".
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function SigField({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
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
        onChange={(e) => onChange(e.target.value)}
        className="email-gen-field-input"
      />
    </div>
  )
}

function SignaturePreview({
  html,
  variant,
}: {
  html: string
  variant: SignatureVariant
}) {
  const [height, setHeight] = useState(280)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const wrapperBg = variant === 'dark' ? '#0E1017' : '#F5F5F5'

  useEffect(() => {
    const id = setTimeout(() => {
      const body = iframeRef.current?.contentDocument?.body
      if (body) setHeight(Math.max(280, body.scrollHeight + 48))
    }, 60)
    return () => clearTimeout(id)
  }, [html])

  const srcDoc = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>html,body{margin:0;padding:24px;background:${wrapperBg};display:flex;justify-content:center;}</style></head><body>${html}</body></html>`

  return (
    <iframe
      ref={iframeRef}
      title="Email signature preview"
      srcDoc={srcDoc}
      sandbox="allow-same-origin"
      className="email-gen-preview-iframe"
      style={{ height, background: wrapperBg }}
    />
  )
}
