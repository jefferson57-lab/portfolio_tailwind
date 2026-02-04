import React from 'react'

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.querySelector(`#${id}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-20 px-6 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-40 right-10 w-96 h-96 rounded-full opacity-20 mix-blend-screen pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgb(234, 179, 8) 0%, transparent 70%)',
            animation: 'float 6s ease-in-out infinite',
          }}
        />
        <div
          className="absolute -bottom-20 left-20 w-80 h-80 rounded-full opacity-10 mix-blend-screen pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgb(234, 179, 8) 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite 1s',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center animate-slide-in-left">
          {/* Subtitle */}
          <div className="mb-6 inline-block">
            <div className="px-6 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
              <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">
                Welcome to my portfolio
              </p>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none animate-fade-in">
            Jefferson
            <br />
            <span className="text-yellow-500">Developer</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-in-up">
            Full Stack Software Engineer passionate about building impactful digital solutions. Experienced in web development, system support, and leveraging technology to empower communities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-slide-in-up">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
            >
              Get In Touch
            </button>
            <a
              href="/JEFF_RESUME_2026.pdf"
              download="Jefferson_Resume_2026.pdf"
              className="btn-secondary"
            >
              Download Resume
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto animate-slide-in-up">
            <div className="glass p-6 rounded-lg">
              <div className="text-3xl font-black text-yellow-500 mb-2">10+</div>
              <p className="text-sm text-zinc-400">Projects Developed</p>
            </div>
            <div className="glass p-6 rounded-lg">
              <div className="text-3xl font-black text-yellow-500 mb-2">4+</div>
              <p className="text-sm text-zinc-400">Years in Tech</p>
            </div>
            <div className="glass p-6 rounded-lg">
              <div className="text-3xl font-black text-yellow-500 mb-2">Full Stack</div>
              <p className="text-sm text-zinc-400">Developer</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-20 animate-bounce">
          <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
