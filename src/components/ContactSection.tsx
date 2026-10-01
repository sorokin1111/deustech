import { FormEvent, useState } from 'react';
import { ArrowRight, CheckCircle, Mail } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useScrollReveal } from '../hooks/useScrollReveal';

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;

function getUtmParams(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const out: Record<string, string> = {};
  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) out[key] = value;
  });
  return out;
}

export function ContactSection() {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    const payload = {
      ...formData,
      ...getUtmParams(),
      page: window.location.href,
      ts: new Date().toLocaleString('ru-RU'),
    };

    try {
      const res = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
    } catch {
      const { error } = await supabase.from('contact_requests').insert(formData);
      if (error) {
        setStatus('error');
        return;
      }
    }

    setFormData({ email: '', message: '' });
    setStatus('success');
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-[#00D1FF]/5 blur-[100px]" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          ref={ref}
          className={`grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-start transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <p className="text-sm font-semibold text-[#00D1FF] uppercase tracking-wider mb-3">
              Get in touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E1F3A] mb-5 tracking-tight leading-tight">
              Ready to transform your IVF success rates?
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              Get in touch to learn how Life Creator can revolutionize embryo selection at your
              clinic and improve outcomes for your patients.
            </p>
            <div className="space-y-4">
              <a href="mailto:info@deustech.health" className="flex items-center gap-3 text-slate-600 hover:text-[#00D1FF] transition-colors">
                <span className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center"><Mail size={18} /></span>
                info@deustech.health
              </a>
              <a href="https://www.linkedin.com/company/deus-tech-2-0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-[#00D1FF] transition-colors">
                <span className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center font-bold">in</span>
                Follow us on LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl">
            {status === 'success' ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-[#00D1FF]/10 text-[#00D1FF] flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#0E1F3A] mb-2">Message received</h3>
                <p className="text-slate-500">Thanks for reaching out. Our team will be in touch soon.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 text-sm font-semibold text-[#00D1FF] hover:text-[#0099CC]">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#0E1F3A] mb-2">Work email</label>
                  <input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white text-[#0E1F3A] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00D1FF]/30 focus:border-[#00D1FF] outline-none transition-all" placeholder="you@clinic.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#0E1F3A] mb-2">How can we help?</label>
                  <textarea id="message" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white text-[#0E1F3A] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00D1FF]/30 focus:border-[#00D1FF] outline-none transition-all resize-none" placeholder="Tell us about your clinic and what you're looking to improve..." />
                </div>
                {status === 'error' && <p className="text-sm text-red-600">We couldn't send your message. Please try again or email us directly.</p>}
                <button type="submit" disabled={status === 'sending'} className="w-full bg-[#00D1FF] text-white px-6 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#00B8E6] hover:shadow-lg hover:shadow-[#00D1FF]/25 transition-all disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'sending' ? 'Sending...' : 'Send message'}
                  {status !== 'sending' && <ArrowRight size={18} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
