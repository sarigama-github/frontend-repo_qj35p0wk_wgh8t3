import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const products = [
  {
    title: 'Rose Quartz Crystal',
    img: 'https://images.unsplash.com/photo-1611903836718-3b8b4cb9e2b5?q=80&w=800&auto=format&fit=crop',
    desc: 'Gentle stone of love and emotional healing.',
    how: 'Place in the southwest corner of your home for relationships.',
    benefits: 'Promotes harmony, compassion, and self-love.',
    price: 29,
  },
  {
    title: 'Brass Vastu Pyramid',
    img: 'https://images.unsplash.com/photo-1605733514619-18397d677b64?q=80&w=800&auto=format&fit=crop',
    desc: 'Balances energy fields and corrects Vastu defects.',
    how: 'Position at the center or above main door for energy alignment.',
    benefits: 'Corrects imbalances and enhances positivity.',
    price: 45,
  },
  {
    title: 'Palo Santo Sticks',
    img: 'https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?q=80&w=800&auto=format&fit=crop',
    desc: 'Sacred wood for cleansing and protection.',
    how: 'Burn and waft smoke in clockwise motion across rooms.',
    benefits: 'Removes negativity and uplifts mood.',
    price: 12,
  },
]

export default function StorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-purple-50 to-blue-50">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="bg-white/70 backdrop-blur rounded-2xl border border-white/60 p-6 sm:p-10 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Spiritual Vastu Essentials — Curated by RuhRas</h2>
          <p className="mt-4 text-gray-700">Our Vastu and spiritual products are hand-selected to enhance positivity, balance, and energy flow in your spaces.</p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/60 bg-white/70 p-5">
                <img src={p.img} alt={p.title} className="h-44 w-full object-cover rounded-xl" />
                <h3 className="mt-4 font-semibold text-gray-800">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                <p className="mt-2 text-xs text-gray-500"><span className="font-medium text-gray-700">How to use:</span> {p.how}</p>
                <p className="mt-1 text-xs text-gray-500"><span className="font-medium text-gray-700">Benefits:</span> {p.benefits}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-fuchsia-700 font-semibold">${p.price}</span>
                  <div className="flex gap-2">
                    <button className="rounded-full bg-fuchsia-600 text-white text-sm font-semibold px-4 py-2">Add to Cart</button>
                    <a href={`https://wa.me/971523623122?text=Product%20Enquiry:%20${encodeURIComponent(p.title)}`} target="_blank" rel="noreferrer" className="rounded-full border border-fuchsia-300 text-fuchsia-700 text-sm font-semibold px-4 py-2 bg-white/60">WhatsApp</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl bg-gradient-to-r from-fuchsia-100 to-rose-100 border border-fuchsia-200 p-5 text-fuchsia-800 font-medium text-center">
            Free consultation on placement of Vastu items when you purchase from RuhRas.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
