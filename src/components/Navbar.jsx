import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { to: '/about', label: 'About & Consultants' },
    { to: '/blogs', label: 'Blogs & Validations' },
    { to: '/store', label: 'Vastu Store' },
    { to: '/videos', label: 'Videos' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/50 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/about" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-fuchsia-400 via-pink-300 to-rose-300 flex items-center justify-center shadow-md">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold tracking-wide text-gray-800">RuhRas by Radhika</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-fuchsia-600' : 'text-gray-700 hover:text-fuchsia-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://wa.me/971523623122"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 to-rose-400 text-white text-sm font-semibold py-2 px-4 rounded-full shadow hover:shadow-lg transition-shadow"
            >
              WhatsApp
            </a>
          </nav>

          <button className="md:hidden" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/70 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium ${isActive ? 'text-fuchsia-600' : 'text-gray-700'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://wa.me/971523623122"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-fuchsia-500 to-rose-400 text-white text-sm font-semibold py-2 px-4 rounded-full shadow"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
