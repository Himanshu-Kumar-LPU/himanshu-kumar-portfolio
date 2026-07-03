import SectionShell from '../components/SectionShell'
import SectionHeading from '../components/SectionHeading'
import { certificates } from '../constants/portfolioData'

const certificateCategory = (name) => {
  if (name.includes('C++')) return 'C++'
  if (name.includes('C Programming')) return 'C'
  if (name.includes('React.js')) return 'React'
  if (name.includes('Python')) return 'Python'
  if (name.includes('Time Management')) return 'Time Management'
  return 'Cert'
}

const certificateImageMap = {
  'Programming Using C++ – Infosys Springboard': '/images/certificateimages/C++.jpg',
  'C Programming – Lovely Professional University': '/images/certificateimages/C.jpg',
  'React.js Certification – Tech Veda': '/images/certificateimages/React.jpg',
  'Basic Python Certification – Skillera': '/images/certificateimages/Python.jpg',
  'Time Management Certification – Master Union': '/images/certificateimages/Time.jpg',
}

function Certificates() {
  return (
    <SectionShell id="certificates">
      <SectionHeading title="Certificates" subtitle="Credentials" />

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {certificates.map((item) => {
          const [title, issuer] = item.split(' – ')
          const category = certificateCategory(item)
          const imageHref = certificateImageMap[item]
          return (
            <a
              key={item}
              href={imageHref}
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <article className="glass-card p-6 transition duration-200 hover:-translate-y-1 hover:border-violet-300/40">
                <div className="mb-4 inline-flex max-w-full items-center justify-center rounded-full bg-violet-500/15 px-3 py-2 text-violet-300 shadow-sm">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-100">
                    {category}
                  </span>
                </div>
                <h3 className="text-base font-semibold leading-snug text-white md:text-lg">
                  {title?.trim() ?? item}
                </h3>
                {issuer && (
                  <p className="mt-3 text-sm text-white/60">
                    {issuer.trim()}
                  </p>
                )}
              </article>
            </a>
          )
        })}
      </div>
    </SectionShell>
  )
}

export default Certificates
