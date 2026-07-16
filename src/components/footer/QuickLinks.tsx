const quickLinks = [
  'Home',
  'About PUP Biñan',
  'Certificate of Authenticity',
  'Certificate of Program Compliance',
  'Programs Under Survey',
  'Exhibit',
]

export function QuickLinks() {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wider text-amber-300">Quick links</h3>
      <div className="mt-5 grid gap-2.5">
        {quickLinks.map((link) => (
          <a key={link} href="#placeholder" className="text-sm text-white/65 transition hover:text-white">
            {link}
          </a>
        ))}
      </div>
    </div>
  )
}
