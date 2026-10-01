import { useState } from 'react';
import { Building2, CalendarRange, Database, FileCheck2, TrendingUp, UserRound, X } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { companyDetails, registeredAddressLine } from '../lib/company';

const metrics = [
  {
    icon: TrendingUp,
    title: '€6.2M',
    label: 'Investment round',
    accent: 'from-[#00D1FF] to-[#5EE6FF]',
  },
  {
    icon: FileCheck2,
    title: '€31M',
    label: 'Company valuation',
    accent: 'from-[#00D1FF] to-[#0099CC]',
  },
  {
    icon: Database,
    title: '€6.245M',
    label: 'Data Asset valuation',
    accent: 'from-[#00D1FF] to-[#0099CC]',
  },
];

const dataTypes = ['Clinical', 'Genetic', 'Morphological', 'Proteomics', 'Lipidomics'];

const companyFacts = [
  { icon: Building2, label: 'Legal name', value: companyDetails.legalName },
  { icon: FileCheck2, label: 'Legal form', value: companyDetails.legalForm },
  {
    icon: FileCheck2,
    label: 'Registration',
    value: `KRS ${companyDetails.krs} · REGON ${companyDetails.regon} · NIP ${companyDetails.nip}`,
  },
  { icon: Building2, label: 'Registered office', value: registeredAddressLine },
  {
    icon: CalendarRange,
    label: 'Financial reporting period',
    value: `${companyDetails.reportingPeriod.label} (${companyDetails.reportingPeriod.range})`,
  },
  {
    icon: UserRound,
    label: 'President of the Management Board',
    value: `${companyDetails.president.name} — ${companyDetails.president.roleEn}`,
  },
];

export function InvestmentSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="investment"
      className="py-16 bg-gradient-to-br from-[#04101F] via-[#0E1F3A] to-[#04101F] text-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#00D1FF]/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#0099CC]/10 blur-[110px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          ref={ref}
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm font-semibold text-[#00D1FF] uppercase tracking-wider mb-2">
            Investment round
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            Investment and valuation
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed text-[15px]">
            Deus Tech 2.0 closed its investment round to scale the platform and grow the business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-4 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-[#00D1FF]/30 transition-all duration-300 hover:-translate-y-1"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.7s ease ${i * 0.12}s`,
                }}
              >
                <div
                  className={`flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${m.accent} shadow-lg shadow-[#00D1FF]/20`}
                >
                  <Icon className="text-white" size={22} />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold tracking-tight">{m.title}</div>
                  <div className="text-white/50 text-sm">{m.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-5 items-stretch">
          <div
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-7 flex flex-col justify-center"
            style={{ opacity: isVisible ? 1 : 0, transition: 'all 0.7s ease 0.25s' }}
          >
            <p className="text-white/60 leading-relaxed text-[15px] mb-5">
              The biobank and its dataset were assessed at{' '}
              <span className="text-white font-semibold">€6,245,166</span> per international
              valuation standards (IVS).
            </p>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/70 text-xs font-medium">
                67,000+ samples
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/70 text-xs font-medium">
                5 data types
              </span>
              <span className="px-3 py-1 rounded-full bg-[#00D1FF]/10 border border-[#00D1FF]/20 text-[#00D1FF] text-xs font-medium">
                IVS-certified
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {dataTypes.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-white/50 text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-7 flex items-center gap-6"
            style={{ opacity: isVisible ? 1 : 0, transition: 'all 0.7s ease 0.4s' }}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative flex-shrink-0 rounded-xl overflow-hidden bg-white/[0.04] border border-white/10 hover:border-[#00D1FF]/40 transition-all duration-300"
            >
              <img
                src="/data-asset-certificate.jpg"
                alt="Data Asset valuation certificate"
                className="h-48 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors">
                <FileCheck2
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  size={32}
                />
              </span>
            </button>
            <div>
              <h3 className="text-lg font-bold mb-2 tracking-tight">Valuation certificate</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Data Asset value confirmed by a financial valuation certificate (IVS).
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-4 inline-flex items-center gap-1.5 text-[#00D1FF] text-sm font-semibold hover:text-[#5EE6FF] transition-colors"
              >
                View full certificate
              </button>
            </div>
          </div>
        </div>

        <div
          className="mt-5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-7"
          style={{ opacity: isVisible ? 1 : 0, transition: 'all 0.7s ease 0.5s' }}
        >
          <h3 className="text-lg font-bold mb-1 tracking-tight">Company details</h3>
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            Registered company information as entered in the Polish National Register of
            Businesses (KRS).
          </p>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
            {companyFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.label} className="flex gap-3">
                  <Icon className="flex-shrink-0 mt-0.5 text-[#00D1FF]" size={16} />
                  <div>
                    <dt className="text-white/40 text-xs uppercase tracking-wider">{fact.label}</dt>
                    <dd className="text-white/85 text-sm leading-relaxed mt-0.5">{fact.value}</dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              aria-label="Close certificate"
            >
              <X size={20} />
            </button>
            <img
              src="/data-asset-certificate.jpg"
              alt="Data Asset valuation certificate"
              className="w-full rounded-2xl object-contain max-h-[85vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
}