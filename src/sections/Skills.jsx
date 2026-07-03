import { useEffect, useState } from 'react'
import SectionShell from '../components/SectionShell'
import SectionHeading from '../components/SectionHeading'
import { skills } from '../constants/portfolioData'

function Skills() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const section = document.getElementById('skills')
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.15) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: [0.15, 0.5] }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <SectionShell id="skills">
      <SectionHeading title="Skills" subtitle="Capabilities" />
      <div className="grid gap-5 lg:grid-cols-2">
        {Object.entries(skills).map(([category, list]) => (
          <article key={category} className="glass-card p-6">
            <h3 className="text-xl font-medium text-white">{category}</h3>
            <div className="mt-5 space-y-4">
              {list.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-sm text-white/75">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="skill-bar h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 shadow-[0_0_16px_rgba(124,58,237,0.7)]"
                      style={{
                        width: visible ? `${skill.level}%` : '0%',
                        transition: visible ? 'width 1.8s ease-out 0.12s' : 'none',
                        willChange: 'width',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}

export default Skills
