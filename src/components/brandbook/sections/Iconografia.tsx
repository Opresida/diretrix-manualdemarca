import {
  Activity,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  ChevronRight,
  Code2,
  Compass,
  Database,
  FileText,
  GraduationCap,
  Layers,
  Lightbulb,
  LineChart,
  Mail,
  MapPin,
  Network,
  Phone,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from 'lucide-react'

const ICON_LIBRARY = [
  { Icon: Compass, name: 'Compass', use: 'Estratégia · Direção' },
  { Icon: Target, name: 'Target', use: 'Objetivo · Foco' },
  { Icon: Search, name: 'Search', use: 'Diagnóstico · Discovery' },
  { Icon: Lightbulb, name: 'Lightbulb', use: 'Insight · Tese' },
  { Icon: Workflow, name: 'Workflow', use: 'Método · Processo' },
  { Icon: Code2, name: 'Code2', use: 'Engenharia · TI' },
  { Icon: Server, name: 'Server', use: 'Infraestrutura' },
  { Icon: Database, name: 'Database', use: 'Dados · BI' },
  { Icon: Network, name: 'Network', use: 'Arquitetura · Redes' },
  { Icon: Layers, name: 'Layers', use: 'Stack · Camadas' },
  { Icon: ShieldCheck, name: 'ShieldCheck', use: 'Segurança · Compliance' },
  { Icon: Activity, name: 'Activity', use: 'Performance · Métrica' },
  { Icon: LineChart, name: 'LineChart', use: 'Crescimento · KPI' },
  { Icon: GraduationCap, name: 'GraduationCap', use: 'Treinamento' },
  { Icon: BookOpen, name: 'BookOpen', use: 'Currículo · Conteúdo' },
  { Icon: Users, name: 'Users', use: 'Equipe · Times' },
  { Icon: Award, name: 'Award', use: 'Certificação · Mérito' },
  { Icon: Briefcase, name: 'Briefcase', use: 'Negócio · C-Level' },
  { Icon: Building2, name: 'Building2', use: 'Empresa · Operação' },
  { Icon: FileText, name: 'FileText', use: 'Docs · Contratos' },
  { Icon: Sparkles, name: 'Sparkles', use: 'Destaque · Premium' },
  { Icon: Mail, name: 'Mail', use: 'Contato · Email' },
  { Icon: Phone, name: 'Phone', use: 'WhatsApp · Tel' },
  { Icon: MapPin, name: 'MapPin', use: 'Manaus · Localização' },
  { Icon: ChevronRight, name: 'ChevronRight', use: 'Navegação · CTA' },
]

export function Iconografia() {
  return (
    <section className="section" id="iconografia">
      <div className="reveal">
        <div className="section-label">Linguagem Visual · Ícones</div>
        <h2 className="section-title">Sistema de Iconografia</h2>
        <p className="section-desc">
          A DIRETRIX adota a biblioteca <strong style={{ color: 'var(--branco)' }}>Lucide</strong> como
          fonte única de ícones — outline puro, peso 2px, cantos arredondados.
          Consistência absoluta em qualquer aplicação digital ou impressa.
        </p>
      </div>

      {/* Princípios */}
      <div className="ico-grid-2">
        <div className="card reveal">
          <h3
            style={{
              color: 'var(--verde)',
              marginBottom: 12,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Stack & Especificação
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <li style={{ fontSize: 14, color: 'var(--texto-2)' }}>
              <span style={{ color: 'var(--verde)', marginRight: 8 }}>▸</span>
              <strong style={{ color: 'var(--branco)' }}>Lucide React</strong> · biblioteca padrão (~1k ícones)
            </li>
            <li style={{ fontSize: 14, color: 'var(--texto-2)' }}>
              <span style={{ color: 'var(--verde)', marginRight: 8 }}>▸</span>
              Stroke <strong style={{ color: 'var(--branco)' }}>2px</strong> · não use 1.5 nem 2.5
            </li>
            <li style={{ fontSize: 14, color: 'var(--texto-2)' }}>
              <span style={{ color: 'var(--verde)', marginRight: 8 }}>▸</span>
              Tamanhos: <code className="ico-code">14, 16, 18, 22, 28, 36px</code>
            </li>
            <li style={{ fontSize: 14, color: 'var(--texto-2)' }}>
              <span style={{ color: 'var(--verde)', marginRight: 8 }}>▸</span>
              Cor padrão: <code className="ico-code">var(--verde)</code> em containers, <code className="ico-code">var(--texto-2)</code> em texto
            </li>
          </ul>
        </div>

        <div className="card reveal">
          <h3
            style={{
              color: 'var(--gold)',
              marginBottom: 12,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Containers Padrão
          </h3>
          <div className="ico-containers">
            <div className="ico-container-spec">
              <div className="luxury-icon ico-container-sm">
                <Code2 size={16} />
              </div>
              <span className="ico-container-label">36px · sm</span>
            </div>
            <div className="ico-container-spec">
              <div className="luxury-icon">
                <Code2 size={22} />
              </div>
              <span className="ico-container-label">56px · md</span>
            </div>
            <div className="ico-container-spec">
              <div className="luxury-icon ico-container-lg">
                <Code2 size={32} />
              </div>
              <span className="ico-container-label">72px · lg</span>
            </div>
            <div className="ico-container-spec">
              <div className="ico-container-sold">
                <Code2 size={28} color="#05070D" />
              </div>
              <span className="ico-container-label">solid · gold</span>
            </div>
          </div>
        </div>
      </div>

      {/* Biblioteca curada */}
      <div className="reveal" style={{ marginTop: 60 }}>
        <span className="type-tag">Biblioteca curada</span>
        <h3
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 24,
            fontWeight: 700,
            color: 'var(--branco)',
            marginTop: 12,
            marginBottom: 8,
          }}
        >
          Ícones operacionais DIRETRIX
        </h3>
        <p
          style={{
            fontSize: 14,
            color: 'var(--texto)',
            marginBottom: 32,
            lineHeight: 1.7,
          }}
        >
          25 ícones cobrindo as 3 frentes (consultoria · treinamento ·
          estratégia). Cada conceito mapeia para 1 ícone — não duplique.
        </p>

        <div className="ico-library-grid">
          {ICON_LIBRARY.map(({ Icon, name, use }) => (
            <div key={name} className="ico-library-card">
              <div className="luxury-icon ico-library-container">
                <Icon size={20} />
              </div>
              <div className="ico-library-info">
                <span className="ico-library-name">{name}</span>
                <span className="ico-library-use">{use}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Aplicações */}
      <div className="reveal" style={{ marginTop: 60 }}>
        <span className="type-tag">Aplicações</span>
        <h3
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 24,
            fontWeight: 700,
            color: 'var(--branco)',
            marginTop: 12,
            marginBottom: 24,
          }}
        >
          Como usar em layout
        </h3>

        <div className="ico-applications">
          {/* Inline em texto */}
          <div className="card ico-app-card">
            <span className="ico-app-label">Inline · em texto</span>
            <p style={{ fontSize: 15, color: 'var(--texto-2)', lineHeight: 1.8, marginTop: 16 }}>
              Operamos em <Compass size={14} style={{ color: 'var(--verde)', display: 'inline', verticalAlign: '-2px' }} /> Manaus, com{' '}
              <ShieldCheck size={14} style={{ color: 'var(--verde)', display: 'inline', verticalAlign: '-2px' }} /> SLA institucional
              e <Activity size={14} style={{ color: 'var(--verde)', display: 'inline', verticalAlign: '-2px' }} /> KPIs binários.
            </p>
            <code className="ico-code" style={{ display: 'block', marginTop: 16, fontSize: 11 }}>
              {'<Icon size={14} style={{ display: "inline", verticalAlign: "-2px" }} />'}
            </code>
          </div>

          {/* Lista com prefixo */}
          <div className="card ico-app-card">
            <span className="ico-app-label">Lista · com prefixo</span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
              {[
                { Icon: Code2, text: 'Consultoria em TI sênior' },
                { Icon: GraduationCap, text: 'Treinamentos profissionais' },
                { Icon: Layers, text: 'Treinamentos em informática' },
              ].map(({ Icon, text }) => (
                <li
                  key={text}
                  style={{
                    fontSize: 14,
                    color: 'var(--texto-2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                  }}
                >
                  <Icon size={16} style={{ color: 'var(--verde)', flexShrink: 0 }} />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Regras */}
      <div className="reveal" style={{ marginTop: 60 }}>
        <span className="type-tag">Regras</span>
        <h3
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 24,
            fontWeight: 700,
            color: 'var(--branco)',
            marginTop: 12,
            marginBottom: 24,
          }}
        >
          Faça e evite
        </h3>
        <div className="ico-rules">
          <div className="ico-rule ico-rule--do">
            <span className="ico-rule-tag">Faça</span>
            <span>Container quadrado <code>luxury-icon</code> com border verde + ícone <code>text-verde</code> é o padrão institucional.</span>
          </div>
          <div className="ico-rule ico-rule--dont">
            <span className="ico-rule-tag">Evite</span>
            <span>Não preencha ícones (filled). Lucide é estritamente outline.</span>
          </div>
          <div className="ico-rule ico-rule--do">
            <span className="ico-rule-tag">Faça</span>
            <span>Em texto inline, use 14px com <code>verticalAlign: -2px</code>.</span>
          </div>
          <div className="ico-rule ico-rule--dont">
            <span className="ico-rule-tag">Evite</span>
            <span>Não misture Lucide com outras bibliotecas (Heroicons, Font Awesome, emoji decorativo).</span>
          </div>
          <div className="ico-rule ico-rule--do">
            <span className="ico-rule-tag">Faça</span>
            <span>Mesmo conceito = mesmo ícone. Consistência é mecânica, não estética.</span>
          </div>
          <div className="ico-rule ico-rule--dont">
            <span className="ico-rule-tag">Evite</span>
            <span>Nunca rotacione, espelhe ou recolore ícones fora dos tokens da marca.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
