"use client"

interface ArtisanProfile {
  name: string
  title: string
  discipline: string
  philosophy: string
}

const ARTISAN_TEAM: ArtisanProfile[] = [
  {
    name: "Master Artisan Kabir",
    title: "Senior Hair Architect",
    discipline: "Anatomical Scissor Work & Structural Tapering",
    philosophy: "Hair should be engineered to complement bone structure, moving naturally without heavy styling products."
  },
  {
    name: "Artisan Marcus",
    title: "Master Beard Sculptor",
    discipline: "Straight-Razor Lineage & Hot Towel Chemistry",
    philosophy: "A beard ritual is an exercise in restraint. The cleanest margins are defined by what you choose to leave behind."
  },
  {
    name: "Artisan Rohan",
    title: "Technical Color Director",
    discipline: "Low-Ammonia Tonal Realignment & Depth Mapping",
    philosophy: "Color shouldn't look painted; it should look inherited. We restore natural dimension and depth back into the silhouette."
  }
]

export function Artisans() {
  return (
    <section id="artisans" className="reveal relative w-full min-h-screen flex items-center justify-center py-24 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6 space-y-16 w-full text-left">
        
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#cca43b]">
            The Craftsmen
          </span>
          <h2 className="text-2xl md:text-3xl font-light uppercase tracking-widest text-white">
            Master Artisans
          </h2>
          <div className="h-[1px] w-12 bg-[#cca43b]/30" />
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {ARTISAN_TEAM.map((artisan, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col space-y-6 p-6 border border-neutral-900/60 bg-neutral-950/20 hover:border-[#cca43b]/30 transition-all duration-500 rounded-[2px]"
            >
              {/* Profile Image Portrait Container */}
              <div className="w-full aspect-[3/4] relative overflow-hidden bg-neutral-900 border border-neutral-800/40 shadow-xl">
                <img 
                  src="/Advance Cut image.jpeg" 
                  alt={artisan.name} 
                  className="w-full h-full object-cover filter grayscale contrast-[1.15] brightness-[0.8] transition-all duration-700 ease-out group-hover:scale-102 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Micro Designation Badge */}
                <span className="absolute bottom-4 left-4 text-[10px] font-mono tracking-widest text-[#cca43b] uppercase bg-black/40 backdrop-blur-md py-1 px-2.5 border border-[#cca43b]/20 rounded-[1px]">
                  {artisan.title}
                </span>
              </div>

              {/* Profile Metadata */}
              <div className="space-y-3">
                <h3 className="text-lg font-light uppercase tracking-wider text-white transition-colors duration-300 group-hover:text-[#cca43b]">
                  {artisan.name}
                </h3>
                
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-widest text-neutral-500 block">
                    Core Discipline
                  </span>
                  <p className="text-xs text-neutral-300 font-light">
                    {artisan.discipline}
                  </p>
                </div>

                <div className="h-[1px] w-full bg-neutral-900" />

                <p className="text-xs text-neutral-400 font-light leading-relaxed italic">
                  "{artisan.philosophy}"
                </p>
              </div>

              {/* Ornamental Card Accent Lines */}
              <div className="absolute top-0 left-0 w-[1px] h-0 bg-[#cca43b]/40 transition-all duration-700 group-hover:h-full" />
              <div className="absolute bottom-0 right-0 w-0 h-[1px] bg-[#cca43b]/40 transition-all duration-700 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Trust Footnote */}
        <div className="pt-4 flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-neutral-900" />
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            All artisans undergo continuous training in classical and editorial silhouettes
          </span>
        </div>

      </div>
    </section>
  )
}
