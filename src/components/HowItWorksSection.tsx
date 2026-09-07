import { Target, Upload, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const deploymentOptions = [
  {
    icon: Target,
    title: 'Embedded in incubator',
    badge: 'On-device',
    features: [
      'Direct feed from time-lapse cameras',
      'AI inference on-device',
      'Scores automatically synced to your EMR / LIMS',
    ],
  },
  {
    icon: Upload,
    title: 'Pure SaaS workflow',
    badge: 'Cloud',
    features: [
      'Upload blastocyst images or time-lapse video',
      'Secure cloud inference in < 30 s',
      'Scores exported as PDF report',
    ],
  },
];

export function HowItWorksSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm font-semibold text-[#00D1FF] uppercase tracking-wider mb-3">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E1F3A] mb-5 tracking-tight">
            Choose the deployment that fits your lab
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Two seamless integration paths — both designed to slot into your existing workflow
            without disruption.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {deploymentOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:border-[#00D1FF]/30 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.7s ease ${index * 0.15}s`,
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white shadow-md shadow-slate-200/50 group-hover:shadow-[#00D1FF]/20 transition-shadow">
                    <Icon className="text-[#00D1FF]" size={26} />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00D1FF]/10 text-[#00D1FF]">
                    {option.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0E1F3A] mb-6 tracking-tight">
                  {option.title}
                </h3>

                <div className="space-y-3">
                  {option.features.map((feature, fi) => (
                    <div key={fi} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-md bg-[#00D1FF]/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-[#00D1FF] rounded-full" />
                      </div>
                      <p className="text-slate-600 text-[15px] leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() =>
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0E1F3A] hover:text-[#00D1FF] transition-colors group/btn"
                >
                  Learn more
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
