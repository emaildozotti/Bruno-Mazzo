// DECISÃO CRIATIVA: Aurora composta por 3 blobs radiais com animações defasadas (10s / 13s / 16s)
// em alternate e alternate-reverse — cria movimento orgânico não-repetitivo que simula profundidade
// atmosférica sem ser distrativo. Opacidades muito baixas (0.06–0.12) mantêm a gravidade
// intelectual da identidade visual, evitando o aspecto "tech-colorido" de outras marcas.
// O GrainOverlay no topo adiciona textura que ancora os gradientes digitais ao mundo físico.

import GrainOverlay from './GrainOverlay'

export default function AuroraBackground({ children, className = '', style = {} }) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {/* Camada de aurora — gradientes animados */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* Blob 1 — âmbar primário, canto superior direito */}
        <div
          className="absolute rounded-full"
          style={{
            width: '70%',
            height: '70%',
            top: '-20%',
            right: '-15%',
            background: 'radial-gradient(ellipse at center, #C9952A 0%, transparent 70%)',
            filter: 'blur(80px)',
            opacity: 0.12,
            animation: 'aurora 10s ease-in-out infinite alternate',
          }}
        />
        {/* Blob 2 — verde musgo, canto inferior esquerdo */}
        <div
          className="absolute rounded-full"
          style={{
            width: '60%',
            height: '60%',
            bottom: '-20%',
            left: '-10%',
            background: 'radial-gradient(ellipse at center, #2A3B2F 0%, transparent 70%)',
            filter: 'blur(100px)',
            opacity: 0.08,
            animation: 'aurora 13s ease-in-out infinite alternate-reverse',
          }}
        />
        {/* Blob 3 — âmbar suave, centro */}
        <div
          className="absolute rounded-full"
          style={{
            width: '40%',
            height: '40%',
            top: '40%',
            left: '30%',
            background: 'radial-gradient(ellipse at center, #E0A830 0%, transparent 70%)',
            filter: 'blur(120px)',
            opacity: 0.06,
            animation: 'aurora 16s ease-in-out infinite alternate',
          }}
        />
      </div>

      <GrainOverlay opacity={0.04} />

      <div className="relative z-20">{children}</div>
    </div>
  )
}
