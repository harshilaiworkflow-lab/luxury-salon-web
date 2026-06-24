"use client"

import { useState } from "react"

interface FootprintProps {
  onBook?: () => void
  image?: string
}

interface AtelierDetails {
  id: string
  name: string
  locality: string
  address: string
  hours: string
  phone: string
  mapsLink: string
}

const ATELIER_LOCATIONS: AtelierDetails[] = [
  {
    id: "gurugram-flagship",
    name: "The Gurugram Flagship",
    locality: "Golf Course Road, Sector 54",
    address: "Pavilion Level, Horizon Center Complex, Golf Course Road, Gurugram, Haryana 122002",
    hours: "08:00 AM – 09:00 PM Daily",
    phone: "+91 98100 XXXXX",
    mapsLink: "https://maps.google.com"
  },
  {
    id: "delhi-studio",
    name: "The Vasant Vihar Studio",
    locality: "South Delhi (Private Intake)",
    address: "First Floor, Basant Lok Community Centre, Vasant Vihar, New Delhi, Delhi 110057",
    hours: "By Private Invitation Only",
    phone: "+91 98100 XXXXX",
    mapsLink: "https://maps.google.com"
  }
]

export function Footprint({ onBook, image }: FootprintProps) {
  const [activeAtelier, setActiveAtelier] = useState<string>("gurugram-flagship")
  
  const currentAtelier = ATELIER_LOCATIONS.find(loc => loc.id === activeAtelier) || ATELIER_LOCATIONS[0]
  const displayImage = image || "/Advance Cut image.jpeg"

  return (
    <section id="footprint" className="reveal relative w-full min-h-screen flex items-center justify-center py-24 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left">
        
        {/* Left Column: Atelier Directory Logistics */}
        <div className="lg:col-span-7 space-y-10 w-full order-2 lg:order-1">
          <div className="space-y-2">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#cca43b]">
              The Footprint
            </span>
            <h2 className="text-2xl md:text-3xl font-light uppercase tracking-widest text-white">
              Our Ateliers
            </h2>
            <div className="h-[1px] w-12 bg-[#cca43b]/30" />
          </div>

          {/* Location Toggle Tabs */}
          <div className="flex flex-wrap gap-4 border-b border-neutral-900 pb-4">
            {ATELIER_LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveAtelier(loc.id)}
                className={`text-xs uppercase tracking-[0.2em] py-2 px-4 border transition-all duration-300 rounded-[2px] ${
                  activeAtelier === loc.id
                    ? "border-[#cca43b] text-[#cca43b] bg-[#cca43b]/5"
                    : "border-neutral-800/60 text-neutral-400 hover:text-white hover:border-neutral-700"
                }`}
              >
                {loc.locality}
              </button>
            ))}
          </div>

          {/* Active Location Logistics Card */}
          <div className="space-y-6 min-h-[220px] flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-light tracking-wide text-white">
                {currentAtelier.name}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">
                    Atelier Coordinate
                  </span>
                  <p className="text-sm text-neutral-300 font-light leading-relaxed">
                    {currentAtelier.address}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">
                      Operating Ritual Hours
                    </span>
                    <p className="text-sm text-neutral-300 font-light">
                      {currentAtelier.hours}
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">
                      Direct Concierge Line
                    </span>
                    <p className="text-sm font-mono text-[#cca43b] tracking-wider">
                      {currentAtelier.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Action Interactive Matrix */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={onBook}
                className="text-xs uppercase tracking-[0.2em] bg-[#cca43b] text-black font-medium py-3.5 px-8 rounded-[2px] hover:bg-[#e0b848] transition-colors shadow-lg"
              >
                Secure An Invitation
              </button>
              
              <a
                href={currentAtelier.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-600 py-3.5 px-6 rounded-[2px] transition-all"
              >
                Navigate via Map
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Visual Framing */}
        <div className="lg:col-span-5 w-full aspect-[4/5] relative bg-neutral-900 border border-neutral-800/40 overflow-hidden shadow-2xl order-1 lg:order-2">
          <img
            src={displayImage}
            alt="Advance Cut Physical Architecture"
            className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.05] saturate-[0.9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 via-transparent to-transparent pointer-events-none" />
          
          {/* Ornamental Frame Corners */}
          <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-[#cca43b]/40" />
          <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-[#cca43b]/40" />
        </div>

      </div>
    </section>
  )
}
