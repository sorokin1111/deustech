import { ArrowRight, Play } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#04101F]"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#00D1FF]/20 blur-[120px] animate-pulse" />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#0099CC]/15 blur-[120px] animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#00D1FF]/8 blur-[100px]"
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-white/80 mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#00D1FF] opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D1FF]" />
          </span>
          MVP validated in European partner clinics
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
          AI-powered embryo selection
          <br />
          for{' '}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-[#00D1FF] to-[#5EE6FF] bg-clip-text text-transparent">
              higher IVF success
            </span>
            <svg
              className="absolute -bottom-1 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 9C50 3 150 3 298 9"
                stroke="url(#underline)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="underline" x1="0" y1="0" x2="300" y2="0">
                  <stop stopColor="#00D1FF" />
                  <stop offset="1" stopColor="#5EE6FF" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          Life Creator integrates genetic, visual, and patient data to help embryologists
          choose embryos with the highest live-birth potential.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative overflow-hidden bg-[#00D1FF] text-white px-7 py-3.5 rounded-xl text-base font-semibold transition-all hover:shadow-2xl hover:shadow-[#00D1FF]/40 hover:-translate-y-0.5 flex items-center gap-2.5"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              Request a demo
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#00B8E6] to-[#00D1FF] opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button
            onClick={() => document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            className="group text-white/80 px-6 py-3.5 rounded-xl text-base font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all flex items-center gap-2.5"
          >
            <Play size={16} className="text-[#00D1FF]" />
            See how it works
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-white/40 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
