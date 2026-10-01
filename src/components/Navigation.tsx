import { useEffect, useState } from 'react';

type NavItem = { name: string; href: string };

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'Problem', href: '#problem' },
  { name: 'Solution', href: '#solution' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'How it Works', href: '#how-it-works' },
  { name: 'Trial', href: '#trial' },
  { name: 'Investment', href: '#investment' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((i) => document.querySelector(i.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/60 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection('#home')}
            className={`flex items-center gap-2.5 font-bold text-lg tracking-tight transition-colors ${
              scrolled ? 'text-[#0E1F3A]' : 'text-white'
            }`}
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#00D1FF] to-[#0099CC] shadow-lg shadow-[#00D1FF]/30">
              <span className="absolute inset-0 rounded-xl bg-[#00D1FF] opacity-40 blur-md" />
              <span className="relative h-4 w-4 rounded-md bg-white" />
            </span>
            <span>Deus<span className="text-[#00D1FF]">.</span></span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  scrolled
                    ? activeSection === item.href.slice(1)
                      ? 'text-[#00D1FF]'
                      : 'text-slate-600 hover:text-[#0E1F3A]'
                    : activeSection === item.href.slice(1)
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute -bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-[#00D1FF]" />
                )}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('#contact')}
              className="group relative overflow-hidden bg-[#00D1FF] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-[#00D1FF]/40 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Request a demo</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#00B8E6] to-[#00D1FF] opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? 'text-[#0E1F3A]' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-slate-200/60 px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-[#00D1FF] hover:bg-slate-50 rounded-lg transition-colors"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#contact')}
            className="w-full bg-[#00D1FF] text-white px-4 py-2.5 rounded-lg text-sm font-semibold mt-2"
          >
            Request a demo
          </button>
        </div>
      </div>
    </nav>
  );
}
