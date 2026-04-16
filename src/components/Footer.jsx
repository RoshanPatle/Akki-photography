import { FOOTER_LINKS, SOCIAL_LINKS, NAV_LINKS } from '../data'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="px-6 pt-16 pb-8 bg-dark-1 md:px-16"
      style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Top grid ── */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <button
              onClick={() => scrollTo('home')}
              className="font-serif text-2xl font-light tracking-widest text-[#f0ede8] mb-4 block
                         bg-transparent border-none cursor-pointer"
            >
              Akki Studio<span className="text-gold">.</span>
            </button>
            <p className="text-sm text-muted leading-relaxed max-w-[220px] mb-6">
              Artisan photography studio based in Nagpur, capturing stories that last a lifetime.
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center text-xs font-semibold no-underline transition-all duration-300 cursor-pointer w-9 h-9 text-muted"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(201,169,110,0.4)'
                    e.currentTarget.style.color = '#c9a96e'
                    e.currentTarget.style.background = 'rgba(201,169,110,0.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.color = '#7a7880'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[0.65rem] tracking-[0.18em] uppercase text-[#f0ede8] mb-5 font-semibold">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => {
                  const navItem = NAV_LINKS.find(
                    (n) => n.label.toLowerCase() === link.toLowerCase()
                  )
                  return (
                    <li key={link}>
                      <button
                        onClick={() => navItem && scrollTo(navItem.id)}
                        className="font-sans text-sm text-left transition-colors duration-300 bg-transparent border-none cursor-pointer text-muted hover:text-gold"
                      >
                        {link}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="w-full h-px mb-6" style={{ background: 'rgba(255,255,255,0.07)' }} />

        {/* ── Bottom row ── */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {year} AKKI Studio. All rights reserved. Crafted with passion in Nagpur.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service'].map((t) => (
              <button
                key={t}
                className="font-sans text-xs transition-colors duration-300 bg-transparent border-none cursor-pointer text-muted hover:text-gold"
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
