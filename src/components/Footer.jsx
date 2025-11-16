export default function Footer() {
  return (
    <footer className="mt-16 bg-white/60 backdrop-blur border-t border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">RuhRas by Radhika</h3>
            <p className="mt-2 text-sm text-gray-600">
              RuhRas provides spiritual wellness guidance and is not a substitute for professional medical or legal advice.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-700">Connect</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>WhatsApp: <a className="text-fuchsia-600 hover:underline" href="https://wa.me/971523623122" target="_blank" rel="noreferrer">+971523623122</a></li>
              <li>Email: <a className="text-fuchsia-600 hover:underline" href="mailto:info@ruhras.com">info@ruhras.com</a></li>
              <li>Instagram: <a className="text-fuchsia-600 hover:underline" href="https://instagram.com" target="_blank" rel="noreferrer">@ruhras</a></li>
            </ul>
          </div>
          <div className="text-sm text-gray-600">
            <p>© {new Date().getFullYear()} RuhRas by Radhika. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
