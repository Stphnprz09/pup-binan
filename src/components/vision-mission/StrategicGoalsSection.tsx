import strategicGoalsImage from '../../assets/images/vision-mission/strategic-goal.webp'
import { ScrollReveal } from '../common/ScrollReveal'

export function StrategicGoalsSection() {
  return (
    <section className="overflow-hidden bg-[#650b16] py-20 text-white lg:py-28" aria-labelledby="goals-title">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
        <ScrollReveal direction="right">
          <img src={strategicGoalsImage} alt="PUP strategic goals" className="mx-auto w-full max-w-md rounded-2xl bg-white shadow-2xl shadow-black/25" />
        </ScrollReveal>

        <ScrollReveal direction="left" delay={120}>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">Moving forward together</p>
          <h2 id="goals-title" className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Strategic Goals</h2>
          <div className="mt-6 h-1 w-16 rounded-full bg-amber-400" />
          <p className="mt-7 text-lg leading-8 text-white/75">
            The university's strategic goals turn our vision into action through teaching and learning, research, extension, organizational excellence, internationalization, and responsible stewardship.
          </p>
          <p className="mt-5 leading-7 text-white/60">Together, these priorities strengthen PUP's capacity to deliver relevant and transformative polytechnic education.</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
