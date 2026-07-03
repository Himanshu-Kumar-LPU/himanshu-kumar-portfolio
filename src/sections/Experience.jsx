import SectionShell from '../components/SectionShell'
import SectionHeading from '../components/SectionHeading'
import { experience } from '../constants/portfolioData'

function Experience() {
  return (
    <SectionShell id="experience">
      <SectionHeading title="Experience" subtitle="Career" />
      <div className="relative space-y-8 border-l border-violet-300/30 pl-6">
        {experience.map((item) => (
          <article key={item.title} className="glass-card relative p-6">
            <span className="absolute -left-[34px] top-7 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(6,182,212,0.8)]" />
            <p className="text-sm text-cyan-300/80">{item.period}</p>
            <h3 className="mt-1 text-xl text-white">{item.title}</h3>
            <p className="text-sm text-white/65">{item.company}</p>
            <p className="mt-3 text-sm leading-7 text-white/75">{item.details}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}

export default Experience
