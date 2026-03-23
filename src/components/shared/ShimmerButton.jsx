// DECISÃO CRIATIVA: Shimmer como varredura diagonal de luz (105deg) que passa pelo botão a cada 3s —
// evoca metáfora de "revelação", alinhada com a proposta terapêutica. Versão secondary mantém
// border âmbar sem fundo, comunicando elegância sem agressividade de venda. O hover com -translate-y-0.5
// cria micro-feedback físico que reforça a sensação de qualidade premium.

export default function ShimmerButton({ children, onClick, href, className = '', secondary = false }) {
  const base = secondary
    ? 'relative inline-flex items-center justify-center overflow-hidden border border-primary text-primary uppercase tracking-widest text-sm font-medium px-8 py-4 rounded transition-all duration-300 hover:bg-primary/10 cursor-pointer'
    : 'relative inline-flex items-center justify-center overflow-hidden bg-primary text-dark uppercase tracking-widest text-sm font-semibold px-8 py-4 rounded transition-all duration-300 hover:shadow-primary-glow hover:-translate-y-0.5 group cursor-pointer'

  const shimmerDiv = !secondary && (
    <span
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      style={{
        background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 3s linear infinite',
      }}
    />
  )

  const inner = (
    <>
      {shimmerDiv}
      <span className="relative z-10">{children}</span>
    </>
  )

  if (href) {
    return (
      <a href={href} onClick={onClick} className={`${base} ${className}`}>
        {inner}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={`${base} ${className}`}>
      {inner}
    </button>
  )
}
