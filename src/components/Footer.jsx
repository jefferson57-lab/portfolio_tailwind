import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' },
        { label: 'Experience', href: '#experience' },
      ],
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black tracking-tighter">
              <span className="text-yellow-500">JEFFERSON</span>
              <span className="text-zinc-50">.DEV</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mt-2">
              Building elegant web solutions with modern technologies.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-8 md:gap-12 items-center justify-center md:justify-end">
            {footerLinks[0].links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-zinc-400 hover:text-yellow-500 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-zinc-500 text-sm">
            &copy; {currentYear} Jefferson. All rights reserved.
          </p>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-400 hover:text-yellow-500 transition-colors text-sm font-semibold group"
          >
            Back to Top
            <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7-7m0 0l-7 7m7-7v12" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
