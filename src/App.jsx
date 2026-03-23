// Sem AOS — Framer Motion com useInView em cada componente
// Smooth scroll via CSS no html (index.css)

import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import VideoSection from './components/VideoSection'
import Method from './components/Method'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <VideoSection />
      <Method />
      <About />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
