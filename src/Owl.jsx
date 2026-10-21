import { useEffect, useRef } from 'react'

// Coruja do logo: as pupilas acompanham o mouse (desligado com prefers-reduced-motion).
export default function Owl({ size = 38 }) {
  const svg = useRef(null)
  const pupils = useRef([])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const move = (e) => {
      const box = svg.current?.getBoundingClientRect()
      if (!box) return
      const dx = e.clientX - (box.left + box.width / 2)
      const dy = e.clientY - (box.top + box.height / 2)
      const dist = Math.hypot(dx, dy) || 1
      const k = Math.min(2.2, dist / 60)
      const x = (dx / dist) * k
      const y = (dy / dist) * k
      pupils.current.forEach((p) => p && p.setAttribute('transform', `translate(${x} ${y})`))
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return (
    <svg ref={svg} width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path d="M7 6l10 6q7-3 14 0l10-6v22q0 15-17 17Q7 43 7 28z" fill="#6366f1" />
      <circle cx="17" cy="24" r="6.5" fill="#fff" />
      <circle cx="31" cy="24" r="6.5" fill="#fff" />
      <circle ref={(el) => (pupils.current[0] = el)} cx="17" cy="24" r="2.8" fill="#0f1629" />
      <circle ref={(el) => (pupils.current[1] = el)} cx="31" cy="24" r="2.8" fill="#0f1629" />
      <path d="M24 28.5l-3 6h6z" fill="#f2b04a" />
    </svg>
  )
}
