import { useState, useEffect } from 'react'
import { Link } from 'wouter'

const NAV_LINKS: Array<{ label: string; href: string }> = [
  { label: 'DNA', href: '#dna' },
  { label: 'Cromia', href: '#cromia' },
  { label: 'Tipo', href: '#tipo' },
  { label: 'Ícones', href: '#iconografia' },
  { label: 'UI', href: '#componentes' },
  { label: 'Físico', href: '#fisico' },
  { label: 'Cartão', href: '#cartao' },
  { label: 'Digital', href: '#digital' },
  { label: 'Proposta', href: '#proposta' },
  { label: 'Premium', href: '#premium' },
  { label: 'Estratégia', href: '#roadmap' },
]

export function BrandbookNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav className="diretrix-nav">
        <div className="nav-logo">
          DIRETRIX<span>.</span>
        </div>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a href="#roadmap" className="nav-cta">
          Solicitar Guide
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="diretrix-nav-burger"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`brandbook-mobile-menu ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="brandbook-mobile-menu-head">
          <div className="nav-logo">
            DIRETRIX<span>.</span>
          </div>
          <button
            type="button"
            onClick={close}
            className="brandbook-mobile-menu-close"
            aria-label="Fechar menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 4L16 16M4 16L16 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="brandbook-mobile-menu-content">
          <div className="brandbook-mobile-menu-group">
            <span className="brandbook-mobile-menu-label">Sessões do Brandbook</span>
            <ul className="brandbook-mobile-menu-list">
              {NAV_LINKS.map((link, idx) => (
                <li key={link.href}>
                  <a href={link.href} onClick={close}>
                    <span className="brandbook-mobile-menu-num">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    {link.label}
                    <span aria-hidden="true">↘</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="brandbook-mobile-menu-group">
            <span className="brandbook-mobile-menu-label">Voltar para o site</span>
            <ul className="brandbook-mobile-menu-list">
              <li>
                <Link href="/">
                  <a onClick={close}>
                    Home Institucional
                    <span aria-hidden="true">→</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="brandbook-mobile-menu-foot">
          <a href="#roadmap" onClick={close} className="brandbook-mobile-menu-cta">
            Solicitar Guide Completo
          </a>
        </div>
      </div>
    </>
  )
}
