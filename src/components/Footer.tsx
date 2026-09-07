import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#04101F] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5 font-bold text-lg tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00D1FF]"><span className="h-3.5 w-3.5 rounded bg-white" /></span>
            Deus<span className="text-[#00D1FF]">.</span>
          </div>
          <p className="text-sm text-white/40">© 2025 Deus Technologies 2.0 — Building better outcomes for families.</p>
          <a href="#home" className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
            Back to top <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}
