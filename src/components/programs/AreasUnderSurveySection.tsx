import administrationImage from '../../assets/images/survey/survey-administration.png'
import curriculumImage from '../../assets/images/survey/survey-curriculum-instruction.png'
import extensionImage from '../../assets/images/survey/survey-extension-community.png'
import facultyImage from '../../assets/images/survey/survey-faculty.png'
import laboratoriesImage from '../../assets/images/survey/survey-laboratories.png'
import libraryImage from '../../assets/images/survey/survey-library.png'
import facilitiesImage from '../../assets/images/survey/survey-physical-plant-facilities.png'
import researchImage from '../../assets/images/survey/survey-research.png'
import studentSupportImage from '../../assets/images/survey/survey-student-support.png'
import visionImage from '../../assets/images/survey/survey-vision-mission-goals.png'
import { ScrollReveal } from '../common/ScrollReveal'

const surveyAreas = [
  { title: 'Visions, Missions, Goals, and Objectives', image: visionImage },
  { title: 'Faculty', image: facultyImage },
  { title: 'Curriculum and Instruction', image: curriculumImage },
  { title: 'Support to Student', image: studentSupportImage },
  { title: 'Research', image: researchImage },
  { title: 'Extension and Community Involvement', image: extensionImage },
  { title: 'Library', image: libraryImage },
  { title: 'Physical Plant & Facilities', image: facilitiesImage },
  { title: 'Laboratories', image: laboratoriesImage },
  { title: 'Administration', image: administrationImage },
]

export function AreasUnderSurveySection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f1] py-20 lg:py-28" aria-labelledby="survey-title">
      <div className="absolute -left-40 top-1/3 -z-10 size-[32rem] rotate-45 rounded-[5rem] border-[60px] border-[#8a1724]/[0.025]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a1724]">Accreditation framework</p>
          <h2 id="survey-title" className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">Areas Under Survey</h2>
          <p className="mt-5 leading-7 text-slate-600">The key areas evaluated to support continuous quality improvement and academic excellence.</p>
        </ScrollReveal>

        <div className="mt-14 grid items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {surveyAreas.map((area, index) => (
            <ScrollReveal key={area.title} delay={(index % 3) * 80} className="h-full">
              <a
                href="/coming-soon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${area.title} in a new tab`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#8a1724]"
              >
                <div className="relative overflow-hidden">
                  <img src={area.image} alt="" className="aspect-[3/2] w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
                  <span className="absolute left-4 top-4 grid size-11 place-items-center rounded-xl bg-[#8a1724] text-sm font-black text-white shadow-lg">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="flex flex-1 items-center justify-center p-6 text-center">
                  <h3 className="font-bold leading-snug text-slate-800">{area.title}</h3>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
