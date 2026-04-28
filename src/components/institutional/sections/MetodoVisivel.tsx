interface Frame {
  num: string
  fase: string
  titulo: string
  descricao: string
  outputLabel: string
  outputValor: string
}

const FRAMES: Frame[] = [
  {
    num: '01',
    fase: 'Assessment',
    titulo: 'Onde a operação realmente está.',
    descricao:
      'Mergulho técnico de 2 semanas. Entrevistas com sponsors, leitura de stack, mapa de processos críticos, identificação de pontos de fricção.',
    outputLabel: 'Output',
    outputValor: 'Diagnóstico Operacional · 40 páginas',
  },
  {
    num: '02',
    fase: 'Architecture',
    titulo: 'Onde precisa estar em 12 meses.',
    descricao:
      'Desenho do estado-alvo defendível. Stack proposto, governança, métricas de sucesso, riscos mapeados, custo total de mudança quantificado.',
    outputLabel: 'Output',
    outputValor: 'Blueprint Estratégico · com aceite formal',
  },
  {
    num: '03',
    fase: 'Capacity',
    titulo: 'Quem precisa estar pronto.',
    descricao:
      'Trilhas de capacitação dimensionadas para a transformação. Liderança, técnico, processos. Medimos pré e pós para provar o resultado.',
    outputLabel: 'Output',
    outputValor: 'Plano de Capacidade · KPIs binários',
  },
  {
    num: '04',
    fase: 'Optimization',
    titulo: 'Onde está hoje, agora.',
    descricao:
      'Operação em produção com observabilidade. Iterações trimestrais baseadas em dado real. Continuamos até a vantagem estar consolidada — ou saímos limpo.',
    outputLabel: 'Output',
    outputValor: 'Relatório de Vantagem · trimestral',
  },
]

export function MetodoVisivel() {
  return (
    <section id="metodo" className="inst-metodo">
      <header className="inst-metodo-head">
        <div className="inst-section-label">Método · Não cases</div>
        <h2 className="inst-metodo-title">
          Como pensamos um problema
          <br />
          <span className="playfair-italic">antes de tocá-lo.</span>
        </h2>
        <p className="inst-metodo-lede">
          Quatro estágios. Cada um com entregável defensável. Sem teatro de slides,
          sem promessa retórica — apenas o trabalho que separa a operação do
          improviso.
        </p>
      </header>

      <div className="inst-metodo-frames">
        {FRAMES.map((f, idx) => (
          <article
            key={f.num}
            className="inst-metodo-frame reveal"
            style={{ transitionDelay: `${idx * 0.08}s` }}
          >
            <div className="inst-metodo-frame-meta">
              <span className="inst-metodo-frame-num">{f.num}</span>
              <span className="inst-metodo-frame-fase">{f.fase}</span>
            </div>

            <div className="inst-metodo-frame-body">
              <h3 className="inst-metodo-frame-titulo">{f.titulo}</h3>
              <p className="inst-metodo-frame-descricao">{f.descricao}</p>
            </div>

            <div className="inst-metodo-frame-output">
              <span className="inst-metodo-frame-output-label">{f.outputLabel}</span>
              <span className="inst-metodo-frame-output-valor">{f.outputValor}</span>
            </div>
          </article>
        ))}
      </div>

      <footer className="inst-metodo-foot">
        <span className="inst-metodo-foot-text">
          Cada estágio dura entre 2 e 6 semanas. Aceite formal entre eles.
          Você assina antes do próximo começar.
        </span>
      </footer>
    </section>
  )
}
