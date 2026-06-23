"use client"

import { useState } from "react"
import { COLLECTIONS, type Collection } from "./data"

function ServiceGrid({ collection }: { collection: Collection }) {
  return (
    <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
      {collection.groups.map((group) => (
        <div key={group.label}>
          <h4 className="mb-5 text-[10px] uppercase tracking-[0.4em] text-gold">{group.label}</h4>
          <ul>
            {group.services.map((service) => (
              <li key={service} data-cursor className="group relative border-t border-border">
                <div className="flex items-center justify-between py-4">
                  <span className="text-base tracking-wide text-muted-foreground transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-foreground md:text-lg">
                    {service}
                  </span>
                  <span className="text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    &rarr;
                  </span>
                </div>
                {/* ultra-thin gold underline sliding left → right on hover */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export function Collections() {
  const [active, setActive] = useState<"men" | "women">("men")

  return (
    <section id="collections" className="relative scroll-mt-24 px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-16 text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.6em] text-gold md:text-xs">
            The Collections Terminal
          </p>
          <h2 className="split-words text-4xl font-semibold uppercase tracking-[0.15em] text-foreground sm:text-5xl md:text-6xl">
            Choose Your Atelier
          </h2>
        </div>

        {/* Dual-column selector */}
        <div className="reveal grid grid-cols-1 border border-border md:grid-cols-2">
          {(Object.keys(COLLECTIONS) as Array<"men" | "women">).map((key) => {
            const col = COLLECTIONS[key]
            const isActive = active === key
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActive(key)}
                aria-pressed={isActive}
                className={`group relative flex flex-col items-center justify-center px-8 py-14 text-center transition-colors duration-500 md:py-20 ${
                  isActive ? "bg-gold text-primary-foreground" : "bg-transparent text-foreground hover:bg-secondary"
                } ${key === "men" ? "border-b border-border md:border-b-0 md:border-r" : ""}`}
              >
                <span className="text-2xl font-semibold uppercase tracking-[0.2em] sm:text-3xl md:text-4xl">
                  {col.title}
                </span>
                <span
                  className={`mt-3 text-xs uppercase tracking-[0.3em] transition-colors duration-500 ${
                    isActive ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {col.tagline}
                </span>
              </button>
            )
          })}
        </div>

        {/* Revealed service grid */}
        <div key={active} className="mt-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <ServiceGrid collection={COLLECTIONS[active]} />
        </div>
      </div>
    </section>
  )
}
