import { FileCheck2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function TractionSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="traction" className="relative py-20 bg-gradient-to-r from-[#00D1FF] to-[#0099CC] overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Traction
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
              26 partner clinics across Europe
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Signed agreements with leading IVF centers. Contracts cover data sharing,
              clinical validation, and commercial deployment.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
            <div
              className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3"
              style={{ opacity: isVisible ? 1 : 0, transition: 'all 0.6s ease 0.1s' }}
            >
              <FileCheck2 className="text-white" size={20} />
              <span className="text-white font-semibold text-lg">26</span>
              <span className="text-white/70">signed contracts</span>
            </div>
            <div
              className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3"
              style={{ opacity: isVisible ? 1 : 0, transition: 'all 0.6s ease 0.2s' }}
            >
              <span className="text-white font-semibold text-lg">EU</span>
              <span className="text-white/70">partner network</span>
            </div>
            <div
              className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3"
              style={{ opacity: isVisible ? 1 : 0, transition: 'all 0.6s ease 0.3s' }}
            >
              <span className="text-white font-semibold text-lg">Active</span>
              <span className="text-white/70">clinical validation</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden hover:border-white/40 transition-all"
              style={{ opacity: isVisible ? 1 : 0, transition: 'all 0.6s ease 0.4s' }}
            >
              <img
                src="/contract-1.jpg"
                alt="Partner contract example 1"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>

            <div
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden hover:border-white/40 transition-all"
              style={{ opacity: isVisible ? 1 : 0, transition: 'all 0.6s ease 0.5s' }}
            >
              <img
                src="/contract-2.jpg"
                alt="Partner contract example 2"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <p className="text-center text-white/60 text-sm mt-6 max-w-xl mx-auto">
            Contract previews shown with sensitive data redacted. Full agreements available
            under NDA for qualified partners.
          </p>
        </div>
      </div>
    </section>
  );
}