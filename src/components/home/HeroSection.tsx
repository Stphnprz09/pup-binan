import pupBinanImage from '../../assets/images/branding/pupbinan.webp'
import { ArrowIcon } from '../common/ArrowIcon'
import { ScrollReveal } from '../common/ScrollReveal'

export function HeroSection() {
  return (
    <section className="relative isolate grid min-h-[540px] place-items-center overflow-hidden px-5 py-20 text-center text-white sm:min-h-[600px] lg:min-h-[650px]">
      <img src={pupBinanImage} alt="PUP Biñan Campus" className="absolute inset-0 -z-20 size-full object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#39050b]/95 via-[#650b16]/78 to-black/60" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black/35 to-transparent" />

      <ScrollReveal className="mx-auto max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">PUP Biñan Campus</p>
        <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
          Shaping the future through quality education.
        </h1>
        <div className="mx-auto mt-7 h-1 w-28 rounded-full bg-amber-400" />
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
          Welcome to the official accreditation portal of the Polytechnic University of the Philippines — Biñan Campus.
        </p>
        <div className="mx-auto mt-9 flex max-w-md flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
          <a href="#welcome" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-amber-400 px-6 py-3.5 text-sm font-bold text-[#530812] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-amber-300 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-amber-300">
            Explore accreditation <ArrowIcon />
          </a>
          <a href="#programs" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/45 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white">
            View programs
          </a>
        </div>
      </ScrollReveal>
    </section>
  )
}
