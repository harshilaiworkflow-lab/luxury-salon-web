import { BRANCHES } from "./data"
import { Triquetra } from "./triquetra"

export function Footprint({ onBook }: { onBook: () => void }) {
  return (
    <section id="footprint" className="relative scroll-mt-24 px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-16 text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.6em] text-gold md:text-xs">The Footprint</p>
          <h2 className="split-words text-4xl font-semibold uppercase tracking-[0.15em] text-foreground sm:text-5xl md:text-6xl">
            Six Houses
          </h2>
        </div>

        <div className="reveal grid grid-cols-1 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {BRANCHES.map((b) => (
            <div
              key={b.code}
              className="group relative flex flex-col gap-3 border-b border-r border-border px-8 py-12 transition-colors duration-300 hover:bg-secondary"
            >
              <span className="font-serif text-3xl text-gold/60 transition-colors duration-300 group-hover:text-gold">
                {b.code}
              </span>
              <span className="text-xl font-medium uppercase tracking-[0.15em] text-foreground md:text-2xl">
                {b.name}
              </span>
              <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{b.city}</span>
            </div>
          ))}
        </div>
      </div>

      <footer className="mx-auto mt-32 flex max-w-7xl flex-col items-center gap-8 border-t border-border pt-16 text-center">
        <Triquetra className="size-10 text-gold" />
        <p className="max-w-md text-balance font-serif text-2xl italic text-foreground">
          Your appointment is the beginning of the ritual.
        </p>
        <button
          type="button"
          onClick={onBook}
          className="border border-gold/60 px-8 py-3.5 text-[11px] uppercase tracking-[0.3em] text-gold transition-colors duration-300 hover:bg-gold hover:text-primary-foreground"
        >
          Book Appointment
        </button>
        <p className="mt-8 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          Advance Cut Salon · Gurugram &amp; Hisar
        </p>
      </footer>
    </section>
  )
}
