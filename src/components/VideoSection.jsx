// DECISÃO CRIATIVA: Framer Motion scale + fade em vez de zoom-in do AOS — a entrada do vídeo vertical
// em scale 0.92 → 1 com ease custom cria sensação de "materialização" mais sofisticada.
// O container do vídeo 9:16 mantém sua posição central editorial com borda âmbar sutil.
// Headline com stagger mínimo (0.12s) preserva a gravidade do texto sem o tornar espetacular demais.

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function VideoSection() {
  const headlineRef = useRef(null)
  const headlineInView = useInView(headlineRef, { once: true, margin: '-60px' })

  const videoRef = useRef(null)
  const videoInView = useInView(videoRef, { once: true, margin: '-60px' })

  return (
    <section
      id="video-section"
      className="section-base bg-dark px-5 py-section"
    >
      {/* Ornamento blur central */}
      <div
        aria-hidden="true"
        className="blur-ornament"
        style={{
          width: '400px',
          height: '400px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: '0.05',
        }}
      />

      <div className="relative z-10 max-w-layout mx-auto">
        <div className="flex flex-col items-center justify-center">

          {/* Headline do Vídeo */}
          <motion.div
            ref={headlineRef}
            className="text-center mb-10"
            variants={fadeUpVariant}
            initial="hidden"
            animate={headlineInView ? 'visible' : 'hidden'}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-text-light max-w-2xl mx-auto">
              Passei anos trabalhando com números antes de virar terapeuta. Conheço esse vazio não porque estudei sobre ele. Porque vivi. No vídeo, explico o padrão que me manteve preso e como saí.
            </h2>
          </motion.div>

          {/* Container vídeo 9:16 */}
          <motion.div
            ref={videoRef}
            className="flex justify-center w-full"
            variants={scaleInVariant}
            initial="hidden"
            animate={videoInView ? 'visible' : 'hidden'}
          >
            <div
              id="video-placeholder"
              className="relative rounded border border-primary/20 overflow-hidden bg-bg-warm"
              style={{
                width: '100%',
                maxWidth: '340px',
                aspectRatio: '9 / 16',
              }}
            >
              {/* Placeholder visual */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
                {/* Ícone de play */}
                <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C9952A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5,3 19,12 5,21 5,3" fill="#C9952A" stroke="none" />
                  </svg>
                </div>
                <p className="font-body text-text-muted text-xs text-center leading-relaxed tracking-wide uppercase">
                  [VÍDEO]
                  <br />
                  <span className="text-primary/70 normal-case">Link do YouTube Shorts de Bruno</span>
                </p>
              </div>

              {/* Borda âmbar sutil */}
              <div
                className="absolute inset-0 rounded pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(201, 149, 42, 0.15)' }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
