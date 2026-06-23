"use client"

import { useEffect, useRef } from "react"

// Bespoke kinetic trailing cursor:
//  - a sharp gold center dot that snaps to the pointer
//  - a larger outer ring that follows with a fluid trailing lag (lerp)
//  - the ring expands ~1.5x over links, the CTA, and service rows
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Skip entirely on touch / coarse-pointer devices.
    if (typeof window === "undefined" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return
    }

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // target = real mouse position; ring lerps toward it for trailing lag.
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ringPos = { x: mouse.x, y: mouse.y }
    let raf = 0
    let visible = false

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      // The dot snaps instantly to the pointer.
      dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`
      if (!visible) {
        visible = true
        dot.style.opacity = "1"
        ring.style.opacity = "1"
      }
    }

    const HOVER_SELECTOR = 'a, button, [data-cursor], input, select, textarea, label'
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null
      if (t?.closest(HOVER_SELECTOR)) ring.dataset.active = "true"
    }
    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null
      if (t?.closest(HOVER_SELECTOR)) ring.dataset.active = "false"
    }
    const onLeave = () => {
      visible = false
      dot.style.opacity = "0"
      ring.style.opacity = "0"
    }

    const tick = () => {
      // fluid trailing lag
      ringPos.x += (mouse.x - ringPos.x) * 0.18
      ringPos.y += (mouse.y - ringPos.y) * 0.18
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseover", onOver, true)
    document.addEventListener("mouseout", onOut, true)
    document.addEventListener("mouseleave", onLeave)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", onOver, true)
      document.removeEventListener("mouseout", onOut, true)
      document.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring hidden md:block" style={{ opacity: 0 }} aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot hidden md:block" style={{ opacity: 0 }} aria-hidden="true" />
    </>
  )
}
