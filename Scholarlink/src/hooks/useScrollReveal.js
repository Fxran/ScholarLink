import { useEffect, useRef, useState } from 'react'

/**
 * useScrollReveal
 * Tracks whether an element has entered the viewport using the
 * Intersection Observer API, so sections can fade/slide in on scroll
 * without any animation library.
 *
 * @param {number} threshold - fraction of the element that must be visible
 * @returns {[React.RefObject, boolean]} ref to attach + isVisible flag
 */
export default function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Respect users who prefer reduced motion: reveal immediately.
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node) // animate once, then stop watching
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isVisible]
}
