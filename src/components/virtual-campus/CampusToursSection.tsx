import { ScrollReveal } from '../common/ScrollReveal'

const campusTours = [
  {
    eyebrow: 'Education, Psychology, and Business',
    title: 'BEED, BSED, BSPSY, and BSBA-HRM Virtual Campus Tour',
    description: 'Tour the campus facilities and learning spaces used by our education, psychology, and human resource management programs.',
    programs: ['BEED-BN', 'BSED-EN-BN', 'BSED-SS-BN', 'BSPSY-BN', 'BSBA-HRM-BN'],
    videoId: 'ghOLr7Ymax8',
  },
  {
    eyebrow: 'Technology and Engineering',
    title: 'BSIT, BSCPE, and BSIE Virtual Campus Tour',
    description: 'Explore the computer laboratories, engineering spaces, and technology facilities supporting hands-on learning and innovation.',
    programs: ['BSIT-BN', 'BSCPE-BN', 'BSIE-BN'],
    videoId: 'Y3xLikzQ8yQ',
  },
]

export function CampusToursSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f1] py-16 sm:py-20 lg:py-28" aria-labelledby="campus-tours-title">
      <div className="absolute -left-40 top-1/3 -z-10 size-[32rem] rotate-45 rounded-[5rem] border-[60px] border-[#8a1724]/[0.025]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a1724]">Discover our facilities</p>
          <h2 id="campus-tours-title" className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">Program Campus Tours</h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-amber-400" />
          <p className="mt-5 leading-7 text-slate-600">Select a tour and experience the campus spaces that bring teaching, collaboration, and practical learning together.</p>
        </ScrollReveal>

        <div className="mt-12 space-y-12 lg:mt-16 lg:space-y-16">
          {campusTours.map((tour, index) => (
            <ScrollReveal key={tour.videoId} delay={100} direction={index % 2 === 0 ? 'right' : 'left'}>
              <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/8">
                <div className="p-6 sm:p-8 lg:p-10">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8a1724]">{tour.eyebrow}</p>
                  <h3 className="mt-3 max-w-4xl text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl">{tour.title}</h3>
                  <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{tour.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Programs included in this tour">
                    {tour.programs.map((program) => (
                      <li key={program} className="rounded-full border border-[#8a1724]/20 bg-[#8a1724]/6 px-3 py-1.5 text-xs font-black tracking-wide text-[#8a1724]">
                        {program}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-200 bg-slate-950">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${tour.videoId}?rel=0`}
                    title={tour.title}
                    className="aspect-video w-full"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
