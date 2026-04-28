const NAV_LINKS: Array<{ label: string; href: string }> = [
  { label: 'DNA', href: '#dna' },
  { label: 'Cromia', href: '#cromia' },
  { label: 'Tipo', href: '#tipo' },
  { label: 'Físico', href: '#fisico' },
  { label: 'Premium', href: '#premium' },
  { label: 'Estratégia', href: '#roadmap' },
]

export function Nav() {
  return (
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
    </nav>
  )
}
