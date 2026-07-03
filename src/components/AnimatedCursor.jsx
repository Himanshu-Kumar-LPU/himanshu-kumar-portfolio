import { useEffect, useRef } from 'react'

function AnimatedCursor({ enabled = true }) {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const hoverRef = useRef(false)

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove('cursor-enabled')
      return undefined
    }

    document.body.classList.add('cursor-enabled')

    const hoverSelector = 'a, button, input, textarea, .hover-target'

    const setHover = (isHovering) => {
      if (hoverRef.current === isHovering) return
      hoverRef.current = isHovering
      dotRef.current?.classList.toggle('cursor-dot-hover', isHovering)
      ringRef.current?.classList.toggle('cursor-ring-hover', isHovering)
    }

    const move = (event) => {
      const { clientX, clientY } = event
      dotRef.current?.style.setProperty('transform', `translate3d(${clientX}px, ${clientY}px, 0)`)
      ringRef.current?.style.setProperty('transform', `translate3d(${clientX}px, ${clientY}px, 0)`)
    }

    const pointerOver = (event) => {
      const target = event.target instanceof Element ? event.target.closest(hoverSelector) : null
      if (target) setHover(true)
    }

    const pointerOut = (event) => {
      const target = event.target instanceof Element ? event.target.closest(hoverSelector) : null
      const related = event.relatedTarget instanceof Element ? event.relatedTarget.closest(hoverSelector) : null
      if (target && !related) setHover(false)
    }

    window.addEventListener('pointermove', move)
    document.addEventListener('pointerover', pointerOver)
    document.addEventListener('pointerout', pointerOut)

    return () => {
      document.body.classList.remove('cursor-enabled')
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerover', pointerOver)
      document.removeEventListener('pointerout', pointerOut)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}

export default AnimatedCursor
