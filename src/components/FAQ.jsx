// DECISÃO CRIATIVA: Substituição do max-height CSS hack por AnimatePresence + motion.div com
// height: 0 → "auto" via variants — Framer Motion lida com isso nativamente via layout animation,
// produzindo transição de altura genuinamente suave sem o salto brusco do max-height: 600px.
// O border-left âmbar e o background levemente mais claro no item ativo são mantidos da v1 como
// indicadores de estado imediatos. AnimatedGradientText no eyebrow eleva o label da seção.

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import AnimatedGradientText from './shared/AnimatedGradientText'

const WHATSAPP_NUMBER = '5511999999999'
const WHATSAPP_MESSAGE = 'Olá Bruno, vi sua página e quero saber mais sobre a Escuta Profunda. Meu nome é '

const faqs = [
  {
    question: 'E se eu descobrir coisas que não consigo lidar?',
    answer:
      'A Escuta Profunda não revela mais do que você consegue sustentar. A profundidade é calibrada ao seu ritmo. Não empurro portas que você ainda não está pronto para abrir.',
  },
  {
    question: 'Funciona online?',
    answer:
      'Sim. O que o processo exige é privacidade, honestidade e disposição. Esses elementos estão disponíveis em qualquer formato.',
  },
  {
    question: 'Quanto tempo leva?',
    answer:
      'Não existe prazo externo. Alguns processos têm resultados significativos em poucos meses. O tempo é o do seu respeito interno, não da minha agenda.',
  },
  {
    question: 'Como sei se sou o perfil certo?',
    answer:
      'Se você se reconheceu em algum ponto desta página, provavelmente é. A conversa inicial existe para confirmar. Não há risco em verificar.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  const listRef = useRef(null)
  const listInView = useInView(listRef, { once: true, margin: '-80px' })

  return (
    <section
      id="faq"
      className="section-base bg-bg-warm px-5 py-section"
    >
      {/* Ornamento blur */}
      <div
        aria-hidden="true"
        className="blur-ornament"
        style={{ width: '300px', height: '300px', top: '20%', left: '-80px', opacity: '0.05' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-12"
          variants={fadeUpVariant}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
        >
          <AnimatedGradientText className="block mb-3">Perguntas frequentes</AnimatedGradientText>
          <h2 className="font-heading text-h2 text-text-light">
            O que você precisa saber
          </h2>
        </motion.div>

        {/* Accordion com Framer Motion */}
        <motion.div
          ref={listRef}
          className="space-y-2"
          variants={containerVariants}
          initial="hidden"
          animate={listInView ? 'visible' : 'hidden'}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                variants={itemVariant}
                className="rounded overflow-hidden"
                style={{
                  background: isOpen ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
                  borderLeft: isOpen ? '3px solid #C9952A' : '3px solid transparent',
                  transition: 'background 0.3s ease, border-left-color 0.3s ease',
                }}
              >
                {/* Pergunta */}
                <button
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  style={{ minHeight: '48px' }}
                >
                  <span className="font-body text-text-light text-sm font-medium leading-snug">
                    {faq.question}
                  </span>
                  <motion.span
                    className="flex-shrink-0 font-body text-primary text-xl leading-none"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    +
                  </motion.span>
                </button>

                {/* Resposta com AnimatePresence para animação de altura suave */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-5 pb-5">
                        <p className="font-body text-text-muted text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
