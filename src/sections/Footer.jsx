import { FiArrowUp } from 'react-icons/fi'
import { socialLinks } from '../constants/portfolioData'
import SectionShell from '../components/SectionShell'

function Footer() {
  return (
    <SectionShell id="footer" className="pb-12 pt-12">
      <footer className="glass-card flex flex-col items-center justify-between gap-5 p-6 sm:flex-row">
        <p className="text-sm text-white/65">© {new Date().getFullYear()} Himanshu Kumar. All rights reserved.</p>
        <div className="flex items-center gap-3">
          {socialLinks.map((item) => {
            const Icon = item.icon
            return (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="social-pill" aria-label={item.label}>
                <Icon />
              </a>
            )
          })}
        </div>
        <a href="#hero" className="social-pill" aria-label="Back to top">
          <FiArrowUp />
        </a>
      </footer>
    </SectionShell>
  )
}

export default Footer
