'use client'

import { Heart, Flame, Zap, Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Pricing", href: "#pricing" },
        { name: "Download App", href: "#contact" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#contact" },
        { name: "Press Kit", href: "#contact" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Community", href: "#community" },
        { name: "Blog", href: "#blog" },
        { name: "Safety Tips", href: "#safety" },
        { name: "Support", href: "#contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" },
        { name: "Guidelines", href: "#guidelines" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-slate-950 border-t border-pink-500/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Section - Takes up more space */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Flame className="w-10 h-10 text-pink-600" />
                <Zap className="w-5 h-5 text-cyan-500 absolute -top-1 -right-1" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-white">
                Hot<span className="text-pink-600">Or</span>Not
              </h3>
            </div>
            <p className="text-slate-300 leading-relaxed mb-8 max-w-md">
              The most addictive social discovery platform. Rate, connect, and discover what's hot in real-time. Join millions making snap judgments and instant connections.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-pink-600 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Stay in the Loop</h4>
                <p className="text-slate-400 text-sm mb-4">Get the hottest updates delivered to your inbox.</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-xl border border-slate-600 bg-slate-800/50 text-white placeholder-slate-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 py-3 px-4 text-sm transition-all duration-300 outline-none"
                  />
                  <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl px-6 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-pink-500/30 whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-pink-600 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-pink-600/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <p className="text-slate-500 text-xs">Email Us</p>
                <a href="mailto:hello@hotornot.com" className="text-slate-300 hover:text-pink-600 transition-colors duration-300 text-sm">
                  hello@hotornot.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-cyan-500" />
              </div>
              <div>
                <p className="text-slate-500 text-xs">Call Us</p>
                <a href="tel:+1-555-HOT-RATE" className="text-slate-300 hover:text-cyan-500 transition-colors duration-300 text-sm">
                  +1 (555) HOT-RATE
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-pink-600/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <p className="text-slate-500 text-xs">Location</p>
                <p className="text-slate-300 text-sm">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Heart className="w-4 h-4 text-pink-600 fill-pink-600" />
              <p>© 2024 HotOrNot. All rights reserved. Made with passion.</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-slate-400 hover:text-pink-600 transition-colors duration-300 text-sm">
                Privacy
              </a>
              <a href="#terms" className="text-slate-400 hover:text-pink-600 transition-colors duration-300 text-sm">
                Terms
              </a>
              <a href="#cookies" className="text-slate-400 hover:text-pink-600 transition-colors duration-300 text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-600 to-transparent opacity-50"></div>
    </footer>
  )
}
