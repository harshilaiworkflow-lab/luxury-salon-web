"use client"

const MEMBERSHIP_TERMS = [
  "Membership is Non-Refundable.",
  "No top-up in any membership.",
  "The discount is not valid with any other offer.",
  "Membership is not valid in other Advance Cut outlet.",
  "Membership discount is applicable on current rate card."
]

export default function Membership() {
  return (
    <section id="membership" className="reveal relative w-full py-32 bg-[#0A0A0A] border-t border-neutral-900/40">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start w-full">
        
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="space-y-2">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#cca43b]">
              The Tier Registry
            </span>
            <h2 className="text-2xl md:text-3xl font-light uppercase tracking-widest text-white">
              Private Membership
            </h2>
            <div className="h-[1px] w-12 bg-[#cca43b]/30" />
          </div>
          <p className="text-xs text-neutral-400 font-light leading-relaxed">
            Advance Cut memberships are calibrated for individuals who view grooming as an essential architectural maintenance structure. Members gain priority booking privileges across our master tier craftsmen.
          </p>
        </div>

        <div className="lg:col-span-7 w-full bg-neutral-950/40 border border-neutral-900/60 p-8 md:p-12 rounded-[2px] text-left relative group hover:border-[#cca43b]/20 transition-all duration-500">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#cca43b] block mb-6">
            Associated Terms & Guidelines
          </span>
          
          <ul className="space-y-4">
            {MEMBERSHIP_TERMS.map((term, idx) => (
              <li key={idx} className="flex items-start space-x-4">
                <span className="text-[11px] font-mono text-[#cca43b] mt-1.5 select-none">
                  0{idx + 1}
                </span>
                <p className="text-xs text-neutral-300 font-light tracking-wide leading-relaxed">
                  {term}
                </p>
              </li>
            ))}
          </ul>

          <div className="absolute top-0 left-0 w-[1px] h-0 bg-[#cca43b]/20 transition-all duration-500 group-hover:h-full" />
        </div>

      </div>
    </section>
  )
}
