import { motion } from 'framer-motion'
import { BrandMark } from './components/BrandMark'
import { Calculator } from './components/Calculator'

function App() {
  return (
    <main>
      <nav className="topbar" aria-label="Site branding">
        <BrandMark />
        <span className="topbar-stamp">12 FL. OZ. • EST. WEIGHT DIVISION</span>
      </nav>
      <section className="hero" aria-labelledby="page-title">
        <motion.div className="hero-can" initial={{ opacity: 0, x: 25, rotate: 4 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: 0.65 }} aria-hidden="true">
          <img src="/can.webp" alt="" />
        </motion.div>
        <div className="hero-intro">
          <p className="eyebrow hero-eyebrow">Certified-ish</p>
          <h1 id="page-title">How much does<br /><em>your bapple weigh?</em></h1>
          <p className="hero-copy">A no-nonsense estimate for the very serious business of Busch Light Apple shipping logistics.</p>
        </div>
        <Calculator />
        <p className="estimate-note">Estimates are based on standard 12 oz Busch Light Apple cans.</p>
      </section>
      <section className="faq" aria-labelledby="faq-title">
        <div className="faq-heading">
          <h2 id="faq-title">Frequently asked questions</h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>Does this work with Busch Light Lime or Peach?</summary>
            <p>Fuck you.</p>
          </details>
          <details>
            <summary>Is this an exact shipping weight?</summary>
            <p>No. It is an estimate based on standard 12 oz can, liquid, and full 24-pack cardboard weights.</p>
          </details>
          <details>
            <summary>Why does packaging only appear for 24-packs?</summary>
            <p>Cardboard weight is counted only for complete 24-can cases. Loose cans travel light.</p>
          </details>
          <details>
            <summary>Can I use this for anything else?</summary>
            <p>No.</p>
          </details>
        </div>
      </section>
      <footer>
        <div><BrandMark /><p>Officially an unofficial fan-made calculator. Busch Light and related trademarks are owned by their respective holders. Fuck you Robert.</p></div>
      </footer>
    </main>
  )
}

export default App