// DECISÃO CRIATIVA: Gradiente com 4 stops (âmbar escuro → claro → dourado → âmbar escuro) em loop
// de 4s cria efeito de luz líquida que percorre o texto — elevando os eyebrow labels de meros
// indicadores tipográficos a elementos vivos. backgroundSize: '300% 100%' garante que a transição
// seja suave e o ciclo não tenha salto brusco no restart.

export default function AnimatedGradientText({ children, className = '' }) {
  return (
    <span
      className={`font-body text-xs font-medium uppercase tracking-widest ${className}`}
      style={{
        background: 'linear-gradient(90deg, #C9952A, #E0A830, #F0C060, #C9952A)',
        backgroundSize: '300% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: 'shimmer 4s linear infinite',
      }}
    >
      {children}
    </span>
  )
}
