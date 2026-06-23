"use client"

export function Manifesto() {
  return (
    <section id="manifesto" className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-12 bg-[#0D0D0C]">
      {/* Structural Vertical Slat Accent Inspired by the Salon Entrance */}
      <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#C17F53]/15 to-transparent hidden xl:block" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* LEFT COLUMN: Editorial Copy Layer (7 Cols) */}
        <div className="lg:col-span-7 text-left flex flex-col justify-center space-y-8 reveal">
          <div className="space-y-3">
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#C17F53] uppercase font-semibold">
              The Manifesto
            </p>
            <div className="w-8 h-[1px] bg-[#C17F53]/40" />
          </div>

          <h2 className="text-4xl md:text-5xl xl:text-6xl text-[#F4F4F0] leading-[1.15] font-light font-serif">
            For over <span className="text-[#C17F53] italic font-normal">thirteen years</span>, we have refined a single obsession in Gurugram — the art of grooming as a deliberate, unhurried ritual.
          </h2>

          <p className="text-sm md:text-base text-[#F4F4F0]/60 font-light max-w-xl leading-relaxed tracking-wide">
            Not a chair. Not a service. A discipline. Every cut, every tone, every ritual is executed by 
            hands that have practiced restraint as much as technique. This is grooming stripped of 
            excess — precise, editorial, and entirely yours.
          </p>
          
          <div className="pt-4">
            <div className="inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-[#C17F53] font-mono cursor-pointer group">
              <span>Our Heritage Blueprint</span>
              <span className="w-6 h-[1px] bg-[#C17F53] transition-all duration-300 group-hover:w-12" />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Architectural Visual Display Panel (5 Cols) */}
        <div className="lg:col-span-5 relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] xl:aspect-[3/4] reveal">
          {/* Asymmetric Framed Background Panel inspired by the stone texture walls */}
          <div className="absolute inset-0 bg-[#161614] border border-[#C17F53]/10 translate-x-4 translate-y-4 z-0" />
          
          {/* Main Showcase Image Slot — Pointing directly to your beautiful interior */}
          <div className="absolute inset-0 z-10 overflow-hidden bg-[#1C1C1A] border border-[#C17F53]/20">
            <img 
              src="/salon-interior.jpg" 
              alt="Advance Cut Grooming Atelier Interior" 
              className="w-full h-full object-cover grayscale contrast-115 hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                // Elegant structural placeholder if the image file isn't uploaded yet
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
                      <div className="font-serif italic text-xl text-[#C17F53]/60">Atelier Space</div>
                      <div className="font-mono text-[9px] tracking-widest text-[#F4F4F0]/30 uppercase">[ https://content3.jdmagicbox.com/v2/comp/delhi/u7/011pxx11.xx11.130703154845.q9u7/catalogue/advance-cut-salon-new-colony-gurgaon-salons-1krqi0el4f.jpg ]</div>
                    </div>
                  `;
                }
              }}
            />
          </div>

          {/* Geometric Accent Line pulling from the gold mirror panel details */}
          <div className="absolute bottom-6 -left-6 w-12 h-[1px] bg-[#C17F53] z-20" />
          <div className="absolute -bottom-6 left-6 w-[1px] h-12 bg-[#C17F53] z-20" />
        </div>

      </div>
    </section>
  )
}
