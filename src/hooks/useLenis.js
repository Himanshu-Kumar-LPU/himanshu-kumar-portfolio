import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export function useLenis({ enabled = true, duration = 0.65, wheelMultiplier = 0.92, touchMultiplier = 0.92 } = {}) {
  useEffect(() => {
    if (!enabled) return undefined

    const lenis = new Lenis({
      duration,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier,
      touchMultiplier,
    })

    let frame
    const raf = (time) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }

    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [enabled, duration, wheelMultiplier, touchMultiplier])
}
