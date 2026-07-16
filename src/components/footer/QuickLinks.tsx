const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About PUP Biñan', href: '/about-pup-binan' },
  { label: 'Certificate of Authenticity', href: '/certificate-of-authenticity' },
  { label: 'Certificate of Program Compliance', href: '/certificate-of-program-compliance' },
  { label: 'Programs Under Survey', href: '/#programs' },
  { label: 'Exhibit', href: '/coming-soon' },
]

export function QuickLinks() {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wider text-amber-300">Quick links</h3>
      <div className="mt-5 grid gap-2.5">
        {quickLinks.map((link) => (
          <a key={link.label} href={link.href} className="text-sm text-white/65 transition hover:text-white">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}
