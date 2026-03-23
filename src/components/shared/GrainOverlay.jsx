// DECISÃO CRIATIVA: Grain SVG inline via data URI — zero requests de rede, zero dependências externas.
// Textura de ruído fractal com baseFrequency 0.65 cria granulação sutil que evoca papel editorial/impresso,
// adicionando materialidade tátil ao design digital sem pesar a performance.

const GrainOverlay = ({ opacity = 0.04 }) => (
  <div
    className="pointer-events-none absolute inset-0 z-10"
    aria-hidden="true"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='${opacity}'/%3E%3C/svg%3E")`,
    }}
  />
)

export default GrainOverlay
