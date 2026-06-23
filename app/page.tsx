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

// WORLD-CLASS CONTENT REGISTRY (MATCHING WEBP EXTENSIONS)
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

  useEffect(() => {
    let rafId = 0
    async function init() {
      const { Lenis } = await import("https://cdn.jsdelivr.net/npm/lenis@1.1.20/dist/lenis.min.js")
      const lenis = new Lenis({ duration: 1.2, smoothWheel: true })
      lenisRef.current = lenis
      const raf = (time: number) => { lenis.raf(time); rafId = requestAnimationFrame(raf) }
      rafId = requestAnimationFrame(raf)
    }
    init()
    return () => { if (rafId) cancelAnimationFrame(rafId) }
  }, [])

  return (
    <main className="relative min-h-screen bg-[#0D0D0C] text-[#F4F4F0] select-none overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        html, body { background-color: #0D0D0C !important; color: #F4F4F0 !important; }
        main img { filter: grayscale(0.12) contrast(1.08) brightness(0.85) !important; border: 1px solid rgba(193, 127, 83, 0.15) !important; }
        .text-primary { color: #C17F53 !important; }
        .border-primary { border-color: rgba(193, 127, 83, 0.4) !important; }
      `}} />

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
