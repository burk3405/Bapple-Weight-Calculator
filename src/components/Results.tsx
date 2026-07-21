import { AnimatePresence, motion } from 'framer-motion'
import type { WeightEstimate } from '../utils/calculations'
import { formatWeight, getEasterEgg } from '../utils/calculations'
import { CanIcon } from './CanIcon'

interface ResultsProps {
  estimate: WeightEstimate | null
  loading: boolean
}

export function Results({ estimate, loading }: ResultsProps) {
  const egg = estimate ? getEasterEgg(estimate.cans) : undefined

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div className="calculation-loader" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} aria-live="polite">
          <span className="loader-orbit" />
          Calibrating the scale…
        </motion.div>
      )}
      {!loading && estimate && (
        <motion.section
          className="results"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          aria-live="polite"
          aria-label="Weight calculation results"
        >
          <div className="results-heading">
            <div>
              <p className="eyebrow">Estimated shipment weight</p>
              <h2>{estimate.cans.toLocaleString()} <span>{estimate.cans === 1 ? 'can' : 'cans'}</span></h2>
            </div>
            <CanIcon animated />
          </div>
          <div className="weight-total">
            <div><strong>≈ {formatWeight(estimate.totalLb)}</strong><span>lb</span></div>
            <p>≈ {formatWeight(estimate.totalKg)} kg</p>
          </div>
          <div className="breakdown" aria-label="Weight breakdown">
            <div><span>Liquid</span><strong>{formatWeight(estimate.liquidLb)} lb</strong></div>
            <div><span>Aluminum</span><strong>{formatWeight(estimate.aluminumLb)} lb</strong></div>
            <div><span>Packaging</span><strong>{formatWeight(estimate.packagingLb)} lb</strong></div>
          </div>
          {estimate.cases > 0 && (
            <p className="case-detail">
              Includes {estimate.cases} complete {estimate.cases === 1 ? '24-pack case' : '24-pack cases'}
              {estimate.looseCans > 0 && ` + ${estimate.looseCans} loose ${estimate.looseCans === 1 ? 'can' : 'cans'}`}.
            </p>
          )}
          {egg && <p className="easter-egg">✦ {egg}</p>}
        </motion.section>
      )}
    </AnimatePresence>
  )
}