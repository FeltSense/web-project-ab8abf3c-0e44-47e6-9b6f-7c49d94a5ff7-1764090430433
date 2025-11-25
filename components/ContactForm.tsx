'use client';

import { useState } from 'react';
import { Send, Sparkles, Zap } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const formObject: any = {};
    formData.forEach((value, key) => { formObject[key] = value; });
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_data: formObject,
          form_id: 'contact_form',
          project_id: 'ab8abf3c-0e44-47e6-9b6f-7c49d94a5ff7',
          founder_id: '',
          submitted_at: new Date().toISOString()
        })
      });
      if (!response.ok) throw new Error('Failed');
      setStatus('success');
    } catch (error) { setStatus('error'); }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Electric background accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 via-transparent to-cyan-500/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Seductive Copy */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-pink-600/10 border border-pink-500/30 rounded-full px-5 py-2">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-semibold text-pink-400">Let's Connect</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Ready to Join the{' '}
              <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                HotOrNot
              </span>{' '}
              Revolution?
            </h2>

            <p className="text-xl leading-relaxed text-slate-300">
              Get early access, partner with us, or just say hello. We're building the most addictive rating platform on the internet—and we want you in.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 pt-6">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-pink-600/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Lightning Fast Response</h3>
                  <p className="text-slate-400">We typically reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <Send className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Direct Line to Our Team</h3>
                  <p className="text-slate-400">Your message goes straight to decision makers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            {/* Glow effect behind form */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
            
            <div className="relative rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 md:p-10 shadow-2xl shadow-pink-500/10">
              {status === 'success' ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-pink-500/30">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">You're In! 🔥</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Thanks for reaching out! We'll get back to you faster than you can rate your next match.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-pink-400 hover:text-pink-300 font-semibold transition-colors duration-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border-slate-600 bg-slate-800/50 text-white placeholder-slate-400 focus:border-pink-500 focus:ring-pink-500 py-4 px-5 transition-all duration-300"
                      placeholder="Alex Rivera"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-xl border-slate-600 bg-slate-800/50 text-white placeholder-slate-400 focus:border-pink-500 focus:ring-pink-500 py-4 px-5 transition-all duration-300"
                      placeholder="alex@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                      Phone Number <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-xl border-slate-600 bg-slate-800/50 text-white placeholder-slate-400 focus:border-pink-500 focus:ring-pink-500 py-4 px-5 transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-xl border-slate-600 bg-slate-800/50 text-white placeholder-slate-400 focus:border-pink-500 focus:ring-pink-500 py-4 px-5 transition-all duration-300 resize-none"
                      placeholder="Tell us what's on your mind..."
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                      <p className="text-red-400 text-sm">
                        Oops! Something went wrong. Please try again.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-pink-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center pt-2">
                    By submitting, you agree to receive communications from HotOrNot. We respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
