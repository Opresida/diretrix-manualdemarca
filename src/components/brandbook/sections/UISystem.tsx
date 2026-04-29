import { useState } from 'react'
import { ChevronRight, Sparkles, Award } from 'lucide-react'

export function UISystem() {
  const [activeTab, setActiveTab] = useState<'btn' | 'card' | 'badge' | 'form'>('btn')

  return (
    <section className="section" id="componentes">
      <div className="reveal">
        <div className="section-label">Sistema de Componentes · UI</div>
        <h2 className="section-title">UI System</h2>
        <p className="section-desc">
          Catálogo dos componentes atômicos da marca. Cada peça aqui tem 1
          motivo claro de existir e regras explícitas de aplicação. Tudo o
          que aparece no site é composto a partir destes blocos.
        </p>
      </div>

      {/* Tabs de categoria */}
      <div className="ui-tabs reveal">
        {[
          { id: 'btn', label: 'Botões' },
          { id: 'card', label: 'Cards' },
          { id: 'badge', label: 'Badges & Tags' },
          { id: 'form', label: 'Inputs' },
        ].map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActiveTab(t.id as typeof activeTab)}
            className={`ui-tab ${activeTab === t.id ? 'is-active' : ''}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Conteúdo por tab */}
      {activeTab === 'btn' && <ButtonsCatalog />}
      {activeTab === 'card' && <CardsCatalog />}
      {activeTab === 'badge' && <BadgesCatalog />}
      {activeTab === 'form' && <FormsCatalog />}
    </section>
  )
}

/* ─── Buttons ─── */
function ButtonsCatalog() {
  return (
    <div className="ui-catalog">
      <UISpec
        name="Primary CTA"
        slug="nav-cta"
        desc="Botão principal de conversão. Verde sólido sobre dark, com glow."
        usage="Hero · Páginas internas · Diagnóstico"
      >
        <a href="#" className="nav-cta" onClick={(e) => e.preventDefault()}>
          Solicitar Diagnóstico
        </a>
      </UISpec>

      <UISpec
        name="Ghost"
        slug="ghost-btn"
        desc="Ação secundária. Borda lime + texto verde, fundo transparente."
        usage="Secundário em pares com Primary"
      >
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 24px',
            border: '1px solid rgba(0,168,107,0.4)',
            borderRadius: 4,
            background: 'rgba(0,168,107,0.05)',
            color: 'var(--verde)',
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            textDecoration: 'none',
          }}
        >
          Ver método em uso
          <ChevronRight size={14} />
        </a>
      </UISpec>

      <UISpec
        name="Inline Link"
        slug="link-arrow"
        desc="Link com seta de progressão. Anima gap no hover."
        usage="Cards · Cross-references"
      >
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            color: 'var(--texto-2)',
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            borderBottom: '1px solid currentColor',
            paddingBottom: 4,
          }}
        >
          Aprofundar
          <ChevronRight size={12} />
        </a>
      </UISpec>
    </div>
  )
}

/* ─── Cards ─── */
function CardsCatalog() {
  return (
    <div className="ui-catalog">
      <UISpec
        name="Card padrão"
        slug="card"
        desc="Surface base sobre fundo dark. Hover sobe -7px e ganha border verde."
        usage="Pilares · Touchpoints · Combos"
      >
        <div className="card" style={{ maxWidth: 360 }}>
          <h3
            style={{
              color: 'var(--verde)',
              fontFamily: "'Poppins', sans-serif",
              marginBottom: 12,
            }}
          >
            Arquitetura
          </h3>
          <p style={{ fontSize: 14, color: 'var(--texto)', lineHeight: 1.7 }}>
            Estruturas modulares que garantem consistência absoluta em escala
            global.
          </p>
        </div>
      </UISpec>

      <UISpec
        name="Combo Card · Premium"
        slug="combo-card-premium"
        desc="Variante com border-top gold + gradient sutil. Para produtos de tier superior."
        usage="Combos premium · Programa Trilha Executiva"
      >
        <div
          className="card combo-card premium"
          style={{ maxWidth: 360 }}
        >
          <span className="combo-badge bg-gold">Tier Premium</span>
          <h3 className="luxury-title">Programa Trilha</h3>
          <p className="luxury-desc">
            6 meses de formação executiva com mentoria mensal contínua.
          </p>
        </div>
      </UISpec>

      <UISpec
        name="Combo Card · Standard"
        slug="combo-card-standard"
        desc="Variante com border-top verde. Para produtos de tier base."
        usage="Combos standard · Treinamentos individuais"
      >
        <div
          className="card combo-card standard"
          style={{ maxWidth: 360 }}
        >
          <span className="combo-badge bg-green">Tier Standard</span>
          <h3 className="luxury-title">Trilha Individual</h3>
          <p className="luxury-desc">
            40-80 horas em uma competência técnica com projeto final.
          </p>
        </div>
      </UISpec>
    </div>
  )
}

/* ─── Badges ─── */
function BadgesCatalog() {
  return (
    <div className="ui-catalog">
      <UISpec
        name="Type Tag · Verde"
        slug="type-tag"
        desc="Identificador de seção/categoria. Verde sólido com bg pill."
        usage="Cabeçalhos de seção · Cards"
      >
        <span className="type-tag">Display Type</span>
      </UISpec>

      <UISpec
        name="Type Tag · Gold"
        slug="type-tag-gold"
        desc="Variante gold para conteúdo editorial / premium."
        usage="Editorial · Curadores · Tier alto"
      >
        <span
          className="type-tag"
          style={{
            background: 'rgba(212,175,55,0.1)',
            color: 'var(--gold)',
          }}
        >
          Editorial
        </span>
      </UISpec>

      <UISpec
        name="Combo Badge · Verde"
        slug="combo-badge-bg-green"
        desc="Badge de produto com bg verde translúcido."
        usage="Combos standard"
      >
        <span className="combo-badge bg-green">Tier Standard</span>
      </UISpec>

      <UISpec
        name="Combo Badge · Gold"
        slug="combo-badge-bg-gold"
        desc="Badge de produto com bg gold translúcido."
        usage="Combos premium"
      >
        <span className="combo-badge bg-gold">Tier Premium</span>
      </UISpec>

      <UISpec
        name="Weight Pill"
        slug="weight-pill"
        desc="Pill de peso tipográfico. Outline sutil, mono caps."
        usage="Demonstração de tipografia"
      >
        <div style={{ display: 'flex', gap: 8 }}>
          <span className="weight-pill">Regular</span>
          <span
            className="weight-pill"
            style={{ borderColor: 'var(--verde)', color: 'var(--verde)' }}
          >
            Bold
          </span>
          <span className="weight-pill">ExtraBold</span>
        </div>
      </UISpec>

      <UISpec
        name="Section Label"
        slug="section-label"
        desc="Eyebrow de seção com hairline lime à esquerda."
        usage="Topo de cada seção"
      >
        <div className="section-label">Categoria · Subcategoria</div>
      </UISpec>
    </div>
  )
}

/* ─── Forms ─── */
function FormsCatalog() {
  return (
    <div className="ui-catalog">
      <UISpec
        name="Text Input"
        slug="ui-input"
        desc="Input padrão. Border sutil, focus borda verde."
        usage="Formulários institucionais"
      >
        <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label
            style={{
              fontFamily: "'Inter', monospace",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--texto)',
            }}
          >
            E-mail corporativo
          </label>
          <input
            type="email"
            placeholder="voce@empresa.com.br"
            className="ui-input-demo"
          />
        </div>
      </UISpec>

      <UISpec
        name="Select"
        slug="ui-select"
        desc="Dropdown nativo estilizado para tema dark."
        usage="Formulários · Filtros"
      >
        <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label
            style={{
              fontFamily: "'Inter', monospace",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--texto)',
            }}
          >
            Serviço de interesse
          </label>
          <select className="ui-input-demo">
            <option>Consultoria em TI</option>
            <option>Treinamento Profissional</option>
            <option>Treinamento em Informática</option>
          </select>
        </div>
      </UISpec>

      <UISpec
        name="Textarea"
        slug="ui-textarea"
        desc="Multi-line input. Resize vertical permitido."
        usage="Briefing · Mensagens livres"
      >
        <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label
            style={{
              fontFamily: "'Inter', monospace",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--texto)',
            }}
          >
            Cenário (opcional)
          </label>
          <textarea
            rows={3}
            placeholder="Descreva sua operação atual…"
            className="ui-input-demo"
            style={{ resize: 'vertical', minHeight: 80, fontFamily: "'Inter', sans-serif" }}
          />
        </div>
      </UISpec>
    </div>
  )
}

/* ─── Utility: spec card padrão ─── */
function UISpec({
  name,
  slug,
  desc,
  usage,
  children,
}: {
  name: string
  slug: string
  desc: string
  usage: string
  children: React.ReactNode
}) {
  return (
    <article className="ui-spec">
      <header className="ui-spec-head">
        <div className="ui-spec-id">
          <h4 className="ui-spec-name">{name}</h4>
          <code className="ui-spec-slug">.{slug}</code>
        </div>
        <Sparkles size={14} style={{ color: 'var(--verde)' }} />
      </header>

      <div className="ui-spec-demo">{children}</div>

      <footer className="ui-spec-foot">
        <p className="ui-spec-desc">{desc}</p>
        <p className="ui-spec-usage">
          <Award size={11} style={{ display: 'inline', verticalAlign: '-1px', color: 'var(--gold)' }} />{' '}
          <strong>Uso:</strong> {usage}
        </p>
      </footer>
    </article>
  )
}
