export function Manifesto() {
  return (
    <section id="manifesto" className="inst-manifesto">
      <div className="inst-manifesto-aside">
        <div className="inst-section-label">Manifesto · Tese de Mercado</div>
        <h2 className="inst-manifesto-aside-title">
          Por que a<br />
          <span className="playfair-italic">DIRETRIX existe.</span>
        </h2>
        <div className="inst-manifesto-meta">
          <div className="inst-manifesto-meta-row">
            <span className="inst-manifesto-meta-key">Posição</span>
            <span className="inst-manifesto-meta-val">
              Estratégica · Pré-execução
            </span>
          </div>
          <div className="inst-manifesto-meta-row">
            <span className="inst-manifesto-meta-key">Praça</span>
            <span className="inst-manifesto-meta-val">Manaus / Amazonas</span>
          </div>
          <div className="inst-manifesto-meta-row">
            <span className="inst-manifesto-meta-key">Cliente</span>
            <span className="inst-manifesto-meta-val">B2B · Médio e Grande Porte</span>
          </div>
        </div>
      </div>

      <article className="inst-manifesto-body reveal">
        <p>
          O mercado de tecnologia opera sob uma premissa esquisita: que a próxima
          ferramenta resolverá o que a anterior não resolveu. Compram-se plataformas
          como se compram remédios — pelo prestígio do rótulo, não pelo diagnóstico
          que justifica a prescrição.
        </p>

        <p>
          Empresas erguem stacks elegantes sobre fundações frágeis. Treinam equipes
          com cursos que não tocam o problema. Contratam consultoria por entrega de
          slides, não por mudança operacional. O resultado é dívida técnica, dívida
          cognitiva, dívida cultural — todas pagando juros compostos.
        </p>

        <p>
          A DIRETRIX nasceu para uma proposição simples:{' '}
          <em>nenhuma tecnologia se justifica sem clareza prévia, e nenhuma equipe
          se transforma sem deliberação prévia</em>. Operamos no estágio anterior à
          execução — onde o pensamento ainda decide o resultado.
        </p>

        <blockquote className="inst-manifesto-pull">
          Não vendemos esperança.
          <br />
          <span className="inst-manifesto-pull-accent">Vendemos critério.</span>
        </blockquote>
      </article>
    </section>
  )
}
