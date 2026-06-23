"use client"

import { useEffect, useRef, useState } from "react"
import { BRANCHES } from "./data"
import { Triquetra } from "./triquetra"

export function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, onClose])

  // Reset success state when reopened
  useEffect(() => {
    if (isOpen) setSubmitted(false)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Request a booking"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 backdrop-blur-xl animate-in fade-in duration-300"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-lg border border-white/10 bg-card/80 p-8 shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-2 duration-300 md:p-12"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-6 top-6 text-xs uppercase tracking-[0.3em] text-muted-foreground transition-colors duration-200 hover:text-gold"
        >
          Close &times;
        </button>

        <div className="mb-8 flex flex-col items-center text-center">
          <Triquetra className="mb-5 size-9 text-gold" />
          <h2 className="text-2xl font-semibold uppercase tracking-[0.2em] text-foreground">
            Reserve
          </h2>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            A concierge will confirm shortly
          </p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-10 text-center">
            <p className="font-serif text-2xl italic text-gold">Request received.</p>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Thank you. Our team will reach out to confirm your preferred branch and time.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 border border-gold/60 px-6 py-3 text-[11px] uppercase tracking-[0.3em] text-gold transition-colors duration-300 hover:bg-gold hover:text-primary-foreground"
            >
              Done
            </button>
          </div>
        ) : (
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
          >
            <Field label="Name">
              <input
                required
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your full name"
                className="w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none"
              />
            </Field>

            <Field label="Phone Number">
              <input
                required
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="+91 00000 00000"
                className="w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none"
              />
            </Field>

            <Field label="Preferred Branch">
              <select
                required
                name="branch"
                defaultValue=""
                className="w-full border-b border-border bg-transparent py-3 text-foreground focus:border-gold focus:outline-none [&>option]:bg-card"
              >
                <option value="" disabled>
                  Select a branch
                </option>
                {BRANCHES.map((b) => (
                  <option key={b.code} value={`${b.name} (${b.city})`}>
                    {b.name} &mdash; {b.city}
                  </option>
                ))}
              </select>
            </Field>

            <button
              type="submit"
              className="mt-4 bg-foreground py-4 text-[11px] uppercase tracking-[0.35em] text-background transition-colors duration-300 hover:bg-gold"
            >
              Confirm Request
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[10px] uppercase tracking-[0.35em] text-gold">{label}</span>
      {children}
    </label>
  )
}
