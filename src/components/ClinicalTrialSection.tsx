import { ExternalLink, Calendar, MapPin, FlaskConical, CheckCircle, BadgeCheck, FileText, Download } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const facts = [
  { label: 'Status', value: 'Active', icon: CheckCircle },
  { label: 'Duration', value: '2023 — 2026', icon: Calendar },
  { label: 'Type', value: 'Observational', icon: FlaskConical },
  { label: 'Location', value: 'Graz, Austria', icon: MapPin },
];

export function ClinicalTrialSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="trial"
      className="relative py-24 bg-[#04101F] overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00D1FF]/5 blur-[160px]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 50%, rgba(0,209,255,0.3) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#00D1FF] uppercase tracking-wider mb-3">
              Clinical Research
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
              Registered Clinical Trial
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Our digital twin model is being validated in a longitudinal observational study
              registered on ClinicalTrials.gov — collecting multimodal embryo data to predict
              implantation success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {facts.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:bg-white/[0.08] transition-all duration-300"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.6s ease ${i * 0.1}s`,
                  }}
                >
                  <Icon className="mx-auto mb-2 text-[#00D1FF]" size={20} />
                  <div className="text-white font-bold text-lg">{f.value}</div>
                  <div className="text-white/40 text-xs mt-1 uppercase tracking-wider">{f.label}</div>
                </div>
              );
            })}
          </div>

          <div
            className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 mb-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.7s ease 0.4s',
            }}
          >
            <p className="text-sm font-semibold text-[#00D1FF] uppercase tracking-wider mb-2">
              Documents
            </p>
            <h3 className="text-2xl font-bold text-white mb-6">Ethics Committee Approval</h3>

            <div className="grid md:grid-cols-5 gap-8 items-start">
              <div className="md:col-span-3 space-y-4">
                <p className="text-white/60 leading-relaxed text-[15px]">
                  The study has been reviewed and approved by the responsible independent
                  ethics committee. The approval letter confirms the study conforms with
                  the Declaration of Helsinki and local regulations.
                </p>

                <div className="space-y-3">
                  <a
                    href="/ethics-committee-approval.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-400/40 rounded-xl p-4 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-emerald-400/15 flex items-center justify-center shrink-0">
                      <BadgeCheck className="text-emerald-400" size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold group-hover:text-emerald-300 transition-colors">
                        Ethics Committee Approval Letter
                      </p>
                      <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                          Approved
                        </span>
                        <span className="text-white/40 text-xs">Independent Ethics Committee</span>
                      </div>
                    </div>
                    <Download className="text-white/30 group-hover:text-white shrink-0" size={18} />
                  </a>

                  <a
                    href="https://clinicaltrials.gov/study/NCT07305480"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00D1FF]/40 rounded-xl p-4 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[#00D1FF]/15 flex items-center justify-center shrink-0">
                      <FileText className="text-[#00D1FF]" size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold group-hover:text-[#00D1FF] transition-colors">
                        ClinicalTrials.gov Registration
                      </p>
                      <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        <span className="text-xs font-mono text-[#00D1FF]/80">NCT07305480</span>
                        <span className="text-white/40 text-xs">Study record</span>
                      </div>
                    </div>
                    <ExternalLink className="text-white/30 group-hover:text-white shrink-0" size={18} />
                  </a>
                </div>
              </div>

              <div className="md:col-span-2">
                <a
                  href="/ethics-committee-approval.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/[0.04] border border-white/10 rounded-xl overflow-hidden hover:border-[#00D1FF]/40 transition-all group"
                >
                  <div className="relative max-h-80 overflow-hidden">
                    <img
                      src="/ethics-committee-approval.png"
                      alt="Ethics committee approval letter"
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="flex items-center gap-2 bg-black/60 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full">
                        Open full document
                        <ExternalLink size={14} />
                      </span>
                    </div>
                  </div>
                  <p className="text-center text-white/40 text-xs py-3 px-4">
                    Ethics Committee Approval — click to view the document in full size
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.7s ease 0.5s',
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="flex-1">
                <p className="text-sm font-mono text-[#00D1FF]/80 mb-2">NCT07305480</p>
                <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                  Digital Twin Model for Blastocyst Evaluation in IVF Clinics
                </h3>
                <p className="text-white/50 leading-relaxed text-[15px]">
                  A non-interventional study developing a multimodal digital twin model that analyzes
                  clinical, molecular, and biochemical data from routine IVF cycles to predict embryo
                  implantation potential — without relying on embryo images.
                </p>
              </div>
              <a
                href="https://clinicaltrials.gov/study/NCT07305480"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#00D1FF] hover:bg-[#00B8E6] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:shadow-lg hover:shadow-[#00D1FF]/30 hover:-translate-y-0.5 shrink-0"
              >
                View on ClinicalTrials.gov
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
