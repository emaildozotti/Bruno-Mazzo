// DECISÃO CRIATIVA: Aurora muito sutil no footer (opacity 0.04–0.06) cria sensação de que a página
// "respira" até o fim — evita o corte abrupto de um footer completamente flat. GrainOverlay
// adiciona textura que ancora o gradiente digital. ShimmerButton substituindo o link de texto
// no WhatsApp eleva o ponto de conversão final. Separador em gradiente (transparente → âmbar → transparente)
// preservado da v1 como elemento de dissolução entre conteúdo e rodapé.

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import GrainOverlay from './shared/GrainOverlay'
import ShimmerButton from './shared/ShimmerButton'

const WHATSAPP_NUMBER = '5511999999999'
const WHATSAPP_MESSAGE = 'Olá Bruno, vi seu site e quero agendar uma sessão de Escuta Profunda'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <footer
      id="footer"
      className="section-base bg-dark px-5 pt-12 pb-8"
    >
      {/* Aurora muito sutil */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute rounded-full"
          style={{
            width: '50%',
            height: '80%',
            top: '10%',
            left: '25%',
            background: 'radial-gradient(ellipse, #C9952A, transparent 70%)',
            filter: 'blur(120px)',
            opacity: 0.04,
            animation: 'aurora 18s ease-in-out infinite alternate',
          }}
        />
      </div>

      <GrainOverlay opacity={0.035} />

      <motion.div
        ref={ref}
        className="relative z-20 max-w-layout mx-auto text-center"
        variants={fadeUpVariant}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Separador gradiente */}
        <div
          className="mb-10 mx-auto"
          style={{
            maxWidth: '480px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(201, 149, 42, 0.35), transparent)',
          }}
        />

        {/* Nome */}
        <h2 className="font-heading text-2xl text-text-light mb-2 tracking-wide">
          Bruno Mazzo
        </h2>

        {/* Tagline */}
        <p className="font-body text-text-muted text-sm mb-8 italic">
          Terapia Integrativa e Desenvolvimento Humano
        </p>

        {/* CTA WhatsApp com ShimmerButton */}
        <div className="mb-10">
          <ShimmerButton href={whatsappUrl}>
            WhatsApp
          </ShimmerButton>
        </div>

        {/* Links informativos */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
          <span className="font-body text-xs text-text-muted uppercase tracking-widest">
            Online e Presencial
          </span>
          <span className="text-text-muted/30 text-xs">|</span>
          <span className="font-body text-xs text-text-muted uppercase tracking-widest">
            Sessões Individuais
          </span>
        </div>

        {/* Aviso legal */}
        <p
          className="font-body text-center leading-relaxed mx-auto mb-6"
          style={{
            fontSize: '11px',
            color: 'rgba(232, 228, 220, 0.45)',
            maxWidth: '480px',
          }}
        >
          Este site tem caráter exclusivamente informativo e não substitui acompanhamento
          médico, psicológico ou psiquiátrico. Em casos de urgência ou risco à vida,
          procure o serviço de saúde mais próximo.
        </p>

        {/* Copyright */}
        <p
          className="font-body"
          style={{ fontSize: '11px', color: 'rgba(232, 228, 220, 0.25)' }}
        >
          © {new Date().getFullYear()} Bruno Mazzo. Todos os direitos reservados.
        </p>

      </motion.div>
    </footer>
  )
}
