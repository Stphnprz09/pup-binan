import directorImage from '../../assets/images/officials/campus/sevilla.webp'
import { ScrollReveal } from '../common/ScrollReveal'

export function DirectorSection() {
  return (
    <section className="bg-white py-20 lg:py-28" id="director">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:px-8">
        <ScrollReveal direction="right">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -bottom-5 -left-5 h-full w-full rounded-2xl bg-[#8a1724]" />
            <img src={directorImage} alt="PUP Biñan Campus Director" className="relative aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-xl" />
            <div className="absolute -bottom-8 right-4 size-16 rounded-full border-8 border-white bg-amber-400" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" delay={120}>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a1724]">Campus leadership</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Message from the Director</h2>
          <div className="mt-6 h-1 w-16 rounded-full bg-amber-400" />
          <p className="mt-7 text-lg leading-8 text-slate-600">
            It is our pleasure to welcome our accreditors and guests to PUP Biñan Campus. This portal presents our collective work toward academic excellence, responsive public service, and meaningful learning experiences for every Iskolar ng Bayan.
          </p>
          <p className="mt-5 leading-7 text-slate-600">
            Our faculty, staff, students, and partners remain committed to a culture of continuous improvement and quality assurance.
          </p>
          <div className="mt-8 border-l-3 border-[#8a1724] pl-5">
            <p className="font-bold text-slate-900">Campus Director</p>
            <p className="mt-1 text-sm text-slate-500">PUP Biñan Campus</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
