import { useEffect, useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import '../styles/statistics.css'

const STATS = [
  { value: 1000, suffix: '+', label: 'Records Managed' },
  { value: 99.9, suffix: '%', label: 'Accuracy', decimals: 1 },
  { value: 24, suffix: '/7', label: 'Availability' },
  { value: 1.2, suffix: 's', label: 'Avg. Response Time', decimals: 1 },
]

export default function Statistics() {
  const [ref, isVisible] = useScrollReveal(0.3)

  return (
    <section className="statistics section-padding">
      <div className="container">
        <div ref={ref} className="statistics__grid">
          {STATS.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} shouldAnimate={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat, index, shouldAnimate }) {
  const [displayValue, setDisplayValue] = useState(0)
  const delay = `reveal-delay-${(index % 5) + 1}`

  // Count up from 0 to the target value using requestAnimationFrame,
  // triggered once the card scrolls into view.
  useEffect(() => {
    if (!shouldAnimate) return

    const duration = 1400
    const start = performance.now()

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setDisplayValue(stat.value * eased)
      if (progress < 1) requestAnimationFrame(tick)
    }

    const frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [shouldAnimate, stat.value])

  const formatted = stat.decimals
    ? displayValue.toFixed(stat.decimals)
    : Math.round(displayValue)

  return (
    <div className={`stat-card reveal ${delay} ${shouldAnimate ? 'is-visible' : ''}`}>
      <span className="stat-card__value">
        {formatted}
        {stat.suffix}
      </span>
      <span className="stat-card__label">{stat.label}</span>
    </div>
  )
}
