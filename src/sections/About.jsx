import SectionShell from '../components/SectionShell'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import { stats } from '../constants/portfolioData'

function About() {
  return (
    <SectionShell id="about">
      <SectionHeading title="About Me" subtitle="Journey" />
      <div className="grid gap-8 items-stretch md:grid-cols-[1.05fr_1.3fr]">
        <ScrollReveal className="glass-card h-full p-6 sm:p-8 rounded-[2.25rem] overflow-hidden">
          <img
            src="/images/himu.jpg"
            alt="Portrait of Himanshu Kumar"
            className="h-full w-full rounded-[2rem] object-cover"
            loading="lazy"
          />
        </ScrollReveal>

        <div className="space-y-6">
          <ScrollReveal className="timeline-item">
            I’m a Computer Science Engineering student with a strong passion for full-stack web development. I enjoy building responsive, modern, and user-friendly web applications while continuously learning new technologies.
          </ScrollReveal>
          <ScrollReveal className="timeline-item">
            My primary tech stack includes React, Node.js, Express.js, MongoDB, and JavaScript. I love solving real-world problems through clean, efficient, and scalable code.
          </ScrollReveal>
          <ScrollReveal className="timeline-item">
            Beyond coding, I focus on improving my problem-solving skills, exploring new technologies, contributing to personal projects, and growing as a software developer every day.
          </ScrollReveal>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <article key={item.label} className="glass-card p-5">
            <p className="text-2xl font-semibold text-white">{item.value}</p>
            <p className="mt-1 text-sm text-white/65">{item.label}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}

export default About
