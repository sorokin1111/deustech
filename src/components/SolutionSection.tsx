import { Brain, Target, TrendingUp } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const solutions = [
  {
    icon: Brain,
    title: 'Multimodal AI scores embryos',
    description:
      'Advanced machine learning analyzes genetic, morphological, and patient data to provide comprehensive embryo assessment.',
    accent: 'from-[#00D1FF] to-[#0099CC]',
  metric: '3 data streams',
  metricLabel: 'integrated per embryo',
  },
  {
    icon: Target,
    title: 'Predicts aneuploidy >80% accuracy',
    description:
      'Our AI model demonstrates superior accuracy in detecting chromosomal abnormalities, reducing the need for invasive testing.',
    accent: 'from-[#00D1FF] to-[#0099CC]',
    metric: '>80%',
    metricLabel: 'aneuploidy prediction',
  },
  {
    icon: TrendingUp,
    title: 'Reduces need for PGT-A tests & costs',
    description:
      'Minimize expensive genetic testing while maintaining high confidence in embryo selection, saving clinics and patients money.',
    accent: 'from-[#00D1FF] to-[#0099CC]',
    metric: '−34%',
    metricLabel: 'PGT-A tests per cycle',
  },
];

export function SolutionSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="solution" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#00D1FF]/5 blur-[120px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm font-semibold text-[#00D1FF] uppercase tracking-wider mb-3">
            The solution
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E1F3A] mb-5 tracking-tight">
            Life Creator: Advanced AI for Better Outcomes
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Our multimodal AI platform revolutionizes embryo selection by integrating multiple
            data sources to provide unprecedented accuracy in predicting implantation success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="group relative bg-white p-8 rounded-2xl border border-slate-100 hover:border-[#00D1FF]/30 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.7s ease ${i * 0.15}s`,
                }}
              >
                <div className="absolute top-6 right-6 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-2xl font-bold text-[#0E1F3A]">{s.metric}</div>
                  <div className="text-xs text-slate-400">{s.metricLabel}</div>
                </div>

                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${s.accent} mb-6 shadow-lg shadow-[#00D1FF]/20`}
                >
                  <Icon className="text-white" size={26} />
                </div>

                <h3 className="text-xl font-bold text-[#0E1F3A] mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-[15px]">{s.description}</p>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#00D1FF] md:opacity-0 group-hover:opacity-100 transition-opacity">
                    {s.metric} {s.metricLabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
