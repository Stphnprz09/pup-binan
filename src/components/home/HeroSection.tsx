import pupBinanImage from '../../assets/images/pupbinan.webp'
import { ArrowIcon } from '../common/ArrowIcon'
import { ScrollReveal } from '../common/ScrollReveal'

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#650b16] text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_80%_20%,#a81f30_0,transparent_34%),linear-gradient(110deg,#4b0710_0%,#770e1b_60%,#580710_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(120deg,transparent_45%,white_45%,white_46%,transparent_46%)] [background-size:42px_42px]" />

      <div className="mx-auto grid min-h-[610px] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
        <div>
          <ScrollReveal direction="right">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
              <span className="h-px w-10 bg-amber-300" /> PUP Biñan Campus
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={100}>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">
              Shaping the future through <span className="text-amber-300">quality education.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
              Welcome to the official accreditation portal of the Polytechnic University of the Philippines — Biñan Campus.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={300}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#welcome" className="inline-flex items-center gap-2 rounded-md bg-amber-400 px-6 py-3.5 text-sm font-bold text-[#530812] transition hover:-translate-y-0.5 hover:bg-amber-300">
                Explore accreditation <ArrowIcon />
              </a>
              <a href="#programs" className="rounded-md border border-white/35 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">View programs</a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="left" delay={200} className="mx-auto w-full max-w-md lg:justify-self-end">
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] border border-white/15" />
            <div className="relative overflow-hidden rounded-[1.5rem] bg-amber-400 p-3 shadow-2xl shadow-black/30">
              <img src={pupBinanImage} alt="PUP Biñan Campus" className="h-[410px] w-full rounded-[1.1rem] bg-white object-cover object-center" />
            </div>
            <div className="absolute -bottom-6 -left-4 rounded-xl bg-white px-5 py-4 text-slate-900 shadow-xl sm:-left-9">
              <p className="text-xs font-black uppercase tracking-wider text-[#8a1724]">The country's first</p>
              <p className="mt-1 text-sm font-semibold">Polytechnic university</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
