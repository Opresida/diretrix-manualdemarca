import { Link } from 'wouter'

const PRIMARY_LINKS: Array<{ label: string; href: string }> = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Pilares', href: '#pilares' },
  { label: 'Método', href: '#metodo' },
  { label: 'Liderança', href: '#lideranca' },
]

const SERVICE_LINKS: Array<{ label: string; href: string }> = [
  { label: 'Consultoria', href: '/consultoria-ti' },
  { label: 'Profissional', href: '/treinamentos-profissionais' },
  { label: 'Informática', href: '/treinamentos-informatica' },
]

export function InstitutionalNav() {
  return (
    <nav className="inst-nav">
      <Link href="/">
        <a className="inst-nav-logo">
          DIRETRIX<span>.</span>
        </a>
      </Link>

      <ul className="inst-nav-links">
        {PRIMARY_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
        <li className="inst-nav-divider" aria-hidden="true">·</li>
        {SERVICE_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <a className="inst-nav-service">{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>

      <a href="#diagnostico" className="inst-nav-cta">
        Agendar Diagnóstico
      </a>
    </nav>
  )
}
