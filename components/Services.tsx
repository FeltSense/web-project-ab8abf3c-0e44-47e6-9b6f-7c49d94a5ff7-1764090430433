'use client'

import { Flame, Zap, TrendingUp, Users } from 'lucide-react'

export default function Services() {
  const features = [
    {
      icon: Flame,
      title: "Instant Rating",
      description: "Upload your photo and get real-time ratings from our vibrant community. See how you stack up in seconds with our addictive swipe-based system.",
      large: true
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience the thrill of instant feedback. Our platform delivers ratings at lightning speed.",
      large: false
    },
    {
      icon: TrendingUp,
      title: "Trending Now",
      description: "Climb the leaderboards and see who's hot right now. Track your popularity in real-time.",
      large: false
    },
    {
      icon: Users,
      title: "Social Discovery",
      description: "Connect with thousands of users. Build your profile and discover new people daily.",
      large: false
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Why <span className="text-pink-600">HotOrNot</span> is{' '}
            <span className="text-cyan-500">Addictive</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Experience the most electrifying rating platform. Bold, fast, and designed for social discovery.
          </p>
        </div>

        {/* Bento Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`
                  ${feature.large ? 'md:col-span-2' : 'md:col-span-1'}
                  rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50
                  p-8 md:p-10
                  hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-2
                  transition-all duration-500 hover:border-pink-500/50
                  group
                `}
              >
                <div className={`${feature.large ? 'md:flex md:items-start md:gap-8' : ''}`}>
                  {/* Icon */}
                  <div className="mb-6 md:mb-8">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-600 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${feature.large ? 'md:flex-1' : ''}`}>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {feature.large && (
                      <a
                        href="#contact"
                        className="inline-block mt-6 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-pink-500/30"
                      >
                        Get Started
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
