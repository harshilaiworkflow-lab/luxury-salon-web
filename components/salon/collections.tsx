"use client"

import { useState } from "react"

interface CollectionsProps {
  images?: string[]
}

interface ServiceItem {
  name: string
  duration: string
  description: string
}

interface ServiceCategory {
  id: string
  title: string
  subtitle: string
  imageIndex: number
  services: ServiceItem[]
}

const MENU_DATA: ServiceCategory[] = [
  {
    id: "hair-architecture",
    title: "Hair Architecture",
    subtitle: "Precision engineering tailored to hair growth patterns and facial structure.",
    imageIndex: 0,
    services: [
      {
        name: "Editorial Cut & Sculpture",
        duration: "45 Mins",
        description: "Hand-sculpted wet/dry technique including an assessment of bone structure, charcoal scalp detox, and a custom styling finish."
      },
      {
        name: "Tonal Realignment & Blend",
        duration: "60 Mins",
        description: "Advanced grey blending or full tonal shift using low-ammonia botanical pigments to map depth back into the hair architecture."
      },
      {
        name: "Keratin Structural Infusion",
        duration: "90 Mins",
        description: "Deep molecular protein therapy designed to tame texture, eliminate frizz, and reinforce compromised hair cuticles."
      }
    ]
  },
  {
    id: "shave-rituals",
    title: "Shave Rituals",
    subtitle: "The unhurried art of straight-razor grooming and skin preparation.",
    imageIndex: 1,
    services: [
      {
        name: "The Royal Atelier Shave",
        duration: "60 Mins",
        description: "A 7-step hot towel compression ritual, rich pre-shave oil infusion, double straight-razor pass, and a cold-stone obsidian facial massage."
      },
      {
        name: "Beard Sculpting & Freehand Lineage",
        duration: "30 Mins",
        description: "Custom alignment mapping. Includes bulk control via freehand shear work, clean razor-shaved margins, and botanical oil conditioning."
      },
      {
        name: "Express Razor Outline",
        duration: "20 Mins",
        description: "A swift cheekline and neckline cleanup using a fresh steel blade, hot lather, and an post-shave cooling astringent mist."
      }
    ]
  },
  {
    id: "apothecary-treatments",
    title: "Apothecary Treatments",
    subtitle: "Advanced dermatological treatments for scalp and skin vitality.",
    imageIndex: 2,
    services: [
      {
        name: "Hyperbaric Scalp Purification",
        duration: "45 Mins",
        description: "An intensive micro-exfoliation treatment targeting hair follicles, paired with an ultrasonic tea tree rinse to maximize follicular oxygen intake."
      },
      {
        name: "Volcanic Clay Face Ritual",
        duration: "40 Mins",
        description: "Deep pore extraction using active volcanic sediment and activated charcoal, concluded with a premium peptide hydration shield."
      }
    ]
  }
]

export function Collections({ images = [] }: CollectionsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("hair-architecture")

  // Fallback fallback asset registry matching app/page.tsx
  const activeCategoryData = MENU_DATA.find((cat) => cat.id === activeCategory)
  const currentImageIndex = activeCategoryData ? activeCategoryData.imageIndex : 0
  const activeImage = images[currentImageIndex] || "/Advance Cut image.jpeg"

  return (
    <section id="collections" className="reveal relative w-full min-h-screen flex items-center justify-center py-24 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
        
        {/* Left Column: Dynamic Visual Showcase */}
        <div className="lg:col-span-5 w-full sticky top-32 aspect-[4/5] relative bg-neutral-900 border border-neutral-800/40 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-black/20 z-[1] pointer-events-none" />
          <img
            src={activeImage}
            alt="Advance Cut Curated Experience"
            className="w-full h-full object-cover transition-all duration-1000 ease-in-out scale-100"
            key={activeCategory} // Forces smooth re-fade trigger on asset changes
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent z-[2]" />
          
          {/* Ornamental Frame Corners */}
          <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-[#cca43b]/40 z-[3]" />
          <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-[#cca43b]/40 z-[3]" />
          <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-[#cca43b]/40 z-[3]" />
          <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-[#cca43b]/40 z-[3]" />
        </div>

        {/* Right Column: Interactive Luxury Accordion */}
        <div className="lg:col-span-7 space-y-8 w-full">
          <div className="space-y-2">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#cca43b]">
              The Menu
            </span>
            <h2 className="text-2xl md:text-3xl font-light uppercase tracking-widest text-white">
              Curated Rituals
            </h2>
            <div className="h-[1px] w-12 bg-[#cca43b]/30" />
          </div>

          <div className="divide-y divide-neutral-800/60 border-t border-b border-neutral-800/60">
            {MENU_DATA.map((category) => {
              const isOpen = activeCategory === category.id

              return (
                <div key={category.id} className="py-6 transition-colors duration-300">
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => setActiveCategory(category.id)}
                    className="w-full flex items-center justify-between text-left group focus:outline-none"
                  >
                    <div className="space-y-1 pr-4">
                      <h3 className={`text-lg md:text-xl font-light uppercase tracking-wider transition-colors duration-300 ${
                        isOpen ? "text-[#cca43b]" : "text-white group-hover:text-[#cca43b]/80"
                      }`}>
                        {category.title}
                      </h3>
                      <p className="text-xs text-neutral-500 font-light max-w-md">
                        {category.subtitle}
                      </p>
                    </div>

                    {/* Minimalist Interactive Icon Indicator */}
                    <div className="relative flex items-center justify-center w-6 h-6">
                      <span className={`absolute h-[1px] w-4 bg-[#cca43b] transition-transform duration-500 ease-out ${
                        isOpen ? "rotate-180" : ""
                      }`} />
                      <span className={`absolute h-4 w-[1px] bg-[#cca43b] transition-transform duration-500 ease-out ${
                        isOpen ? "rotate-90 opacity-0" : ""
                      }`} />
                    </div>
                  </button>

                  {/* Accordion Expansion Container */}
                  <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pt-8" : "grid-rows-[0fr] opacity-0"
                  }`}>
                    <div className="overflow-hidden space-y-6">
                      {category.services.map((service, idx) => (
                        <div 
                          key={idx} 
                          className="group/item flex flex-col md:flex-row md:items-start justify-between gap-2 pb-4 border-b border-dashed border-neutral-900 last:border-0 last:pb-0"
                        >
                          <div className="space-y-1 max-w-xl">
                            <h4 className="text-sm font-medium tracking-wide text-neutral-200 group-hover/item:text-white transition-colors">
                              {service.name}
                            </h4>
                            <p className="text-xs text-neutral-400 font-light leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                          <span className="text-xs font-mono tracking-widest text-[#cca43b] shrink-0 pt-0.5">
                            {service.duration}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="pt-4 flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              All services include personalized intake & herbal elixir pairing
            </span>
            <div className="h-[1px] flex-1 bg-neutral-900" />
          </div>
        </div>

      </div>
    </section>
  )
}
