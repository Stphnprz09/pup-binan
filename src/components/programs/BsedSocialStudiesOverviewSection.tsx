import { ScrollReveal } from '../common/ScrollReveal'

const coveredTopics = [
  'Philippine and Asian history',
  'World history and civilization',
  'Economics and economic development',
  'Geography and environmental education',
  'Political science and governance',
  'Culture, society, and anthropology',
  'Teaching strategies in Social Studies',
  'Curriculum development and assessment',
  'Educational foundations and research in education',
]

const objectives = [
  'Equip students with a solid foundation in the content and pedagogy of Social Studies education for secondary learners.',
  'Develop in students the skills to design and implement inclusive, learner-centered, and interdisciplinary Social Studies instruction.',
  'Foster critical awareness and deep understanding of local and global social, political, economic, and cultural issues.',
  'Cultivate civic consciousness, patriotism, and social responsibility in both educators and learners.',
  'Enhance students’ communication, collaboration, and analytical skills vital for teaching and community engagement.',
  'Promote ethical and professional teaching practices and a commitment to lifelong learning.',
  'Train students to utilize research-based approaches and innovations in curriculum and instruction to improve educational outcomes.',
  'Prepare future educators to assess student learning effectively and use assessment data to guide instruction and promote civic understanding.',
]

export function BsedSocialStudiesOverviewSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl space-y-20 px-5 lg:px-8">
        <ScrollReveal>
          <SectionHeading eyebrow="About BSED Social Studies" title="Program Description" />
          <div className="mt-9 rounded-2xl border border-slate-200 bg-[#f7f5f1] p-7 sm:p-9">
            <p className="leading-7 text-slate-600">
              The Bachelor of Secondary Education (BSED) Major in Social Studies is a four-year undergraduate program designed to prepare students to teach Social Studies at the secondary level. It equips future educators with the essential knowledge, skills, values, and attitudes for effective and meaningful teaching of history, culture, economics, politics, geography, and current events. The program provides a comprehensive blend of content mastery and pedagogical competence, covering subjects such as:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {coveredTopics.map((topic) => (
                <li key={topic} className="flex gap-3 text-sm font-semibold text-slate-700">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#8a1724]" />{topic}
                </li>
              ))}
            </ul>
            <p className="mt-7 leading-7 text-slate-600">
              Students in the BSED Social Studies program undergo practical learning experiences through classroom observations, teaching demonstrations, and student teaching. The program emphasizes critical thinking, civic responsibility, ethical teaching, and a commitment to social transformation and nation building.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <SectionHeading eyebrow="What students will achieve" title="Objectives of the Program" />
          <p className="mt-8 text-center font-bold leading-7 text-slate-800">The Bachelor of Secondary Education Major in Social Studies Program aims to provide training and practice that will enable students to:</p>
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
