"use client"

import { useState } from "react"

const LOCATIONS = [
  "Sector 4",
  "Sector 9A",
  "Sector 15",
  "Sector 49",
  "New Colony",
  "Hisar"
]

export function BookingModal() {
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-md bg-neutral-950 border border-neutral-800 p-8 rounded-[2px] shadow-2xl">
        <h3 className="text-xl font-light uppercase tracking-widest text-white mb-6">
          Request Invitation
        </h3>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-neutral-500">
              Select House
            </label>
            <select 
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 text-white p-3 text-sm focus:outline-none focus:border-[#cca43b] transition-colors"
            >
              {LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
          
          <button className="w-full bg-[#cca43b] text-black py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#b08e32] transition-colors">
            Confirm Request
          </button>
        </div>
      </div>
    </div>
  )
}
