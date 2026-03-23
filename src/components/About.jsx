// DECISÃO CRIATIVA: Linha decorativa vertical âmbar (3px × 80px) à esquerda do bloco de bio cria
// âncora visual editorial que remete a citações em livros — reforça a identidade intelectual do Bruno.
// Foto com corner ornament âmbar deslocado para baixo-direita preserva a profundidade da v1.
// Framer Motion com direções opostas (fade-right para foto, fade-left para texto) e delay de 0.15s
// no texto cria composição dinâmica sem ser caótica. AnimatedGradientText no eyebrow eleva o label.

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedGradientText from './shared/AnimatedGradientText'

const fadeRightVariant = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

const fadeLeftVariant = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 } },
}

const credentials = [
  'Formação em Psicanálise',
  'Barras de Access',
  'Atendimento Online e Presencial',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      className="section-base bg-bg-light px-5 py-section"
    >
      <div className="relative z-10 max-w-layout mx-auto" ref={ref}>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Foto — mobile: primeiro | desktop: col 1-5 */}
          <motion.div
            className="lg:col-span-5 order-1"
            variants={fadeRightVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="relative inline-block w-full">
              {/* Corner ornament deslocado baixo-direita */}
              <div
                aria-hidden="true"
                className="absolute rounded"
                style={{
                  width: '100%',
                  height: '100%',
                  bottom: '-10px',
                  right: '-10px',
                  border: '2px solid #C9952A',
                  borderRadius: '4px',
                  zIndex: 0,
                }}
              />
              {/* Foto placeholder */}
              <div
                className="relative z-10 w-full bg-bg-warm rounded overflow-hidden flex items-center justify-center"
                style={{ aspectRatio: '4/5', minHeight: '320px' }}
              >
                <div className="text-center p-8">
                  <div
                    className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-primary"
                    style={{ background: 'rgba(201,149,42,0.08)' }}
                  >
                    <span className="font-heading text-2xl text-primary">BM</span>
                  </div>
                  <p className="font-body text-text-muted text-xs uppercase tracking-widest">
                    [FOTO]
                  </p>
                  <p className="font-body text-text-muted/60 text-xs mt-1">
                    class="client-photo"
                  </p>
                </div>
                {/* Classe para substituição pelo cliente */}
                <img
                  src=""
                  alt="Bruno Mazzo - Terapeuta Integrativo"
                  className="client-photo absolute inset-0 w-full h-full object-cover object-top hidden"
                />
              </div>
            </div>
          </motion.div>

          {/* Texto — mobile: segundo | desktop: col 6-12 */}
          <motion.div
            className="lg:col-span-7 order-2"
            variants={fadeLeftVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <AnimatedGradientText className="block mb-4">Sobre Bruno Mazzo</AnimatedGradientText>

            <h2 className="font-heading text-h2 text-text-dark mb-6">
              O analista que aprendeu a modelar o invisível
            </h2>

            {/* Linha decorativa vertical âmbar à esquerda do bio */}
            <div className="flex gap-5">
              <div
                aria-hidden="true"
                className="flex-shrink-0 rounded-full"
                style={{
                  width: '3px',
                  height: '80px',
                  alignSelf: 'flex-start',
                  marginTop: '4px',
                  background: 'linear-gradient(to bottom, #C9952A, rgba(201,149,42,0.2))',
                }}
              />
              <div className="space-y-4 font-body text-text-dark/75 text-base leading-relaxed">
                <p>
                  Passei anos trabalhando com modelos estatísticos. Carreira sólida, reconhecimento, salário acima da média. E uma sensação crescente de que estava vivendo a vida errada.
                </p>
                <p>
                  A virada foi perceber que cada promoção chegava e não deixava nada. Era sinal de que eu estava no lugar errado, não de que havia algo errado comigo.
                </p>
                <p>
                  Hoje aplico a precisão analítica onde ela mais importa: no que está debaixo da superfície. Conheço o caminho de saída. Percorri ele.
                </p>
              </div>
            </div>

            {/* Credenciais */}
            <div className="mt-8 flex flex-wrap gap-3">
              {credentials.map((cred) => (
                <span
                  key={cred}
                  className="font-body text-xs uppercase tracking-wider px-3 py-2 rounded border border-primary/30 text-text-dark/70"
                  style={{ background: 'rgba(201, 149, 42, 0.06)' }}
                >
                  {cred}
                </span>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
