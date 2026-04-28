import { useState } from 'react'
import { Link } from 'wouter'
import { InstitutionalNav } from '@/components/institutional/InstitutionalNav'
import { Footer } from '@/components/shared/Footer'
import { useReveal } from '@/hooks/useReveal'

type Estagio = 0 | 1 | 2 | 3

interface EstagioInfo {
  nivel: number
  nome: string
  resumo: string
  sintomas: string[]
  meta: string
}

const ESTAGIOS: EstagioInfo[] = [
  {
    nivel: 0,
    nome: 'Reativo',
    resumo:
      'A operação responde a incêndios. TI gasta mais tempo apagando fogos do que arquitetando.',
    sintomas: [
      'Indisponibilidades surpreendem o negócio',
      'Stack montado sem estratégia clara',
      'Documentação técnica inexistente ou desatualizada',
      'Decisões dependem de heróis individuais',
    ],
    meta: 'Estabelecer visibilidade e processo mínimo viável.',
  },
  {
    nivel: 1,
    nome: 'Gerenciado',
    resumo:
      'Já existe processo, mas a operação ainda é defensiva. Você sabe o que está quebrado — só não sabe por quê.',
    sintomas: [
      'Métricas técnicas existem mas não viram decisão',
      'Atualizações ocorrem em janelas de risco',
      'Vendor lock-in tácito sustentando partes críticas',
      'Time TI separado do time de negócio',
    ],
    meta: 'Mover de processo para arquitetura defensável.',
  },
  {
    nivel: 2,
    nome: 'Proativo',
    resumo:
      'A operação antecipa problemas. Mas cada nova frente custa caro porque a base não foi pensada para escala.',
    sintomas: [
      'Roadmap técnico existe mas atrasa em ciclo',
      'Custo unitário não escala com receita',
      'Cada novo produto exige rebuild de infra',
      'Times técnicos atraem mas não retêm sêniors',
    ],
    meta: 'Transformar arquitetura em vantagem competitiva.',
  },
  {
    nivel: 3,
    nome: 'Estratégico',
    resumo:
      'TI é alavanca de negócio, não centro de custo. Decisões técnicas defendem ROI antes de saírem da reunião.',
    sintomas: [
      'Roadmap técnico precede roadmap comercial',
      'Custo marginal por novo cliente tende a zero',
      'Equipe sênior é diferencial de mercado',
      'Compliance e segurança são vantagem, não fricção',
    ],
    meta: 'Manter a vantagem em sprint contínuo.',
  },
]

export default function ConsultoriaTI() {
  useReveal()
  const [estagioAtual, setEstagioAtual] = useState<Estagio>(0)
  const [estagioMeta, setEstagioMeta] = useState<Estagio>(2)

  const atual = ESTAGIOS[estagioAtual]
  const meta = ESTAGIOS[estagioMeta]
  const gap = estagioMeta - estagioAtual

  return (
    <>
      <div className="bg-ambient" />
      <InstitutionalNav />
      <main>
        {/* Header da página */}
        <section className="page-head">
          <div className="page-head-inner">
            <Link href="/">
              <a className="page-back">← voltar para a tese</a>
            </Link>
            <div className="page-head-meta">
              <span className="inst-section-label">01 · Consultoria em TI</span>
              <h1 className="page-head-titulo">
                O diagnóstico
                <br />
                <span className="playfair-italic">que precede o sistema.</span>
              </h1>
              <p className="page-head-lede">
                Mapeamos a operação técnica antes de propor mudança. Onde a empresa
                está, onde precisa estar, e qual o caminho real entre os dois.
              </p>
            </div>
          </div>
        </section>

        {/* MÓVEL PESADO — Mapa de Maturidade interativo */}
        <section className="maturidade">
          <header className="maturidade-head">
            <div className="inst-section-label">Móvel Pesado · Diagnóstico Aberto</div>
            <h2 className="maturidade-titulo">
              Mapa de Maturidade
              <br />
              <span className="playfair-italic">em TI Corporativa.</span>
            </h2>
            <p className="maturidade-lede">
              Selecione onde sua empresa está hoje e onde precisa chegar. O gap é
              honesto — você sai daqui com leitura defensável, com ou sem nós.
            </p>
          </header>

          {/* Controles */}
          <div className="maturidade-controles">
            <div className="maturidade-controle">
              <span className="maturidade-controle-label">Estado atual</span>
              <div className="maturidade-controle-pills">
                {ESTAGIOS.map((e) => (
                  <button
                    key={`atual-${e.nivel}`}
                    type="button"
                    className={`maturidade-pill ${
                      estagioAtual === e.nivel ? 'is-active' : ''
                    }`}
                    onClick={() => setEstagioAtual(e.nivel as Estagio)}
                  >
                    <span className="maturidade-pill-num">0{e.nivel}</span>
                    {e.nome}
                  </button>
                ))}
              </div>
            </div>

            <div className="maturidade-controle">
              <span className="maturidade-controle-label">Onde precisa estar</span>
              <div className="maturidade-controle-pills">
                {ESTAGIOS.map((e) => (
                  <button
                    key={`meta-${e.nivel}`}
                    type="button"
                    disabled={e.nivel < estagioAtual}
                    className={`maturidade-pill maturidade-pill--meta ${
                      estagioMeta === e.nivel ? 'is-active' : ''
                    }`}
                    onClick={() =>
                      e.nivel >= estagioAtual && setEstagioMeta(e.nivel as Estagio)
                    }
                  >
                    <span className="maturidade-pill-num">0{e.nivel}</span>
                    {e.nome}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Visualização do gap */}
          <div className="maturidade-viz">
            <svg viewBox="0 0 800 200" className="maturidade-svg" aria-hidden="true">
              <defs>
                <linearGradient id="gap-gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(255, 100, 100, 0.4)" />
                  <stop offset="100%" stopColor="rgba(0, 168, 107, 0.6)" />
                </linearGradient>
              </defs>

              {/* Track */}
              <line
                x1="60"
                y1="100"
                x2="740"
                y2="100"
                stroke="rgba(255, 255, 255, 0.06)"
                strokeWidth="2"
              />

              {/* Linha do gap (do atual até a meta) */}
              {gap > 0 && (
                <line
                  x1={60 + (estagioAtual / 3) * 680}
                  y1="100"
                  x2={60 + (estagioMeta / 3) * 680}
                  y2="100"
                  stroke="url(#gap-gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              )}

              {/* Nós dos 4 estágios */}
              {ESTAGIOS.map((e, idx) => {
                const x = 60 + (idx / 3) * 680
                const isAtual = idx === estagioAtual
                const isMeta = idx === estagioMeta && idx !== estagioAtual
                const isInRange = idx > estagioAtual && idx < estagioMeta
                const r = isAtual || isMeta ? 12 : 6
                const fill = isAtual
                  ? 'rgba(255, 100, 100, 0.9)'
                  : isMeta
                    ? '#00a86b'
                    : isInRange
                      ? 'rgba(0, 168, 107, 0.4)'
                      : 'rgba(255, 255, 255, 0.18)'

                return (
                  <g key={`node-${idx}`}>
                    <circle cx={x} cy="100" r={r + 6} fill={fill} opacity="0.2" />
                    <circle cx={x} cy="100" r={r} fill={fill} />
                    <text
                      x={x}
                      y="140"
                      textAnchor="middle"
                      fontFamily="'Inter', monospace"
                      fontSize="11"
                      fontWeight="600"
                      letterSpacing="2"
                      fill={
                        isAtual || isMeta ? '#fff' : 'rgba(255, 255, 255, 0.4)'
                      }
                    >
                      0{e.nivel}
                    </text>
                    <text
                      x={x}
                      y="160"
                      textAnchor="middle"
                      fontFamily="'Poppins', sans-serif"
                      fontSize="13"
                      fontWeight="600"
                      fill={
                        isAtual || isMeta ? '#fff' : 'rgba(255, 255, 255, 0.4)'
                      }
                    >
                      {e.nome}
                    </text>
                  </g>
                )
              })}

              {/* Labels acima */}
              <text
                x={60 + (estagioAtual / 3) * 680}
                y="60"
                textAnchor="middle"
                fontFamily="'Inter', monospace"
                fontSize="9"
                fontWeight="700"
                letterSpacing="2"
                fill="rgba(255, 100, 100, 0.85)"
              >
                ATUAL
              </text>
              {gap > 0 && (
                <text
                  x={60 + (estagioMeta / 3) * 680}
                  y="60"
                  textAnchor="middle"
                  fontFamily="'Inter', monospace"
                  fontSize="9"
                  fontWeight="700"
                  letterSpacing="2"
                  fill="#00a86b"
                >
                  META
                </text>
              )}
            </svg>
          </div>

          {/* Leitura do diagnóstico */}
          <div className="maturidade-leitura">
            <article className="maturidade-card maturidade-card--atual">
              <header>
                <span className="maturidade-card-tag maturidade-card-tag--atual">
                  Onde está
                </span>
                <h3 className="maturidade-card-titulo">
                  0{atual.nivel} · {atual.nome}
                </h3>
              </header>
              <p className="maturidade-card-resumo">{atual.resumo}</p>
              <ul className="maturidade-card-sintomas">
                {atual.sintomas.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </article>

            <div className="maturidade-ponte" aria-hidden="true">
              <span className="maturidade-ponte-num">{gap}</span>
              <span className="maturidade-ponte-label">
                {gap === 0 ? 'já chegou' : gap === 1 ? 'salto' : 'saltos'}
              </span>
            </div>

            <article className="maturidade-card maturidade-card--meta">
              <header>
                <span className="maturidade-card-tag maturidade-card-tag--meta">
                  Onde precisa estar
                </span>
                <h3 className="maturidade-card-titulo">
                  0{meta.nivel} · {meta.nome}
                </h3>
              </header>
              <p className="maturidade-card-resumo">{meta.resumo}</p>
              <p className="maturidade-card-meta">
                <strong>Próximo objetivo:</strong> {meta.meta}
              </p>
            </article>
          </div>

          {/* Ponte Diretrix */}
          <footer className="maturidade-ponte-diretrix">
            <div className="maturidade-ponte-diretrix-tag">
              <span className="inst-hero-eyebrow-dot" aria-hidden="true" />
              Como a Diretrix entra
            </div>
            <p className="maturidade-ponte-diretrix-texto">
              {gap === 0 ? (
                <>
                  Você já está no estágio-meta. Trabalhamos contigo para{' '}
                  <strong>manter a vantagem em sprint contínuo</strong> —
                  refinamento de arquitetura, governança e capacitação em ciclo.
                </>
              ) : gap === 1 ? (
                <>
                  Um salto entre estágios é normalmente um ciclo de{' '}
                  <strong>3 a 6 meses</strong> com a Diretrix conduzindo Assessment
                  + Architecture + Capacity. Aceite formal antes de cada estágio.
                </>
              ) : (
                <>
                  Saltos múltiplos exigem disciplina. Dividimos a transformação em
                  <strong> ciclos sequenciais de 4 a 6 meses</strong>, cada um
                  fechando com vantagem mensurável antes do próximo começar.
                </>
              )}
            </p>
          </footer>
        </section>

        {/* Stack Diretrix */}
        <section className="stack-diretrix">
          <header className="stack-diretrix-head">
            <div className="inst-section-label">Stack · Operação Diretrix</div>
            <h2 className="stack-diretrix-titulo">
              O que entregamos<br />
              <span className="playfair-italic">em consultoria de TI.</span>
            </h2>
          </header>

          <div className="stack-diretrix-tabela">
            <div className="stack-diretrix-row">
              <span className="stack-diretrix-num">A1</span>
              <div>
                <h4>Diagnóstico Operacional</h4>
                <p>
                  40 páginas defensáveis. Mapa de stack, processos críticos, riscos
                  ranqueados, custo total de cada decisão técnica.
                </p>
              </div>
            </div>
            <div className="stack-diretrix-row">
              <span className="stack-diretrix-num">A2</span>
              <div>
                <h4>Blueprint Estratégico</h4>
                <p>
                  Desenho do estado-alvo com governança, métricas de sucesso e custo
                  total quantificado. Aceite formal antes da execução.
                </p>
              </div>
            </div>
            <div className="stack-diretrix-row">
              <span className="stack-diretrix-num">A3</span>
              <div>
                <h4>Roadmap de Capacidade</h4>
                <p>
                  Trilhas de capacitação dimensionadas para a transformação. KPIs
                  binários: ou a equipe sustenta, ou refazemos.
                </p>
              </div>
            </div>
            <div className="stack-diretrix-row">
              <span className="stack-diretrix-num">A4</span>
              <div>
                <h4>Operação em Produção</h4>
                <p>
                  Acompanhamento trimestral baseado em dado real. Continuamos até a
                  vantagem estar consolidada, ou saímos limpo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA fechamento */}
        <section className="page-cta">
          <h2 className="page-cta-titulo">
            Quer ver onde sua TI está,
            <br />
            <span className="playfair-italic">de verdade?</span>
          </h2>
          <p className="page-cta-lede">
            30 minutos com a equipe sênior. Você descreve o cenário, mapeamos junto.
            Sem custo, com NDA.
          </p>
          <Link href="/#diagnostico">
            <a className="inst-btn inst-btn-primary">
              Agendar Diagnóstico
              <span className="inst-btn-arrow" aria-hidden="true">→</span>
            </a>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
