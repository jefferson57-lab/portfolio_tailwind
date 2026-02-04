import React from 'react'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Tree Planting Club Tracker System',
      description: 'A tracking system to manage tree planting activities, member participation, and progress reporting. Designed workflows to support activity logging, reporting, and basic data analysis.',
      tech: ['Python', 'Database Management', 'CLI'],
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop',
      link: 'https://example.com',
      github: 'https://github.com',
    },
    {
      id: 2,
      title: 'Activity Tracker CLI',
      description: 'A command line-based activity tracking application to monitor user tasks and daily activities. Implemented features for activity logging, updates, and summary reporting.',
      tech: ['Python', 'CLI', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      link: 'https://example.com',
      github: 'https://github.com',
    },
    {
      id: 3,
      title: 'Python Command Line Interface Application',
      description: 'A Python-based command line application that automated key tasks through an intuitive terminal interface. Led development and coordinated team activities for quality project delivery.',
      tech: ['Python', 'CLI', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      link: 'https://example.com',
      github: 'https://github.com',
    },
    {
      id: 4,
      title: 'Bus Booking System',
      description: 'A full-stack bus booking system that streamlined seat reservation and trip management processes. Contributed to design, development, testing, and documentation.',
      tech: ['React', 'Python', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=300&fit=crop',
      link: 'https://example.com',
      github: 'https://github.com',
    },
  ]

  return (
    <section id="projects" className="py-32 px-6 bg-zinc-900/50 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20 animate-on-scroll">
          <div className="flex items-center gap-4 mb-4">
            <span className="section-label">Portfolio</span>
            <div className="flex-1 h-px bg-gradient-to-r from-yellow-500 to-transparent" />
          </div>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass p-0 rounded-xl overflow-hidden h-full flex flex-col transition-all duration-500 hover:scale-105 hover:border-yellow-500/50">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-zinc-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm py-2 px-4"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-sm py-2 px-4"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-16 animate-on-scroll">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  )
}
