function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">{subtitle}</p>
      <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
    </div>
  )
}

export default SectionHeading
