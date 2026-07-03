import SectionShell from '../components/SectionShell'
import SectionHeading from '../components/SectionHeading'
import { education } from '../constants/portfolioData'

function Education() {
  return (
    <SectionShell id="education">
      <SectionHeading title="Education" subtitle="Academic" />
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((item) => (
          <article key={item.title} className="glass-card p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/75">{item.period}</p>
            <h3 className="mt-2 text-xl text-white">{item.title}</h3>
            <p className="mt-1 text-sm text-white/65">{item.institute}</p>
            <p className="mt-3 text-sm leading-7 text-white/75">{item.details}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}

export default Education
