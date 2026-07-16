import { ScrollReveal } from '../common/ScrollReveal'

export function HymnSection() {
  return (
    <section className="bg-[#f7f5f1] py-20 lg:py-28" aria-labelledby="hymn-title">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a1724]">Our university song</p>
          <h2 id="hymn-title" className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">PUP Hymn</h2>
          <p className="mt-4 text-slate-600">Imno ng PUP</p>
        </ScrollReveal>

        <ScrollReveal delay={120} className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-xl">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/Yib_s5UeGvc"
              title="PUP Hymn — Imno ng PUP"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
