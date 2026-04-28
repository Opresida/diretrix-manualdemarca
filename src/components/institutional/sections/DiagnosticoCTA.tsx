export function DiagnosticoCTA() {
  return (
    <section id="diagnostico" className="inst-diagnostico">
      {/* Glow ambient atrás */}
      <div className="inst-diagnostico-glow" aria-hidden="true" />

      <div className="inst-diagnostico-content">
        <div className="inst-section-label inst-diagnostico-label">
          Próximo Passo · Sem Custo
        </div>

        <h2 className="inst-diagnostico-titulo">
          30 minutos com a equipe técnica.
          <br />
          <span className="playfair-italic">
            O suficiente para mapear sua próxima decisão.
          </span>
        </h2>

        <p className="inst-diagnostico-lede">
          Não é apresentação comercial. É um exercício de diagnóstico real:
          você descreve o cenário, a equipe sênior identifica onde está a fricção,
          e você sai com uma leitura defensável — independente de contratar ou
          não a Diretrix depois.
        </p>

        {/* Lista de o que está incluído */}
        <ul className="inst-diagnostico-include">
          <li>
            <span className="inst-diagnostico-include-check" aria-hidden="true">
              ✓
            </span>
            <span>
              <strong>Mapa da fricção atual</strong> — pontos onde a operação
              hoje pesa mais do que deveria.
            </span>
          </li>
          <li>
            <span className="inst-diagnostico-include-check" aria-hidden="true">
              ✓
            </span>
            <span>
              <strong>Hipótese de causa-raiz</strong> — não sintoma, não
              ferramenta. A origem do problema.
            </span>
          </li>
          <li>
            <span className="inst-diagnostico-include-check" aria-hidden="true">
              ✓
            </span>
            <span>
              <strong>Próximo passo claro</strong> — o que fazer na semana
              seguinte, com ou sem nós.
            </span>
          </li>
          <li>
            <span className="inst-diagnostico-include-check" aria-hidden="true">
              ✓
            </span>
            <span>
              <strong>NDA disponível</strong> — sigilo do que for compartilhado
              é cláusula, não promessa.
            </span>
          </li>
        </ul>

        <div className="inst-diagnostico-actions">
          <a
            href="mailto:corporativo@diretrix.com.br?subject=Agendamento%20de%20Diagnóstico%20Diretrix"
            className="inst-btn inst-btn-primary inst-diagnostico-btn"
          >
            Agendar Diagnóstico
            <span className="inst-btn-arrow" aria-hidden="true">
              →
            </span>
          </a>
          <a
            href="https://wa.me/5592999999999?text=Olá,%20gostaria%20de%20agendar%20um%20diagnóstico%20com%20a%20Diretrix."
            target="_blank"
            rel="noopener noreferrer"
            className="inst-btn inst-btn-ghost"
          >
            Falar pelo WhatsApp
          </a>
        </div>

        <p className="inst-diagnostico-meta">
          Resposta em até 1 dia útil · Equipe sênior · Sigilo absoluto
        </p>
      </div>
    </section>
  )
}
