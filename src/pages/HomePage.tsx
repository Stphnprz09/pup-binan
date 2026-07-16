import heroImage from '../assets/hero.png'
import { Header } from '../components/layout/Header'
import { ScrollReveal } from '../components/common/ScrollReveal'

const quickLinks = [
  { number: '01', title: 'Program Accreditation', text: 'Access accreditation documents and program survey materials.' },
  { number: '02', title: 'Official Documents', text: 'Browse university policies, manuals, memoranda, and issuances.' },
  { number: '03', title: 'Campus Information', text: 'Learn about PUP Biñan, its leadership, history, and community.' },
]

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#f8f6f2] text-slate-900">
      <Header />

      <main id="home">
        <section className="relative isolate overflow-hidden bg-[#720d18]">
          <div className="absolute inset-0 -z-10 opacity-10 [background-image:linear-gradient(120deg,transparent_45%,white_45%,white_46%,transparent_46%)] [background-size:36px_36px]" />
          <div className="mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
            <div className="text-white">
              <ScrollReveal direction="right">
                <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
                <span className="h-px w-10 bg-amber-300" /> Quality education. Trusted standards.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={100}>
                <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                  Building excellence through <span className="text-amber-300">accreditation.</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={200}>
                <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
                  Welcome to the PUP Biñan Campus accreditation portal. This homepage content is a placeholder and may be updated with official campus information.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={300}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a href="#explore" className="rounded-md bg-amber-400 px-6 py-3.5 text-sm font-bold text-[#5c0b14] transition hover:bg-amber-300">Explore accreditation</a>
                  <a href="#about" className="rounded-md border border-white/35 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">About the campus</a>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="left" delay={200} className="mx-auto w-full max-w-md lg:justify-self-end">
              <div className="relative">
                <div className="absolute -inset-5 rounded-[2rem] border border-white/15" />
                <div className="relative overflow-hidden rounded-[1.5rem] bg-[#f2c94c] p-3 shadow-2xl">
                  <img src={heroImage} alt="PUP Biñan campus illustration" className="h-[390px] w-full rounded-[1.1rem] bg-white object-cover object-top" />
                </div>
                <div className="absolute -bottom-6 -left-5 rounded-xl bg-white px-5 py-4 shadow-xl sm:-left-10">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#8a1724]">PUP Biñan</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">Committed to quality</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="explore" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a1724]">Start here</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Accreditation resources at a glance</h2>
              <p className="mt-4 leading-7 text-slate-600">Placeholder cards for the main information your visitors may need.</p>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {quickLinks.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <a href="#placeholder" className="group block min-h-64 rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#8a1724]/30 hover:shadow-lg">
                  <span className="text-sm font-black text-[#8a1724]">{item.number}</span>
                  <h3 className="mt-12 text-xl font-bold group-hover:text-[#8a1724]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                  <span className="mt-6 inline-block text-sm font-bold text-[#8a1724]">View resources →</span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section id="about" className="bg-white py-20">
          <ScrollReveal className="mx-auto max-w-3xl px-5 text-center lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a1724]">Home content placeholder</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A campus shaped by service and scholarship</h2>
            <p className="mt-5 leading-7 text-slate-600">Replace this section with an official introduction, accreditation announcement, campus news, or a message from the Campus Director.</p>
          </ScrollReveal>
        </section>
      </main>

      <footer className="bg-[#25080c] px-5 py-8 text-sm text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Polytechnic University of the Philippines — Biñan Campus</p>
          <p>Accreditation Portal</p>
        </div>
      </footer>
    </div>
  )
}
