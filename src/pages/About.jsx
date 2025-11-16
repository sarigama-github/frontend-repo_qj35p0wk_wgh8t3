import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const Card = ({ title, desc, waText, waLink, emailText, emailLink }) => (
  <div className="group rounded-2xl p-6 bg-white/70 backdrop-blur border border-white/60 shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="mt-2 text-sm text-gray-600">{desc}</p>
    <div className="mt-4 flex flex-wrap gap-3">
      <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-rose-400 text-white text-sm font-semibold px-4 py-2 shadow">
        {waText}
      </a>
      <a href={emailLink} className="inline-flex items-center justify-center rounded-full border border-fuchsia-300 text-fuchsia-700 text-sm font-semibold px-4 py-2 bg-white/60">
        {emailText}
      </a>
    </div>
  </div>
)

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-purple-50 to-blue-50">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="bg-white/70 backdrop-blur rounded-2xl border border-white/60 p-6 sm:p-10 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">About RuhRas & Our Consultants</h2>
          <p className="mt-4 text-gray-700">
            RuhRas by Radhika is a holistic wellness brand dedicated to restoring balance, clarity, and positive energy. Founded by Radhika, a spiritual healing practitioner passionate about intuitive wellness, RuhRas blends ancient wisdom with modern intuition. Radhika’s journey began with her deep belief that every soul holds hidden energies that can be realigned for harmony, success, and inner peace.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <Card
              title="Tarot Readers"
              desc="Our intuitive tarot readers provide clarity in career, relationships, life paths, and personal decisions."
              waText="WhatsApp Now"
              waLink="https://wa.me/971523623122?text=Tarot%20Reading%20Query"
              emailText="Email Tarot Team"
              emailLink="mailto:info@ruhras.com?subject=Tarot%20Reading%20Inquiry"
            />
            <Card
              title="Vastu for Homes"
              desc="Our Vastu consultants specialise in harmonising homes and offices to attract abundance, peace, and flow."
              waText="Book Vastu Consultation"
              waLink="https://wa.me/971523623122?text=Vastu%20Consultation%20Request"
              emailText="Email Vastu Expert"
              emailLink="mailto:info@ruhras.com?subject=Vastu%20Consultation"
            />
            <Card
              title="Aura Cleaning & Energy Healing"
              desc="Aura cleansing sessions remove emotional blockages and restore energetic balance for improved well-being."
              waText="WhatsApp for Aura Session"
              waLink="https://wa.me/971523623122?text=Aura%20Cleaning%20Session"
              emailText="Email Aura Healing Desk"
              emailLink="mailto:info@ruhras.com?subject=Aura%20Healing%20Session"
            />
            <Card
              title="Astrology Consultations"
              desc="Receive personalised astrological readings based on birth charts, planetary alignment, and life cycles."
              waText="Book Astrology Reading"
              waLink="https://wa.me/971523623122?text=Astrology%20Reading%20Inquiry"
              emailText="Email Astrology Team"
              emailLink="mailto:info@ruhras.com?subject=Astrology%20Consultation"
            />
          </div>

          <p className="mt-8 text-sm text-gray-600">Connect with any consultant using the WhatsApp or email links. We respond within 24 hours.</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
