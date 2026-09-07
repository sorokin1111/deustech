import { useScrollReveal } from '../hooks/useScrollReveal';
import { AnimatedCounter } from './AnimatedCounter';

export function ProblemSection() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal<HTMLDivElement>();

  const problems = [
    { text: 'Missed live-birth targets → dissatisfied referring physicians' },
    { text: 'Extra biopsy / PGT-A costs → lower margin per cycle' },
    { text: 'Multiple failed transfers → reputation risk & patient churn' },
    { text: 'Manual grading → embryologist burnout and inter-observer variance' },
  ];

  return (
    <section id="problem" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref={leftRef}
            className={`space-y-6 transition-all duration-700 ${
              leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="group relative bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:border-[#00D1FF]/30 transition-all hover:shadow-lg hover:shadow-slate-200/50">
                <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-[#00D1FF]/20" />
                <AnimatedCounter
                  value={6}
                  prefix="1 in "
                  className="block font-bold text-4xl md:text-5xl text-[#0E1F3A] tracking-tight"
                />
                <p className="text-sm text-slate-500 mt-3 font-medium">
                  couples face infertility
                </p>
              </div>
              <div className="group relative bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:border-[#00D1FF]/30 transition-all hover:shadow-lg hover:shadow-slate-200/50">
                <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-[#00D1FF]/20" />
                <AnimatedCounter
                  value={30}
                  suffix="%"
                  className="block font-bold text-4xl md:text-5xl text-[#0E1F3A] tracking-tight"
                />
                <p className="text-sm text-slate-500 mt-3 font-medium">
                  Average IVF success today
                </p>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-[#04101F] to-[#0E1F3A] p-8 rounded-2xl text-white overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#00D1FF]/10 blur-2xl" />
              <div className="relative">
                <p className="text-sm text-white/50 font-medium uppercase tracking-wider mb-2">
                  The gap
                </p>
                <p className="text-2xl font-bold leading-snug">
                  Without objective AI support, success rates plateau around 30%.
                </p>
                <p className="text-white/60 mt-3 text-sm leading-relaxed">
                  Labs lose revenue and time while couples seek second opinions elsewhere.
                </p>
              </div>
            </div>
          </div>

          <div
            ref={rightRef}
            className={`transition-all duration-700 delay-100 ${
              rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-sm font-semibold text-[#00D1FF] uppercase tracking-wider mb-3">
              The problem
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E1F3A] mb-8 leading-tight tracking-tight">
              Unpredictable embryo outcomes hurt your lab's KPIs
            </h2>
            <div className="space-y-4">
              {problems.map((p, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-[#00D1FF]/10 flex items-center justify-center group-hover:bg-[#00D1FF]/20 transition-colors">
                      <div className="w-2 h-2 bg-[#00D1FF] rounded-full" />
                    </div>
                  </div>
                  <p className="text-base text-slate-600 leading-relaxed pt-1.5">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
