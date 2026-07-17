import missionImage from '../../assets/images/vision-mission/mission.webp'
import visionImage from '../../assets/images/vision-mission/vision.webp'
import { ScrollReveal } from '../common/ScrollReveal'

const principles = [
  {
    eyebrow: 'Where we are going',
    title: 'Our Vision',
    description: 'PUP as a leading comprehensive polytechnic university in Asia.',
    image: visionImage,
  },
  {
    eyebrow: 'How we serve',
    title: 'Our Mission',
    description: 'Advance an inclusive, equitable, and globally relevant polytechnic education towards national development.',
    image: missionImage,
  },
]

export function PrinciplesSection() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="principles-title">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a1724]">Our foundation</p>
          <h2 id="principles-title" className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Purpose with direction</h2>
          <p className="mt-5 leading-7 text-slate-600">Our vision and mission express the future we seek and the public service we commit to deliver.</p>
        </ScrollReveal>

        <div className="mt-16 space-y-20 lg:space-y-28">
          {principles.map((principle, index) => (
            <div key={principle.title} className="grid items-center gap-10 md:grid-cols-2 lg:gap-20">
              <ScrollReveal direction={index === 0 ? 'right' : 'left'} className={index === 1 ? 'md:order-2' : ''}>
                <div className="relative mx-auto max-w-md">
                  <div className="absolute -bottom-4 -right-4 size-full rounded-2xl bg-amber-400/80" />
                  <img src={principle.image} alt={`${principle.title} statement`} className="relative w-full rounded-2xl bg-[#790e1b] object-contain shadow-xl" />
                </div>
              </ScrollReveal>

              <ScrollReveal direction={index === 0 ? 'left' : 'right'} delay={120} className={index === 1 ? 'md:order-1' : ''}>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a1724]">{principle.eyebrow}</p>
                <h3 className="mt-4 text-4xl font-black tracking-tight">{principle.title}</h3>
                <div className="mt-6 h-1 w-16 rounded-full bg-amber-400" />
                <p className="mt-7 text-lg leading-8 text-slate-600">{principle.description}</p>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
