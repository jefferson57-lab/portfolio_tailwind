import React, { useState } from 'react'

export default function Navigation({ isMenuOpen, setIsMenuOpen }) {
  const [activeLink, setActiveLink] = useState('home')

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (id, href) => {
    setActiveLink(id)
    setIsMenuOpen(false)
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <nav className="fixed w-full top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-black tracking-tighter">
            <span className="text-yellow-500">JEFFERSON</span>
            <span className="text-zinc-50">.DEV</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.id, link.href)
                }}
                className={`relative group transition-colors duration-300 ${
                  activeLink === link.id ? 'text-yellow-500' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-yellow-500 transition-all duration-300 ${
                  activeLink === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex gap-3">
            <a
              href="/JEFF_RESUME_2026.pdf"
              download="Jefferson_Resume_2026.pdf"
              className="btn-secondary text-sm px-4 py-2"
            >
              Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('contact', '#contact')
              }}
              className="btn-primary"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-yellow-500 hover:text-yellow-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-zinc-800 pt-4 space-y-3">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.id, link.href)
                }}
                className={`block py-2 px-4 rounded-lg transition-colors duration-300 ${
                  activeLink === link.id
                    ? 'bg-yellow-500 text-zinc-950 font-bold'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="block btn-primary text-center">
              Get In Touch
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
