import { useEffect, useRef } from 'react'

/**
 * Attach to any element to trigger a CSS fade-up animation
 * when the element enters the viewport.
 */
export function useFadeUp() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

/**
 * Wraps children in a div with the fade-up class applied.
 */
export function FadeSection({ children, className = '', style = {}, delay = 0 }) {
  const ref = useFadeUp()
  return (
    <div
      ref={ref}
      className={`fade-up ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  )
}
