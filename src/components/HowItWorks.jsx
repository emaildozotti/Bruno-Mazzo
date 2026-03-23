// DECISÃO CRIATIVA: Números dos passos (01/02/03) em dois níveis — o visível (âmbar 85% opacity)
// e o decorativo (âmbar 0.06 opacity, tamanho gigante) como background do espaço de cada step.
// Isso cria profundidade dimensional: o número "existe" no espaço físico do card, não apenas como
// label tipográfico. Stagger reveal via Framer Motion useInView com 0.14s entre steps reforça
// a narrativa sequencial de "jornada". Linha de conexão vertical âmbar entre passos preservada da v1.

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedGradientText from './shared/AnimatedGradientText'

const steps = [
  {
    number: '01',
    title: 'A Conversa Inicial',
    description:
      'Começamos com uma conversa de 20 a 30 minutos, sem custo. Você entende o que faço. Eu entendo onde você está.',
  },
  {
    number: '02',
    title: 'O Processo',
    description:
      'As sessões são individuais, sem protocolo rígido e sem prazo definido de fora. O ritmo é o do seu respeito interno.',
  },
  {
    number: '03',
    title: 'A Chegada',
    description:
      'Com o tempo, o processo não produz uma versão nova de você. Produz reconhecimento: a clareza do que é genuinamente seu.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

const stepVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function HowItWorks() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  const stepsRef = useRef(null)
  const stepsInView = useInView(stepsRef, { once: true, margin: '-80px' })

  const noteRef = useRef(null)
  const noteInView = useInView(noteRef, { once: true, margin: '-60px' })

  return (
    <section
      id="how-it-works"
      className="section-base bg-bg-warm px-5 py-section"
    >
      {/* Ornamento blur */}
      <div
        aria-hidden="true"
        className="blur-ornament"
        style={{ width: '350px', height: '350px', bottom: '-80px', left: '-60px', opacity: '0.05' }}
      />

      <div className="relative z-10 max-w-layout mx-auto">

        {/* Header */}
        <motion.div
          ref={headerRef}
          className="mb-12"
          variants={fadeUpVariant}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
        >
          <AnimatedGradientText className="block mb-3">O processo</AnimatedGradientText>
          <h2 className="font-heading text-h2 text-text-light">
            Como funciona na prática
          </h2>
        </motion.div>

        {/* Steps com stagger */}
        <motion.div
          ref={stepsRef}
          className="space-y-0"
          variants={containerVariants}
          initial="hidden"
          animate={stepsInView ? 'visible' : 'hidden'}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={stepVariant}
              className="relative flex gap-6 md:gap-10"
            >
              {/* Linha de conexão + número */}
              <div className="flex flex-col items-center flex-shrink-0" style={{ minWidth: '56px' }}>
                {/* Número decorativo gigante de background */}
                <div className="relative flex-shrink-0">
                  <span
                    aria-hidden="true"
                    className="font-heading select-none pointer-events-none absolute"
                    style={{
                      fontSize: 'clamp(5rem, 10vw, 8rem)',
                      color: '#C9952A',
                      opacity: 0.06,
                      lineHeight: 1,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {step.number}
                  </span>
                  {/* Número visível */}
                  <div
                    className="font-heading text-5xl md:text-6xl leading-none select-none flex-shrink-0"
                    style={{ color: '#C9952A', opacity: 0.85 }}
                  >
                    {step.number}
                  </div>
                </div>
                {/* Linha de conexão */}
                {index < steps.length - 1 && (
                  <div
                    className="flex-1 mt-2"
                    style={{ width: '2px', background: 'rgba(201, 149, 42, 0.20)', minHeight: '48px' }}
                  />
                )}
              </div>

              {/* Conteúdo do step */}
              <div className="pb-12 flex-1">
                <h3 className="font-heading text-h3 text-text-light mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-text-muted text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Nota de reassurance */}
        <motion.div
          ref={noteRef}
          className="mt-4 border-l-2 border-primary pl-5 max-w-2xl"
          variants={fadeUpVariant}
          initial="hidden"
          animate={noteInView ? 'visible' : 'hidden'}
        >
          <p className="font-body text-text-muted text-sm italic leading-relaxed">
            Você não precisa saber para onde quer ir. Precisa apenas de honestidade sobre onde está agora.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
