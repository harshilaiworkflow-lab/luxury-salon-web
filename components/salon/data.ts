export const BRANCHES = [
  { name: "New Colony", city: "Gurugram", code: "01" },
  { name: "Sector-4", city: "Gurugram", code: "02" },
  { name: "Sector-9A", city: "Gurugram", code: "03" },
  { name: "Sector-15", city: "Gurugram", code: "04" },
  { name: "Sector-49", city: "Gurugram", code: "05" },
  { name: "Complex", city: "Hisar", code: "06" },
] as const

export type Collection = {
  id: string
  title: string
  tagline: string
  groups: { label: string; services: string[] }[]
}

export const COLLECTIONS: Record<"men" | "women", Collection> = {
  men: {
    id: "men",
    title: "The Men's Atelier",
    tagline: "Precision grooming, engineered.",
    groups: [
      {
        label: "Hair Architecture",
        services: ["Signature Sculpt", "Skin Fade Study", "Beard Topology", "Hot Towel Ritual"],
      },
      {
        label: "Chromatography",
        services: ["Graphite Cover", "Salt & Pepper Blend", "Global Tone"],
      },
      {
        label: "Molecular Rituals",
        services: ["Keratin Recovery", "Scalp Detox Protocol", "Botox Smooth"],
      },
      {
        label: "Dermal Resurfacing",
        services: ["Charcoal Clarity Facial", "De-Tan Resurface", "Under-Eye Reset"],
      },
    ],
  },
  women: {
    id: "women",
    title: "The Women's Atelier",
    tagline: "Couture-grade transformation.",
    groups: [
      {
        label: "Hair Architecture",
        services: ["Editorial Cut", "Layered Movement", "Blow-Dry Couture", "Bridal Sculpt"],
      },
      {
        label: "Chromatography",
        services: ["Balayage Study", "Global Luxe Tone", "Highlight Cartography", "Gloss Seal"],
      },
      {
        label: "Molecular Rituals",
        services: ["Cysteine Therapy", "Nanoplastia", "Bond Repair Infusion"],
      },
      {
        label: "Dermal Resurfacing",
        services: ["Hydra Glow Facial", "Korean Glass Protocol", "Pigment Correction"],
      },
      {
        label: "High-Fashion Makeup",
        services: ["Editorial Glam", "Bridal Couture", "Soirée Definition"],
      },
    ],
  },
}
