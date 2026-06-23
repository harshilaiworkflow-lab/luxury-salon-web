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
    p5?: any
    VANTA?: any
  }
}

// PREMIUM IMAGE REGISTRY - UPDATED WITH THE EXACT UPLOADED EXTENSIONS
const SALON_IMAGES = {
  heroBackdrop: "/advance-cut-salon-new-colony-gurgaon-salons-1krqi0el4f.jpg.webp",
  manifestoInterior: "/advance-cut-salon-new-colony-gurgaon-salons-nfdmmk76tj.jpg.avif", // Fixed to .avif
  collectionHair: "/advance-cut-salon-new-colony-gurgaon-salons-1krqi0el4f.jpg.webp",
  collectionBeard: "/advance-cut-salon-new-colony-gurgaon-salons-nfdmmk76tj.jpg.avif",   // Fixed to .avif
  collectionAtmosphere: "/advance-cut-salon-new-colony-gurgaon-salons-1krqi0el4f.jpg.webp",
  footprintBasin: "/advance-cut-salon-new-colony-gurgaon-salons-nfdmmk76tj.jpg.avif"     // Fixed to .avif
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
  const [sonicWaveActive, setSonicWaveActive] = useState(false)
  const lenisRef = useRef<any>(null)
  const audioCtxRef = useRef<AudioContext | null>(null)

  // Pure Code-Synthesized Mechanical Haptic Tick (Zero Asset Overhead)
  const playMechanicalTick = (isClick = false) => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }
      
      const ctx = audioCtxRef.current
      if (ctx.state === "suspended") {
        ctx.resume()
      }

      const osc = ctx.createOscillator()
      const gainNode = ctx.createGain()

      osc.type = "sine"
      osc.frequency.setValueAtTime(isClick ? 800 : 1600, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(isClick ? 150 : 400, ctx.currentTime + 0.015)

      gainNode.gain.setValueAtTime(isClick ? 0.06 : 0.018, ctx.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.015)

      osc.connect(gainNode)
      gainNode.connect(ctx.destination)

      osc.start()
      osc.stop(ctx.currentTime + 0.016)

      // Trigger the Sonic UI visualization feedback sheet
      setSonicWaveActive(true)
      setTimeout(() => setSonicWaveActive(false), 150)
    } catch (e) {
      // Audio fallback silent to maintain stability
    }
  }

  useEffect(() => {
    let vantaEffect: any = null
    let rafId = 0
    let cancelled = false
    let globalScrollHandler: ((e: MouseEvent) => void) | null = null

    const revealFallback = () => {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        el.style.opacity = "1"
        el.style.transform = "none"
        el.style.clipPath = "none"
      })
    }

    async function init() {
      try {
        // Parallel Script Optimization Core
        await Promise.all([
          loadScript("https://cdn.jsdelivr.net/npm/lenis@1.1.20/dist/lenis.min.js"),
          loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"),
          loadScript("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js")
        ])

        if (cancelled) return

        await Promise.all([
          loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"),
          loadScript("https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.topology.min.js")
        ])
      } catch (err) {
        console.log("[v0] Core system bypass:", (err as Error).message)
        revealFallback()
        return
      }

      if (cancelled) return

      const { Lenis, gsap, ScrollTrigger, p5, VANTA } = window

      // --- Smooth Scroll Architecture ---
      if (Lenis) {
        const lenis = new Lenis({ duration: 1.4, smoothWheel: true })
        lenisRef.current = lenis
        const raf = (time: number) => {
          lenis.raf(time)
          if (vantaEffect && vantaEffect.options) {
            const velocity = Math.abs(lenis.velocity || 0)
            vantaEffect.options.scale = 1.0 + Math.min(velocity * 0.04, 0.25)
          }
          rafId = requestAnimationFrame(raf)
        }
        rafId = requestAnimationFrame(raf)
        if (ScrollTrigger) lenis.on("scroll", ScrollTrigger.update)

        globalScrollHandler = (e: MouseEvent) => {
          const target = e.target as HTMLElement
          const anchor = target.closest("a")
          if (anchor) {
            const href = anchor.getAttribute("href")
            if (href && href.startsWith("#")) {
              e.preventDefault()
              const targetSection = document.querySelector(href)
              if (targetSection) {
                lenis.scrollTo(targetSection, {
                  offset: -20,
                  duration: 1.6,
                  immediate: false
                })
              }
            }
          }
        }
        document.addEventListener("click", globalScrollHandler)
      }

      // --- Spatial Layout Animations & Premium Sound Mapping ---
      if (gsap && ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger)

        // Kinetic Aperture/Shutter Reveal on Section elements
        const items = gsap.utils.toArray<HTMLElement>(".reveal")
        items.forEach((el: HTMLElement) => {
          gsap.fromTo(el, 
            { opacity: 0, y: 30, clipPath: "inset(40% 0% 40% 0%)" },
            {
              opacity: 1,
              y: 0,
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.4,
              ease: "power4.inOut",
              scrollTrigger: { trigger: el, start: "top 88%" },
            }
          )
        })

        const headers = gsap.utils.toArray<HTMLElement>(".split-words")
        headers.forEach((el: HTMLElement) => {
          const words = splitIntoWords(el)
          gsap.set(words, { yPercent: 130, rotate: 1 })
          gsap.to(words, {
            yPercent: 0,
            rotate: 0,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.05,
            scrollTrigger: { trigger: el, start: "top 85%" },
          })
        })

        // Interactive Elements: Magnetic Grids + Mechanical Audio Bindings
        const interactiveTargets = document.querySelectorAll("button, a, [role='button'], .nav-link-item")
        interactiveTargets.forEach((btn: any) => {
          
          btn.addEventListener("mouseenter", () => playMechanicalTick(false))
          btn.addEventListener("click", () => playMechanicalTick(true))

          btn.addEventListener("mousemove", (e: MouseEvent) => {
            const bounds = btn.getBoundingClientRect()
            const mouseX = e.clientX - bounds.left - bounds.width / 2
            const mouseY = e.clientY - bounds.top - bounds.height / 2
            
            gsap.to(btn, {
              x: mouseX * 0.35,
              y: mouseY * 0.35,
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out"
            })
          })

          btn.addEventListener("mouseleave", () => {
            gsap.to(btn, {
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.5,
              ease: "elastic.out(1.1, 0.4)"
            })
          })
        })

        // Luxury Nomenclature Shifts
        document.querySelectorAll("button, a, span, h2, sub").forEach((el: any) => {
          if (!el.children.length && el.textContent) {
            const txt = el.textContent.trim()
            if (txt.toLowerCase() === "book appointment") {
              el.textContent = "Secure An Invitation"
            } else if (txt.toLowerCase() === "request consultation") {
              el.textContent = "Commence Private Intake"
            } else if (txt.toLowerCase() === "footprint") {
              el.textContent = "The Ateliers"
            }
          }
        })

        ScrollTrigger.refresh()
      } else {
        revealFallback()
      }

      // --- Initialize Vanta Backdrop ---
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
          backgroundColor: 0x0a0a0a, 
          color: 0xcca43b,           
        })
        
        const canvasEl = document.getElementById("vanta-canvas")
        if (canvasEl) canvasEl.style.opacity = "0.45"
      }
    }

    init()

    return () => {
      cancelled = true
      if (rafId) cancelAnimationFrame(rafId)
      if (globalScrollHandler) document.removeEventListener("click", globalScrollHandler)
      if (vantaEffect) {
        try { vantaEffect.destroy() } catch {}
      }
      if (lenisRef.current) {
        try { lenisRef.current.destroy() } catch {}
        lenisRef.current = null
      }
      if (window.ScrollTrigger) window.ScrollTrigger.getAll().forEach((t: any) => t.kill())
    }
  }, [])

  // Heavy Vacuum-Sealed Modal Sequence
  useEffect(() => {
    const lenis = lenisRef.current
    if (isOpen) {
      lenis?.stop()
      document.body.style.overflow = "hidden"
      
      requestAnimationFrame(() => {
        setTimeout(() => {
          const modalOverlay = document.querySelector('div[class*="backdrop-blur"], div[class*="fixed inset-0 bg-black/"]') as HTMLElement
          const modalBox = document.querySelector('div[role="dialog"], div[class*="bg-background"][class*="fixed"]') as HTMLElement
          
          if (window.gsap) {
            const tl = window.gsap.timeline()
            if (modalOverlay) {
              tl.fromTo(modalOverlay, 
                { opacity: 0, backdropFilter: "blur(0px)" },
                { opacity: 1, backdropFilter: "blur(24px)", backgroundColor: "rgba(0,0,0,0.75)", duration: 0.6, ease: "power3.out" }
              )
            }
            if (modalBox) {
              tl.fromTo(modalBox,
                { opacity: 0, scale: 0.93, y: 50, transformOrigin: "center center" },
                { opacity: 1, scale: 1, y: 0, duration: 0.85, ease: "power4.out" },
                "-=0.45"
              )
            }
          }
        }, 40)
      })
    } else {
      lenis?.start()
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const open = () => {
    playMechanicalTick(true)
    setIsOpen(true)
  }
  const close = () => {
    playMechanicalTick(true)
    setIsOpen(false)
  }

  return (
    <main className="relative min-h-screen bg-[#0A0A0A] select-none overflow-x-hidden">
      {/* GLOBAL LUXURY ENGINE SHEET */}
      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          background-color: #0A0A0A !important;
          text-rendering: optimizeLegibility !important;
          -webkit-font-smoothing: antialiased !important;
        }

        /* Cinematic Media Treatments */
        main img, main video, [style*="background-image"] {
          filter: contrast(1.08) brightness(0.88) saturate(0.85) !important;
          border-radius: 2px !important;
        }

        /* Generous Symmetrical Breathing Room */
        main section {
          padding-top: 12rem !important;
          padding-bottom: 12rem !important;
          min-height: 95vh !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
          align-items: center !important;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        main section > div {
          width: 100% !important;
          max-width: 1200px !important;
          margin-left: auto !important;
          margin-right: auto !important;
          text-align: center !important;
        }

        main h1, main h2 {
          letter-spacing: 0.14em !important;
          line-height: 1.25 !important;
        }
        
        main p {
          letter-spacing: 0.05em !important;
          line-height: 1.9 !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }

        /* High-Contrast Diamond White Overrides */
        main p, main span, main h1, main h2, main h3, main li, main a, main label, main div:not(#vanta-canvas) {
          color: #ffffff !important;
        }
        .text-primary, [class*="text-gold"], .split-words, [style*="color: rgb(204"] {
          color: #cca43b !important;
        }
        .font-outline {
          -webkit-text-stroke: 1px #cca43b !important;
          color: transparent !important;
        }
        input, select, textarea {
          background-color: rgba(255,255,255,0.03) !important;
          border: 1px solid rgba(204,164,59,0.2) !important;
          color: #ffffff !important;
        }
        div[role="dialog"] h2, div[role="dialog"] p {
          color: #ffffff !important;
        }

        /* VOLUMETRIC GOLD PARTICULATE ENGINE */
        @keyframes drift {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0; }
          50% { opacity: 0.15; }
          100% { transform: translateY(-120px) translateX(40px) rotate(360deg); opacity: 0; }
        }
        .particle {
          position: absolute;
          background: radial-gradient(circle, rgba(204,164,59,0.4) 0%, rgba(204,164,59,0) 70%);
          border-radius: 50%;
          pointer-events: none;
          mix-blend-mode: screen;
        }
      `}} />

      {/* Analog Film Grain Compositor Mask */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none select-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.012,
          zIndex: 9999
        }}
      />

      {/* 3D VOLUMETRIC BACKGROUND ENGINE */}
      <div 
        id="vanta-canvas" 
        className="fixed inset-0 w-full h-full pointer-events-none opacity-0 transition-opacity duration-1000" 
        style={{ zIndex: 1 }} 
      />

      {/* VOLUMETRIC PARTICULATE LAYER */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-[2]">
        <div className="particle w-[6px] h-[6px]" style={{ top: '20%', left: '15%', animation: 'drift 14s infinite linear' }} />
        <div className="particle w-[8px] h-[8px]" style={{ top: '65%', left: '80%', animation: 'drift 18s infinite linear', animationDelay: '2s' }} />
        <div className="particle w-[4px] h-[4px]" style={{ top: '45%', left: '45%', animation: 'drift 12s infinite linear', animationDelay: '5s' }} />
        <div className="particle w-[7px] h-[7px]" style={{ top: '80%', left: '25%', animation: 'drift 16s infinite linear', animationDelay: '1s' }} />
        <div className="particle w-[5px] h-[5px]" style={{ top: '10%', left: '70%', animation: 'drift 15s infinite linear', animationDelay: '4s' }} />
      </div>

      <div className="relative z-10">
        <Cursor />
        <Nav onConsult={open} />
        
        <Hero onBook={open} image={SALON_IMAGES.heroBackdrop} />
        <Manifesto image={SALON_IMAGES.manifestoInterior} />
        <Collections images={[SALON_IMAGES.collectionHair, SALON_IMAGES.collectionBeard, SALON_IMAGES.collectionAtmosphere]} />
        <Membership />
        <Footprint onBook={open} image={SALON_IMAGES.footprintBasin} />
        
        <BookingModal isOpen={isOpen} onClose={close} />
      </div>
    </main>
  )
}
