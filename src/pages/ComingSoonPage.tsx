import { BrandMark } from '../components/common/BrandMark'
import { ScrollReveal } from '../components/common/ScrollReveal'

export function ComingSoonPage() {
  return (
    <main className="relative isolate grid min-h-screen grid-rows-[1fr_auto] overflow-hidden bg-white px-6 py-8 text-black">
      <div className="absolute inset-x-0 top-0 -z-10 h-2 bg-[#800000]" />
      <div className="absolute -right-32 -top-32 -z-10 size-80 rounded-full border-[56px] border-[#800000]/10" />
      <div className="absolute -bottom-40 -left-40 -z-10 size-96 rounded-full bg-[#800000]/5" />

      <section className="mx-auto flex max-w-3xl flex-col items-center self-center py-12 text-center">
        <ScrollReveal>
          <BrandMark />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-[#800000]">
            PUP Biñan Campus
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-balance sm:text-7xl">
            Our accreditation website is coming soon.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70">
            We are preparing a dedicated digital platform in support of the Level 1
            Accreditation of PUP Biñan Campus. Please check back soon.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="mt-10 rounded-full bg-[#800000] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/15">
            Website coming soon
          </div>
        </ScrollReveal>
      </section>

      <ScrollReveal delay={500}>
        <footer className="border-t border-black/10 pt-6 text-center text-sm text-black/60">
          Polytechnic University of the Philippines — Biñan Campus
        </footer>
      </ScrollReveal>
    </main>
  )
}
