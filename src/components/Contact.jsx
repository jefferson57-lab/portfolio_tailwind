import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/jefferson57-lab',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jeff-wafula-96564a350/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.814 0-9.752h3.554v1.381c.43-.664 1.199-1.608 2.928-1.608 2.136 0 3.745 1.398 3.745 4.402v5.577zM5.337 9.433c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.959-1.715 1.188 0 1.915.76 1.932 1.715 0 .953-.744 1.715-1.976 1.715zm1.946 11.019H3.391V9.681h3.892v10.771zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      url: 'mailto:wafulajefferson3@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/254797760731',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.52 3.48C19.13 2.08 17.23 1.27 15.14 1.27c-5.22 0-9.47 4.25-9.47 9.47 0 1.87.61 3.6 1.72 5.07L1.07 23.73l5.56-1.83c1.49.81 3.19 1.27 4.98 1.27 5.22 0 9.47-4.25 9.47-9.47 0-2.53-.98-4.88-2.76-6.66zm-5.38 14.51c-1.6 0-3.17-.5-4.5-1.38l-.32-.2-3.33 1.1 1.12-3.25-.21-.33C3.12 12.92 2.5 11.4 2.5 9.74 2.5 5.81 5.81 2.5 9.74 2.5c1.99 0 3.86.77 5.28 2.19 1.42 1.42 2.2 3.3 2.2 5.28 0 3.93-3.31 7.24-7.24 7.24zm3.92-5.41c-.21-.1-1.24-.61-1.44-.68-.2-.07-.35-.11-.5.11-.15.23-.57.68-.7.82-.13.14-.26.16-.47.05-.21-.11-.88-.32-1.68-.94-.62-.55-1.03-1.23-1.15-1.45-.13-.23-.01-.35.1-.47.1-.1.23-.27.35-.41.12-.13.16-.23.25-.37.08-.14.04-.27-.02-.39-.06-.12-.5-1.2-.68-1.65-.18-.44-.36-.38-.5-.39-.13-.01-.28-.01-.42-.01-.15 0-.39.06-.59.27-.2.21-.77.75-.77 1.83s.79 2.12.9 2.27c.11.15 1.55 2.38 3.74 3.33.52.23.93.37 1.25.47.52.17 1 .15 1.38.09.42-.06 1.32-.54 1.5-1.07.18-.53.18-.98.13-1.08-.05-.1-.19-.15-.4-.27z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20 text-center animate-on-scroll">
          <div className="flex justify-center mb-4">
            <span className="section-label">Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="text-xl text-zinc-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="glass p-8 rounded-xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-zinc-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors text-white placeholder-zinc-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-zinc-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors text-white placeholder-zinc-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-zinc-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors text-white placeholder-zinc-500"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-zinc-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors text-white placeholder-zinc-500 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>

              {submitted && (
                <p className="text-center text-yellow-500 text-sm font-semibold">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="space-y-4 animate-on-scroll" style={{ animationDelay: '0.1s' }}>
              <div className="glass p-6 rounded-xl hover:border-yellow-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Location</h3>
                    <p className="text-zinc-400">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-xl hover:border-yellow-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Email</h3>
                    <a href="mailto:wafulajefferson3@gmail.com" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                      wafulajefferson3@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-xl hover:border-yellow-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📱</div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                      +254 797-760-731                    </a>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-xl hover:border-yellow-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📄</div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Resume</h3>
                    <a 
                      href="/JEFF_RESUME_2026.pdf"
                      download="Jefferson_Resume_2026.pdf"
                      className="text-yellow-500 hover:text-yellow-400 transition-colors"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-bold text-white mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-4 rounded-lg text-zinc-400 hover:text-yellow-500 hover:border-yellow-500/50 transition-all duration-300 hover:scale-110 group"
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass p-6 rounded-xl border-yellow-500/30 bg-yellow-500/5 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <p className="font-semibold text-white">Available for Work</p>
              </div>
              <p className="text-sm text-zinc-400">
                Currently open for freelance projects and full-time opportunities. Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
