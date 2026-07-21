import { useId, useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { calculateWeight } from '../utils/calculations'
import type { WeightEstimate } from '../utils/calculations'
import { Results } from './Results'

export function Calculator() {
  const inputId = useId()
  const [value, setValue] = useState('24')
  const [estimate, setEstimate] = useState<WeightEstimate | null>(calculateWeight(24))
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleChange(nextValue: string) {
    if (nextValue === '' || /^\d+$/.test(nextValue)) {
      setValue(nextValue)
      setError('')
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const cans = Number(value)
    if (!Number.isSafeInteger(cans) || cans < 1) {
      setError('Enter a positive whole number of cans.')
      return
    }
    setLoading(true)
    window.setTimeout(() => {
      setEstimate(calculateWeight(cans))
      setLoading(false)
    }, 300)
  }

  return (
    <motion.div
      className="calculator-shell"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
    >
      <form className="calculator-card" onSubmit={handleSubmit} noValidate>
        <label htmlFor={inputId}>Number of cans</label>
        <div className="input-wrap">
          <input
            id={inputId}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={value}
            onChange={(event) => handleChange(event.target.value)}
            aria-describedby={error ? `${inputId}-error` : undefined}
            aria-invalid={Boolean(error)}
            autoComplete="off"
          />
          <span aria-hidden="true">cans</span>
        </div>
        {error && <p className="input-error" id={`${inputId}-error`} role="alert">{error}</p>}
        <motion.button type="submit" whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.985 }}>
          <span className="button-sparkle" aria-hidden="true">✦</span>
          Calculate weight
        </motion.button>
      </form>
      <Results estimate={estimate} loading={loading} />
    </motion.div>
  )
}