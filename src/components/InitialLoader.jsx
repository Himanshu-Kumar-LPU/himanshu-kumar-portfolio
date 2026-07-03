import { useEffect, useState } from 'react'

export default function InitialLoader({ duration = 1000, onFinish }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), duration)
    const t2 = setTimeout(() => {
      try {
        sessionStorage.setItem('seenInitialLoader', '1')
      } catch (e) {}
      onFinish && onFinish()
    }, duration + 180)
    return () => {
      clearTimeout(t)
      clearTimeout(t2)
    }
  }, [duration, onFinish])

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-slate-900/95 to-slate-800/95 transition-opacity ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="mx-4 w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl bg-gradient-to-br from-[#0b1220] to-[#0f1724] p-4 sm:p-6 shadow-2xl border border-white/6">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <div className="h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 p-1 shadow-lg flex items-center justify-center">
            <svg className="h-8 w-8 sm:h-10 sm:w-10 text-white animate-spin-slow" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <circle cx="24" cy="24" r="10" stroke="url(#g)" strokeWidth="3" strokeLinecap="round" strokeDasharray="31.4 31.4" />
              <circle cx="24" cy="24" r="4" fill="rgba(255,255,255,0.06)" />
            </svg>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-base sm:text-lg font-semibold text-white">Welcome — preparing your experience</div>
            <div className="mt-1 text-sm sm:text-sm text-white/70">Optimizing visuals for a smooth visit.</div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
        .animate-spin-slow { animation: spin-slow 1.6s linear infinite }
        @media (max-width: 420px) {
          .animate-spin-slow { animation-duration: 1.4s }
        }
      `}</style>
    </div>
  )
}
