export function LiderancaVisivel() {
  return (
    <section id="lideranca" className="inst-lideranca">
      <div className="inst-lideranca-grid">
        <div className="inst-lideranca-portrait">
          <div className="inst-lideranca-avatar">
            <div className="inst-lideranca-avatar-frame">
              <img
                src="https://i.imgur.com/ULB5d7Z.jpeg"
                alt="Andressa Silva de Lima, Diretora Executiva da Diretrix Soluções Corporativas"
                loading="lazy"
                className="inst-lideranca-avatar-photo"
              />
            </div>
            <div className="inst-lideranca-avatar-stamp" aria-hidden="true">
              <span>Pela Diretora</span>
              <span className="inst-lideranca-avatar-stamp-line" />
              <span>Manaus · 2026</span>
            </div>
          </div>

          <div className="inst-lideranca-credenciais">
            <div className="inst-lideranca-credencial-row">
              <span className="inst-lideranca-credencial-key">Diretora Executiva</span>
              <span className="inst-lideranca-credencial-val">Andressa Silva de Lima</span>
            </div>
            <div className="inst-lideranca-credencial-row">
              <span className="inst-lideranca-credencial-key">Empresa</span>
              <span className="inst-lideranca-credencial-val">
                Diretrix Soluções Corporativas Ltda
              </span>
            </div>
            <div className="inst-lideranca-credencial-row">
              <span className="inst-lideranca-credencial-key">CNPJ</span>
              <span className="inst-lideranca-credencial-val">45.529.299/0001-04</span>
            </div>
          </div>
        </div>

        <article className="inst-lideranca-carta reveal">
          <div className="inst-section-label">Carta da Diretora · Liderança Visível</div>

          <h2 className="inst-lideranca-titulo">
            Por que escolhi
            <br />
            <span className="playfair-italic">construir aqui.</span>
          </h2>

          <div className="inst-lideranca-corpo">
            <p>
              <em>Manaus me ensinou cedo</em> que tecnologia institucional não é privilégio
              de capital de eixo. As empresas do nosso polo movem cifras bilionárias
              diariamente — e merecem ser atendidas por consultoria que entende a
              regulação local, a logística amazônica e o tempo real do negócio.
            </p>

            <p>
              Quando fundei a Diretrix, recusei dois caminhos fáceis: virar revendedora
              de software estrangeiro e prometer transformação digital com PowerPoint.
              Escolhi o caminho difícil — formar uma equipe que pensa antes de
              prescrever, escreve documentos defensáveis e executa até o resultado se
              consolidar.
            </p>

            <p>
              Quem nos contrata leva mais que entrega. Leva critério. Leva o método
              de pensar antes de tocar. Leva pessoas treinadas para sustentar a operação
              quando saímos.
            </p>

            <div className="inst-lideranca-assinatura">
              <span className="inst-lideranca-assinatura-trace">
                Andressa Silva de Lima
              </span>
              <span className="inst-lideranca-assinatura-cargo">
                Diretora Executiva · Diretrix
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
