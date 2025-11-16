import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { useState } from 'react'

const categories = [
  'Tarot Guidance',
  'Home Vastu Insights',
  'Aura & Energy Healing',
  'Astrology & Life Cycles',
  'Meditation & Calmness',
]

const testimonials = [
  '“Vastu guidance from Radhika completely transformed the energy of our home.”',
  '“Aura cleaning brought emotional clarity I never expected.”',
  '“Tarot reading gave me direction during a difficult phase.”',
  '“Astrological consultation was detailed and highly accurate.”',
]

export default function BlogsPage() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-purple-50 to-blue-50">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="bg-white/70 backdrop-blur rounded-2xl border border-white/60 p-6 sm:p-10 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Wellness Blogs & Client Experiences</h2>
          <p className="mt-4 text-gray-700">
            At RuhRas, we believe knowledge empowers transformation. Explore our collection of blogs, insights, and energy-based wisdom. Each article is written to guide you toward clarity and spiritual wellness.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((c) => (
              <div key={c} className="rounded-xl border border-fuchsia-200/60 bg-gradient-to-br from-white to-fuchsia-50/60 p-5">
                <h3 className="font-semibold text-fuchsia-700">{c}</h3>
                <p className="mt-2 text-sm text-gray-600">Curated articles, rituals, and practical tips.</p>
                <button className="mt-3 text-sm text-fuchsia-600 font-semibold">Explore →</button>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-gray-800">Client Testimonials</h3>
            <div className="mt-4 rounded-2xl border border-white/60 bg-white/70 p-6 flex items-center justify-between gap-4">
              <button onClick={prev} className="text-fuchsia-600 font-semibold">‹</button>
              <p className="text-center text-gray-700">{testimonials[index]}</p>
              <button onClick={next} className="text-fuchsia-600 font-semibold">›</button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
