import { useState } from 'react'

/* ════════════ TIPOS & DADOS ════════════ */

interface Pesquisador {
  nome: string
  cargo: string
  bio: string
  initials: string
  lattesId?: string
  lattesUrl?: string
  accent?: 'verde' | 'gold'
  placeholder?: boolean
}

const PESQUISADORES: Pesquisador[] = [
  {
    nome: 'Andressa Silva de Lima',
    cargo: 'Diretora Executiva · Curadora-chefe',
    bio: 'Fundadora da Diretrix. Conduz a tese de mercado, governança da operação e seleciona pessoalmente cada formador e consultor da casa. Especialização em Gestão Estratégica.',
    initials: 'AL',
    accent: 'verde',
  },
  {
    nome: 'Carlos Veridiano',
    cargo: 'Curador · Liderança Executiva',
    bio: 'M.Sc. em Gestão Estratégica, MBA INSEAD. C-Level em 3 indústrias, conselheiro independente em 8 boards. Pesquisador associado em decisão executiva sob incerteza.',
    initials: 'CV',
    accent: 'gold',
  },
  {
    nome: 'Renata Bezerra',
    cargo: 'Curadora · Comunicação sob Pressão',
    bio: 'D.Sc. em Comportamento Organizacional pela USP. Visiting Scholar Stanford GSB. Coautora de "Decisão sob Estresse" (Atlas, 2022). 15 anos formando lideranças do PIM.',
    initials: 'RB',
    accent: 'gold',
  },
  {
    nome: 'Eduardo Tassio',
    cargo: 'Curador · Construção de Times',
    bio: 'M.Sc. em Transformação Cultural. Diretor de Pessoas em 4 grupos industriais. Mentor Endeavor — 60+ scale-ups. Pesquisador em pacto operacional e cultura corporativa.',
    initials: 'ET',
    accent: 'gold',
  },
  {
    nome: 'Júlia Ribeiro',
    cargo: 'Pesquisadora Sênior · Cloud & DevOps',
    bio: 'AWS Solutions Architect Professional, CKA Kubernetes. 9 anos arquitetando infra para empresas do PIM. Conduz as trilhas técnicas de Cloud, DevOps e Segurança.',
    initials: 'JR',
    lattesId: '4128376598234561',
    lattesUrl: 'http://lattes.cnpq.br/4128376598234561',
    accent: 'verde',
  },
  {
    nome: 'Marcelo Fontes',
    cargo: 'Consultor Sênior · Arquitetura de TI',
    bio: 'Ex-CTO de fintech (R$ 2bi GMV). Especialista em modernização de stack legado, migração cloud e governança técnica. Conduz Assessments e Blueprints da Diretrix.',
    initials: 'MF',
    accent: 'verde',
  },
  {
    nome: 'Em breve',
    cargo: 'Pesquisador · Dados & Analytics',
    bio: 'Posição em estruturação. Especialista em data engineering, modelagem analítica e governança de dados para clientes da Diretrix nos verticais indústria e finanças.',
    initials: '?D',
    placeholder: true,
  },
  {
    nome: 'Em breve',
    cargo: 'Curador · Programa Internacional',
    bio: 'Posição em estruturação. Conexão acadêmica internacional para programas executivos com módulos em INSEAD, IESE e Wharton. Visiting positions em discussão.',
    initials: '?I',
    placeholder: true,
  },
]

/* ════════════ CARD ════════════ */

function PesquisadorCard({ p }: { p: Pesquisador }) {
  const [hovered, setHovered] = useState(false)
  const isPlaceholder = !!p.placeholder
  const isGold = p.accent === 'gold' && !isPlaceholder

  const accent = isPlaceholder ? '#A1A1A1' : isGold ? '#D4AF37' : '#00A86B'
  const accentRgba = isPlaceholder
    ? 'rgba(255,255,255,0.08)'
    : isGold
      ? 'rgba(212,175,55,0.32)'
      : 'rgba(0,168,107,0.32)'
  const borderHover = isPlaceholder
    ? 'rgba(255,255,255,0.14)'
    : isGold
      ? 'rgba(212,175,55,0.4)'
      : 'rgba(0,168,107,0.4)'

  return (
    <div
      className="equipe-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderColor: hovered ? borderHover : 'var(--borda)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? `0 24px 60px rgba(0,0,0,0.55), 0 0 40px ${accentRgba}`
          : '0 8px 28px rgba(0,0,0,0.35)',
        opacity: isPlaceholder ? 0.78 : 1,
      }}
    >
      {/* Avatar */}
      <div
        className="equipe-avatar"
        style={{
          background: isPlaceholder
            ? 'rgba(255,255,255,0.04)'
            : isGold
              ? 'rgba(212,175,55,0.08)'
              : 'rgba(0,168,107,0.08)',
          borderColor: hovered ? accent : 'rgba(255,255,255,0.15)',
          boxShadow: hovered
            ? `0 0 0 4px rgba(255,255,255,0.04), 0 0 28px ${accentRgba}`
            : '0 0 0 4px rgba(255,255,255,0.03)',
        }}
      >
        <span
          className="equipe-avatar-initials"
          style={{ color: accent }}
        >
          {p.initials}
        </span>
      </div>

      {/* Nome */}
      <h3 className="equipe-nome">{p.nome}</h3>

      {/* Cargo */}
      <p className="equipe-cargo" style={{ color: accent }}>
        {p.cargo}
      </p>

      {/* Bio */}
      <p className="equipe-bio">{p.bio}</p>

      {/* Lattes badge */}
      {!isPlaceholder && p.lattesId && (
        <div className="equipe-lattes-badge">
          <span className="equipe-lattes-key">ID Lattes</span>
          <span className="equipe-lattes-val">{p.lattesId}</span>
        </div>
      )}

      {/* CTA */}
      {isPlaceholder ? (
        <span className="equipe-cta equipe-cta--vazia">Posição em aberto</span>
      ) : p.lattesUrl ? (
        <a
          href={p.lattesUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="equipe-cta equipe-cta--link"
          style={{
            background: isGold ? 'var(--gold)' : 'var(--verde)',
            color: 'var(--preto)',
            boxShadow: `0 0 18px ${accentRgba}`,
          }}
        >
          Acessar Currículo
          <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <span
          className="equipe-cta equipe-cta--soft"
          style={{ borderColor: accentRgba, color: accent }}
        >
          Currículo em breve
        </span>
      )}
    </div>
  )
}

/* ════════════ SEÇÃO ════════════ */

export function Equipe() {
  const [paused, setPaused] = useState(false)

  // Duplica para criar a ilusão de loop infinito
  const allCards = [...PESQUISADORES, ...PESQUISADORES]

  return (
    <section id="equipe" className="equipe-section">
      {/* Glows decorativos */}
      <div className="equipe-glow equipe-glow--top" aria-hidden="true" />
      <div className="equipe-glow equipe-glow--bottom" aria-hidden="true" />

      {/* Header */}
      <header className="equipe-head">
        <div className="inst-section-label">Capital Humano · Equipe Diretrix</div>
        <h2 className="equipe-titulo">
          Quem está
          <br />
          <span className="playfair-italic">na frente da entrega.</span>
        </h2>
        <p className="equipe-lede">
          Pesquisadores, consultores sêniors e curadores titulares — selecionados
          pessoalmente pela direção. Cada um responde por uma frente: consultoria
          técnica, formação executiva ou pesquisa aplicada.
        </p>
      </header>

      {/* Carrossel infinito */}
      <div
        className="equipe-track-wrapper"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fades laterais */}
        <div className="equipe-fade equipe-fade--left" aria-hidden="true" />
        <div className="equipe-fade equipe-fade--right" aria-hidden="true" />

        <div
          className="equipe-track"
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        >
          {allCards.map((p, i) => (
            <PesquisadorCard key={`${p.initials}-${i}`} p={p} />
          ))}
        </div>
      </div>

      <footer className="equipe-foot">
        <span className="equipe-foot-text">
          Currículos rastreáveis no CNPq · Posições em aberto recebem CV via{' '}
          <a href="mailto:corporativo@diretrix.com.br?subject=Candidatura%20Diretrix">
            corporativo@diretrix.com.br
          </a>
        </span>
      </footer>
    </section>
  )
}
