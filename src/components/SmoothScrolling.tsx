"use client"
import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScrolling({ children }: { children: ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // On touch/mobile devices, native scroll is already smooth.
    // Lenis on mobile fights the browser's native momentum scroll,
    // causing Intersection Observer to rapidly flicker → animations blink.
    // So we only enable Lenis smooth scroll on non-touch (desktop) devices.
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouchDevice) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
