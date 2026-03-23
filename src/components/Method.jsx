// DECISÃO CRIATIVA: Os 4 pilares revelam-se em sequência com stagger de 0.15s via Framer Motion useInView —
// a revelação progressiva espelha o próprio processo terapêutico de descoberta gradual. Numeração
// decorativa enorme (01/02/03) em âmbar com opacity 0.06 cria camada de profundidade dimensional
// sem pesar o card. Seção bg-light (claro) mantém o ritmo editorial de alternância entre escuro e claro.
// AnimatedGradientText no eyebrow "O método" eleva o label de indicador funcional a elemento vivo.

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedGradientText from './shared/AnimatedGradientText'

const pillars = [
  {
    number: '01',
    title: 'O padrão que você não vê',
    description:
      'Trabalho na raiz, não no sintoma. O que você não consegue mudar sozinho tem explicação.',
  },
  {
    number: '02',
    title: 'A crença que te prende',
    description:
      'Algumas crenças não cedem para palavras. Com as Barras de Access, trabalho onde a análise não chega.',
  },
  {
    number: '03',
    title: 'O que você não diz',
    description:
      'Leio o que está além das palavras. O que você quase disse, o que parou na garganta.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Method() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-80px' })

  const closingRef = useRef(null)
  const closingInView = useInView(closingRef, { once: true, margin: '-60px' })

  const transitionRef = useRef(null)
  const transitionInView = useInView(transitionRef, { once: true, margin: '-60px' })

  return (
    <section
      id="method"
      className="section-base bg-bg-light px-5 py-section"
    >
      <div className="relative z-10 max-w-layout mx-auto">

        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-14"
          variants={fadeUpVariant}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
        >
          <AnimatedGradientText className="block mb-4">O método</AnimatedGradientText>
          <h2 className="font-heading text-h2 text-text-dark mb-4">
            A Escuta Profunda
          </h2>
          <div className="divider-amber" />
          <p className="font-body text-text-dark/70 text-base leading-relaxed max-w-prose mx-auto">
            Não ofereço técnicas. Ofereço presença, até onde as ferramentas não chegam.
          </p>
        </motion.div>

        {/* Grid de pilares com stagger */}
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14"
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.number}
              variants={cardVariant}
              className="relative bg-white/60 rounded border-l-4 border-primary p-7 hover:bg-white/80 transition-colors duration-300 overflow-hidden"
              style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}
            >
              {/* Número enorme decorativo — opacity 0.06 */}
              <span
                aria-hidden="true"
                className="font-heading leading-none absolute top-2 right-4 select-none pointer-events-none"
                style={{
                  fontSize: 'clamp(4rem, 8vw, 7rem)',
                  color: 'rgba(201, 149, 42, 0.06)',
                  lineHeight: 1,
                }}
              >
                {pillar.number}
              </span>
              {/* Número visível pequeno */}
              <span
                className="font-heading text-6xl font-normal leading-none absolute top-4 right-5 select-none"
                style={{ color: 'rgba(201, 149, 42, 0.12)' }}
              >
                {pillar.number}
              </span>
              <h3 className="font-heading text-h3 text-text-dark mb-3 relative z-10">
                {pillar.title}
              </h3>
              <p className="font-body text-text-dark/70 text-sm leading-relaxed relative z-10">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Diferencial vs convencional */}
        <motion.div
          ref={closingRef}
          className="bg-dark rounded p-8 md:p-10 text-center max-w-3xl mx-auto"
          variants={fadeUpVariant}
          initial="hidden"
          animate={closingInView ? 'visible' : 'hidden'}
        >
          <p className="font-heading text-text-light text-xl mb-4">
            Não prometo fórmulas. Prometo profundidade, no seu ritmo.
          </p>
          <p className="font-body text-text-muted text-sm">
            Mas antes de te contar o que faço, deixa eu te contar de onde vim.
          </p>
        </motion.div>

        {/* Transição para About */}
        <motion.div
          ref={transitionRef}
          className="text-center mt-12"
          variants={fadeUpVariant}
          initial="hidden"
          animate={transitionInView ? 'visible' : 'hidden'}
        >
          <p className="font-body text-text-dark/60 text-sm italic">
            E foi por isso que estruturei cada etapa com cuidado.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
