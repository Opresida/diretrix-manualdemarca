import { useState } from 'react'

interface Pergunta {
  numero: string // numeração editorial em romanos
  pergunta: string
  resposta: string | string[]
}

const PERGUNTAS: Pergunta[] = [
  {
    numero: 'I',
    pergunta: 'Quanto custa um diagnóstico operacional?',
    resposta: [
      'O diagnóstico inicial de 30 minutos é gratuito. Você descreve o cenário, mapeamos junto e saímos com hipótese de causa-raiz e próximo passo claro — com ou sem nós depois.',
      'Quando há contratação, a fase de Assessment formal varia entre 2 a 4 semanas e o investimento depende do porte da operação a ser mapeada. O orçamento é fechado após a primeira conversa, com escopo defensável.',
    ],
  },
  {
    numero: 'II',
    pergunta: 'Em quanto tempo vejo resultado mensurável?',
    resposta: [
      'O Diagnóstico entrega leitura defensável em 2-4 semanas. O Blueprint Estratégico, em mais 1-2 semanas. Resultado operacional aparece a partir do terceiro mês, quando a fase de Capacidade começa a sustentar.',
      'Trabalhamos com KPIs binários acordados antes do início. Se a métrica não move, refazemos a fase — sem custo adicional.',
    ],
  },
  {
    numero: 'III',
    pergunta: 'Vocês atendem só presencial em Manaus?',
    resposta: [
      'Atendemos Brasil + LatAm em modelo híbrido. Workshops e diagnósticos críticos são presenciais; sprints de execução acontecem remoto com sync semanal.',
      'Para clientes fora de Manaus, deslocamentos são quantificados em proposta. A operação remota usa o mesmo padrão de governança que aplicamos localmente.',
    ],
  },
  {
    numero: 'IV',
    pergunta: 'Como funciona o sigilo dos dados que compartilho?',
    resposta:
      'NDA mútuo é cláusula, não promessa — disponível desde o primeiro contato, antes de qualquer informação sensível ser compartilhada. Acessos a sistemas e dados seguem princípio de menor privilégio. No fim do engagement, todos os artefatos voltam ao cliente e nossos backups são apagados em 30 dias com atestado.',
  },
  {
    numero: 'V',
    pergunta: 'Posso contratar só uma fase ou preciso fechar tudo?',
    resposta: [
      'Cada fase é contratável independentemente. Muitos clientes começam só com Assessment para validar a tese — e seguem com a Diretrix se o documento for defensável o suficiente.',
      'Não há cláusula de exclusividade. Se você preferir contratar a fase seguinte com outro time, transferimos o blueprint sem fricção.',
    ],
  },
  {
    numero: 'VI',
    pergunta: 'Como é a continuidade depois que vocês saem?',
    resposta: [
      'Hand-off limpo é prerrequisito do nosso método. A fase de Capacidade existe justamente para que sua equipe interna sustente a operação sem depender da gente.',
      'Após o go-live, oferecemos 30 dias de hypercare sem custo adicional. Se preferir continuidade contratual, temos modelo de mentoria mensal — sem lock-in.',
    ],
  },
  {
    numero: 'VII',
    pergunta: 'Qual o porte mínimo de empresa que vocês atendem?',
    resposta:
      'Trabalhamos com empresas a partir de R$ 10 milhões de faturamento anual ou 50 colaboradores em operação técnica/gerencial. Abaixo desse porte, recomendamos consultorias generalistas — nosso método é desenhado para complexidade institucional, e em operações pequenas o custo seria desproporcional ao retorno.',
  },
  {
    numero: 'VIII',
    pergunta: 'Vocês entregam software ou só metodologia?',
    resposta: [
      'Diretrix é consultoria estratégica + formação. Não somos fábrica de software. Entregamos arquitetura, governança, blueprint e capacitação — você executa com seu time interno ou com fornecedores que indicamos.',
      'Para projetos que exigem desenvolvimento, conduzimos a especificação e a fiscalização técnica do entregável, mas a codificação fica com fornecedores especializados.',
    ],
  },
]

export function FAQ() {
  const [ativa, setAtiva] = useState<string>(PERGUNTAS[0].numero)

  const perguntaAtiva = PERGUNTAS.find((p) => p.numero === ativa) ?? PERGUNTAS[0]

  return (
    <section id="faq" className="faq">
      <header className="faq-head">
        <div className="inst-section-label">FAQ · Antes do contrato</div>
        <h2 className="faq-titulo">
          Perguntas que executivos
          <br />
          <span className="playfair-italic">fazem antes de fechar.</span>
        </h2>
        <p className="faq-lede">
          As 8 dúvidas mais frequentes em conversas iniciais com a Diretrix. Se sua
          pergunta não estiver aqui, é porque o briefing dela já justifica o
          diagnóstico de 30 minutos.
        </p>
      </header>

      {/* Layout 2 colunas (desktop) */}
      <div className="faq-grid">
        {/* Lista de perguntas */}
        <nav className="faq-lista" aria-label="Lista de perguntas">
          {PERGUNTAS.map((p) => {
            const isActive = p.numero === ativa
            return (
              <button
                key={p.numero}
                type="button"
                onClick={() => setAtiva(p.numero)}
                className={`faq-item ${isActive ? 'is-active' : ''}`}
                aria-expanded={isActive}
              >
                <span className="faq-item-num">{p.numero}</span>
                <span className="faq-item-pergunta">{p.pergunta}</span>
                <span className="faq-item-marker" aria-hidden="true">
                  {isActive ? '−' : '+'}
                </span>
              </button>
            )
          })}
        </nav>

        {/* Resposta da pergunta ativa (desktop) */}
        <article className="faq-resposta">
          <div className="faq-resposta-card">
            <header className="faq-resposta-head">
              <span className="faq-resposta-num">{perguntaAtiva.numero}</span>
              <h3 className="faq-resposta-pergunta">{perguntaAtiva.pergunta}</h3>
            </header>

            <div className="faq-resposta-corpo">
              {Array.isArray(perguntaAtiva.resposta) ? (
                perguntaAtiva.resposta.map((p, i) => <p key={i}>{p}</p>)
              ) : (
                <p>{perguntaAtiva.resposta}</p>
              )}
            </div>

            <footer className="faq-resposta-foot">
              <span className="faq-resposta-foot-text">
                ↳ Outras dúvidas?
              </span>
              <a
                href="mailto:corporativo@diretrix.com.br?subject=Pergunta%20institucional"
                className="faq-resposta-foot-link"
              >
                corporativo@diretrix.com.br
              </a>
            </footer>
          </div>
        </article>

        {/* Mobile accordion (visível só em mobile via CSS) */}
        <div className="faq-accordion-mobile">
          {PERGUNTAS.map((p) => {
            const isActive = p.numero === ativa
            return (
              <details
                key={`m-${p.numero}`}
                className="faq-accordion-item"
                open={isActive}
                onToggle={(e) => {
                  if ((e.target as HTMLDetailsElement).open) {
                    setAtiva(p.numero)
                  }
                }}
              >
                <summary className="faq-accordion-summary">
                  <span className="faq-accordion-num">{p.numero}</span>
                  <span className="faq-accordion-pergunta">{p.pergunta}</span>
                  <span className="faq-accordion-marker" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="faq-accordion-corpo">
                  {Array.isArray(p.resposta) ? (
                    p.resposta.map((par, i) => <p key={i}>{par}</p>)
                  ) : (
                    <p>{p.resposta}</p>
                  )}
                </div>
              </details>
            )
          })}
        </div>
      </div>
    </section>
  )
}
