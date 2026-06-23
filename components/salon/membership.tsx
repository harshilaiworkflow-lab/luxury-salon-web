const PACT = [
  {
    code: "I",
    title: "Non-Refundable",
    body: "All membership commitments are final. Value is preserved as service credit, never returned as currency.",
  },
  {
    code: "II",
    title: "Outlet Lock-In",
    body: "Single-outlet memberships are bound to one branch. Multi-outlet access is available by private arrangement.",
  },
  {
    code: "III",
    title: "Exclusive Rate Card",
    body: "Members operate under a dedicated rate card, applicable solely to enrolled services and named holders.",
  },
]

export function Membership() {
  return (
    <section id="membership" className="relative scroll-mt-24 px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto max-w-5xl">
        <div className="reveal overflow-hidden border border-gold/30 bg-card">
          <div className="flex flex-col gap-2 border-b border-border px-8 py-10 text-center md:px-16 md:py-14">
            <p className="text-[10px] uppercase tracking-[0.6em] text-gold md:text-xs">The Membership Pact</p>
            <h2 className="split-words mt-3 text-3xl font-semibold uppercase tracking-[0.15em] text-foreground sm:text-4xl md:text-5xl">
              Concierge Agreement
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Admission to the Advance Cut club is governed by the following terms. By enrolling,
              members acknowledge and accept each clause in full.
            </p>
          </div>

          <div className="grid grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
            {PACT.map((clause) => (
              <article key={clause.code} className="reveal flex flex-col gap-4 px-8 py-12 md:px-10">
                <span className="font-serif text-4xl text-gold">{clause.code}</span>
                <h3 className="text-xs uppercase tracking-[0.3em] text-foreground">{clause.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{clause.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
