import acesImage from '../../assets/images/organizations/aces.webp'
import cscImage from '../../assets/images/organizations/csc.webp'
import hrssImage from '../../assets/images/organizations/hrss.webp'
import ibitsImage from '../../assets/images/organizations/ibits.webp'
import jpiaImage from '../../assets/images/organizations/jpia.webp'
import piieImage from '../../assets/images/organizations/piie.webp'
import smsImage from '../../assets/images/organizations/sms.webp'
import yesImage from '../../assets/images/organizations/yes.webp'
import { ScrollReveal } from '../common/ScrollReveal'

const organizations = [
  { acronym: 'CSC', name: 'Central Student Council', image: cscImage },
  { acronym: 'PIIE', name: 'Philippine Institute of Industrial Engineers', image: piieImage },
  { acronym: 'YES', name: 'Young Educators Society', image: yesImage },
  { acronym: 'ACES', name: 'Association of Computer Engineering Students', image: acesImage },
  { acronym: 'JPIA', name: 'Junior Philippine Institute of Accountants', image: jpiaImage },
  { acronym: 'SMS', name: 'Samahan ng Sikolohiya', image: smsImage },
  { acronym: 'HRSS', name: 'Human Resource Students Society', image: hrssImage },
  { acronym: 'IBITS', name: 'Institute of Bachelors in Information Technologies Studies', image: ibitsImage },
]

export function OrganizationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f1] py-20 lg:py-28" aria-labelledby="organizations-title">
      <div className="absolute -left-36 top-1/4 -z-10 size-96 rotate-45 rounded-[4rem] border-[48px] border-[#8a1724]/[0.025]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a1724]">Get involved</p>
          <h2 id="organizations-title" className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">PUP Biñan Organizations</h2>
          <p className="mt-5 leading-7 text-slate-600">Connect with fellow students, develop your strengths, and contribute to the university community.</p>
        </ScrollReveal>

        <div className="mt-14 grid items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {organizations.map((organization, index) => (
            <ScrollReveal key={organization.acronym} delay={(index % 3) * 90} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="overflow-hidden">
                  <img src={organization.image} alt={`${organization.name} organization`} className="aspect-square w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8a1724]">{organization.acronym}</p>
                  <h3 className="mt-3 text-xl font-bold leading-snug">{organization.name}</h3>
                  <div className="mt-auto pt-6"><span className="block h-1 w-12 rounded-full bg-amber-400" /></div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
