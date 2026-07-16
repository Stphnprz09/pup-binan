import abelidaImage from '../../assets/images/abelida.webp'
import arevaloImage from '../../assets/images/arevalo.webp'
import atienzaImage from '../../assets/images/atienza.webp'
import austriaImage from '../../assets/images/austria.webp'
import conceptionImage from '../../assets/images/conception.webp'
import cuencaImage from '../../assets/images/cuenca.webp'
import formentoImage from '../../assets/images/formento.webp'
import juradoImage from '../../assets/images/jurado.webp'
import malonzoImage from '../../assets/images/malonzo.webp'
import maravillaImage from '../../assets/images/maravilla.webp'
import masangkayImage from '../../assets/images/masangkay.webp'
import montanezImage from '../../assets/images/montanez.webp'
import riveraImage from '../../assets/images/rivera.webp'
import sevillaImage from '../../assets/images/sevilla-1.webp'
import { ScrollReveal } from '../common/ScrollReveal'

type Person = {
  name: string
  credentials?: string
  position: string
  image: string
}

const campusOfficials: Person[] = [
  { name: 'Archie C. Arevalo', credentials: 'LPT, MA', position: 'Head of Academic Programs', image: arevaloImage },
  { name: 'Cheryl Joyce D. Jurado', credentials: 'LPT, MEM', position: 'Head of Student Affairs and Services', image: juradoImage },
  { name: 'Manalo David B. Rivera', credentials: 'MBA', position: 'Collecting and Disbursing Officer', image: riveraImage },
  { name: 'Ma. Gemalyn S. Austria', credentials: 'MEM', position: 'Campus Registrar', image: austriaImage },
  { name: 'Gerino P. Abelida Jr.', credentials: 'LPT', position: 'Administrative Officer', image: abelidaImage },
]

const supportPersonnel: Person[] = [
  { name: 'Widonna B. Cuenca', position: 'Administrative Assistant IV', image: cuencaImage },
  { name: 'Engr. Jhun Jhun B. Maravilla', position: 'Administrative Assistant II', image: maravillaImage },
  { name: 'Mary Jane G. Malonzo', position: 'Administrative Staff', image: malonzoImage },
  { name: 'Engr. Aaron Atienza', position: 'Administrative Staff', image: atienzaImage },
  { name: 'Kaira Mae D. Formento', credentials: 'RL, MLIS', position: 'School Librarian', image: formentoImage },
  { name: 'Franchesca Louse R. Montañez', credentials: 'RL', position: 'School Librarian', image: montanezImage },
  { name: 'Rochelle Ann Masangkay', credentials: 'RN', position: 'Medical Nurse', image: masangkayImage },
  { name: 'Romina A. Conception', position: 'Nursing Aide', image: conceptionImage },
]

export function CampusOfficialsSection() {
  return (
    <section className="bg-[#f7f5f1] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a1724]">Campus leadership</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Campus Officials</h2>
          <p className="mt-5 leading-7 text-slate-600">Working together to deliver responsive academic programs and student-centered services.</p>
        </ScrollReveal>

        <div className="mx-auto mt-16 grid max-w-4xl items-center gap-10 md:grid-cols-2 lg:gap-20">
          <ScrollReveal direction="right">
            <FramedPhoto name="Margarita T. Sevilla" image={sevillaImage} />
          </ScrollReveal>
          <ScrollReveal direction="left" delay={120}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a1724]">Campus Director</p>
            <h3 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Margarita T. Sevilla</h3>
            <p className="mt-2 text-lg font-bold text-slate-600">PhD</p>
            <div className="mt-5 h-1 w-16 rounded-full bg-amber-400" />
            <p className="mt-5 font-semibold text-[#8a1724]">Campus Director</p>
          </ScrollReveal>
        </div>

        <div className="my-20 flex items-center gap-5"><span className="h-px flex-1 bg-[#8a1724]/25" /><span className="size-2 rotate-45 bg-amber-400" /><span className="h-px flex-1 bg-[#8a1724]/25" /></div>

        <PeopleGrid people={campusOfficials} />

        <ScrollReveal className="mb-12 mt-24 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a1724]">People behind our services</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Support Personnel</h2>
        </ScrollReveal>

        <PeopleGrid people={supportPersonnel} />
      </div>
    </section>
  )
}

function PeopleGrid({ people }: { people: Person[] }) {
  return (
    <div className="grid items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person, index) => (
        <ScrollReveal key={person.name} delay={(index % 3) * 90} className="h-full">
          <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
            <img src={person.image} alt={person.name} className="mx-auto aspect-[4/5] w-full max-w-64 rounded-xl object-cover object-top shadow-md" />
            <h3 className="mt-6 text-xl font-black leading-snug">{person.name}</h3>
            {person.credentials && <p className="mt-1 font-bold text-slate-500">{person.credentials}</p>}
            <div className="mx-auto mt-4 h-0.5 w-14 bg-[#8a1724]" />
            <p className="mt-auto pt-4 text-sm font-semibold leading-5 text-[#8a1724]">{person.position}</p>
          </article>
        </ScrollReveal>
      ))}
    </div>
  )
}

function FramedPhoto({ name, image }: { name: string; image: string }) {
  return (
    <div className="relative mx-auto max-w-sm">
      <div className="absolute -left-4 -top-4 size-full rounded-2xl border-2 border-[#8a1724]" />
      <div className="absolute -bottom-4 -right-4 size-full rounded-2xl border-2 border-amber-400" />
      <img src={image} alt={name} className="relative aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-xl" />
    </div>
  )
}
