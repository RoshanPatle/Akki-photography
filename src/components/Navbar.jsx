import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (id) => {
    setMenuOpen(false)
    scrollTo(id)
  }

  return (
    <>
      {/* ── Desktop / Tablet Navbar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-400
          ${scrolled
            ? 'glass-dark px-10 py-4 md:px-16'
            : 'bg-transparent px-6 py-6 md:px-16'
          }`}
      >
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="font-serif text-2xl font-light tracking-widest text-[#f0ede8] cursor-pointer bg-transparent border-none"
        >
          AKKI PHOTOGRAPHY<span className="text-gold">.</span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden gap-10 list-none md:flex">
          {NAV_LINKS.map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => handleNav(id)}
                className="text-[rgba(240,237,232,0.7)] text-xs tracking-[0.12em] uppercase font-medium
                           hover:text-gold transition-colors duration-300 bg-transparent border-none cursor-pointer"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => handleNav('contact')}
          className="hidden md:block btn-outline-gold"
        >
          Book Session
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-px bg-[#f0ede8] transition-all duration-300 origin-center"
            style={menuOpen ? { transform: 'rotate(45deg) translateY(6px)' } : {}}
          />
          <span
            className="block w-6 h-px bg-[#f0ede8] transition-all duration-300"
            style={menuOpen ? { opacity: 0 } : {}}
          />
          <span
            className="block w-6 h-px bg-[#f0ede8] transition-all duration-300 origin-center"
            style={menuOpen ? { transform: 'rotate(-45deg) translateY(-6px)' } : {}}
          />
        </button>
      </nav>

      {/* ── Mobile Full-Screen Menu ── */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10
                    transition-all duration-500
                    ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(5,5,8,0.97)', backdropFilter: 'blur(30px)' }}
      >
        {NAV_LINKS.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => handleNav(id)}
            className="font-serif text-4xl font-light tracking-wide text-[#f0ede8]
                       hover:text-gold transition-colors duration-300 bg-transparent border-none cursor-pointer"
          >
            {label}
          </button>
        ))}
        <button
          onClick={() => handleNav('contact')}
          className="mt-4 text-sm btn-gold"
        >
          Book a Session
        </button>
      </div>
    </>
  )
}
