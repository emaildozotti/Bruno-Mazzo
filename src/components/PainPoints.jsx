// DECISÃO CRIATIVA: Margem-top negativa com clamp cobre o clip-path diagonal do Hero, criando
// continuidade visual perfeita — o conteúdo "emerge" de baixo do Hero em vez de se separar dele.
// Os pain points revelam-se em stagger via Framer Motion useInView: o border-left âmbar de cada item
// também anima de width 0 para 4px com delay, criando efeito de "sublinhado que surge" que espelha
// o processo de identificação gradual do avatar. Sem AOS — tudo controlado por Framer Motion.

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const painPoints = [
  'Conquistou o que deveria te fazer feliz. E ainda assim acorda sem vontade de nada.',
  'Está exausto de ser forte para todo mundo e destruído por dentro.',
  'Sente que está no lugar errado, mas não consegue nem nomear o porquê.',
  'Já tentou terapia. Nunca encontrou alguém que fosse fundo o suficiente.',
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function PainPoints() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  const hookRef = useRef(null)
  const hookInView = useInView(hookRef, { once: true, margin: '-60px' })

  return (
    <section
      id="pain-points"
      className="section-base bg-bg-warm px-5 py-24 md:py-32"
      style={{
        marginTop: 'clamp(-40px, -3vw, -60px)',
        paddingTop: 'clamp(80px, 8vw, 120px)',
      }}
    >
      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Header da seção */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          variants={fadeUpVariant}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
        >
          <h2 className="font-heading text-4xl md:text-5xl text-text-light">
            Você se reconhece em algum desses?
          </h2>
        </motion.div>

        {/* Card de Dores */}
        <motion.div
          ref={ref}
          className="bg-dark/60 p-8 md:p-12 rounded-lg border border-white/5 shadow-2xl"
          variants={fadeUpVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h3 className="font-heading text-2xl text-text-light mb-8 text-center">
            Você se reconhece em algum desses?
          </h3>

          <motion.ul
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {painPoints.map((point, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                {/* Ícone com border-left animado */}
                <div
                  className="mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border border-primary/30"
                  style={{ background: 'rgba(201, 149, 42, 0.1)' }}
                >
                  <span className="font-body text-primary text-xs font-bold w-full text-center">x</span>
                </div>
                <p className="font-body text-text-light/90 text-base md:text-lg leading-relaxed">
                  {point}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Hook Final */}
        <motion.div
          ref={hookRef}
          className="mt-12 text-center"
          variants={fadeUpVariant}
          initial="hidden"
          animate={hookInView ? 'visible' : 'hidden'}
        >
          <p className="font-body text-primary font-medium text-lg">
            Preciso te mostrar algo.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
