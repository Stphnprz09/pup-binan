import moaSigningImage from '../../assets/images/about/moa-signing.webp'
import { ScrollReveal } from '../common/ScrollReveal'

export function BinanHistorySection() {
  return (
    <section className="bg-[#f7f5f1] py-20 lg:py-28" aria-labelledby="binan-history-title">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1fr_1.05fr] lg:gap-20 lg:px-8">
        <ScrollReveal direction="right">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a1724]">Rooted in partnership</p>
          <h2 id="binan-history-title" className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">PUP in Biñan</h2>
          <div className="mt-6 h-1 w-16 rounded-full bg-amber-400" />
          <p className="mt-7 text-lg leading-8 text-slate-600">
            PUP Biñan Campus was established through a shared commitment to bring quality and affordable public higher education closer to the people of Biñan and nearby communities.
          </p>
          <p className="mt-5 leading-7 text-slate-600">
            The signing of the memorandum of agreement marked an important step in building a campus dedicated to academic opportunity, public service, and local development.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" delay={120}>
          <figure className="overflow-hidden rounded-2xl bg-white p-3 shadow-xl">
            <img src={moaSigningImage} alt="Memorandum of agreement signing for PUP Biñan Campus" className="w-full rounded-xl object-cover" />
            <figcaption className="px-3 pb-2 pt-4 text-sm font-semibold text-slate-600">Memorandum of Agreement signing</figcaption>
          </figure>
        </ScrollReveal>
      </div>
    </section>
  )
}
