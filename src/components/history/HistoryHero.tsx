import campusImage from '../../assets/images/pupbinan.webp'
import { ScrollReveal } from '../common/ScrollReveal'

export function HistoryHero() {
  return (
    <section className="relative isolate grid min-h-[420px] place-items-center overflow-hidden px-5 py-20 text-center text-white lg:min-h-[480px]">
      <img src={campusImage} alt="PUP Biñan Campus" className="absolute inset-0 -z-20 size-full object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#39050b]/90 via-[#650b16]/70 to-black/45" />
      <ScrollReveal>
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">Our institutional journey</p>
        <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl">History</h1>
        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-amber-400" />
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
          Discover the milestones, partnerships, and shared purpose behind PUP Biñan Campus.
        </p>
      </ScrollReveal>
    </section>
  )
}
