import { useState } from 'react'
import SectionShell from '../components/SectionShell'
import SectionHeading from '../components/SectionHeading'
import MagneticButton from '../components/MagneticButton'

const initialState = { name: '', email: '', message: '' }
const whatsappNumber = '919XXXXXXXXX' // Replace with your WhatsApp number in international format

function Contact() {
  const [formState, setFormState] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const nextErrors = {}
    if (!formState.name.trim()) nextErrors.name = 'Name is required.'
    if (!/^\S+@\S+\.\S+$/.test(formState.email)) nextErrors.email = 'Please provide a valid email.'
    if (!formState.message.trim()) nextErrors.message = 'Message is required.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const onChange = (event) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (!validate()) return

    const text = `Name: ${formState.name}\nEmail: ${formState.email}\nMessage: ${formState.message}`
    const whatsappUrl = `https://wa.me/${9334094269}?text=${encodeURIComponent(text)}`

    window.open(whatsappUrl, '_blank')
    setSuccess(true)
    setFormState(initialState)
    setTimeout(() => setSuccess(false), 2200)
  }

  return (
    <SectionShell id="contact">
      <SectionHeading title="Contact" subtitle="Let&apos;s Build" />
      <div className="grid gap-8 md:grid-cols-[1fr_1.15fr]">
        <article className="glass-card p-6 sm:p-8">
          <h3 className="text-2xl text-white">Ready for impactful work?</h3>
          <p className="mt-4 text-sm leading-7 text-white/70">
            Let&apos;s collaborate to design and build premium user experiences that drive measurable results.
          </p>
          <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
            <img
              src="/images/himu.jpg"
              alt="Contact illustration"
              className="w-full h-40 sm:h-56 md:h-72 object-cover object-center"
            />
          </div>
        </article>

        <form onSubmit={onSubmit} noValidate className="glass-card space-y-4 p-6 sm:p-8">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-white/80">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={formState.name}
              onChange={onChange}
              className="input"
              placeholder="Your full name"
            />
            {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-white/80">
              Email
            </label>
            <input
              id="email"
              name="email"
              value={formState.email}
              onChange={onChange}
              className="input"
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-white/80">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={onChange}
              className="input min-h-36"
              placeholder="Tell me about your project"
            />
            {errors.message && <p className="mt-1 text-xs text-red-300">{errors.message}</p>}
          </div>

          <MagneticButton type="submit" className="w-full bg-gradient-to-r from-violet-600 to-cyan-500">
            Send Message
          </MagneticButton>

          {success && (
            <p className="rounded-lg border border-green-300/40 bg-green-400/10 p-3 text-sm text-green-200">
              Message sent successfully. I&apos;ll get back to you shortly.
            </p>
          )}
        </form>
      </div>
    </SectionShell>
  )
}

export default Contact
