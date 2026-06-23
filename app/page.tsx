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
import VantaBackground from "@/components/vanta-background"

declare global {
  interface Window {
    Lenis?: any
    gsap?: any
    ScrollTrigger?: any
  }
}

// THE GOATED CONTENT REGISTRY (CORRECT WEBP PATHS MATCHING YOUR PUBLIC FOLDER)
const SALON_IMAGES = {
  heroBackdrop: "/advance-cut-salon-new-colony-gurgaon-salons-1krqi0el4f.jpg.webp",
  manifestoInterior: "/advance-cut-salon-new-colony-gurgaon-salons-nfdmmk76tj.jpg.webp",
  collectionHair: "/advance-cut-salon-new-colony-gurgaon-salons-1krqi0el4f.jpg.webp",
  collectionBeard: "/advance-cut-salon-new-colony-gurgaon-salons-nfdmmk76tj.jpg.webp",
  collectionAtmosphere: "/advance-cut-salon-new-colony-gurgaon-salons-1krqi0el4f.jpg.webp",
  footprintBasin: "/advance-cut-salon-new-colony-gurgaon-salons-nfdmmk76tj.jpg.webp"
}

export default function Page() {
  const [isOpen, setIsOpen] = useState(false)
  const lenisRef = useRef<any>(null)
  const audioCtxRef = useRef<AudioContext | null>(null)

  // Pure Code-Synthesized Tactile Mechanical Click Sound Effects
  const playMechanicalTick = (isClick = false) => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }
      const ctx = audioCtxRef.current
      if (ctx.state === "suspended") ctx.resume()

      const osc = ctx.createOscillator()
      const gainNode = ctx.createGain()

      osc.type = "sine"
      osc.frequency.setValueAtTime(isClick ? 900 : 1800, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(isClick ? 200 : 500, ctx.currentTime + 0.012)

      gainNode.gain.setValueAtTime(isClick ? 0.04 : 0.015, ctx.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.012)

      osc.connect(gainNode)
      gainNode.connect(ctx.destination)

      osc.start()
      osc.stop(ctx.currentTime + 0.015)
    } catch (e) {}
  }

  useEffect(() => {
    let rafId = 0
    let cancelled = false

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve()
        const s = document.createElement("script")
        s.src = src
        s.async = true
        s.onload = () => resolve()
        s.onerror = () => reject()
        document.head.appendChild(s)
      })
    }

    async function init() {
      try {
        await Promise.all([
          loadScript("https://cdn.jsdelivr.net/npm/lenis@1.1.20/dist/lenis.min.js"),
          loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js")
        ])
        if (cancelled) return
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js")
      } catch (err) {
        return
      }

      const { Lenis, gsap, ScrollTrigger } = window

      if (Lenis) {
        const lenis = new Lenis({ duration: 1.2, smoothWheel: true })
        lenisRef.current = lenis
        const raf = (time: number) => {
          lenis.raf(time)
          rafId = requestAnimationFrame(raf)
        }
        rafId = requestAnimationFrame(raf)
        if (ScrollTrigger) lenis.on("scroll", ScrollTrigger.update)
      }

      if (gsap && ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger)

        gsap.utils.toArray(".reveal").forEach((el: any) => {
          gsap.fromTo(el, 
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 85%" }
            }
          )
        })

        document.querySelectorAll("button, a, .nav-link-item").forEach((btn) => {
          btn.addEventListener("mouseenter", () => playMechanicalTick(false))
          btn.addEventListener("click", () => playMechanicalTick(true))
        })
      }
    }

    init()

    return () => {
      cancelled = true
      if (rafId) cancelAnimationFrame(rafId)
      if (lenisRef.current) lenisRef.current.destroy()
    }
  }, [])

  return (
    <main className="relative min-h-screen bg-[#0D0D0C] text-[#F4F4F0] select-none overflow-x-hidden">
      {/* Restored Golden Flowing Lines Animated Component */}
      <VantaBackground />

      <div className="relative z-10">
        <Cursor />
        <Nav onConsult={() => setIsOpen(true)} />
        
        <Hero onBook={() => setIsOpen(true)} image={SALON_IMAGES.heroBackdrop} />
        <Manifesto image={SALON_IMAGES.manifestoInterior} />
        <Collections images={[SALON_IMAGES.collectionHair, SALON_IMAGES.collectionBeard, SALON_IMAGES.collectionAtmosphere]} />
        <Membership />
        <Footprint onBook={() => setIsOpen(true)} image={SALON_IMAGES.footprintBasin} />
        
        <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </main>
  )
}
