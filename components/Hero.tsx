'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-600/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="bg-pink-600/20 backdrop-blur-xl rounded-2xl p-4 border border-pink-500/30">
            <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="bg-cyan-500/20 backdrop-blur-xl rounded-2xl p-4 border border-cyan-500/30">
            <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10h-2V8h2m0 6h-2v-2h2m-1-9c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10z"/>
            </svg>
          </div>
        </div>
        <div className="absolute bottom-32 left-20 animate-float">
          <div className="bg-pink-600/20 backdrop-blur-xl rounded-2xl p-4 border border-pink-500/30">
            <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          </div>
        </div>
        <div className="absolute bottom-20 right-32 animate-float-delayed">
          <div className="bg-cyan-500/20 backdrop-blur-xl rounded-2xl p-4 border border-cyan-500/30">
            <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-xl border border-pink-500/30 rounded-full px-6 py-3 mb-8 animate-fade-in">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
            <span className="text-sm font-semibold text-slate-300">Join 2M+ Users Rating Now</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 animate-slide-up">
            Rate. Connect.
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
              Discover.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl font-normal leading-relaxed text-slate-300 max-w-3xl mx-auto mb-12 animate-slide-up-delayed">
            The most addictive social discovery platform. Rate photos, get instant feedback, and connect with people who match your vibe. It's brutally honest, electrifying, and impossible to put down.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in-delayed">
            <Link
              href="#contact"
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-pink-500/30 hover:scale-105 w-full sm:w-auto text-center"
            >
              Start Rating Now
            </Link>
            <Link
              href="#pricing"
              className="border-2 border-pink-600 text-pink-400 hover:bg-pink-600 hover:text-white rounded-xl px-8 py-4 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center font-semibold"
            >
              View Pricing
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-2 transition-all duration-500 hover:border-pink-500/50">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text mb-2">
                2M+
              </div>
              <div className="text-slate-300 font-normal leading-relaxed">Active Users</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-500 hover:border-cyan-500/50">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text mb-2">
                50M+
              </div>
              <div className="text-slate-300 font-normal leading-relaxed">Ratings Given</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-2 transition-all duration-500 hover:border-pink-500/50">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-500 via-pink-400 to-cyan-400 bg-clip-text mb-2">
                24/7
              </div>
              <div className="text-slate-300 font-normal leading-relaxed">Instant Feedback</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delayed {
          animation: fade-in 1s ease-out 0.3s both;
        }
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-slide-up-delayed {
          animation: slide-up 0.8s ease-out 0.2s both;
        }
      `}</style>
    </section>
  )
}
