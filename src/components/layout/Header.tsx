import { useState } from 'react'
import pupBinanLogo from '../../assets/images/branding/pupbn-logo.webp'

type MenuItem = {
  label: string
  children?: string[]
}

const menuItems: MenuItem[] = [
  { label: 'Home' },
  {
    label: 'About PUP Biñan',
    children: [
      'Vision and Mission',
      'History',
      'Board of Regents',
      'University Officials',
      'Campus Officials',
      'Virtual Campus',
      'Organizations',
    ],
  },
  { label: 'Certificate of Authenticity' },
  { label: 'Certificate of Program Compliance' },
  {
    label: 'Program Under Survey',
    children: [
      'BSIT-BN',
      'BEED-BN',
      'BSED-EN-BN',
      'BSED-SS-BN',
      'BSCPE-BN',
      'BSIE-BN',
      'BSBA-HRM-BN',
      'BSPSY-BN',
    ],
  },
  {
    label: 'Exhibit',
    children: [
      "Citizen's Charter",
      'University Code',
      'Administrative Manual',
      'Student Handbook',
      'Faculty Manual',
      'CHED Memorandum Order',
      'Presidential Decree No. 1341',
      'Syllabus',
    ],
  },
]

function ChevronIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="size-4 fill-current">
      <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
    </svg>
  )
}

function getMenuHref(label: string) {
  if (label === 'Home') return '/'
  if (label.includes('About PUP')) return '/about-pup-binan'
  if (label === 'Certificate of Authenticity') return '/certificate-of-authenticity'
  if (label === 'Certificate of Program Compliance') return '/certificate-of-program-compliance'
  if (label === 'Program Under Survey') return '/program-under-survey'
  if (label === 'Exhibit') return '/exhibit'

  return '/coming-soon'
}

function getChildHref(parentLabel: string, childLabel: string) {
  if (parentLabel === 'Exhibit' && childLabel === "Citizen's Charter") {
    return '/citizen-charter'
  }

  if (parentLabel === 'Exhibit' && childLabel === 'University Code') {
    return '/university-code'
  }

  if (parentLabel === 'Exhibit' && childLabel === 'Administrative Manual') {
    return '/administrative-manual'
  }

  if (parentLabel === 'Exhibit' && childLabel === 'Student Handbook') {
    return '/student-handbook'
  }

  if (parentLabel === 'Exhibit' && childLabel === 'Faculty Manual') {
    return '/faculty-manual'
  }

  if (parentLabel === 'Exhibit' && childLabel === 'CHED Memorandum Order') {
    return '/ched-memorandum-order'
  }

  if (parentLabel === 'Exhibit' && childLabel === 'Presidential Decree No. 1341') {
    return '/presidential-decree-no-1341'
  }

  if (parentLabel === 'Exhibit' && childLabel === 'Syllabus') {
    return '/syllabus'
  }

  if (parentLabel.includes('About PUP')) {
    if (childLabel === 'Vision and Mission') return '/vision-and-mission'
    if (childLabel === 'History') return '/history'
    if (childLabel === 'Board of Regents') return '/board-of-regent'
    if (childLabel === 'University Officials') return '/university-official'
    if (childLabel === 'Campus Officials') return '/campus-official'
    if (childLabel === 'Virtual Campus') return '/virtual-campus'
    if (childLabel === 'Organizations') return '/organization'

    const sectionId = childLabel.toLowerCase().replaceAll(' ', '-')
    return `/about-pup-binan#${sectionId}`
  }

  if (parentLabel === 'Program Under Survey') {
    if (childLabel === 'BSIT-BN') return '/bsit'
    if (childLabel === 'BEED-BN') return '/beed'
    if (childLabel === 'BSED-EN-BN') return '/bsed-en'
    if (childLabel === 'BSED-SS-BN') return '/bsed-ss'
    if (childLabel === 'BSCPE-BN') return '/bscpe'
    if (childLabel === 'BSIE-BN') return '/bsie'
    if (childLabel === 'BSBA-HRM-BN') return '/bsba-hrm'
    if (childLabel === 'BSPSY-BN') return '/bspsy'

    return '/coming-soon'
  }

  return '/coming-soon'
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)

  function toggleSection(label: string) {
    setOpenSection(openSection === label ? null : label)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-[#720d18] px-5 py-2 text-center text-xs font-semibold tracking-wide text-white sm:text-left">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span>THE COUNTRY'S 1ST POLYTECHNIC UNIVERSITY</span>
          <span className="hidden text-white/75 sm:block">Accreditation Portal</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a href="/" className="flex min-w-0 items-center gap-3" aria-label="PUP Biñan home">
          <img src={pupBinanLogo} alt="PUP Biñan Campus seal" className="size-14 shrink-0 object-contain sm:size-16" />
          <div className="min-w-0 border-l border-slate-200 pl-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8a1724] sm:text-xs">
              Polytechnic University of the Philippines
            </p>
            <p className="mt-0.5 text-lg font-bold leading-tight text-slate-900 sm:text-xl">Biñan Campus</p>
          </div>
        </a>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>

      <nav className="border-t border-slate-100 bg-white" aria-label="Main navigation">
        <div className="mx-auto hidden max-w-7xl items-stretch px-5 lg:flex lg:px-8">
          {menuItems.map((item) => (
            <div key={item.label} className="group relative flex">
              <a
                href={getMenuHref(item.label)}
                className="flex items-center gap-1.5 border-b-3 border-transparent px-3 py-4 text-center text-xs font-bold leading-tight text-slate-700 transition hover:border-[#8a1724] hover:text-[#8a1724] xl:px-4 xl:text-[13px]"
              >
                {item.label}
                {item.children && <ChevronIcon />}
              </a>

              {item.children && (
                <div className="invisible absolute left-0 top-full w-64 translate-y-2 rounded-b-xl border-t-3 border-[#8a1724] bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <a key={child} href={getChildHref(item.label, child)} className="block rounded-lg px-4 py-2.5 text-sm text-slate-700 hover:bg-[#8a1724]/7 hover:text-[#8a1724]">
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-100 px-5 py-3 lg:hidden">
            {menuItems.map((item) => (
              <div key={item.label} className="border-b border-slate-100 last:border-0">
                <div className="flex items-center">
                  <a href={getMenuHref(item.label)} className="flex-1 py-3 text-sm font-semibold text-slate-800">
                    {item.label}
                  </a>
                  {item.children && (
                    <button type="button" onClick={() => toggleSection(item.label)} className="grid size-10 place-items-center text-slate-500" aria-label={`Open ${item.label} menu`}>
                      <span className={openSection === item.label ? 'rotate-180' : ''}><ChevronIcon /></span>
                    </button>
                  )}
                </div>
                {item.children && openSection === item.label && (
                  <div className="mb-3 border-l-2 border-[#8a1724] pl-4">
                    {item.children.map((child) => <a key={child} href={getChildHref(item.label, child)} className="block py-2 text-sm text-slate-600">{child}</a>)}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
