import { ScrollReveal } from '../common/ScrollReveal'

const coveredTopics = [
  'Language and linguistics',
  'English literature (both classical and contemporary)',
  'Principles and strategies of teaching English',
  'Curriculum development and instructional planning',
  'Educational psychology',
  'Assessment and evaluation of learning',
  'Language acquisition and development',
  'Research in language education',
]

const objectives = [
  'Equip students with a solid foundation in the principles, methods, and strategies of effective English instruction at the secondary level.',
  'Develop in students the competence to design and implement engaging, inclusive, and developmentally appropriate English learning environments.',
  'Deepen students’ understanding and appreciation of English language, literature, and communication in various contexts.',
  'Enhance students’ oral and written communication skills for both academic and real-world applications.',
  'Foster professional and ethical teaching practices, as well as a strong commitment to lifelong learning.',
  'Train students to integrate research-based strategies and innovations into English instruction to improve student outcomes.',
  'Prepare future educators to assess student learning effectively and use assessment results to inform instruction and support language development.',
]

export function BsedEnglishOverviewSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl space-y-20 px-5 lg:px-8">
        <ScrollReveal>
          <SectionHeading eyebrow="About BSED English" title="Program Description" />
          <div className="mt-9 rounded-2xl border border-slate-200 bg-[#f7f5f1] p-7 sm:p-9">
            <p className="leading-7 text-slate-600">
              The Bachelor of Secondary Education (BSED) Major in English is a four-year undergraduate program designed to prepare students to teach English at the secondary level. It equips future educators with the knowledge, skills, values, and attitudes essential for effective and meaningful English language instruction. The program includes a comprehensive study of both language and literature, along with pedagogy and educational foundations, covering subjects such as:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {coveredTopics.map((topic) => (
                <li key={topic} className="flex gap-3 text-sm font-semibold text-slate-700">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#8a1724]" />{topic}
                </li>
              ))}
            </ul>
            <p className="mt-7 leading-7 text-slate-600">
              Students in the BSED English program engage in hands-on learning through classroom observations, teaching demonstrations, and a supervised practice teaching experience. The program emphasizes ethical teaching, communication excellence, and a commitment to academic and professional growth in the field of education.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <SectionHeading eyebrow="What students will achieve" title="Objectives of the Program" />
          <p className="mt-8 text-center font-bold leading-7 text-slate-800">The Bachelor of Secondary Education Major in English aims to provide training and practice that will enable students to:</p>
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
