'use client';

import { Check, Zap, Star, Heart } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 via-transparent to-cyan-500/10" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-600/10 border border-pink-500/30 mb-6">
            <Zap className="w-4 h-4 text-pink-400" />
            <span className="text-pink-400 font-semibold text-sm">Limited Time Pre-Order</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Get Early Access to{' '}
            <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              HotOrNot
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Be among the first to experience the most addictive rating platform. 
            Lock in your lifetime discount before launch.
          </p>
        </div>

        {/* Centered Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-pink-500 to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500" />
            
            {/* Card */}
            <div className="relative rounded-2xl bg-slate-800/90 backdrop-blur-xl border-2 border-pink-500/50 p-8 md:p-10 hover:border-pink-400 transition-all duration-500">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-pink-600 to-cyan-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                  🔥 Most Popular
                </div>
              </div>

              {/* Plan Name */}
              <div className="text-center mt-4 mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Founder Edition
                </h3>
                <p className="text-slate-400">Join the founding members</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-slate-500 line-through text-2xl">$99</span>
                  <span className="text-6xl md:text-7xl font-bold text-white">$29</span>
                </div>
                <p className="text-pink-400 font-semibold text-lg">One-time payment • Lifetime access</p>
                <p className="text-slate-400 text-sm mt-2">Save $70 • 70% OFF</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: Star, text: 'Unlimited ratings & votes', highlight: true },
                  { icon: Heart, text: 'Priority profile placement', highlight: false },
                  { icon: Zap, text: 'Early access to new features', highlight: false },
                  { icon: Check, text: 'Exclusive founder badge', highlight: false },
                  { icon: Check, text: 'Ad-free experience forever', highlight: false },
                  { icon: Check, text: 'Advanced analytics dashboard', highlight: false },
                  { icon: Check, text: 'VIP community access', highlight: false },
                  { icon: Check, text: 'Lifetime updates included', highlight: false }
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                        feature.highlight 
                          ? 'bg-gradient-to-br from-pink-500 to-cyan-500' 
                          : 'bg-pink-600/20'
                      }`}>
                        <Icon className={`w-4 h-4 ${
                          feature.highlight ? 'text-white' : 'text-pink-400'
                        }`} />
                      </div>
                      <span className={`${
                        feature.highlight 
                          ? 'text-white font-semibold' 
                          : 'text-slate-300'
                      }`}>
                        {feature.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
                className="w-full py-4 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-pink-500/30 text-lg group"
              >
                <span className="flex items-center justify-center gap-2">
                  Pre-Order Now - $29
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>

              {/* Trust Signals */}
              <div className="mt-6 text-center space-y-2">
                <p className="text-slate-400 text-sm">✨ 500+ early adopters already joined</p>
                <p className="text-slate-500 text-xs">🔒 Secure payment • 30-day money-back guarantee</p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm mb-4">
              Price increases to <span className="text-pink-400 font-semibold">$99</span> after launch
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-slate-300 text-sm">Limited spots remaining</span>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '500+', label: 'Early Members' },
              { number: '4.9★', label: 'Beta Rating' },
              { number: '70%', label: 'Launch Discount' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
