import { ScrollReveal } from '../common/ScrollReveal'

const coveredTopics = [
  'Computer hardware and software',
  'Networking',
  'Databases',
  'Web development',
  'Information security',
  'Systems analysis and design',
  'Project management',
]

const objectives = [
  'To introduce students to current technologies and tools while learning new methodologies that will lead to the development of better information systems.',
  'To enable students to understand the different components of the information technology field, including hardware, software, communication, networking, research, peopleware and management skills.',
  'To demonstrate awareness of how to methodically and practically approach a variety of technological and managerial issues to ultimately improve business strategies and attain competitive advantage.',
  'To inculcate to students the essential virtues and attitudes, as well as develop necessary knowledge and competency levels required of an information technology professional.',
  "To train students to systematically analyze and evaluate organizational systems and processes in order to recommend software solutions that properly address the organization's needs and goals.",
]

export function BsitOverviewSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl space-y-20 px-5 lg:px-8">
        <ScrollReveal>
          <SectionHeading eyebrow="About BSIT" title="Program Description" />
          <div className="mt-9 rounded-2xl border border-slate-200 bg-[#f7f5f1] p-7 sm:p-9">
            <p className="leading-7 text-slate-600">
              The Bachelor of Science in Information Technology (BSIT) is a four-year undergraduate program that provides students with the knowledge and skills necessary to design, develop, and manage information systems. The program covers a wide range of topics, including:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {coveredTopics.map((topic) => <li key={topic} className="flex gap-3 text-sm font-semibold text-slate-700"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#8a1724]" />{topic}</li>)}
            </ul>
            <p className="mt-7 leading-7 text-slate-600">
              Students in the BSIT program learn to use the latest technologies to solve business problems, to design and implement efficient information systems, and to manage information security risks. They also gain experience in working on real-world projects through internships and capstone courses.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <SectionHeading eyebrow="What students will achieve" title="Objectives of the Program" />
          <p className="mt-8 text-center font-bold leading-7 text-slate-800">The Bachelor of Science in Information Technology Program aims to provide training and practice that will enable students to:</p>
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
