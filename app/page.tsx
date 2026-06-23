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

declare global {
  interface Window {
    Lenis?: any
    gsap?: any
    ScrollTrigger?: any
  }
}

// COMPLETE PREMIUM CONTENT REGISTRY (LOCAL WEBP PATHS)
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
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
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

    // --- HIGH-PERFORMANCE LUXURY FLOWING GOLDEN WAVES LOGIC ---
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext("2d")
      if (ctx) {
        let animationFrameId: number
        let phase = 0

        const resizeCanvas = () => {
          canvas.width = window.innerWidth
          canvas.height = window.innerHeight
        }
        window.addEventListener("resize", resizeCanvas)
        resizeCanvas()

        const drawWaves = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          phase += 0.003 // Controls the slow, luxurious speed of the flowing waves

          // Render 3 distinct overlapping fluid layers
          for (let l = 0; l < 3; l++) {
            ctx.beginPath()
            ctx.lineWidth = l === 0 ? 1.5 : 0.8
            
            // Premium Brand Asset Color Interpolation (#C17F53) with micro-opacities
            const alpha = l === 0 ? 0.12 : l === 1 ? 0.06 : 0.03
            ctx.strokeStyle = `rgba(193, 127, 83, ${alpha})`

            for (let x = 0; x < canvas.width; x += 2) {
              // Mathematical sine formula creating sophisticated organic flowing paths
              const y = 
                canvas.height * 0.55 +
                Math.sin(x * 0.002 + phase + l * 1.5) * 70 * Math.sin(phase * 0.5) +
                Math.cos(x * 0.001 - phase * 0.8 + l) * 40
              
              if (x === 0) ctx.moveTo(x, y)
              else ctx.lineTo(x, y)
            }
            ctx.stroke()
          }
          animationFrameId = requestAnimationFrame(drawWaves)
        }
        drawWaves()

        return () => {
          cancelAnimationFrame(animationFrameId)
          window.removeEventListener("resize", resizeCanvas)
        }
      }
    }

    // --- SCRIPT LOADER & SMOOTH INTERACTIVITY ---
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
      {/* ARCHITECTURAL LUXURY GLOBAL LOOK & FEEL INTERPOLATION */}
      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          background-color: #0D0D0C !important;
          color: #F4F4F0 !important;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
        }

        main section {
          padding-top: 10rem !important;
          padding-bottom: 10rem !important;
          border-bottom: 1px solid rgba(193, 127, 83, 0.08);
          position: relative;
        }

        /* High-Contrast Luxury Print Filters with Automatic Asset Fallbacks */
        main img, main video {
          filter: grayscale(0.12) contrast(1.08) brightness(0.85) !important;
          border: 1px solid rgba(193, 127, 83, 0.15) !important;
          box-shadow: 0 20px 45px rgba(0,0,0,0.6);
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
          background: linear-gradient(135deg, #141412 0%, #211A14 50%, #1A130E 100%) !important;
        }
        main img:hover {
          transform: scale(1.02);
        }

        main h1, main h2 {
          font-family: "Playfair Display", "Didot", "Bodoni MT", serif !important;
          font-weight: 300 !important;
          letter-spacing: -0.01em !important;
          color: #F4F4F0 !important;
        }

        .text-primary, [class*="text-gold"], .font-outline {
          color: #C17F53 !important;
        }
        
        .border-primary, [class*="border-gold"] {
          border-color: rgba(193, 127, 83, 0.4) !important;
        }

        button, .btn-prime {
          background-color: transparent !important;
          border: 1px solid rgba(193, 127, 83, 0.3) !important;
          color: #F4F4F0 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.15em !important;
          font-size: 11px !important;
          padding: 1rem 2.5rem !important;
          transition: all 0.4s ease !important;
        }
        button:hover {
          background-color: #C17F53 !important;
          color: #0D0D0C !important;
          border-color: #C17F53 !important;
        }
      `}} />

      {/* Dynamic Fluid Golden Wave Layer Canvas */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 w-full h-full pointer-events-none z-[2]"
      />

      {/* Luxury Tactile Fine-Linen Surface Film */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none select-none z-[999]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.012'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Premium Interior Ambient Warm Lighting Profiles */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-[1] opacity-35">
        <div className="absolute top-[-10%] left-[-20%] w-[60vw] h-[60vw] rounded-full bg-radial from-[#C17F53]/10 to-transparent blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-radial from-[#8C7A6B]/10 to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Cursor />
        <Nav onConsult={() => setIsOpen(true)} />
        
        <Hero onBook={() => setIsOpen(true)} image={SALON_IMAGES.heroBackdrop} />
        
        <div className="w-full max-w-6xl mx-auto px-4 my-8 h-[1px] bg-gradient-to-r from-transparent via-[#C17F53]/20 to-transparent" />
        
        <Manifesto image={SALON_IMAGES.manifestoInterior} />
        <Collections images={[SALON_IMAGES.collectionHair, SALON_IMAGES.collectionBeard, SALON_IMAGES.collectionAtmosphere]} />
        <Membership />
        <Footprint onBook={() => setIsOpen(true)} image={SALON_IMAGES.footprintBasin} />
        
        <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </main>
  )
}
