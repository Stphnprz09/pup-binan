import { ScrollReveal } from '../common/ScrollReveal'

export function WelcomeSection() {
  return (
    <section id="welcome" className="relative overflow-hidden px-5 py-20 lg:px-8 lg:py-28">
      <div className="absolute right-0 top-0 -z-10 h-full w-1/3 bg-[#8a1724]/[0.03]" />
      <ScrollReveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#750d19] px-7 py-14 text-white shadow-xl sm:px-12 lg:px-20 lg:py-16">
          <div className="absolute -right-20 -top-24 size-80 rounded-full border-[52px] border-white/[0.06]" />
          <div className="absolute -bottom-20 right-1/4 size-44 rounded-full bg-amber-300/[0.08]" />
          <p className="relative text-xs font-bold uppercase tracking-[0.28em] text-amber-300">A warm PUP Biñan welcome</p>
          <div className="relative mt-5 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Welcome, AACCUP Accreditors!</h2>
            <div className="hidden h-px w-28 bg-amber-300 lg:block" />
          </div>
          <p className="relative mt-5 max-w-2xl leading-7 text-white/70">
            We are honored to share our academic community, quality practices, and continuing commitment to accessible and transformative education.
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}
