import { useScrollReveal } from '../hooks/useScrollReveal';

export function TractionSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-20 bg-gradient-to-r from-[#00D1FF] to-[#0099CC] overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative transition-all duration-700 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
          MVP validated in European partner clinics
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Looking for additional data-partners to refine the model and extend multi-center
          validation.
        </p>
      </div>
    </section>
  );
}
