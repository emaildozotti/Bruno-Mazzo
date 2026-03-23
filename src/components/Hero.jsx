// DECISÃO CRIATIVA: Substituição de CSS keyframe simples por Framer Motion com staggerChildren (0.18s)
// cria narrativa de revelação progressiva mais controlada e sofisticada. AuroraBackground adiciona
// profundidade atmosférica sem poluir o espaço negativo — os blobs ficam implícitos, não gritantes.
// Corner ornaments (linhas âmbar finas no canto superior direito) criam enquadramento editorial
// que remete à tipografia de livros de não-ficção de qualidade. Clip-path diagonal na saída
// elimina a transição abrupta entre Hero e PainPoints, criando fluxo visual contínuo.

import { motion } from 'framer-motion'
import AuroraBackground from './shared/AuroraBackground'
import ShimmerButton from './shared/ShimmerButton'
import AnimatedGradientText from './shared/AnimatedGradientText'

const heroVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
}

const itemVariant = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  return (
    <AuroraBackground
      className="min-h-screen flex items-center bg-dark px-5 py-24 md:py-32"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)',
      }}
    >
      {/* Corner ornament âmbar — canto superior direito */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 pointer-events-none"
        style={{ zIndex: 25 }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '1px',
            height: '128px',
            background: 'linear-gradient(to bottom, rgba(201,149,42,0.5), transparent)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            height: '1px',
            width: '128px',
            background: 'linear-gradient(to left, rgba(201,149,42,0.5), transparent)',
          }}
        />
      </div>

      <div className="relative w-full max-w-layout mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Coluna de texto — lg: col 1-7 */}
          <div className="lg:col-span-7">
            {/* Eyebrow animado */}
            <motion.div variants={itemVariant} className="mb-6">
              <AnimatedGradientText>PEIXE FORA D'ÁGUA</AnimatedGradientText>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={itemVariant}
              className="font-heading text-display text-text-light mb-6 leading-tight"
            >
              Você passou anos modelando padrões. Nunca o{' '}
              <span className="text-primary">seu</span>.
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              variants={itemVariant}
              className="font-body text-text-muted text-lg leading-relaxed mb-10 max-w-xl"
            >
              Com a Escuta Profunda, você não precisa se diminuir para ser entendido.
            </motion.p>

            {/* CTA */}
            <motion.div variants={itemVariant}>
              <ShimmerButton
                href="#video-section"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Assistir ao vídeo
              </ShimmerButton>
            </motion.div>
          </div>

          {/* Foto placeholder — lg: col 8-12 */}
          <motion.div
            variants={itemVariant}
            className="lg:col-span-5 relative w-full flex justify-center lg:justify-end"
          >
            <div className="relative inline-block w-full max-w-[340px]">
              {/* Corner frame âmbar deslocado */}
              <div
                aria-hidden="true"
                className="absolute rounded"
                style={{
                  width: '100%',
                  height: '100%',
                  top: '12px',
                  left: '12px',
                  border: '1px solid rgba(201, 149, 42, 0.35)',
                  borderRadius: '4px',
                  zIndex: 0,
                }}
              />
              {/* Área da foto */}
              <div
                className="relative z-10 w-full bg-bg-warm rounded overflow-hidden flex items-center justify-center border border-white/5"
                style={{ aspectRatio: '3/4' }}
              >
                <div className="text-center p-8">
                  <div
                    className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center border border-primary/50"
                    style={{ background: 'rgba(201,149,42,0.1)' }}
                  >
                    <span className="font-heading text-xl text-primary">BM</span>
                  </div>
                  <p className="font-body text-text-muted text-xs uppercase tracking-widest leading-relaxed">
                    [Espaço para foto<br />de Bruno Mazzo]
                  </p>
                </div>
                {/* Img para substituição pelo cliente */}
                <img
                  src=""
                  alt="Bruno Mazzo"
                  className="absolute inset-0 w-full h-full object-cover object-top hidden"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AuroraBackground>
  )
}
