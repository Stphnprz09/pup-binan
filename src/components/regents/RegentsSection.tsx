import { ScrollReveal } from '../common/ScrollReveal'

type Regent = {
  name: string
  role: string
  details: string[]
}

const leadership: Regent[] = [
  {
    name: 'Hon. Ricmar P. Aquino, Ed.D.',
    role: 'Chairperson',
    details: [
      'Commissioner, Commission on Higher Education (CHED)',
      'Higher Education Development Center Building, C.P. Garcia, UP Campus, Diliman, Quezon City',
    ],
  },
  {
    name: 'Hon. Manuel M. Muhi, DTech., ASEAN Engr.',
    role: 'Vice Chairperson',
    details: ['President, Polytechnic University of the Philippines', 'Sta. Mesa, Manila'],
  },
]

const members: Regent[] = [
  {
    name: 'Hon. Joel Villanueva',
    role: 'Member',
    details: [
      'Senator of the Republic of the Philippines',
      'Chairperson, Senate Committee on Higher, Technical and Vocational Education',
      'GSIS Bldg., Financial Center, Diokno Blvd., Pasay City',
    ],
  },
  {
    name: 'Hon. Jude A. Acidre',
    role: 'Member',
    details: [
      'Representative, Tingog Partylist',
      'Chairperson, House Committee on Higher and Technical Education',
      'Room SW-206 House of Representatives, Quezon City',
    ],
  },
  {
    name: 'Hon. Ma. Monica P. Pagunsan',
    role: 'Member',
    details: [
      'Undersecretary/Director',
      'Department of Economy, Planning and Development (DEPDev, formerly National Economic and Development Authority)',
      '12th St., J. Escriva Drive, Ortigas Center, Pasig City 1605',
    ],
  },
  {
    name: 'Hon. Romelen T. Tresvalles',
    role: 'Member',
    details: ['Director, Department of Science and Technology-National Capital Region (DOST-NCR)'],
  },
  {
    name: 'Hon. May M. Paez',
    role: 'Member',
    details: [
      'Private Sector Representative',
      'Head, Risk and Controls, PMFTC Inc. (affiliate of Philip Morris International)',
    ],
  },
  {
    name: 'Hon. Ronald V. Laurel',
    role: 'Member',
    details: [
      'Private Sector Representative',
      'President, Minds at Work, The Laurel Center for Education and Training Inc.',
    ],
  },
  {
    name: 'Hon. Jean Paul G. Martirez',
    role: 'Member, Alumni Sector Representative',
    details: ['President, Federation of Alumni Association in PUP, Inc. (FEDAAPI)'],
  },
  {
    name: 'Hon. Ramir M. Cruz',
    role: 'Member, Faculty Sector Representative',
    details: [
      'President, PUP Federated Faculty Association, Inc.',
      'PUP Institute of Technology, Pureza St., Sta. Mesa, Manila',
    ],
  },
  {
    name: 'Hon. John Paul Y. Azusano',
    role: 'Member, Student Sector Representative',
    details: [
      'President, Alyansa ng Nagkakaisang Konseho ng PUP (ANAK-PUP)',
      'Room 211, 2nd Floor, Charlie Del Rosario Building',
      'PUP Sta. Mesa, Manila',
    ],
  },
]

const boardSecretary: Regent = {
  name: 'Assoc. Prof. Rolando M. Covero, Jr.',
  role: 'University / Board Secretary',
  details: ['Room S-206, South Wing, Main Building', 'PUP Sta. Mesa, Manila'],
}

function Divider() {
  return (
    <div className="my-16 flex items-center gap-5">
      <span className="h-px flex-1 bg-[#8a1724]/25" />
      <span className="size-2 rotate-45 bg-amber-400" />
      <span className="h-px flex-1 bg-[#8a1724]/25" />
    </div>
  )
}

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

        <Divider />

        <div className="grid items-stretch gap-7 md:grid-cols-2">
          {members.map((regent, index) => (
            <ScrollReveal key={`${regent.name}-${regent.role}`} delay={(index % 2) * 90} className="h-full">
              <RegentCard regent={regent} />
            </ScrollReveal>
          ))}
        </div>

        <Divider />

        <ScrollReveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a1724]">Office of University and Board Secretary</p>
          <div className="mt-8">
            <RegentCard regent={boardSecretary} featured />
          </div>
        </ScrollReveal>
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
      <div className="mt-3 space-y-1 text-sm leading-6 text-slate-600">
        {regent.details.map((detail) => <p key={detail}>{detail}</p>)}
      </div>
    </article>
  )
}
