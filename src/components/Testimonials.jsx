// DECISÃO CRIATIVA: Substituição dos 3 cards estáticos por marquee horizontal infinito com pausa
// no hover — o movimento contínuo comunica "fluxo constante de resultados" sem hierarquizar
// depoimentos. A triplicação do array garante que o loop seja imperceptível em qualquer velocidade.
// Fade-out nas bordas (linear-gradient) cria ilusão de lista infinita além do viewport.
// Aurora muito sutil centralizada no fundo adiciona profundidade sem competir com o conteúdo.
// AnimatedGradientText no eyebrow "Resultados" eleva o label.

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import GrainOverlay from './shared/GrainOverlay'
import ShimmerButton from './shared/ShimmerButton'
import AnimatedGradientText from './shared/AnimatedGradientText'

const testimonials = [
  {
    text: 'Sou engenheiro de software e nunca tinha encontrado um terapeuta que respeitasse como eu processo as coisas. Com Bruno, pela primeira vez, senti que podia ser completamente honesto sem ser simplificado. Entendi que meu vazio não era defeito: era sinal de que eu estava no lugar errado.',
    name: '[NOME]',
    role: 'Engenheiro de Software, São Paulo',
    initials: 'ES',
  },
  {
    text: 'Tinha o emprego dos sonhos dos outros e o pesadelo silencioso do meu. Tentei coaching, li todos os livros, fiz duas terapias anteriores. Com a Escuta Profunda foi diferente: Bruno foi onde os outros não foram. Hoje me reconheço de uma forma que não sabia ser possível.',
    name: '[NOME]',
    role: 'Gestora de Projetos, Rio de Janeiro',
    initials: 'GP',
  },
  {
    text: 'O que mais me surpreendeu foi que o processo não foi pesado: foi honesto. E essa honestidade, no ritmo certo, foi exatamente o que eu precisava para entender o que estava carregando.',
    name: '[NOME]',
    role: 'Analista de Dados, Belo Horizonte',
    initials: 'AD',
  },
]

function TestimonialCard({ item }) {
  return (
    <div
      className="flex-shrink-0 w-[380px] mx-4 bg-bg-warm border border-white/5 rounded p-7"
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
    >
      <div
        className="font-heading leading-none mb-3 select-none"
        style={{ fontSize: '3rem', color: '#C9952A', opacity: 0.2 }}
        aria-hidden="true"
      >
        "
      </div>
      <p className="font-body text-text-muted text-sm leading-relaxed italic mb-6">
        {item.text}
      </p>
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center"
          style={{ background: 'rgba(201,149,42,0.12)', border: '1px solid rgba(201,149,42,0.3)' }}
        >
          <span className="font-body text-xs font-medium text-primary">{item.initials}</span>
        </div>
        <div>
          <p className="font-body text-text-light text-xs font-medium">{item.name}</p>
          <p className="font-body text-text-muted text-xs">{item.role}</p>
        </div>
      </div>
    </div>
  )
}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Testimonials() {
  const [paused, setPaused] = useState(false)

  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' })

  // Triplicar para loop imperceptível
  const tripled = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section
      id="testimonials"
      className="section-base bg-dark py-section overflow-hidden"
    >
      <GrainOverlay opacity={0.03} />

      {/* Aurora sutil centralizada */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 rounded-full"
          style={{
            width: '600px',
            height: '300px',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(ellipse, #C9952A, transparent 70%)',
            filter: 'blur(80px)',
            opacity: 0.06,
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        ref={headerRef}
        className="relative z-10 max-w-layout mx-auto px-5 mb-12 text-center"
        variants={fadeUpVariant}
        initial="hidden"
        animate={headerInView ? 'visible' : 'hidden'}
      >
        <AnimatedGradientText className="block mb-3">Resultados</AnimatedGradientText>
        <h2 className="font-heading text-h2 text-text-light">
          Quem passou pela Escuta Profunda
        </h2>
      </motion.div>

      {/* Marquee horizontal infinito */}
      <div
        className="relative z-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-20 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #1A1A1E, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-20 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #1A1A1E, transparent)' }}
        />

        {/* Track */}
        <div
          className="flex"
          style={{
            animation: 'marquee 40s linear infinite',
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {tripled.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* CTA intermediário */}
      <motion.div
        ref={ctaRef}
        className="relative z-10 text-center mt-14 px-5"
        variants={fadeUpVariant}
        initial="hidden"
        animate={ctaInView ? 'visible' : 'hidden'}
      >
        <p className="font-body text-text-muted text-sm mb-6 italic">
          Estes resultados não são promessa. São o que acontece quando o processo é honesto,
          profundo e respeita o tempo de cada um.
        </p>
        <ShimmerButton
          secondary
          href="#faq"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Entender como funciona
        </ShimmerButton>
      </motion.div>
    </section>
  )
}
