import { useEffect, useState } from 'react'

interface Props {
  /** Callback chamado quando o loader termina e pode ser desmontado */
  onComplete: () => void
  /** Duração total em ms — default 4000 */
  duration?: number
}

const PHASES: Array<{ at: number; text: string }> = [
  { at: 0, text: 'Inicializando' },
  { at: 1000, text: 'Carregando arquitetura' },
  { at: 2200, text: 'Verificando contexto' },
  { at: 3300, text: 'Pronto' },
]

const FADE_DURATION = 500 // ms

export function LoadingScreen({ onComplete, duration = 4000 }: Props) {
  const [phaseIndex, setPhaseIndex] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = []

    // Avança status de fase em fase
    PHASES.forEach((phase, idx) => {
      if (phase.at > 0) {
        timeouts.push(setTimeout(() => setPhaseIndex(idx), phase.at))
      }
    })

    // Inicia fade-out 500ms antes do fim
    timeouts.push(setTimeout(() => setExiting(true), duration - FADE_DURATION))

    // Desmonta o loader no fim
    timeouts.push(setTimeout(onComplete, duration))

    return () => timeouts.forEach(clearTimeout)
  }, [duration, onComplete])

  return (
    <div
      className={`dx-loader ${exiting ? 'is-exiting' : ''}`}
      aria-hidden={exiting}
      role="status"
      aria-live="polite"
      aria-busy={!exiting}
    >
      <div className="dx-loader-content">
        {/* Logo monumental */}
        <div className="dx-loader-logo">
          DIRETRIX<span className="dx-loader-logo-dot">.</span>
        </div>

        {/* Spinner: 2 anéis concêntricos contra-rotativos + dot pulsante */}
        <div className="dx-spinner" aria-hidden="true">
          <span className="dx-spinner-ring dx-spinner-ring--outer" />
          <span className="dx-spinner-ring dx-spinner-ring--inner" />
          <span className="dx-spinner-core" />
        </div>

        {/* Status mono caps com cursor piscante */}
        <div className="dx-loader-status">
          <span className="dx-loader-status-text">{PHASES[phaseIndex].text}</span>
          <span className="dx-loader-status-cursor" aria-hidden="true">
            _
          </span>
        </div>

        {/* Tagline assinatura — só aparece no fim da animação */}
        <div className="dx-loader-tagline">
          Não vendemos esperança.{' '}
          <span className="playfair-italic">Vendemos critério.</span>
        </div>
      </div>

      {/* Barra de progresso na base */}
      <div className="dx-loader-progress" aria-hidden="true">
        <div
          className="dx-loader-progress-fill"
          style={{ animationDuration: `${duration}ms` }}
        />
      </div>
    </div>
  )
}
