import { CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { AnimatedCounter } from './AnimatedCounter';

const benefits = [
  'Higher live-birth rates 80%+',
  'Fewer repeat cycles for patients',
  '€949k annual savings per 1k embryos',
  '+12 pp clinical pregnancy rate (pilot n = 534 transfers)',
  '−34% PGT-A tests per cycle',
  'ROI < 6 months per lab (EU average)',
  'Stronger clinic reputation → more patients',
  'Reduced emotional stress for families',
];

export function BenefitsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="benefits"
      className="py-24 bg-gradient-to-br from-[#04101F] via-[#0E1F3A] to-[#04101F] text-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#00D1FF]/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0099CC]/10 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref={ref}
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-sm font-semibold text-[#00D1FF] uppercase tracking-wider mb-3">
              The benefits
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-tight leading-tight">
              Transform your clinic with Life Creator
            </h2>
            <div className="space-y-3">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.5s ease ${i * 0.08}s`,
                  }}
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#00D1FF]/10 flex items-center justify-center group-hover:bg-[#00D1FF]/20 transition-colors">
                    <CheckCircle className="text-[#00D1FF]" size={18} />
                  </div>
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 rounded-3xl text-center">
                <p className="text-sm text-white/40 uppercase tracking-wider mb-4">
                  Aneuploidy Prediction Accuracy
                </p>
                <div className="text-7xl md:text-8xl font-bold mb-4 tracking-tighter">
                  <AnimatedCounter
                    value={80}
                    suffix="%+"
                    className="bg-gradient-to-br from-[#00D1FF] to-[#5EE6FF] bg-clip-text text-transparent"
                  />
                </div>
                <p className="text-lg text-white/70 font-medium mb-6">
                  Validated across multiple EU partner clinics
                </p>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  <div>
                    <div className="text-2xl font-bold text-white">
                      <AnimatedCounter value={534} />
                    </div>
                    <p className="text-xs text-white/40 mt-1">Pilot transfers</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">
                      <AnimatedCounter value={12} prefix="+" suffix="pp" />
                    </div>
                    <p className="text-xs text-white/40 mt-1">Pregnancy rate</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">
                      <AnimatedCounter value={949} prefix="€" suffix="k" />
                    </div>
                    <p className="text-xs text-white/40 mt-1">Annual savings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
