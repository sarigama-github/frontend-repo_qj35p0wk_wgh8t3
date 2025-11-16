import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-purple-50 to-blue-50">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <section className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 bg-white/70 backdrop-blur border border-white/60 shadow">
            <h2 className="text-2xl font-bold text-gray-800">About RuhRas & Our Consultants</h2>
            <p className="mt-3 text-gray-700">Meet Radhika and explore our intuitive services in tarot, Vastu, aura cleansing, and astrology.</p>
            <Link to="/about" className="mt-4 inline-block rounded-full bg-fuchsia-600 text-white font-semibold px-5 py-2">Explore</Link>
          </div>
          <div className="rounded-2xl p-6 bg-white/70 backdrop-blur border border-white/60 shadow">
            <h2 className="text-2xl font-bold text-gray-800">Wellness Blogs & Client Experiences</h2>
            <p className="mt-3 text-gray-700">Read insights across tarot, Vastu, aura healing, astrology, and meditation — plus real client stories.</p>
            <Link to="/blogs" className="mt-4 inline-block rounded-full bg-fuchsia-600 text-white font-semibold px-5 py-2">Read</Link>
          </div>
          <div className="rounded-2xl p-6 bg-white/70 backdrop-blur border border-white/60 shadow">
            <h2 className="text-2xl font-bold text-gray-800">Spiritual Vastu Essentials Store</h2>
            <p className="mt-3 text-gray-700">Shop crystals, yantras, cleansing tools, and sacred symbols curated for positive energy.</p>
            <Link to="/store" className="mt-4 inline-block rounded-full bg-fuchsia-600 text-white font-semibold px-5 py-2">Shop</Link>
          </div>
          <div className="rounded-2xl p-6 bg-white/70 backdrop-blur border border-white/60 shadow">
            <h2 className="text-2xl font-bold text-gray-800">Energy & Wellness Video Library</h2>
            <p className="mt-3 text-gray-700">Watch Vastu lessons, yoga flows, meditations, and self-healing practices.</p>
            <Link to="/videos" className="mt-4 inline-block rounded-full bg-fuchsia-600 text-white font-semibold px-5 py-2">Watch</Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
