import { ScrollReveal } from '../common/ScrollReveal'

type ProgramHeroProps = {
  title: string
  code: string
  image: string
}

export function ProgramHero({ title, code, image }: ProgramHeroProps) {
  return (
    <section className="relative isolate grid min-h-[440px] place-items-center overflow-hidden px-5 py-20 text-center text-white lg:min-h-[520px]">
      <img src={image} alt="" className="absolute inset-0 -z-20 size-full object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06172f]/90 via-[#092d55]/75 to-black/60" />
      <ScrollReveal>
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">{code} · Program Under Survey</p>
        <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
        <div className="mx-auto mt-7 h-1 w-28 rounded-full bg-[#a7192b]" />
      </ScrollReveal>
    </section>
  )
}
