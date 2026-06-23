"use client"

import { Triquetra } from "./triquetra"

const LINKS = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Collections", href: "#collections" },
  { label: "Membership", href: "#membership" },
  { label: "Footprint", href: "#footprint" },
]

export function Nav({ onConsult }: { onConsult: () => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-center gap-3" aria-label="Advance Cut Salon home">
          <Triquetra className="size-8 text-gold" />
          <span className="hidden text-sm font-medium uppercase tracking-[0.35em] text-foreground sm:block">
            Advance Cut
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={onConsult}
          className="border border-gold/60 px-5 py-2.5 text-[10px] uppercase tracking-[0.3em] text-gold transition-colors duration-300 hover:bg-gold hover:text-primary-foreground md:text-xs"
        >
          Request Consultation
        </button>
      </div>
    </header>
  )
}
