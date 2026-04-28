import { useState } from 'react'
import { Link } from 'wouter'
import { InstitutionalNav } from '@/components/institutional/InstitutionalNav'
import { Footer } from '@/components/shared/Footer'
import { useReveal } from '@/hooks/useReveal'

interface SkillNode {
  id: string
  label: string
  level: 'fundamento' | 'intermediario' | 'avancado'
  x: number
  y: number
  desc: string
  modulos: string[]
}

interface SkillEdge {
  from: string
  to: string
}

const SKILLS: SkillNode[] = [
  {
    id: 'logica',
    label: 'Lógica',
    level: 'fundamento',
    x: 150,
    y: 250,
    desc: 'Pensamento computacional, algoritmos elementares, estruturas de controle.',
    modulos: ['Pseudocódigo + fluxograma', 'Algoritmos clássicos', 'Estrutura de dados básica'],
  },
  {
    id: 'office',
    label: 'Office Avançado',
    level: 'fundamento',
    x: 150,
    y: 400,
    desc: 'Excel avançado (PowerQuery, dashboards), Word para documentos institucionais, PowerPoint executivo.',
    modulos: ['Excel · Tabelas dinâmicas + DAX', 'Word · Estilos + sumário automático', 'PowerPoint · Templates corporativos'],
  },
  {
    id: 'redes',
    label: 'Redes',
    level: 'intermediario',
    x: 400,
    y: 150,
    desc: 'TCP/IP aplicado, segurança de perímetro, infra para empresas pequenas e médias.',
    modulos: ['Modelo OSI · prática', 'Configuração de roteador/switch', 'VPN + firewall · operação'],
  },
  {
    id: 'banco',
    label: 'Banco de Dados',
    level: 'intermediario',
    x: 400,
    y: 300,
    desc: 'SQL aplicado, modelagem relacional, performance e segurança de dados corporativos.',
    modulos: ['SQL ANSI · queries reais', 'Modelagem ER + normalização', 'Performance + índices'],
  },
  {
    id: 'web',
    label: 'Web Dev',
    level: 'intermediario',
    x: 400,
    y: 450,
    desc: 'HTML semântico, CSS moderno, JavaScript essencial. Fundamentos para construir páginas defensáveis.',
    modulos: ['HTML5 + acessibilidade', 'CSS Grid + Flexbox', 'JS · DOM + fetch'],
  },
  {
    id: 'cloud',
    label: 'Cloud · AWS',
    level: 'avancado',
    x: 700,
    y: 200,
    desc: 'AWS Solutions Architect Associate. EC2, S3, IAM, VPC, monitoramento.',
    modulos: ['Compute · EC2 + Lambda', 'Storage · S3 + EBS', 'Networking · VPC + Route 53'],
  },
  {
    id: 'devops',
    label: 'DevOps',
    level: 'avancado',
    x: 700,
    y: 350,
    desc: 'CI/CD com GitHub Actions, containers Docker, Kubernetes para times pequenos.',
    modulos: ['Git · trunk-based', 'Docker · imagens defensáveis', 'CI/CD · pipeline real'],
  },
  {
    id: 'sec',
    label: 'Segurança',
    level: 'avancado',
    x: 700,
    y: 500,
    desc: 'Pentest aplicado, OWASP Top 10, hardening de servidores, LGPD em prática.',
    modulos: ['OWASP · vulnerabilidades reais', 'Hardening · Linux + Windows', 'LGPD · operação'],
  },
]

const EDGES: SkillEdge[] = [
  { from: 'logica', to: 'redes' },
  { from: 'logica', to: 'banco' },
  { from: 'logica', to: 'web' },
  { from: 'office', to: 'banco' },
  { from: 'redes', to: 'cloud' },
  { from: 'redes', to: 'sec' },
  { from: 'banco', to: 'cloud' },
  { from: 'banco', to: 'devops' },
  { from: 'web', to: 'devops' },
  { from: 'web', to: 'sec' },
]

const LEVEL_LABELS: Record<SkillNode['level'], string> = {
  fundamento: 'Fundamento',
  intermediario: 'Intermediário',
  avancado: 'Avançado',
}

const LEVEL_COLORS: Record<SkillNode['level'], string> = {
  fundamento: '#00a86b',
  intermediario: '#00d688',
  avancado: '#d4af37',
}

export default function TreinamentosInformatica() {
  useReveal()
  const [activeSkill, setActiveSkill] = useState<string>('logica')
  const skill = SKILLS.find((s) => s.id === activeSkill)!

  return (
    <>
      <div className="bg-ambient" />
      <InstitutionalNav />
      <main>
        {/* Header */}
        <section className="page-head">
          <div className="page-head-inner">
            <Link href="/">
              <a className="page-back">← voltar para a tese</a>
            </Link>
            <div className="page-head-meta">
              <span className="inst-section-label">03 · Treinamento em Informática</span>
              <h1 className="page-head-titulo">
                Capacidade técnica
                <br />
                <span className="playfair-italic">é vantagem perene.</span>
              </h1>
              <p className="page-head-lede">
                Trilhas densas em ferramentas e linguagens que continuam relevantes em
                5 anos. Não a moda da semana — a competência que sobrevive ao ciclo.
              </p>
            </div>
          </div>
        </section>

        {/* Terminal cabeçalho — visual signature técnica */}
        <section className="info-terminal">
          <div className="info-terminal-window">
            <div className="info-terminal-bar">
              <div className="info-terminal-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="info-terminal-title">diretrix · trilhas técnicas</span>
            </div>
            <pre className="info-terminal-body">
              <code>
                <span className="info-terminal-prompt">$</span>{' '}
                <span className="info-terminal-cmd">diretrix capacity --map</span>
                {'\n'}
                <span className="info-terminal-out">
                  Mapeando trilhas de capacidade técnica...
                </span>
                {'\n'}
                <span className="info-terminal-out">
                  Encontradas: 8 competências · 10 dependências · 3 níveis
                </span>
                {'\n'}
                <span className="info-terminal-out info-terminal-ok">
                  ✓ Trilha ativa · clique nos nós abaixo
                </span>
              </code>
            </pre>
          </div>
        </section>

        {/* MÓVEL PESADO — Graph técnico interativo */}
        <section className="skill-graph">
          <header className="skill-graph-head">
            <div className="inst-section-label">Móvel Pesado · Trilha de Capacidade</div>
            <h2 className="skill-graph-titulo">
              Como as competências
              <br />
              <span className="playfair-italic">se conectam.</span>
            </h2>
            <p className="skill-graph-lede">
              Não é "lista de cursos". É um <strong>grafo de pré-requisitos</strong>.
              Você começa pelos fundamentos verdes e avança até a coluna avançada.
              Clique em qualquer nó para ver o conteúdo.
            </p>
          </header>

          <div className="skill-graph-area">
            <svg viewBox="0 0 880 600" className="skill-graph-svg">
              <defs>
                <pattern
                  id="grid-bg"
                  x="0"
                  y="0"
                  width="32"
                  height="32"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="1" cy="1" r="0.5" fill="rgba(255, 255, 255, 0.06)" />
                </pattern>
              </defs>

              {/* Background grid */}
              <rect width="880" height="600" fill="url(#grid-bg)" />

              {/* Edges (linhas) */}
              {EDGES.map((edge) => {
                const from = SKILLS.find((s) => s.id === edge.from)!
                const to = SKILLS.find((s) => s.id === edge.to)!
                const isActive = edge.from === activeSkill || edge.to === activeSkill

                return (
                  <line
                    key={`${edge.from}-${edge.to}`}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke={isActive ? '#00a86b' : 'rgba(255, 255, 255, 0.08)'}
                    strokeWidth={isActive ? '2' : '1'}
                    strokeDasharray={isActive ? '0' : '3 4'}
                  />
                )
              })}

              {/* Labels de coluna no topo */}
              <text
                x="150"
                y="60"
                textAnchor="middle"
                fontFamily="'Inter', monospace"
                fontSize="10"
                fontWeight="700"
                letterSpacing="3"
                fill="rgba(0, 168, 107, 0.5)"
              >
                FUNDAMENTO
              </text>
              <text
                x="400"
                y="60"
                textAnchor="middle"
                fontFamily="'Inter', monospace"
                fontSize="10"
                fontWeight="700"
                letterSpacing="3"
                fill="rgba(0, 214, 136, 0.5)"
              >
                INTERMEDIÁRIO
              </text>
              <text
                x="700"
                y="60"
                textAnchor="middle"
                fontFamily="'Inter', monospace"
                fontSize="10"
                fontWeight="700"
                letterSpacing="3"
                fill="rgba(212, 175, 55, 0.5)"
              >
                AVANÇADO
              </text>

              {/* Linhas verticais sutis demarcando colunas */}
              <line x1="275" y1="80" x2="275" y2="560" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="2 4" />
              <line x1="550" y1="80" x2="550" y2="560" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="2 4" />

              {/* Nodes (skills) */}
              {SKILLS.map((s) => {
                const isActive = s.id === activeSkill
                const color = LEVEL_COLORS[s.level]
                return (
                  <g
                    key={s.id}
                    className="skill-node"
                    onClick={() => setActiveSkill(s.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Halo no ativo */}
                    {isActive && (
                      <circle cx={s.x} cy={s.y} r="32" fill={color} opacity="0.15" />
                    )}
                    <circle
                      cx={s.x}
                      cy={s.y}
                      r={isActive ? '12' : '8'}
                      fill={color}
                      stroke={isActive ? '#fff' : color}
                      strokeWidth={isActive ? '2' : '1'}
                    />
                    <text
                      x={s.x}
                      y={s.y - 28}
                      textAnchor="middle"
                      fontFamily="'Poppins', sans-serif"
                      fontSize="14"
                      fontWeight="700"
                      fill={isActive ? '#fff' : 'rgba(255, 255, 255, 0.65)'}
                      letterSpacing="-0.005em"
                    >
                      {s.label}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Detalhe do skill ativo */}
          <div className="skill-detail">
            <div className="skill-detail-meta">
              <span
                className="skill-detail-level"
                style={{ color: LEVEL_COLORS[skill.level] }}
              >
                {LEVEL_LABELS[skill.level]}
              </span>
              <h3 className="skill-detail-nome">{skill.label}</h3>
              <p className="skill-detail-desc">{skill.desc}</p>
            </div>

            <div className="skill-detail-modulos">
              <span className="skill-detail-modulos-label">Módulos da trilha</span>
              <ul>
                {skill.modulos.map((m) => (
                  <li key={m}>
                    <span className="skill-detail-modulo-bullet" aria-hidden="true">
                      ▸
                    </span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Trilhas oferecidas em formato técnico */}
        <section className="trilhas-tec">
          <header className="trilhas-tec-head">
            <div className="inst-section-label">Trilhas · Formatos Disponíveis</div>
            <h2 className="trilhas-tec-titulo">
              4 formatos.
              <br />
              <span className="playfair-italic">A mesma densidade.</span>
            </h2>
          </header>

          <div className="trilhas-tec-grid">
            <article className="trilha-tec-card">
              <header>
                <span className="trilha-tec-tag">T1</span>
                <h4>Trilha Individual</h4>
              </header>
              <p>
                40-80 horas por competência. Carga densa, projeto final
                avaliado por engenheiro sênior.
              </p>
              <div className="trilha-tec-meta">
                <span>Carga: 40-80h</span>
                <span>Formato: presencial Manaus</span>
                <span>Turma: 8-15 alunos</span>
              </div>
            </article>

            <article className="trilha-tec-card">
              <header>
                <span className="trilha-tec-tag">T2</span>
                <h4>Trilha Corporativa</h4>
              </header>
              <p>
                Conteúdo customizado para o stack da empresa. Diagnóstico
                de competência atual + currículo sob medida.
              </p>
              <div className="trilha-tec-meta">
                <span>Carga: 60-120h</span>
                <span>Formato: in company</span>
                <span>Equipe: 10-30 colaboradores</span>
              </div>
            </article>

            <article className="trilha-tec-card">
              <header>
                <span className="trilha-tec-tag">T3</span>
                <h4>Bootcamp Intensivo</h4>
              </header>
              <p>
                Imersão de 4 semanas com projeto real. Para times que
                precisam de capacidade nova rápido — sem perder densidade.
              </p>
              <div className="trilha-tec-meta">
                <span>Carga: 160h em 4 semanas</span>
                <span>Formato: full-time</span>
                <span>Turma: 12-20 alunos</span>
              </div>
            </article>

            <article className="trilha-tec-card">
              <header>
                <span className="trilha-tec-tag">T4</span>
                <h4>Mentoria Técnica</h4>
              </header>
              <p>
                Acompanhamento mensal para times técnicos sêniors que
                precisam refinar arquitetura e decisão técnica em produção.
              </p>
              <div className="trilha-tec-meta">
                <span>Recorrência: mensal</span>
                <span>Formato: remoto + 1 in-person/trim.</span>
                <span>Time: 3-8 sêniors</span>
              </div>
            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="page-cta">
          <h2 className="page-cta-titulo">
            Quer mapear a capacidade
            <br />
            <span className="playfair-italic">técnica do seu time?</span>
          </h2>
          <p className="page-cta-lede">
            Em 30 minutos identificamos as 3 competências que mais retornam ROI
            no seu cenário e desenhamos a trilha que faz sentido contratar.
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
