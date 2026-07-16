import { ScrollReveal } from '../common/ScrollReveal'

type Regent = {
  name: string
  role: string
  details?: string
  representedBy?: string
}

const leadership: Regent[] = [
  {
    name: 'Hon. Ethel Agnes Pascua-Valenzuela, Ed.D.',
    role: 'Chairperson',
    details: 'Commissioner, Commission on Higher Education (CHED)',
  },
  {
    name: 'Hon. Manuel M. Muhi, D.Tech., ASEAN Engr.',
    role: 'Vice Chairperson',
    details: 'President, Polytechnic University of the Philippines',
  },
]

const members: Regent[] = [
  {
    name: 'Hon. Francis Joseph G. Escudero',
    role: 'Member',
    details: 'Senator of the Republic of the Philippines',
    representedBy: 'Hon. Alan Peter S. Cayetano',
  },
  {
    name: 'Hon. Mark O. Go',
    role: 'Member',
    details: 'District Representative, Baguio City',
    representedBy: 'Hon. Bienvenido M. Abante, Jr.',
  },
  {
    name: 'Hon. Maria Monica P. Pagunsan',
    role: 'Member',
    details: 'Undersecretary/Director, National Economic and Development Authority',
  },
  {
    name: 'Hon. Romelen T. Tresvalles',
    role: 'Member',
    details: 'Director, Department of Science and Technology — NCR',
  },
  { name: 'Hon. May M. Paez', role: 'Member', details: 'Private Sector Representative' },
  { name: 'Hon. Ronald V. Laurel', role: 'Member', details: 'Private Sector Representative' },
  {
    name: 'Hon. Jean Paul G. Martinez',
    role: 'Member, Alumni Sector Representative',
    details: 'President, Federation of Alumni Association in PUP, Inc.',
  },
  {
    name: 'Hon. Ronald V. Laurel',
    role: 'Member, Faculty Sector Representative',
    details: 'President, PUP Federated Faculty Association, Inc.',
  },
  {
    name: 'Hon. Kim D. R. Modelo',
    role: 'Member, Student Sector Representative',
    details: 'President, Alyansa ng Nagkakaisang Konseho ng PUP',
  },
  {
    name: 'Assoc. Prof. Rolando M. Covero, Jr.',
    role: 'University / Board Secretary',
    details: 'Polytechnic University of the Philippines',
  },
]

export function RegentsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f1] py-20 lg:py-28" aria-labelledby="regents-title">
      <div className="absolute inset-0 -z-10 opacity-60 [background-image:radial-gradient(ellipse_at_50%_10%,white_0%,transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a1724]">Leadership and stewardship</p>
          <h2 id="regents-title" className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Board of Regents</h2>
          <p className="mt-5 leading-7 text-slate-600">The members who provide governance, oversight, and institutional direction for PUP.</p>
        </ScrollReveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-7">
          {leadership.map((regent, index) => (
            <ScrollReveal key={regent.name} delay={index * 100}>
              <RegentCard regent={regent} featured />
            </ScrollReveal>
          ))}
        </div>

        <div className="my-16 flex items-center gap-5"><span className="h-px flex-1 bg-[#8a1724]/25" /><span className="size-2 rotate-45 bg-amber-400" /><span className="h-px flex-1 bg-[#8a1724]/25" /></div>

        <div className="grid items-stretch gap-7 md:grid-cols-2">
          {members.map((regent, index) => (
            <ScrollReveal key={`${regent.name}-${regent.role}`} delay={(index % 2) * 90} className="h-full">
              <RegentCard regent={regent} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function RegentCard({ regent, featured = false }: { regent: Regent; featured?: boolean }) {
  return (
    <article className={`relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${featured ? 'sm:p-9' : 'sm:p-8'}`}>
      <span className="absolute left-0 top-0 h-1.5 w-24 bg-amber-400" />
      <span className="absolute right-0 top-0 h-1.5 w-14 bg-[#8a1724]" />
      <span className="absolute bottom-0 right-0 h-1.5 w-24 bg-amber-400" />
      <span className="absolute bottom-0 left-0 h-1.5 w-14 bg-[#8a1724]" />

      <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-black leading-snug tracking-tight`}>{regent.name}</h3>
      <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-[#8a1724]">{regent.role}</p>
      {regent.details && <p className="mt-3 text-sm leading-6 text-slate-600">{regent.details}</p>}
      {regent.representedBy && (
        <div className="mt-auto pt-6">
          <div className="mx-auto mb-5 h-px w-16 bg-slate-200" />
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Represented by</p>
          <p className="mt-2 text-lg font-bold text-slate-800">{regent.representedBy}</p>
        </div>
      )}
    </article>
  )
}
