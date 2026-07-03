function SectionShell({ id, className = '', children }) {
  return (
    <section id={id} className={`relative mx-auto w-[min(1100px,92%)] py-12 sm:py-20 ${className}`}>
      {children}
    </section>
  )
}

export default SectionShell
