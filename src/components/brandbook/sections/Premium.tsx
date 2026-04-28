const TOUCHPOINTS = [
  {
    icon: '✒️',
    title: 'Caneta Personalizada',
    desc: 'Estilo Montblanc preta com detalhes e gravação a laser. Entregue em caixa rígida com aba magnética.',
  },
  {
    icon: '🏷️',
    title: 'Etiquetas / Labels',
    desc: 'Adesivos em vinil translúcido e papel texturizado para lacres, envios e fechamento de presentes corporativos.',
  },
  {
    icon: '📮',
    title: 'Caixa de Envio Premium',
    desc: 'Caixa kraft escura com fechamento em fita de linho, berço de papel de seda verde e lacre personalizado.',
  },
  {
    icon: '💼',
    title: 'Pochete / Bolsa VIP',
    desc: 'Material em couro vegano escuro com zíper metálico verde e logo discretamente gravado em baixo relevo.',
  },
  {
    icon: '🔖',
    title: 'Certificado de Autenticidade',
    desc: "Impresso em papel moeda com gradiente verde sutil, marca d'água de segurança e selo dourado.",
  },
  {
    icon: '💻',
    title: 'Video Background',
    desc: 'Design digital ultra HD para Zoom/Teams com degradê institucional escuro e logo estrategicamente posicionado.',
  },
]

export function Premium() {
  return (
    <section className="section" id="premium">
      <div className="reveal">
        <div className="section-label">Diferenciação / Luxury</div>
        <h2 className="section-title">Premium Touchpoints</h2>
        <p className="section-desc">
          Itens desenvolvidos para criar uma experiência de marca memorável, unboxing
          premium e diferenciação absoluta em eventos e reuniões de alto escalão.
        </p>
      </div>

      <div className="grid-3">
        {TOUCHPOINTS.map((t, i) => (
          <div
            key={t.title}
            className="card reveal"
            style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
          >
            <div className="luxury-icon">{t.icon}</div>
            <h3 className="luxury-title">{t.title}</h3>
            <p className="luxury-desc">{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
