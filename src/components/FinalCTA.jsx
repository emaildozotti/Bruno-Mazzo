// DECISÃO CRIATIVA: ShimmerButton no CTA final maximiza o impacto visual do momento de conversão —
// o efeito de luz que percorre o botão comunica "algo vai se revelar" alinhado com a proposta
// terapêutica. AuroraBackground com blobs muito sutis cria profundidade sem distrair do CTA.
// Framer Motion fade-up na seção inteira com entrada suave de 0.8s sinaliza "chegada" ao final
// da jornada narrativa da página.

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AuroraBackground from './shared/AuroraBackground'
import ShimmerButton from './shared/ShimmerButton'

const WHATSAPP_NUMBER = '5511999999999'
const WHATSAPP_MESSAGE = 'Olá Bruno, vi sua página e quero saber mais sobre a Escuta Profunda. Meu nome é '

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <AuroraBackground className="section-base bg-dark px-5 py-24 md:py-32">
      <motion.div
        ref={ref}
        className="relative z-10 max-w-3xl mx-auto text-center"
        variants={fadeUpVariant}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="divider-amber mb-8" />

        <h2 className="font-heading text-4xl md:text-5xl text-text-light mb-6 leading-tight">
          Se o que você leu aqui fez sentido, talvez seja o momento.
        </h2>

        <p className="font-body text-text-muted text-lg leading-relaxed mb-10">
          Não estou pedindo uma decisão: estou convidando para uma conversa.
        </p>

        <ShimmerButton
          href={whatsappUrl}
          onClick={() => {}}
          className="mx-auto"
        >
          Quero conversar com Bruno
        </ShimmerButton>

        <p className="font-body text-text-muted/50 text-xs mt-6 leading-relaxed">
          Bruno responde pessoalmente em 24 a 48 horas.
        </p>
      </motion.div>
    </AuroraBackground>
  )
}
