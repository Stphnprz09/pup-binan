import deGuzmanImage from '../../assets/images/de-guzman.webp'
import gapasinImage from '../../assets/images/gapasin.webp'
import gatanImage from '../../assets/images/gatan.webp'
import guilloImage from '../../assets/images/guillo.webp'
import muhiImage from '../../assets/images/muhi.webp'
import ramiloImage from '../../assets/images/ramilo.webp'
import testorImage from '../../assets/images/testor.webp'
import { ScrollReveal } from '../common/ScrollReveal'

const featuredOfficials = [
  {
    name: 'Manuel M. Muhi',
    credentials: 'D. Tech., ASEAN Engr.',
    position: 'University President',
    image: muhiImage,
  },
  {
    name: 'Alberto C. Guillo',
    credentials: 'MS (Stat), MA (Econ)',
    position: 'Executive Vice President',
    image: guilloImage,
  },
]

const vicePresidents = [
  {
    name: 'Emanuel C. De Guzman',
    credentials: 'Ph.D.',
    position: 'Vice President for Academic Affairs',
    image: deGuzmanImage,
  },
  {
    name: 'Tomas O. Testor',
    credentials: 'MPA',
    position: 'Vice President for Student Affairs and Services',
    image: testorImage,
  },
  {
    name: 'Anna Ruby P. Gapasin',
    credentials: 'DEM',
    position: 'Vice President for Research, Extension and Development',
    image: gapasinImage,
  },
  {
    name: 'Pascualito B. Gatan',
    credentials: 'MEM',
    position: 'Vice President for Branches and Satellite Campuses',
    image: gatanImage,
  },
  {
    name: 'Adam V. Ramilo',
    credentials: 'MIR',
    position: 'Vice President for Administration',
    image: ramiloImage,
  },
]

export function OfficialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f1] py-20 lg:py-28" aria-labelledby="officials-title">
      <div className="absolute inset-0 -z-10 opacity-50 [background-image:radial-gradient(ellipse_at_50%_20%,white_0%,transparent_55%)]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a1724]">Leadership directory</p>
          <h2 id="officials-title" className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">University Officials</h2>
          <p className="mt-5 leading-7 text-slate-600">Committed leaders advancing excellence, inclusion, and responsive public education.</p>
        </ScrollReveal>

        <div className="mx-auto mt-16 max-w-5xl space-y-14 lg:space-y-20">
          {featuredOfficials.map((official, index) => (
            <div key={official.name} className="grid items-center gap-9 md:grid-cols-2 lg:gap-16">
              <ScrollReveal direction={index === 0 ? 'right' : 'left'} className={index === 1 ? 'md:order-2' : ''}>
                <OfficialPhoto name={official.name} image={official.image} />
              </ScrollReveal>
              <ScrollReveal direction={index === 0 ? 'left' : 'right'} delay={120} className={index === 1 ? 'text-left md:order-1 md:text-right' : ''}>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a1724]">Executive leadership</p>
                <h3 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">{official.name}</h3>
                <p className="mt-2 text-lg font-bold text-slate-600">{official.credentials}</p>
                <div className={`mt-5 h-1 w-16 rounded-full bg-amber-400 ${index === 1 ? 'md:ml-auto' : ''}`} />
                <p className="mt-5 text-base font-semibold text-[#8a1724]">{official.position}</p>
              </ScrollReveal>
            </div>
          ))}
        </div>

        <div className="my-20 flex items-center gap-5">
          <span className="h-px flex-1 bg-[#8a1724]/25" />
          <span className="size-2 rotate-45 bg-amber-400" />
          <span className="h-px flex-1 bg-[#8a1724]/25" />
        </div>

        <div className="grid items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {vicePresidents.map((official, index) => (
            <ScrollReveal key={official.name} delay={(index % 3) * 90} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-7">
                <img src={official.image} alt={official.name} className="mx-auto aspect-[4/5] w-full max-w-64 rounded-xl object-cover object-top shadow-md" />
                <h3 className="mt-6 text-xl font-black leading-snug">{official.name}</h3>
                <p className="mt-1 font-bold text-slate-500">{official.credentials}</p>
                <div className="mx-auto mt-4 h-0.5 w-14 bg-[#8a1724]" />
                <p className="mt-auto pt-4 text-sm font-semibold leading-5 text-[#8a1724]">{official.position}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

type OfficialPhotoProps = {
  name: string
  image: string
}

function OfficialPhoto({ name, image }: OfficialPhotoProps) {
  return (
    <div className="relative mx-auto max-w-sm">
      <div className="absolute -left-4 -top-4 size-full rounded-2xl border-2 border-[#8a1724]" />
      <div className="absolute -bottom-4 -right-4 size-full rounded-2xl border-2 border-amber-400" />
      <img src={image} alt={name} className="relative aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-xl" />
    </div>
  )
}
