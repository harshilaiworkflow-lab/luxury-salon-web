"use client"

import { useEffect, useRef, useState } from "react"
import { Nav } from "@/components/salon/nav"
import { Hero } from "@/components/salon/hero"
import { Manifesto } from "@/components/salon/manifesto"
import { Collections } from "@/components/salon/collections"
import { Membership } from "@/components/salon/membership"
import { Footprint } from "@/components/salon/footprint"
import { BookingModal } from "@/components/salon/booking-modal"
import { Cursor } from "@/components/salon/cursor"

// minimal typings for the CDN globals we attach to window
declare global {
  interface Window {
    Lenis?: any
    gsap?: any
    ScrollTrigger?: any
    p5?: any
    VANTA?: any
  }
}

function splitIntoWords(el: HTMLElement): HTMLElement[] {
  if (el.dataset.split === "true") {
    return Array.from(el.querySelectorAll<HTMLElement>("[data-word]"))
  }
  const text = (el.textContent ?? "").trim()
  el.setAttribute("aria-label", text)
  el.textContent = ""
  const inners: HTMLElement[] = []

  text.split(/\s+/).forEach((word, i, arr) => {
    const mask = document.createElement("span")
    mask.style.display = "inline-block"
    mask.style.overflow = "hidden"
    mask.style.verticalAlign = "top"
    mask.setAttribute("aria-hidden", "true")

    const inner = document.createElement("span")
    inner.style.display = "inline-block"
    inner.dataset.word = "true"
    inner.textContent = word

    mask.appendChild(inner)
    el.appendChild(mask)
    if (i < arr.length - 1) el.appendChild(document.createTextNode(" "))
    inners.push(inner)
  })

  el.dataset.split = "true"
  return inners
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`)
    if (existing) {
      if (existing.dataset.loaded === "true") return resolve()
      existing.addEventListener("load", () => resolve())
      existing.addEventListener("error", () => reject(new Error(`Failed: ${src}`)))
      return
    }
    const s = document.createElement("script")
    s.src = src
    s.async = true
    s.addEventListener("load", () => {
      s.dataset.loaded = "true"
      resolve()
    })
    s.addEventListener("error", () => reject(new Error(`Failed: ${src}`)))
    document.head.appendChild(s)
  })
}

export default function Page() {
  const [isOpen, setIsOpen] = useState(false)
  const lenisRef = useRef<any>(null)

  useEffect(() => {
    let vantaEffect: any = null
    let rafId = 0
    let cancelled = false

    const revealFallback = () => {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        el.style.opacity = "1"
        el.style.transform = "none"
      })
    }

    async function init() {
      try {
        // 1. Load Animation and Scroll foundations sequentially to prevent collisions
        await loadScript("https://cdn.jsdelivr.net/npm/lenis@1.1.20/dist/lenis.min.js")
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js")
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js")
        
        // 2. STAGE 1 GEOMETRY: Load p5.js completely first
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js")
        
        // 3. STAGE 2 GEOMETRY: Load Vanta only after p5 window elements are active
        await loadScript("https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.topology.min.js")
      } catch (err) {
        console.log("[v0] CDN script load failed:", (err as Error).message)
        revealFallback()
        return
      }

      if (cancelled) return

      const { Lenis, gsap, ScrollTrigger, p5, VANTA } = window

      // --- Lenis smooth scroll ---
      if (Lenis) {
        const lenis = new Lenis({ duration: 1.15, smoothWheel: true })
        lenisRef.current = lenis
        const raf = (time: number) => {
          lenis.raf(time)
          rafId = requestAnimationFrame(raf)
        }
        rafId = requestAnimationFrame(raf)
        if (ScrollTrigger) lenis.on("scroll", ScrollTrigger.update)
      }

      // --- GSAP scroll reveals ---
      if (gsap && ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger)

        const items = gsap.utils.toArray<HTMLElement>(".reveal")
        items.forEach((el: HTMLElement) => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          })
        })

        const headers = gsap.utils.toArray<HTMLElement>(".split-words")
        headers.forEach((el: HTMLElement) => {
          const words = splitIntoWords(el)
          gsap.set(words, { yPercent: 120 })
          gsap.to(words, {
            yPercent: 0,
            duration: 0.9,
            ease: "power4.out",
            stagger: 0.08,
            scrollTrigger: { trigger: el, start: "top 85%" },
          })
        })

        ScrollTrigger.refresh()
      } else {
        revealFallback()
      }

      // --- Vanta Topology Config Initialization ---
      if (VANTA?.TOPOLOGY && p5) {
        vantaEffect = VANTA.TOPOLOGY({
          el: "#vanta-canvas",
          p5,
          mouseControls: true,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x0a0a0a, // Rich black background
          color: 0xcca43b,           // Vibrant, premium visible gold lines
        })
      }
    }

    init()

    return () => {
      cancelled = true
      if (rafId) cancelAnimationFrame(rafId)
      if (vantaEffect) {
        try {
          vantaEffect.destroy()
        } catch {}
      }
      if (lenisRef.current) {
        try {
          lenisRef.current.destroy()
        } catch {}
        lenisRef.current = null
      }
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((t: any) => t.kill())
      }
    }
  }, [])

  useEffect(() => {
    const lenis = lenisRef.current
    if (isOpen) {
      lenis?.stop()
      document.body.style.overflow = "hidden"
    } else {
      lenis?.start()
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <main className="relative bg-background text-foreground min-h-screen">
      {/* Target canvas backdrop for 3D graphics initialization */}
      <div 
        id="vanta-canvas" 
        className="fixed inset-0 w-full h-full -z-10 pointer-events-none" 
        style={{ backgroundColor: "#0A0A0A" }} 
      />

      <Cursor />
      <Nav onConsult={open} />
      <Hero onBook={open} />
      <Manifesto />
      <Collections />
      <Membership />
      <Footprint onBook={open} />
      <BookingModal isOpen={isOpen} onClose={close} />
    </main>
  )
}
