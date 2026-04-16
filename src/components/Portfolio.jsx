import { useState } from 'react'
import { FadeSection } from '../hooks/useFadeUp'
import { PORTFOLIO, PORTFOLIO_CATEGORIES } from '../data'

const aspectClasses = {
  portrait:  'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  square:    'aspect-square',
}

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? PORTFOLIO : PORTFOLIO.filter((p) => p.cat === active)

  return (
    <section id="portfolio" className="bg-dark-2 py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <FadeSection>
          <p className="section-label">Our Work</p>
          <h2 className="section-title">
            Curated <em>Portfolio</em>
          </h2>
        </FadeSection>

        {/* Filter tabs */}
        <FadeSection delay={100}>
          <div className="flex flex-wrap gap-2 mt-10">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 text-[0.7rem] tracking-[0.1em] uppercase font-medium font-sans
                            transition-all duration-300 border cursor-pointer
                            ${active === cat
                              ? 'text-gold border-[rgba(201,169,110,0.3)] bg-[rgba(201,169,110,0.08)]'
                              : 'text-muted border-[rgba(255,255,255,0.08)] hover:text-[#f0ede8] hover:border-[rgba(255,255,255,0.15)]'
                            }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeSection>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[3px] mt-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden cursor-pointer group ${aspectClasses[item.aspect]}`}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background:
                    'linear-gradient(to top, rgba(5,5,8,0.88) 0%, transparent 60%)',
                }}
              >
                <div>
                  <p className="text-[0.6rem] tracking-[0.15em] uppercase text-gold mb-1">
                    {item.cat}
                  </p>
                  <p className="font-serif text-lg font-light text-[#f0ede8]">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
