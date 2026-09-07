import { useScrollReveal } from '../hooks/useScrollReveal';

const team = [
  {
    name: 'Yuri Avsyanik',
    role: 'Co-founder & CEO',
    credentials: 'Serial entrepreneur, 2 → exit in med-tech',
    image: '/ausianik.png',
  },
  {
    name: 'Yuri Sorokin',
    role: 'Co-founder & CTO',
    credentials: 'AI/ML expert, ex-Google Research',
    image: '/cto_with_border.png',
  },
  {
    name: 'Dr Larysa Kalabukhava',
    role: 'Reproductive endocrinologist',
    credentials: 'Reproductive endocrinologist, 15+ yrs clinical practice',
    image: '/larisa.png',
  },
  {
    name: 'Svetlana Gramatyuk',
    role: 'Business partner',
    credentials: 'President, Balkan–East-Europe Biobank Cluster',
    image: '/photo_2025-08-06_19-05-23.jpg',
  },
];

export function TeamSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="team" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm font-semibold text-[#00D1FF] uppercase tracking-wider mb-3">
            The team
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E1F3A] mb-5 tracking-tight">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Our multidisciplinary team combines deep expertise in AI, reproductive medicine, and
            healthcare technology to drive innovation in fertility treatment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#00D1FF]/30 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 text-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.6s ease ${index * 0.1}s`,
              }}
            >
              <div className="relative w-20 h-20 rounded-2xl mx-auto mb-5 overflow-hidden ring-4 ring-slate-50 group-hover:ring-[#00D1FF]/10 transition-all">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-bold text-[#0E1F3A] mb-1 tracking-tight">
                {member.name}
              </h3>
              <p className="text-[#00D1FF] font-semibold text-sm mb-3">{member.role}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{member.credentials}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
