import { ScrollReveal } from '../common/ScrollReveal'

const coveredTopics = [
  'Child and adolescent development',
  'Curriculum development',
  'Educational psychology',
  'Assessment of learning',
  'Inclusive education',
  'Classroom management',
  'Teaching strategies for various learning areas',
  'Research in education',
]

const objectives = [
  'To equip students with a strong foundation in the principles, methods, and strategies of effective elementary teaching.',
  'To develop in students the ability to create inclusive, engaging, and developmentally appropriate learning environments for young learners.',
  'To cultivate a deep understanding of the different learning areas in elementary education such as Mathematics, Science, English, Filipino, Social Studies, and Values Education.',
  'To enhance students’ communication and interpersonal skills necessary for fostering meaningful relationships with pupils, parents, and the school community.',
  'To instill in students the values of professionalism, ethical teaching practice, and a commitment to lifelong learning.',
  'To train students to apply research-based practices and innovations in curriculum and instruction to improve teaching and learning outcomes.',
  'To prepare future educators to effectively assess student learning and use assessment data to inform instruction and support student growth.',
]

export function BeedOverviewSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl space-y-20 px-5 lg:px-8">
        <ScrollReveal>
          <SectionHeading eyebrow="About BEED" title="Program Description" />
          <div className="mt-9 rounded-2xl border border-slate-200 bg-[#f7f5f1] p-7 sm:p-9">
            <p className="leading-7 text-slate-600">
              The Bachelor of Elementary Education (BEED) is a four-year undergraduate program designed to prepare students for teaching in the elementary level. It equips future educators with the knowledge, skills, values, and attitudes necessary for effective and meaningful teaching and learning. The program covers a broad range of subjects, including:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {coveredTopics.map((topic) => (
                <li key={topic} className="flex gap-3 text-sm font-semibold text-slate-700">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#8a1724]" />{topic}
                </li>
              ))}
            </ul>
            <p className="mt-7 leading-7 text-slate-600">
              Students in the BEED program gain practical experience through classroom observations, teaching demonstrations, and student teaching. The program also emphasizes the development of ethical and responsible teaching practices, promoting lifelong learning and commitment to excellence in education.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <SectionHeading eyebrow="What students will achieve" title="Objectives of the Program" />
          <p className="mt-8 text-center font-bold leading-7 text-slate-800">The Bachelor of Elementary Education Program aims to provide training and practice that will enable students to:</p>
          <ol className="mt-8 grid gap-4">
            {objectives.map((objective, index) => (
              <li key={objective} className="flex gap-4 rounded-xl border border-slate-200 p-5 text-sm leading-6 text-slate-600">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#8a1724] text-xs font-black text-white">{index + 1}</span>
                <span>{objective}</span>
              </li>
            ))}
          </ol>
        </ScrollReveal>
      </div>
    </section>
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
