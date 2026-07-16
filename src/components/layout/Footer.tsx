import pupLogo from '../../assets/images/pupbn-logo.webp'
import { QuickLinks } from '../footer/QuickLinks'

export function Footer() {
  return (
    <footer className="bg-[#4b0710] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-4">
            <img src={pupLogo} alt="PUP Biñan Campus seal" className="size-16 rounded-full bg-white object-contain" />
            <div>
              <p className="font-bold">Polytechnic University of the Philippines</p>
              <p className="mt-1 text-sm text-white/60">Biñan Campus</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-6 text-white/60">A dedicated portal supporting transparency, quality assurance, and program accreditation.</p>
        </div>

        <QuickLinks />

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-amber-300">Contact us</h3>
          <address className="mt-5 space-y-3 text-sm not-italic leading-6 text-white/65">
            <p>Brgy. Zapote, Biñan City, Laguna</p>
            <p>(049) 513-5034</p>
            <p>binan@pup.edu.ph</p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/45">© 2026 Polytechnic University of the Philippines — Biñan Campus. All rights reserved.</div>
    </footer>
  )
}
