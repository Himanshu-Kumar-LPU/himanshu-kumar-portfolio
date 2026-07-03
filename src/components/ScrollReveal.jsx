function ScrollReveal({ children, className = '' }) {
  return (
    <div className={`fade-in-on-scroll ${className}`}>
      {children}
    </div>
  )
}

export default ScrollReveal
