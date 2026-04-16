import { useState } from 'react'
import { FadeSection } from '../hooks/useFadeUp'
import { CONTACT_DETAILS, SERVICES } from '../data'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  // ✅ UPDATED LOGIC (WhatsApp Integration)
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const { name, email, service, message } = form

    const phoneNumber = "918857918293" // ✅ Your WhatsApp number (with country code)

    const text = `Hello, I want to book a session.%0A%0A
Name: ${name}%0A
Email: ${email}%0A
Service: ${service}%0A
Message: ${message}`

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)

      // 👉 Open WhatsApp
      window.open(whatsappURL, "_blank")

      // Reset form
      setForm({ name: '', email: '', service: '', message: '' })

      setTimeout(() => setSubmitted(false), 4000)
    }, 800)
  }

  return (
    <section id="contact" className="px-6 py-32 bg-dark-3 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <FadeSection>
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">
            Book Your <em>Session</em>
          </h2>
        </FadeSection>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 mt-14">

          {/* ── Left: Contact Info ── */}
          <FadeSection>
            <p className="max-w-sm mb-10 text-sm leading-relaxed text-soft">
              Ready to create something extraordinary? We'd love to hear about your
              vision. Reach out and let's bring your story to life.
            </p>

            <div className="space-y-6">
              {CONTACT_DETAILS.map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-sm glass-gold text-gold">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[0.62rem] tracking-[0.15em] uppercase text-muted">
                      {label}
                    </p>
                    <p className="text-sm text-[#f0ede8] mt-1 leading-snug">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div
              className="relative mt-10 overflow-hidden"
              style={{ aspectRatio: '16/7', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center glass">
                <span className="mb-2 text-3xl text-gold">◎</span>
                <p className="text-xs tracking-widest uppercase text-muted">Civil Lines, Nagpur</p>
              </div>
            </div>
          </FadeSection>

          {/* ── Right: Form ── */}
          <FadeSection delay={100}>
            <form onSubmit={handleSubmit} className="p-8 space-y-5 glass md:p-10">

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField label="Name" name="name" type="text"
                  placeholder="Your name" value={form.name} onChange={handleChange} required />

                <FormField label="Email" name="email" type="email"
                  placeholder="your@email.com" value={form.email} onChange={handleChange} required />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.62rem] tracking-[0.15em] uppercase text-muted">
                  Service
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="cursor-pointer contact-input"
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s.title} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.62rem] tracking-[0.15em] uppercase text-muted">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your vision..."
                  className="resize-y contact-input"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center w-full gap-2 btn-gold disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="w-3 h-3 border rounded-full border-dark-1 border-t-transparent animate-spin" />
                    Sending…
                  </>
                ) : submitted ? (
                  '✓ Message Sent!'
                ) : (
                  'Send Message'
                )}
              </button>

              <p className="text-[0.65rem] text-muted text-center">
                We typically respond within 24 hours.
              </p>
            </form>
          </FadeSection>
        </div>
      </div>

      <style>{`
        .contact-input {
          width: 100%;
          padding: 0.8rem 1rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #f0ede8;
          font-family: 'Syne', sans-serif;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.3s, background 0.3s;
          -webkit-appearance: none;
          appearance: none;
        }
        .contact-input::placeholder { color: rgba(122,120,128,0.6); }
        .contact-input:focus {
          border-color: rgba(201,169,110,0.4);
          background: rgba(255,255,255,0.07);
        }
        .contact-input option { background: #0a0a10; color: #f0ede8; }
      `}</style>
    </section>
  )
}

function FormField({ label, name, type, placeholder, value, onChange, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[0.62rem] tracking-[0.15em] uppercase text-muted">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="contact-input"
      />
    </div>
  )
}