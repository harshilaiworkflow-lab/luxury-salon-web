"use client"

interface ManifestoProps {
  image?: string
}

export function Manifesto({ image }: ManifestoProps) {
  return (
    <section id="manifesto" className="reveal relative w-full min-h-screen flex items-center justify-center py-24 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#cca43b]">
              The Manifesto
            </span>
            <div className="h-[1px] w-12 bg-[#cca43b]/30" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-white leading-[1.3] split-words">
            For over <span className="italic font-serif text-[#cca43b]">thirteen years</span>, we have refined a single obsession in Gurugram — the art of grooming as a deliberate, unhurried ritual.
          </h2>
          
          <p className="text-sm md:text-base text-neutral-400 max-w-xl leading-relaxed font-light">
            Not a chair. Not a service. A discipline. Every cut, every tone, every ritual is 
            executed by hands that have practiced restraint as much as technique. This is 
            grooming stripped of excess — precise, editorial, and entirely yours.
          </p>
          
          <div className="pt-4 flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Our Heritage Blueprint
            </span>
            <div className="h-[1px] flex-1 bg-neutral-800" />
          </div>
        </div>

        {/* Right Column: Visual Container */}
        <div className="lg:col-span-5 w-full aspect-[4/5] relative bg-neutral-900 border border-neutral-800/40 overflow-hidden group shadow-2xl">
          <img 
            src={image || "/Advance cut image.jpeg"} 
            alt="Advance Cut Grooming Atelier Interior" 
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            loading="eager"
            onError={(e) => {
              // Failsafe backup if the path resolving acts up
              (e.target as HTMLImageElement).src = "/Advance cut image.jpeg"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 via-transparent to-transparent pointer-events-none" />
          
          {/* Ornamental Frame Corners */}
          <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-[#cca43b]/40" />
          <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-[#cca43b]/40" />
        </div>

      </div>
    </section>
  )
}
