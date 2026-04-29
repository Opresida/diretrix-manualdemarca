import { useState, type ComponentType } from 'react'
import {
  ChevronDown,
  Copy,
  Check,
  Printer,
  Calendar,
  Search,
  PenTool,
  Code2,
  Rocket,
  Wallet,
  ShieldCheck,
  FileSignature,
} from 'lucide-react'

interface SectionItem {
  id: string
  number: string
  title: string
  summary: string
  body: ComponentType
}

const PROPOSAL_DATE = '04 / 2026'
const PROPOSAL_VALIDITY = '30 dias corridos a partir da data de emissão'

/* ════════════ CAPA ════════════ */
function CapaSection() {
  return (
    <div className="pc-capa">
      {/* 4 cantos L-bracket gold (referência ao OG image) */}
      <div className="pc-capa-corner pc-capa-corner--tl" />
      <div className="pc-capa-corner pc-capa-corner--tr" />
      <div className="pc-capa-corner pc-capa-corner--bl" />
      <div className="pc-capa-corner pc-capa-corner--br" />

      <div className="pc-capa-content">
        <header className="pc-capa-head">
          <div className="pc-capa-logo">
            DIRETRIX<span style={{ color: 'var(--verde)' }}>.</span>
          </div>
          <span className="pc-capa-tag">Proposta Confidencial</span>
        </header>

        <div className="pc-capa-body">
          <span className="pc-capa-eyebrow">Proposta Comercial</span>
          <h3 className="pc-capa-title">
            [Nome do Projeto]
            <br />
            <span className="playfair-italic" style={{ color: 'var(--gold)' }}>
              para [Cliente].
            </span>
          </h3>
        </div>

        <div className="pc-capa-meta">
          <div>
            <span className="pc-capa-meta-key">Emissão</span>
            <span className="pc-capa-meta-val">{PROPOSAL_DATE}</span>
          </div>
          <div>
            <span className="pc-capa-meta-key">Validade</span>
            <span className="pc-capa-meta-val">30 dias</span>
          </div>
          <div>
            <span className="pc-capa-meta-key">Versão</span>
            <span className="pc-capa-meta-val">v1.0</span>
          </div>
          <div>
            <span className="pc-capa-meta-key">Sigilo</span>
            <span className="pc-capa-meta-val">NDA · ON</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ════════════ CONTEXTO ════════════ */
function ContextoSection() {
  return (
    <div className="pc-blocks">
      <div className="pc-blocks-grid">
        <div className="pc-block">
          <span className="pc-block-label">Cliente</span>
          <p className="pc-block-content">
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>
              [Razão social, CNPJ, endereço-sede, jurisdição operacional]
            </span>
          </p>
        </div>
        <div className="pc-block">
          <span className="pc-block-label">Stakeholders</span>
          <p className="pc-block-content">
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>
              [Sponsor executivo, Product Owner, ponto técnico, jurídico]
            </span>
          </p>
        </div>
      </div>

      <div className="pc-block">
        <span className="pc-block-label">Cenário Atual</span>
        <p className="pc-block-content">
          [Descrever em 3-5 linhas o estado atual da operação técnica/gerencial:
          o que existe, o que falta, restrição regulatória, prazo crítico,
          infraestrutura legada, integrações exigidas. Substitua este parágrafo
          pelo briefing real coletado na imersão.]
        </p>
      </div>

      <div className="pc-block pc-block--accent">
        <span className="pc-block-label" style={{ color: 'var(--gold)' }}>
          Objetivo da Diretrix
        </span>
        <p className="pc-block-content">
          Entregar [diagnóstico / blueprint / formação / sistema] com [métrica
          de sucesso mensurável] em até [prazo], operando sob padrão
          institucional, com governança documentada e hand-off limpo.
        </p>
      </div>
    </div>
  )
}

/* ════════════ ESCOPO ════════════ */
function EscopoSection() {
  const blocks = [
    {
      title: 'Imersão & Diagnóstico',
      icon: Search,
      items: [
        'Workshop de descoberta com sponsors (até 3 sessões)',
        'Mapa de riscos técnicos, regulatórios e operacionais',
        'Diagnóstico Operacional defensável (40+ páginas)',
        'KPIs binários e critério de aceite formal',
      ],
    },
    {
      title: 'Arquitetura & Blueprint',
      icon: PenTool,
      items: [
        'Desenho do estado-alvo com governança e métricas',
        'Stack tecnológica e cronograma de sprints',
        'Custo total de mudança quantificado',
        'Aceite formal antes da execução',
      ],
    },
    {
      title: 'Capacidade & Execução',
      icon: Code2,
      items: [
        'Trilhas de capacitação dimensionadas',
        'Sprints quinzenais com demos quinzenais',
        'Documentação viva (wiki + runbooks)',
        'Code review e governança técnica contínua',
      ],
    },
    {
      title: 'Operação & Hypercare',
      icon: Rocket,
      items: [
        'Deploy com observabilidade configurada',
        'Pentest interno antes do go-live',
        '30 dias de hypercare sem custo adicional',
        'Hand-off técnico ou contrato de operação',
      ],
    },
  ]

  const outOfScope = [
    'Aquisição de licenças de terceiros (cloud, APIs pagas, certificados)',
    'Conteúdo editorial, fotografia, copy de marketing',
    'Suporte 24×7 (sob contrato separado de operação)',
    'Migração de dados de sistemas legados (escopo separado)',
    'Hospedagem de infra (cliente fica com a conta dos provedores)',
  ]

  return (
    <div className="pc-blocks">
      <div className="pc-escopo-grid">
        {blocks.map((b) => {
          const Icon = b.icon
          return (
            <article key={b.title} className="pc-escopo-card">
              <header className="pc-escopo-head">
                <div className="pc-escopo-icon">
                  <Icon size={18} />
                </div>
                <h4 className="pc-escopo-title">{b.title}</h4>
              </header>
              <ul className="pc-escopo-items">
                {b.items.map((item) => (
                  <li key={item}>
                    <span className="pc-escopo-bullet">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>

      <div className="pc-out-of-scope">
        <span className="pc-out-of-scope-label">Fora do Escopo</span>
        <ul>
          {outOfScope.map((item) => (
            <li key={item}>
              <span aria-hidden="true">×</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="pc-out-of-scope-foot">
          Itens fora do escopo podem ser contratados como adendo, com orçamento
          à parte.
        </p>
      </div>
    </div>
  )
}

/* ════════════ CRONOGRAMA ════════════ */
function CronogramaSection() {
  const phases = [
    { icon: Search, name: 'Imersão', weeks: 'S1–S2', deliverables: 'Workshop · Mapa · Spec funcional', color: 'var(--verde)' },
    { icon: PenTool, name: 'Arquitetura', weeks: 'S3', deliverables: 'Blueprint · Aceite formal', color: 'var(--verde)' },
    { icon: Code2, name: 'Construção', weeks: 'S4–S11', deliverables: '4 sprints · Demos · Staging', color: 'var(--gold)' },
    { icon: Rocket, name: 'Lançamento', weeks: 'S12', deliverables: 'Deploy · Pentest · Hypercare', color: 'var(--gold)' },
  ]

  return (
    <div className="pc-blocks">
      <div className="pc-block">
        <div className="pc-cronograma-header">
          <Calendar size={14} style={{ color: 'var(--gold)' }} />
          <span className="pc-block-label">Duração estimada · 12 semanas</span>
        </div>

        {/* Gantt simplificado */}
        <div className="pc-gantt">
          {phases.map((p, i) => {
            const start = [0, 16, 25, 92][i]
            const end = [16, 25, 92, 100][i]
            const width = end - start
            const Icon = p.icon
            return (
              <div key={p.name} className="pc-gantt-row">
                <div className="pc-gantt-name">
                  <Icon size={14} style={{ color: p.color, flexShrink: 0 }} />
                  <div>
                    <span className="pc-gantt-phase">{p.name}</span>
                    <span className="pc-gantt-weeks">{p.weeks}</span>
                  </div>
                </div>
                <div className="pc-gantt-track">
                  <div
                    className="pc-gantt-bar"
                    style={{
                      width: `${width}%`,
                      marginLeft: `${start}%`,
                      background: `linear-gradient(90deg, ${p.color}40, ${p.color})`,
                      borderColor: p.color,
                    }}
                  >
                    {width >= 25 && (
                      <span className="pc-gantt-bar-label">{p.deliverables}</span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Régua */}
        <div className="pc-gantt-ruler">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i}>S{i + 1}</span>
          ))}
        </div>
      </div>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontStyle: 'italic',
          fontSize: 14,
          color: 'var(--texto-2)',
          lineHeight: 1.6,
        }}
      >
        Cronograma de referência. Ajustes finos definidos no fim da fase de
        arquitetura, com aceite formal pelo Sponsor antes do primeiro entregável
        executivo.
      </p>
    </div>
  )
}

/* ════════════ INVESTIMENTO ════════════ */
function InvestimentoSection() {
  const lineItems = [
    { label: 'Imersão & Diagnóstico', subtotal: 'R$ [valor]', desc: 'Workshop · mapa de riscos · diagnóstico defensável' },
    { label: 'Arquitetura & Blueprint', subtotal: 'R$ [valor]', desc: 'Estado-alvo · governança · cronograma' },
    { label: 'Capacidade & Execução', subtotal: 'R$ [valor]', desc: '4 sprints · trilhas · code review · governança' },
    { label: 'Operação & Hypercare', subtotal: 'Incluído', desc: 'Deploy · pentest · 30d hypercare' },
  ]

  const conditions = [
    { label: 'Modalidade', value: 'Fixo por escopo · pagamento mensal' },
    { label: 'Sinal', value: '30% no aceite da proposta' },
    { label: 'Mensalidades', value: '4 parcelas iguais durante a execução' },
    { label: 'Saldo', value: '10% no go-live com aceite formal' },
    { label: 'Reembolsos', value: 'Despesas operacionais aprovadas, com NF' },
    { label: 'Reajuste', value: 'IPCA anual em contratos de continuidade' },
    { label: 'Moeda', value: 'BRL (Brasil) · USD (LatAm)' },
  ]

  return (
    <div className="pc-blocks">
      <div className="pc-investimento-table">
        <div className="pc-investimento-head">
          <span className="pc-block-label">Composição do Investimento</span>
          <span className="pc-investimento-version">v1.0</span>
        </div>

        {lineItems.map((li) => (
          <div key={li.label} className="pc-investimento-row">
            <div className="pc-investimento-row-meta">
              <span className="pc-investimento-row-name">{li.label}</span>
              <span className="pc-investimento-row-desc">{li.desc}</span>
            </div>
            <span className="pc-investimento-row-value">{li.subtotal}</span>
          </div>
        ))}

        <div className="pc-investimento-total">
          <span>Total</span>
          <span className="pc-investimento-total-val">R$ [TOTAL]</span>
        </div>
      </div>

      <div className="pc-block">
        <div className="pc-cronograma-header">
          <Wallet size={14} style={{ color: 'var(--gold)' }} />
          <span className="pc-block-label">Condições Comerciais</span>
        </div>
        <div className="pc-conditions-grid">
          {conditions.map((c) => (
            <div key={c.label} className="pc-condition">
              <span className="pc-condition-key">{c.label}</span>
              <span className="pc-condition-val">{c.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ════════════ GARANTIAS ════════════ */
function GarantiasSection() {
  const items = [
    {
      icon: ShieldCheck,
      t: 'Sigilo absoluto',
      d: 'NDA mútuo desde o primeiro contato. Sub-processadores documentados.',
    },
    {
      icon: ShieldCheck,
      t: 'IP 100% do cliente',
      d: 'Todo código, documentação, blueprint e contrato pertence ao cliente desde o commit 1.',
    },
    {
      icon: ShieldCheck,
      t: 'Zero vendor-lock',
      d: 'Stack escolhida com hand-off em mente. Sem componentes proprietários da Diretrix.',
    },
    {
      icon: ShieldCheck,
      t: 'Conformidade LGPD',
      d: 'Mapeamento de dados pessoais, base legal, termo de tratamento e DPA.',
    },
  ]
  return (
    <div className="pc-garantias-grid">
      {items.map((i) => {
        const Icon = i.icon
        return (
          <article key={i.t} className="pc-garantia">
            <Icon size={20} style={{ color: 'var(--gold)' }} />
            <div>
              <h4 className="pc-garantia-title">{i.t}</h4>
              <p className="pc-garantia-desc">{i.d}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

/* ════════════ ACEITE ════════════ */
function AceiteSection() {
  return (
    <div className="pc-aceite">
      <div className="pc-aceite-intro">
        <FileSignature size={16} style={{ color: 'var(--gold)' }} />
        <span className="pc-block-label" style={{ color: 'var(--gold)' }}>
          Termo de Aceite
        </span>
      </div>

      <p className="pc-aceite-text">
        Ao assinar abaixo, o Cliente declara concordância com o escopo,
        cronograma, investimento e condições descritos nesta proposta. Esta
        proposta é válida por <strong>{PROPOSAL_VALIDITY}</strong> e perderá
        efeito após esse período sem renovação formal.
      </p>

      <div className="pc-aceite-grid">
        <div className="pc-aceite-col">
          <span className="pc-aceite-label">Pelo Cliente</span>
          <div className="pc-aceite-line" />
          <div className="pc-aceite-fields">
            <span>Nome:</span>
            <span>Cargo:</span>
            <span>CPF/CNPJ:</span>
            <span>Data:</span>
          </div>
        </div>
        <div className="pc-aceite-col">
          <span className="pc-aceite-label">Pela Diretrix</span>
          <div className="pc-aceite-line pc-aceite-line--signed">
            <span className="pc-aceite-signature">↳ assinatura digital</span>
          </div>
          <div className="pc-aceite-fields">
            <span>Nome: [Responsável Diretrix]</span>
            <span>Cargo: [Cargo do signatário]</span>
            <span>CNPJ: 45.529.299/0001-04</span>
            <span>Data: {PROPOSAL_DATE}</span>
          </div>
        </div>
      </div>

      <div className="pc-aceite-foot">
        Diretrix Soluções Corporativas Ltda · corporativo@diretrix.com.br ·
        diretrix.com.br
      </div>
    </div>
  )
}

const SECTIONS: SectionItem[] = [
  { id: 'capa', number: '01', title: 'Capa', summary: 'Cabeçalho institucional, cliente, projeto, validade', body: CapaSection },
  { id: 'contexto', number: '02', title: 'Contexto & Objetivo', summary: 'Cenário atual, stakeholders e meta da entrega', body: ContextoSection },
  { id: 'escopo', number: '03', title: 'Escopo', summary: 'Imersão · Arquitetura · Capacidade · Operação · Out of scope', body: EscopoSection },
  { id: 'cronograma', number: '04', title: 'Cronograma', summary: '4 fases · 12 semanas · Gantt visual', body: CronogramaSection },
  { id: 'investimento', number: '05', title: 'Investimento', summary: 'Composição, condições, modalidades de pagamento', body: InvestimentoSection },
  { id: 'garantias', number: '06', title: 'Garantias', summary: 'NDA · IP · Vendor-lock zero · LGPD', body: GarantiasSection },
  { id: 'aceite', number: '07', title: 'Aceite & Assinaturas', summary: 'Termo de aceite, campos de assinatura, validade', body: AceiteSection },
]

export function PropostaComercial() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['capa', 'contexto']))
  const [copied, setCopied] = useState(false)

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }
  const expandAll = () => setOpenIds(new Set(SECTIONS.map((s) => s.id)))
  const collapseAll = () => setOpenIds(new Set())

  const copyMarkdown = () => {
    const md = buildMarkdownProposal()
    navigator.clipboard.writeText(md).catch(() => undefined)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const printProposal = () => {
    if (typeof window !== 'undefined') window.print()
  }

  return (
    <section className="section" id="proposta">
      <div className="reveal">
        <div className="section-label">Documento Obrigatório · Proposta Comercial</div>
        <h2 className="section-title">Modelo de Proposta</h2>
        <p className="section-desc">
          Template completo de proposta comercial Diretrix — 7 sessões
          obrigatórias, do cabeçalho institucional até a assinatura. Use como
          ponto de partida e substitua os{' '}
          <code style={{ color: 'var(--gold)' }}>[colchetes]</code> pelos dados
          reais do cliente. Estrutura defensável que vira contrato.
        </p>
      </div>

      <div className="pc-toolbar">
        <span className="type-tag">Template v1.0</span>
        <span className="pc-toolbar-meta">{SECTIONS.length} seções</span>
        <div className="pc-toolbar-spacer" />
        <button type="button" onClick={expandAll} className="pc-toolbar-btn">
          Expandir tudo
        </button>
        <button type="button" onClick={collapseAll} className="pc-toolbar-btn">
          Colapsar
        </button>
        <button type="button" onClick={copyMarkdown} className="pc-toolbar-btn">
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? 'Copiado' : 'Markdown'}
        </button>
        <button type="button" onClick={printProposal} className="pc-toolbar-btn">
          <Printer size={12} />
          Imprimir
        </button>
      </div>

      {/* Seções */}
      <div className="pc-sections">
        {SECTIONS.map((s) => {
          const open = openIds.has(s.id)
          const Body = s.body
          return (
            <div key={s.id} className={`pc-section ${open ? 'is-open' : ''}`}>
              <button
                type="button"
                onClick={() => toggle(s.id)}
                className="pc-section-head"
                aria-expanded={open}
              >
                <span className="pc-section-num">{s.number}</span>
                <div className="pc-section-meta">
                  <span className="pc-section-title">{s.title}</span>
                  <span className="pc-section-summary">{s.summary}</span>
                </div>
                <ChevronDown
                  size={18}
                  className="pc-section-chevron"
                  style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)' }}
                />
              </button>
              {open && (
                <div className="pc-section-body">
                  <Body />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Próximo passo */}
      <div className="pc-next-steps">
        <span className="type-tag">Próximo passo</span>
        <h3 className="pc-next-title">Como esta proposta vira projeto</h3>
        <div className="pc-next-grid">
          <div className="pc-next-step">
            <span className="pc-next-num">01</span>
            <span className="pc-next-step-title">Aceite formal</span>
            <span className="pc-next-step-desc">
              Assinatura no termo de aceite + 30% de sinal disparam Imersão.
            </span>
          </div>
          <div className="pc-next-step">
            <span className="pc-next-num">02</span>
            <span className="pc-next-step-title">Kickoff em 5 dias</span>
            <span className="pc-next-step-desc">
              Reunião de imersão agendada em até 5 dias úteis após o aceite.
            </span>
          </div>
          <div className="pc-next-step">
            <span className="pc-next-num">03</span>
            <span className="pc-next-step-title">Diagnóstico em 2 semanas</span>
            <span className="pc-next-step-desc">
              Cliente recebe diagnóstico defensável antes da fase de arquitetura.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function buildMarkdownProposal() {
  return `# Proposta Comercial — [Nome do Projeto]

**Cliente:** [Razão social]
**Emissão:** ${PROPOSAL_DATE}
**Validade:** ${PROPOSAL_VALIDITY}
**Versão:** v1.0
**Sigilo:** NDA aplicável

---

## 01 · Contexto & Objetivo

**Cenário atual:** [descrever em 3-5 linhas]

**Objetivo Diretrix:** Entregar [diagnóstico/blueprint/sistema] com [métrica] em até [prazo].

---

## 02 · Escopo

### Imersão & Diagnóstico
- Workshop de descoberta com sponsors
- Mapa de riscos técnicos, regulatórios, operacionais
- Diagnóstico Operacional defensável (40+ páginas)
- KPIs binários e critério de aceite formal

### Arquitetura & Blueprint
- Desenho do estado-alvo com governança e métricas
- Stack tecnológica e cronograma de sprints
- Custo total de mudança quantificado
- Aceite formal antes da execução

### Capacidade & Execução
- Trilhas de capacitação dimensionadas
- Sprints quinzenais com demos
- Documentação viva (wiki + runbooks)
- Code review e governança técnica contínua

### Operação & Hypercare
- Deploy com observabilidade
- Pentest interno antes do go-live
- 30 dias de hypercare sem custo adicional
- Hand-off técnico ou contrato de operação

### Fora do escopo
- Licenças de terceiros (cloud, APIs pagas)
- Conteúdo editorial, fotografia, copy
- Suporte 24×7
- Migração de dados de sistemas legados

---

## 03 · Cronograma · 12 semanas

| Fase | Semanas | Entregas |
|------|---------|----------|
| Imersão | S1–S2 | Workshop · Mapa · Spec |
| Arquitetura | S3 | Blueprint · Aceite |
| Construção | S4–S11 | 4 sprints · Demos · Staging |
| Lançamento | S12 | Deploy · Pentest · Hypercare |

---

## 04 · Investimento

| Item | Subtotal |
|------|----------|
| Imersão & Diagnóstico | R$ [valor] |
| Arquitetura & Blueprint | R$ [valor] |
| Capacidade & Execução | R$ [valor] |
| Operação & Hypercare | Incluído |
| **TOTAL** | **R$ [TOTAL]** |

**Condições:** 30% sinal · 4 parcelas · 10% saldo no go-live
**Moeda:** BRL · USD (LatAm)

---

## 05 · Garantias

- **Sigilo absoluto** — NDA disponível desde o 1º contato
- **IP 100% do cliente** — código, design, contratos
- **Zero vendor-lock** — stack com hand-off em mente
- **Conformidade LGPD** — mapeamento + DPA

---

## 06 · Aceite

Assinatura do cliente: ____________________
Pela Diretrix: [Responsável] · [Cargo]

Data: ${PROPOSAL_DATE}

Diretrix Soluções Corporativas Ltda
CNPJ 45.529.299/0001-04
corporativo@diretrix.com.br
`
}
