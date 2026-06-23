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
    let globalScrollHandler: ((e: MouseEvent) => void) | null = null

    const revealFallback = () => {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        el.style.opacity = "1"
        el.style.transform = "none"
      })
    }

    async function init() {
      try {
        await loadScript("https://cdn.jsdelivr.net/npm/lenis@1.1.20/dist/lenis.min.js")
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js")
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js")
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js")
        await loadScript("https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.topology.min.js")
      } catch (err) {
        console.log("[v0] CDN script load failed:", (err as Error).message)
        revealFallback()
        return
      }

      if (cancelled) return

      const { Lenis, gsap, ScrollTrigger, p5, VANTA } = window

      // --- 1. Smooth Scroll Engine & Velocity Modulation ---
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

        // Cinematic Navigation Anchor Gliding
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

      // --- 2. Kinetic Spatial Typography Reveals ---
      if (gsap && ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger)

        const items = gsap.utils.toArray<HTMLElement>(".reveal")
        items.forEach((el: HTMLElement) => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
          })
        })

        const headers = gsap.utils.toArray<HTMLElement>(".split-words")
        headers.forEach((el: HTMLElement) => {
          const words = splitIntoWords(el)
          gsap.set(words, { yPercent: 130, rotate: 2 })
          gsap.to(words, {
            yPercent: 0,
            rotate: 0,
            duration: 1.1,
            ease: "power4.out",
            stagger: 0.06,
            scrollTrigger: { trigger: el, start: "top 85%" },
          })
        })

        // Magnetic Hover Fields (Tactile Button Mass)
        const interactiveTargets = document.querySelectorAll("button, a, [role='button']")
        interactiveTargets.forEach((btn: any) => {
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
              duration: 0.6,
              ease: "elastic.out(1.1, 0.4)"
            })
          })
        })

        // Luxury Copy Mutations
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

      // --- 3. Hardware-Accelerated Generative Mesh ---
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

  // --- Pillar 4 Integration: Heavy Vacuum-Sealed Modal Sequences ---
  useEffect(() => {
    const lenis = lenisRef.current
    if (isOpen) {
      lenis?.stop()
      document.body.style.overflow = "hidden"
      
      // Delay slightly to give Next.js/React layout cycles a frame to inject the elements
      requestAnimationFrame(() => {
        setTimeout(() => {
          // Robust multi-tier targeting vectors for V0 generated modal configurations
          const modalOverlay = document.querySelector('div[class*="backdrop-blur"], div[class*="fixed inset-0 bg-black/"]') as HTMLElement
          const modalBox = document.querySelector('div[role="dialog"], div[class*="bg-background"][class*="fixed"]') as HTMLElement
          
          if (window.gsap) {
            const tl = window.gsap.timeline()
            
            if (modalOverlay) {
              // Smooth heavy backdrop filter saturation
              tl.fromTo(modalOverlay, 
                { opacity: 0, backdropFilter: "blur(0px)" },
                { opacity: 1, backdropFilter: "blur(24px)", backgroundColor: "rgba(0,0,0,0.75)", duration: 0.6, ease: "power3.out" }
              )
            }
            
            if (modalBox) {
              // Elevate the container block using complex kinematic damping curves
              tl.fromTo(modalBox,
                { opacity: 0, scale: 0.93, y: 50, transformOrigin: "center center" },
                { opacity: 1, scale: 1, y: 0, duration: 0.85, ease: "power4.out" },
                "-=0.45" // Interlock timelines for a fluid transition merge
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

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <main className="relative min-h-screen bg-[#0A0A0A] select-none overflow-x-hidden">
      {/* HIGH-CONTRAST DIAMOND WHITE TYPOGRAPHY INJECTOR RULES */}
      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          background-color: #0A0A0A !important;
        }
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
        /* Heavy branding styling injection overrides for inputs and input panels */
        input, select, textarea {
          background-color: rgba(255,255,255,0.03) !important;
          border: 1px solid rgba(204,164,59,0.2) !important;
          color: #ffffff !important;
        }
        div[role="dialog"] h2, div[role="dialog"] p {
          color: #ffffff !important;
        }
      `}} />

      {/* 3D CANVAS BASE LAYER */}
      <div 
        id="vanta-canvas" 
        className="fixed inset-0 w-full h-full pointer-events-none" 
        style={{ zIndex: 1 }} 
      />

      {/* COMPONENT FOREGROUND VIEWPORT CONTAINER */}
      <div className="relative z-10">
        <Cursor />
        <Nav onConsult={open} />
        <Hero onBook={open} />
        <Manifesto />
        <Collections />
        <Membership />
        <Footprint onBook={open} />
        <BookingModal isOpen={isOpen} onClose={close} />
      </div>
    </main>
  )
}
