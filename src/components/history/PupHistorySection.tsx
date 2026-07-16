import { ScrollReveal } from '../common/ScrollReveal'

export function PupHistorySection() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="pup-history-title">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <ScrollReveal direction="right">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-xl">
              <iframe
                className="aspect-video w-full"
                src="https://www.youtube.com/embed/GuHh1QYIT3s"
                title="History of the Polytechnic University of the Philippines"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={120}>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a1724]">The PUP story</p>
            <h2 id="pup-history-title" className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">A legacy of public education</h2>
            <div className="mt-6 h-1 w-16 rounded-full bg-amber-400" />
            <p className="mt-7 text-lg leading-8 text-slate-600">
              Learn how the Polytechnic University of the Philippines grew into an institution committed to accessible, relevant, and transformative education for the Filipino people.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
