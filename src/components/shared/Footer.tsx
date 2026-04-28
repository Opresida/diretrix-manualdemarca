export function Footer() {
  return (
    <footer className="diretrix-footer">
      <div className="nav-logo" style={{ fontSize: 32, marginBottom: 20 }}>
        DIRETRIX<span>.</span>
      </div>
      <p
        style={{
          color: 'var(--texto)',
          fontSize: 15,
          letterSpacing: 4,
          textTransform: 'uppercase',
          fontWeight: 300,
        }}
      >
        Defining Future Standards
      </p>

      <div
        style={{
          marginTop: 60,
          paddingTop: 50,
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <p
          style={{
            fontSize: 11,
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: 2,
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          © 2026 DIRETRIX • Consultoria em Tecnologia da Informação • Todos os direitos
          reservados
        </p>
      </div>
    </footer>
  )
}
