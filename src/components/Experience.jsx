import React from 'react'

export default function Experience() {
  const experiences = [
    {
      role: 'Webmaster',
      company: 'Women In Water And Natural Resource Conservation',
      period: 'August 2025 - Present',
      description: 'Managing web presence and digital operations for an organization focused on environmental conservation and empowering women in resource management.',
      achievements: [
        'Manage and maintain organizational website and digital platforms',
        'Support digital initiatives to promote conservation efforts',
        'Collaborate with team to enhance online presence and community engagement',
      ],
    },
    {
      role: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: '2025 - Present',
      description: 'Providing full-stack web development services to clients, building responsive and scalable web applications.',
      achievements: [
        'Design and develop custom web solutions tailored to client needs',
        'Implement modern technologies including React, Python, and databases',
        'Deliver quality code with emphasis on performance and user experience',
      ],
    },
    {
      role: 'Attachment Trainee - ICT Department',
      company: 'Masinde Muliro University of Science and Technology (MMUST)',
      period: 'May 2024 - August 2024',
      description: 'Gained hands-on experience in system maintenance, software installation, and technical support in a large academic environment.',
      achievements: [
        'Assisted in system maintenance, software installation, and hardware troubleshooting',
        'Supported network configuration and database-related tasks for improved system reliability',
        'Provided technical support and end-user assistance, enhancing operational efficiency',
        'Gained hands-on experience in system monitoring and ICT infrastructure support',
      ],
    },
  ]

  return (
    <section id="experience" className="py-32 px-6 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20 animate-on-scroll">
          <div className="flex items-center gap-4 mb-4">
            <span className="section-label">Career Path</span>
            <div className="flex-1 h-px bg-gradient-to-r from-yellow-500 to-transparent" />
          </div>
          <h2 className="section-title">Work Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-500 via-yellow-500/50 to-transparent" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 animate-on-scroll`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex md:w-1/2 justify-center">
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full border-4 border-zinc-950 shadow-lg shadow-yellow-500/50" />
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2">
                  <div className="glass p-8 rounded-xl group hover:border-yellow-500/50 transition-all duration-300 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-yellow-500 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-yellow-500 font-semibold mt-1">{exp.company}</p>
                      </div>
                      <span className="text-sm text-zinc-500 font-semibold whitespace-nowrap ml-4">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-zinc-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex gap-3 text-sm text-zinc-300">
                          <span className="text-yellow-500 font-bold mt-0.5">✓</span>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center animate-on-scroll">
          <p className="text-zinc-400 mb-6">Interested in working together?</p>
          <a href="#contact" className="btn-primary">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  )
}
