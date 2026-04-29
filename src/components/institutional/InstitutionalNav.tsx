import { useState, useEffect } from 'react'
import { Link } from 'wouter'

const PRIMARY_LINKS: Array<{ label: string; href: string }> = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Pilares', href: '#pilares' },
  { label: 'Método', href: '#metodo' },
  { label: 'Liderança', href: '#lideranca' },
]

const SERVICE_LINKS: Array<{ label: string; href: string }> = [
  { label: 'Consultoria em TI', href: '/consultoria-ti' },
  { label: 'Desenvolvimento Profissional', href: '/treinamentos-profissionais' },
  { label: 'Treinamento em Informática', href: '/treinamentos-informatica' },
]

export function InstitutionalNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Lock body scroll quando menu aberto
  useEffect(() => {
    if (menuOpen) {
      const prevOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prevOverflow
      }
    }
  }, [menuOpen])

  // Fecha com Escape
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className="inst-nav">
        <Link href="/">
          <a className="inst-nav-logo" onClick={closeMenu}>
            DIRETRIX<span>.</span>
          </a>
        </Link>

        {/* Desktop links */}
        <ul className="inst-nav-links">
          {PRIMARY_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li className="inst-nav-divider" aria-hidden="true">
            ·
          </li>
          {SERVICE_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <a className="inst-nav-service">{link.label.split(' ')[0]}</a>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="#diagnostico" className="inst-nav-cta">
          Agendar Diagnóstico
        </a>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="inst-nav-burger"
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
        className={`inst-mobile-menu ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="inst-mobile-menu-head">
          <Link href="/">
            <a className="inst-nav-logo" onClick={closeMenu}>
              DIRETRIX<span>.</span>
            </a>
          </Link>
          <button
            type="button"
            onClick={closeMenu}
            className="inst-mobile-menu-close"
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

        <div className="inst-mobile-menu-content">
          {/* Seções da home */}
          <div className="inst-mobile-menu-group">
            <span className="inst-mobile-menu-label">Sessões</span>
            <ul className="inst-mobile-menu-list">
              {PRIMARY_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={closeMenu}>
                    {link.label}
                    <span aria-hidden="true">↘</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Páginas dedicadas */}
          <div className="inst-mobile-menu-group">
            <span className="inst-mobile-menu-label">Serviços</span>
            <ul className="inst-mobile-menu-list">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a onClick={closeMenu}>
                      {link.label}
                      <span aria-hidden="true">→</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brandbook (link extra) */}
          <div className="inst-mobile-menu-group">
            <span className="inst-mobile-menu-label">Marca</span>
            <ul className="inst-mobile-menu-list">
              <li>
                <Link href="/brandbook">
                  <a onClick={closeMenu}>
                    Manual de Marca
                    <span aria-hidden="true">→</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA fixo na base do menu */}
        <div className="inst-mobile-menu-foot">
          <a
            href="#diagnostico"
            onClick={closeMenu}
            className="inst-mobile-menu-cta"
          >
            Agendar Diagnóstico
          </a>
        </div>
      </div>
    </>
  )
}
