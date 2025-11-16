import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const sections = [
  {
    title: 'Vastu Learning Videos',
    desc: 'Tips for home alignment, directions, energy flow.',
    items: [
      { t: 'Main Door Energy Alignment', d: 'Simple checks to enhance entry energy.', img: 'https://images.unsplash.com/photo-1519710884009-6d1e0d4cd87b?q=80&w=800&auto=format&fit=crop' },
      { t: 'Room Placement Guide', d: 'Zones for health, wealth and harmony.', img: 'https://images.unsplash.com/photo-1495563381401-ecfbcaaa67fe?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    title: 'Yoga & Calmness Videos',
    desc: 'Short flows, breathwork, mindfulness.',
    items: [
      { t: 'Morning Sun Salutation', d: 'Gentle flow to start your day.', img: 'https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?q=80&w=800&auto=format&fit=crop' },
      { t: 'Evening Breathwork', d: 'Wind down with mindful breathing.', img: 'https://images.unsplash.com/photo-1517959105821-eaf2591984c2?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    title: 'Aura & Energy Healing Videos',
    desc: 'Energy cleansing guides, protection rituals, self-healing techniques.',
    items: [
      { t: 'Salt Bath Ritual', d: 'Cleanse auric field at home.', img: 'https://images.unsplash.com/photo-1512208152250-96a5e4b7c14a?q=80&w=800&auto=format&fit=crop' },
      { t: 'White Light Shield', d: 'Daily protection visualization.', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop' },
    ],
  },
]

function VideoCard({ item }) {
  return (
    <div className="group rounded-xl overflow-hidden border border-white/60 bg-white/70">
      <div className="relative">
        <img src={item.img} alt={item.t} className="h-40 w-full object-cover" />
        <button className="absolute inset-0 m-auto h-12 w-12 rounded-full bg-fuchsia-600/90 text-white font-bold">▶</button>
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-gray-800">{item.t}</h4>
        <p className="text-sm text-gray-600">{item.d}</p>
      </div>
    </div>
  )
}

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-purple-50 to-blue-50">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="bg-white/70 backdrop-blur rounded-2xl border border-white/60 p-6 sm:p-10 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Energy & Wellness Video Library</h2>
          <p className="mt-4 text-gray-700">Watch our curated videos to experience Vastu tips, guided yoga flows, meditation sessions, and calming energy practices.</p>

          {sections.map((s) => (
            <section key={s.title} className="mt-8">
              <h3 className="text-xl font-semibold text-fuchsia-700">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
              <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {s.items.map((it) => (
                  <VideoCard key={it.t} item={it} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
