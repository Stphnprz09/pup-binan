import campusImage from '../../assets/images/branding/pupbinan.webp'
import { ScrollReveal } from '../common/ScrollReveal'

export function VirtualCampusHero() {
  return (
    <section className="relative isolate grid min-h-[420px] place-items-center overflow-hidden px-5 py-20 text-center text-white lg:min-h-[500px]">
      <img src={campusImage} alt="PUP Biñan Campus building" className="absolute inset-0 -z-20 size-full object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#39050b]/90 via-[#650b16]/65 to-black/50" />
      <ScrollReveal>
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">Explore PUP Biñan</p>
        <h1 className="mt-5 text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">Virtual Campus Tour</h1>
        <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-amber-400" />
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
          Step inside the learning spaces and facilities that support our students across every academic program.
        </p>
      </ScrollReveal>
    </section>
  )
}
