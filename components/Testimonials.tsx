'use client'

import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jessica Chen",
      role: "Content Creator",
      image: "https://i.pravatar.cc/150?img=47",
      rating: 5,
      text: "HotOrNot brought back the thrill of rating culture! The interface is addictive and the community is super engaged. I've connected with so many people."
    },
    {
      name: "Marcus Rodriguez",
      role: "Social Media Enthusiast",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      text: "This app is pure fire! The instant feedback and bold design make it impossible to put down. It's like the golden age of social media is back."
    },
    {
      name: "Ava Thompson",
      role: "Influencer",
      image: "https://i.pravatar.cc/150?img=32",
      rating: 5,
      text: "Finally, a platform that's honest and electric. The rating system is genius and the visual experience is stunning. Absolutely obsessed!"
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Loved by Millions
          </h2>
          <p className="text-slate-300 font-normal leading-relaxed text-lg max-w-2xl mx-auto">
            See what our community is saying about their HotOrNot experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 md:p-10 hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-2 transition-all duration-500 hover:border-pink-500/50"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-pink-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-300 font-normal leading-relaxed mb-8">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-pink-600/50">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
