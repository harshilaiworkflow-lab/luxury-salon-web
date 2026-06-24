"use client"

const ARTISANS_DATA = [
  {
    badge: "Senior Tier",
    title: "The Hair Architect",
    discipline: "Anatomical Scissor Work & Structural Tapering",
    quote: "“Hair should be engineered to complement bone structure, moving naturally without heavy styling products.”",
    image: "/Advance Cut image.jpeg"
  },
  {
    badge: "Master Tier",
    title: "The Beard Sculptor",
    discipline: "Straight-Razor Lineage & Hot Towel Chemistry",
    quote: "“A beard ritual is an exercise in restraint. The cleanest margins are defined by what you choose to leave behind.”",
    image: "/Advance Cut image.jpeg"
  },
  {
    badge: "Director Tier",
    title: "The Technical Color Director",
    discipline: "Low-Ammonia Tonal Realignment & Depth Mapping",
    quote: "“Color shouldn't look painted; it should look inherited. We restore natural dimension and depth back into the silhouette.”",
    image: "/Advance Cut image.jpeg"
  }
]

export function Artisans() {
  return (
    <section id="artisans" className="reveal relative w-full py-32 bg-[#0A0A0A] border-t border-neutral-900/40">
      <div className="max-w-6xl mx-auto px-6 space-y-16 w-full">
        
        <div className="space-y-2 text-left">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#cca43b]">
              The Craftsmen
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light uppercase tracking-widest text-white">
            Master Artisans
          </h2>
          <div className="h-[1px] w-12 bg-[#cca43b]/30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {ARTISANS_DATA.map((art, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col space-y-6 p-6 border border-neutral-900/60 bg-neutral-950/20 hover:border-[#cca43b]/20 transition-all duration-500 rounded-[2px]"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900 rounded-[1px]">
                <img 
                  src={art.image} 
                  alt={art.title}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out scale-100 group-hover:scale-105"
                />
                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md border border-neutral-800/60 px-3 py-1 rounded-[1px]">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#cca43b]">
                    {art.badge}
                  </span>
                </div>
              </div>

              {/* Meta Content */}
              <div className="space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-base font-light uppercase tracking-wider text-white transition-colors duration-300 group-hover:text-[#cca43b]">
                    {art.title}
                  </h3>
                  
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 block">
                      Core Discipline
                    </span>
                    <p className="text-xs text-neutral-300 font-light leading-relaxed">
                      {art.discipline}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-900/60">
                  <p className="text-[11px] text-neutral-400 font-light italic leading-relaxed tracking-wide">
                    {art.quote}
                  </p>
                </div>
              </div>

              {/* Hover Accent Line */}
              <div className="absolute top-0 left-0 w-[1px] h-0 bg-[#cca43b]/20 transition-all duration-500 group-hover:h-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
