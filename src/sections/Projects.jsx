import { useMemo, useState } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import SectionShell from '../components/SectionShell'
import SectionHeading from '../components/SectionHeading'
import { projectFilters, projects } from '../constants/portfolioData'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <SectionShell id="projects">
      <SectionHeading title="Featured Projects" subtitle="Portfolio" />

      <div className="mb-8 flex flex-wrap gap-3">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              activeFilter === filter
                ? 'bg-violet-600 text-white shadow-[0_0_18px_rgba(124,58,237,0.65)]'
                : 'glass-card text-white/70'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => {
          const Icon = project.icon
          return (
            <article
              key={project.title}
              className="project-card glass-card p-6"
            >
              <div className="mb-6 overflow-hidden rounded-[3rem] bg-slate-900/95 border border-slate-700 p-6 shadow-[0_24px_45px_rgba(15,23,42,0.24)]">
                <div className="relative h-48 sm:h-56 md:h-[260px] w-full overflow-hidden rounded-[2.5rem] bg-slate-950 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
                  {typeof Icon === 'string' ? (
                    <img
                      src={Icon}
                      alt={`${project.title} screenshot`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-950">
                      <Icon className="text-5xl text-white/85" />
                    </div>
                  )}
                </div>
              </div>
              <h3 className="text-2xl font-medium text-white">{project.title}</h3>
                <p className="mt-2 text-sm text-white/70">{project.description}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <li key={item} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/75">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="social-pill">
                    <FiGithub /> GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="social-pill">
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </article>
            )
          })}
      </div>
    </SectionShell>
  )
}

export default Projects
