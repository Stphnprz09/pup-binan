import { ScrollReveal } from '../common/ScrollReveal'

const coveredTopics = [
  'General and physiological psychology',
  'Developmental and social psychology',
  'Theories of personality',
  'Abnormal psychology and mental health',
  'Psychological assessment and measurement',
  'Research methods and statistics',
  'Industrial and organizational psychology',
  'Counseling principles and helping skills',
]

const objectives = [
  'Explain major psychological concepts, theories, and perspectives and apply them to individual, group, and organizational concerns.',
  'Use scientific inquiry, research methods, and statistical techniques to investigate behavior and mental processes.',
  'Administer, score, and interpret psychological measures appropriately under qualified supervision and within professional limits.',
  'Communicate psychological information clearly and collaborate effectively with clients, communities, and multidisciplinary teams.',
  'Demonstrate empathy, cultural sensitivity, ethical responsibility, and respect for human dignity in professional practice.',
  'Apply psychological principles to promote well-being, healthy relationships, effective learning, and productive workplaces.',
  'Develop critical thinking and evidence-based approaches when assessing behavioral and psychosocial concerns.',
  'Prepare for graduate study, professional certification, and lifelong learning in psychology and related fields.',
]

export function BspsyOverviewSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl space-y-20 px-5 lg:px-8">
        <ScrollReveal>
          <SectionHeading eyebrow="About BSPSY" title="Program Description" />
          <div className="mt-9 rounded-2xl border border-slate-200 bg-[#f7f5f1] p-7 sm:p-9">
            <p className="leading-7 text-slate-600">
              The Bachelor of Science in Psychology (BSPSY) is a four-year undergraduate program that provides a scientific understanding of human behavior, thought, emotion, and social interaction. It prepares students to examine psychological processes through theory, research, assessment, and practical application in educational, clinical, community, and workplace settings. The program covers areas such as:
            </p>
            <TopicList />
            <p className="mt-7 leading-7 text-slate-600">
              Through laboratory activities, field exposure, research, internships, and community-based learning, BSPSY students develop analytical, interpersonal, and helping skills. The program emphasizes ethical practice, respect for diversity, evidence-based decision-making, and preparation for further study or careers in psychology and related fields.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <SectionHeading eyebrow="What students will achieve" title="Objectives of the Program" />
          <p className="mt-8 text-center font-bold leading-7 text-slate-800">The Bachelor of Science in Psychology Program aims to provide training and practice that will enable students to:</p>
          <ObjectiveList />
        </ScrollReveal>
      </div>
    </section>
  )
}

function TopicList() {
  return (
    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
      {coveredTopics.map((topic) => (
        <li key={topic} className="flex gap-3 text-sm font-semibold text-slate-700">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#8a1724]" />{topic}
        </li>
      ))}
    </ul>
  )
}

function ObjectiveList() {
  return (
    <ol className="mt-8 grid gap-4">
      {objectives.map((objective, index) => (
        <li key={objective} className="flex gap-4 rounded-xl border border-slate-200 p-5 text-sm leading-6 text-slate-600">
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#8a1724] text-xs font-black text-white">{index + 1}</span>
          <span>{objective}</span>
        </li>
      ))}
    </ol>
  )
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a1724]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-amber-400" />
    </div>
  )
}
