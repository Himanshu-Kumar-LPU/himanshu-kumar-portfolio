import { useEffect, useState } from 'react'
import { socialLinks } from '../constants/portfolioData'
import SectionShell from '../components/SectionShell'
import MagneticButton from '../components/MagneticButton'

const titles = [
  'Full Stack Developer',
  'React Developer',
  'MERN Stack Developer',
  'Open Source Enthusiast',
  'Problem Solver',
]

const allParticles = Array.from({ length: 16 }, (_, i) => {
  const seed = (i * 37) % 100
  return {
    id: i,
    left: `${seed}%`,
    top: `${(seed * 1.7) % 100}%`,
    delay: `${(i % 7) * 0.5}s`,
    size: `${2 + (i % 4)}px`,
  }
})

function Hero({ lowPerformance = false }) {
  const [titleIndex, setTitleIndex] = useState(0)
  const [text, setText] = useState('')
  const [typing, setTyping] = useState(true)
  const [resumeModalOpen, setResumeModalOpen] = useState(false)

  useEffect(() => {
    let cursor = 0
    let forward = true
    let timer

    const type = () => {
      const current = titles[titleIndex]
      if (forward) {
        cursor += 1
        setText(current.slice(0, cursor))
        if (cursor === current.length) {
          setTyping(false)
          timer = window.setTimeout(() => {
            forward = false
            setTyping(true)
            type()
          }, 1200)
          return
        }
      } else {
        cursor -= 1
        setText(current.slice(0, cursor))
        if (cursor === 0) {
          forward = true
          setTitleIndex((prev) => (prev + 1) % titles.length)
        }
      }
      timer = window.setTimeout(type, forward ? 100 : 50)
    }

    type()
    return () => window.clearTimeout(timer)
  }, [titleIndex])

  return (
    <SectionShell id="hero" className="min-h-screen pt-36">
      <div className="hero-bg" />
      {(lowPerformance ? allParticles.slice(0, 12) : allParticles).map((particle) => (
        <span
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
          }}
        />
      ))}

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-4xl fade-in"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Hi, I&apos;m</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight text-white sm:text-6xl md:text-7xl">
            Himanshu Kumar
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/75 sm:text-xl">
            Computer Science Engineering student passionate about building modern, fast, and user-friendly web applications with clean code and exceptional user experiences.
          </p>
          <p className="mt-6 text-xl text-violet-300 sm:text-2xl">
            {text}
            <span className="typing-cursor">|</span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton
              type="button"
              className="bg-gradient-to-r from-violet-600 to-cyan-500 shadow-[0_0_28px_rgba(124,58,237,0.45)]"
              onClick={() => setResumeModalOpen(true)}
            >
              Download Resume
            </MagneticButton>
            <MagneticButton className="border-cyan-300/50 bg-cyan-500/10"><a href='https://wa.me/qr/4MB4NACX7OF7C1'>Contact Me</a></MagneticButton>
          </div>

          <div className="mt-10 flex items-center gap-4">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="hover-target social-pill"
                >
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>

        <div
          className="mx-auto w-full max-w-[430px] fade-in"
          style={{ transformPerspective: 1100 }}
        >
          <div className="hero-photo-frame glass-card relative overflow-hidden rounded-[3rem] p-4">
            <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-cyan-400/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-violet-500/30 blur-3xl" />
            <div className="hero-photo-stage relative z-10 rounded-[2.5rem] overflow-hidden">
              <img
                src="/images/hh.jpg"
                alt="Himanshu Kumar"
                className="w-full h-56 sm:h-72 md:h-[420px] lg:h-[480px] rounded-[2.5rem] object-cover object-top"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll to About section">
        <span />
      </a>
      {resumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setResumeModalOpen(false)} />
          <div className="relative z-60 mx-4 w-full max-w-md rounded-2xl bg-slate-900 p-6 text-left shadow-lg">
            <h3 className="text-lg font-semibold text-white">Resume</h3>
            <p className="mt-3 text-sm text-white/80">Resume will be uploaded soon.</p>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setResumeModalOpen(false)}
                className="rounded-full bg-violet-600/80 px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </SectionShell>
  )
}

export default Hero
