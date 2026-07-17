import campusImage from '../../assets/images/pupbinan.webp'
import { ScrollReveal } from '../common/ScrollReveal'

export function PresidentialDecreeHero() {
  return (
    <section className="relative isolate grid min-h-[420px] place-items-center overflow-hidden px-5 py-20 text-center text-white lg:min-h-[500px]">
      <img src={campusImage} alt="PUP Biñan Campus building" className="absolute inset-0 -z-20 size-full object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#39050b]/92 via-[#650b16]/70 to-black/50" />
      <ScrollReveal>
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">Founding legal issuance</p>
        <h1 className="mx-auto mt-5 max-w-5xl text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">Presidential Decree No. 1341</h1>
        <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-amber-400" />
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
          The decree converting the Philippine College of Commerce into the Polytechnic University of the Philippines.
        </p>
      </ScrollReveal>
    </section>
  )
}
