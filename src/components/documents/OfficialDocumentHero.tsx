import campusImage from '../../assets/images/branding/pupbinan.webp'
import { ScrollReveal } from '../common/ScrollReveal'

type OfficialDocumentHeroProps = {
  eyebrow: string
  title: string
  description: string
}

export function OfficialDocumentHero({ eyebrow, title, description }: OfficialDocumentHeroProps) {
  return (
    <section className="relative isolate grid min-h-[400px] place-items-center overflow-hidden px-5 py-20 text-center text-white lg:min-h-[460px]">
      <img src={campusImage} alt="PUP Biñan Campus" className="absolute inset-0 -z-20 size-full object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#39050b]/95 via-[#650b16]/80 to-black/55" />
      <ScrollReveal>
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">{eyebrow}</p>
        <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-amber-400" />
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">{description}</p>
      </ScrollReveal>
    </section>
  )
}
