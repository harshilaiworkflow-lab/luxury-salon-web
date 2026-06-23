"use client"

export function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Vanta 3D canvas layer */}
      <div id="vanta-canvas" className="absolute inset-0 z-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-background/85 via-background/70 to-background" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-background/65" />

      <div className="relative z-20 flex flex-col items-center px-6 pt-28 text-center md:pt-12">
        <p className="reveal mb-8 text-[10px] uppercase tracking-[0.6em] text-gold md:text-xs">
          Grooming Atelier · Est. 2012
        </p>

        <h1 className="reveal flex flex-col items-center leading-[0.85]">
          <span className="font-sans text-6xl font-semibold uppercase tracking-tight text-foreground sm:text-8xl md:text-[10rem]">
            Advance
          </span>
          <span className="text-outline-gold font-sans text-6xl font-semibold uppercase tracking-tight sm:text-8xl md:text-[10rem]">
            Cut
          </span>
        </h1>

        <p className="reveal mt-10 max-w-md text-balance font-serif text-lg italic text-muted-foreground md:text-xl">
          Thirteen years of grooming mastery, distilled into a single, deliberate craft.
        </p>

        <button
          type="button"
          onClick={onBook}
          className="reveal group mt-12 flex items-center gap-4 bg-foreground px-10 py-4 text-[11px] uppercase tracking-[0.35em] text-background transition-colors duration-300 hover:bg-gold"
        >
          Book Appointment
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
        Scroll
      </div>
    </section>
  )
}
