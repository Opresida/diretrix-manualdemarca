import { Link } from 'wouter'
import { InstitutionalNav } from '@/components/institutional/InstitutionalNav'
import { Footer } from '@/components/shared/Footer'
import { useReveal } from '@/hooks/useReveal'

interface Formador {
  num: string
  nome: string
  titulacao: string
  cargo: string
  filosofia: string
  curriculo: string[]
  citacao: string
  fonteCitacao: string
}

const FORMADORES: Formador[] = [
  {
    num: 'I',
    nome: 'Carlos Veridiano',
    titulacao: 'M.Sc. · MBA em Gestão Estratégica',
    cargo: 'Curador de Liderança Executiva',
    filosofia:
      'Liderar é decidir com método quando a informação é insuficiente. Treino executivos a separarem ruído de sinal — e a comunicarem decisões sem pedir desculpas pela autoridade.',
    curriculo: [
      'C-Level em 3 indústrias (logística, finanças, manufatura)',
      'Conselheiro independente · 12 anos · 8 boards',
      'Pesquisador associado · INSEAD Executive Education',
      'Especialização em Liderança · Wharton School',
    ],
    citacao:
      'O líder amador busca ser amado. O líder profissional busca ser claro.',
    fonteCitacao: 'Aula inaugural · Programa Liderança Diretrix · 2024',
  },
  {
    num: 'II',
    nome: 'Renata Bezerra',
    titulacao: 'D.Sc. · Doutora em Comportamento Organizacional',
    cargo: 'Curadora de Comunicação sob Pressão',
    filosofia:
      'Comunicação corporativa é arquitetura, não improviso. Ensino executivos a desenharem mensagem antes de falar — e a sustentarem posição quando a sala vira contra.',
    curriculo: [
      'Doutora em Comportamento Organizacional · USP',
      'Visiting Scholar · Stanford GSB',
      'Coautora · "Decisão sob Estresse" (Atlas, 2022)',
      '15 anos formando lideranças do PIM',
    ],
    citacao:
      'Não treinamos pessoas a falar bonito. Treinamos a serem entendidas quando importa.',
    fonteCitacao: 'Programa Comunicação Executiva · Diretrix · 2025',
  },
  {
    num: 'III',
    nome: 'Eduardo Tassio',
    titulacao: 'M.Sc. · Especialização em Transformação Cultural',
    cargo: 'Curador de Construção de Times',
    filosofia:
      'Times de alta performance não nascem de offsite motivacional. Nascem de pactos operacionais explícitos. Trabalho com lideranças para escrever — literalmente — os contratos invisíveis que sustentam execução.',
    curriculo: [
      'Diretor de Pessoas · 4 grupos industriais',
      'Pesquisador · Comportamento e Cultura Corporativa',
      'Coach certificado · Programa ICF',
      'Mentor · Endeavor · 60+ scale-ups',
    ],
    citacao:
      'Cultura é o que a equipe faz quando a liderança não está olhando. Tudo o resto é teatro.',
    fonteCitacao: 'Workshop Cultura & Pacto Operacional · Diretrix · 2025',
  },
]

export default function TreinamentosProfissionais() {
  useReveal()

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
              <span className="inst-section-label">02 · Desenvolvimento Profissional & Gerencial</span>
              <h1 className="page-head-titulo">
                Liderança não se aprende
                <br />
                <span className="playfair-italic">no LinkedIn.</span>
              </h1>
              <p className="page-head-lede">
                Formamos gestores que decidem com método, comunicam sob pressão e
                constroem times que executam — sem o teatro motivacional de prateleira.
              </p>
            </div>
          </div>
        </section>

        {/* Manifesto curto da página */}
        <section className="prof-manifesto">
          <div className="prof-manifesto-inner">
            <p className="prof-manifesto-pull">
              "A maior parte dos treinamentos corporativos vende{' '}
              <em>energia</em>. Nós vendemos{' '}
              <span className="playfair-italic">disciplina</span>."
            </p>
            <p className="prof-manifesto-credito">
              — Princípio fundador · Programa Diretrix Executivo
            </p>
          </div>
        </section>

        {/* MÓVEL PESADO — Dossiê editorial dos formadores */}
        <section className="dossie">
          <header className="dossie-head">
            <div className="inst-section-label">Dossiê dos Formadores · Quem ensina</div>
            <h2 className="dossie-titulo">
              Quem está
              <br />
              <span className="playfair-italic">na frente da sala.</span>
            </h2>
            <p className="dossie-lede">
              Treinamento gerencial vende quem ensina. Aqui, cada formador é apresentado
              como um especialista titular — não como instrutor genérico de plataforma.
            </p>
          </header>

          <div className="dossie-fichas">
            {FORMADORES.map((f, idx) => (
              <article key={f.num} className="dossie-ficha reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
                {/* Numeração editorial à esquerda */}
                <aside className="dossie-ficha-aside">
                  <span className="dossie-ficha-roman">{f.num}</span>
                  <span className="dossie-ficha-divisor" aria-hidden="true" />
                  <span className="dossie-ficha-tag">Curador</span>
                </aside>

                <div className="dossie-ficha-body">
                  {/* Cabeçalho da ficha */}
                  <header className="dossie-ficha-head">
                    <h3 className="dossie-ficha-nome">{f.nome}</h3>
                    <span className="dossie-ficha-titulacao">{f.titulacao}</span>
                    <span className="dossie-ficha-cargo">{f.cargo}</span>
                  </header>

                  {/* Filosofia */}
                  <p className="dossie-ficha-filosofia">{f.filosofia}</p>

                  {/* Currículo em small caps */}
                  <div className="dossie-ficha-curriculo">
                    <span className="dossie-ficha-curriculo-label">Trajetória</span>
                    <ul>
                      {f.curriculo.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Citação destacada */}
                  <blockquote className="dossie-ficha-citacao">
                    <p>{f.citacao}</p>
                    <cite>{f.fonteCitacao}</cite>
                  </blockquote>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Programas */}
        <section className="programas">
          <header className="programas-head">
            <div className="inst-section-label">Programas · Currículo Diretrix</div>
            <h2 className="programas-titulo">
              Quatro programas.<br />
              <span className="playfair-italic">Cada um, um músculo.</span>
            </h2>
          </header>

          <div className="programas-tabela">
            <div className="programas-row">
              <div className="programas-row-num">P1</div>
              <div>
                <h4>Decisão Executiva sob Incerteza</h4>
                <p>
                  16 horas distribuídas em 4 sessões. Frameworks de decisão
                  multicritério, vieses cognitivos, exercícios de pré-mortem em casos
                  reais da empresa contratante.
                </p>
                <span className="programas-row-meta">
                  4 sessões · turma fechada · 12-20 executivos
                </span>
              </div>
            </div>

            <div className="programas-row">
              <div className="programas-row-num">P2</div>
              <div>
                <h4>Comunicação Executiva sob Pressão</h4>
                <p>
                  Como sustentar posição em board, falar com investidor sem floreio,
                  comunicar mudança difícil para equipe. Treino com câmera + crítica
                  estruturada.
                </p>
                <span className="programas-row-meta">
                  3 sessões · in company · 8-15 lideranças
                </span>
              </div>
            </div>

            <div className="programas-row">
              <div className="programas-row-num">P3</div>
              <div>
                <h4>Construção de Times de Alta Confiança</h4>
                <p>
                  Pacto operacional, governança de feedback, ritual de execução.
                  Sai com documento escrito que sustenta o time depois do programa.
                </p>
                <span className="programas-row-meta">
                  6 sessões · diretoria + lideranças intermediárias
                </span>
              </div>
            </div>

            <div className="programas-row">
              <div className="programas-row-num">P4</div>
              <div>
                <h4>Programa Trilha Executiva</h4>
                <p>
                  Combinação dos 3 anteriores + mentoria mensal por 6 meses.
                  Para C-Level e diretoria que quer formação contínua, não pontual.
                </p>
                <span className="programas-row-meta">
                  6 meses · acompanhamento mensal · NDA
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-cta">
          <h2 className="page-cta-titulo">
            Sua liderança merece
            <br />
            <span className="playfair-italic">mais que palestra.</span>
          </h2>
          <p className="page-cta-lede">
            Conversamos 30 minutos para entender o estágio atual da sua diretoria
            e desenhar um programa sob medida.
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
