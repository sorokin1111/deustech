import { ArrowUpRight } from 'lucide-react';
import { companyDetails, registeredAddressLine } from '../lib/company';

export function Footer() {
  return (
    <footer className="bg-[#04101F] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5 font-bold text-lg tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00D1FF]"><span className="h-3.5 w-3.5 rounded bg-white" /></span>
            Deus<span className="text-[#00D1FF]">Tech</span>
          </div>
          <p className="text-sm text-white/40">© 2025 Deus Technologies 2.0 — Building better outcomes for families.</p>
          <a href="#home" className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
            Back to top <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/35 leading-relaxed">
          <p className="text-white/55 font-semibold">{companyDetails.legalName}</p>
          <p>{companyDetails.legalForm}</p>
          <p className="mt-1">Registered office: {registeredAddressLine}</p>
          <p className="mt-1">
            KRS {companyDetails.krs} · REGON {companyDetails.regon} · NIP {companyDetails.nip} ·{' '}
            <a href={`mailto:${companyDetails.email}`} className="hover:text-white/60 transition-colors">
              {companyDetails.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
