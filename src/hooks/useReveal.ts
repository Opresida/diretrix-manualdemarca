import { useEffect } from 'react'

/**
 * Replica o IntersectionObserver original do index.html:
 * todos os elementos com .reveal recebem .visible quando entram
 * no viewport (threshold 0.12, rootMargin -50px no fundo).
 *
 * Aplicado uma vez no mount do Home — observa todos os .reveal renderizados.
 */
export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' },
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
