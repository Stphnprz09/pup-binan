import boardImage from '../assets/images/about-board-regents.png'
import historyImage from '../assets/images/about-history.png'
import organizationsImage from '../assets/images/about-organizations.png'
import visionImage from '../assets/images/about-vision-mission.png'
import campusOfficialsImage from '../assets/images/campus-official.webp'
import campusImage from '../assets/images/pupbinan.webp'
import universityOfficialsImage from '../assets/images/university-official.webp'
import { ArrowIcon } from '../components/common/ArrowIcon'
import { ScrollReveal } from '../components/common/ScrollReveal'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'

const aboutSections = [
  {
    title: 'Vision and Mission',
    description: 'Discover the principles and purpose that guide PUP Biñan Campus.',
    image: visionImage,
    href: '#vision-and-mission',
  },
  {
    title: 'History of PUP Biñan',
    description: 'Trace the milestones that shaped the campus and its community.',
    image: historyImage,
    href: '#history',
  },
  {
    title: 'Board of Regents',
    description: 'Meet the governing body that provides institutional direction.',
    image: boardImage,
    href: '#board-of-regents',
  },
  {
    title: 'University Officials',
    description: 'Learn about the university leaders advancing the PUP mandate.',
    image: universityOfficialsImage,
    href: '#university-officials',
  },
  {
    title: 'Campus Officials',
    description: 'Meet the officials leading PUP Biñan programs and services.',
    image: campusOfficialsImage,
    href: '#campus-officials',
  },
  {
    title: 'Virtual Campus',
    description: 'Explore the spaces where the PUP Biñan community learns and grows.',
    image: campusImage,
    href: '#virtual-campus',
  },
  {
    title: 'Organizations',
    description: 'Get to know the groups that enrich campus life and student leadership.',
    image: organizationsImage,
    href: '#organizations',
  },
]

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />

      <main>
        <section className="relative isolate grid min-h-[440px] place-items-center overflow-hidden px-5 py-20 text-center text-white lg:min-h-[500px]">
          <img src={campusImage} alt="PUP Biñan Campus" className="absolute inset-0 -z-20 size-full object-cover object-center" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#39050b]/90 via-[#650b16]/70 to-black/45" />
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">Discover our campus</p>
            <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl">About PUP Biñan</h1>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-amber-400" />
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              Learn about our identity, leadership, heritage, and the community behind PUP Biñan Campus.
            </p>
          </ScrollReveal>
        </section>

        <section className="py-20 lg:py-28" aria-labelledby="about-contents-title">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a1724]">Explore PUP Biñan</p>
              <h2 id="about-contents-title" className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">About the Campus</h2>
              <p className="mt-5 leading-7 text-slate-600">Everything you need to know about our university and campus community in one place.</p>
            </ScrollReveal>

            <div className="mt-14 grid items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {aboutSections.map((section, index) => (
                <ScrollReveal key={section.title} delay={(index % 3) * 80} className="h-full">
                  <a id={section.href.slice(1)} href={section.href} className="group flex h-full scroll-mt-48 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                    <div className="overflow-hidden">
                      <img src={section.image} alt="" className="aspect-[3/2] w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="text-xl font-bold leading-snug group-hover:text-[#8a1724]">{section.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{section.description}</p>
                      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-[#8a1724]">Learn more <ArrowIcon /></span>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
