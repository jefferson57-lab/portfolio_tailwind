import React from 'react'

export default function Skills() {
  const skillCategories = {
    'Frontend': ['React', 'HTML', 'CSS', 'JavaScript', 'Figma'],
    'Backend & Databases': ['Python', 'MySQL', 'PostgreSQL', 'JavaScript'],
    'Tools & Platforms': ['Git', 'GitHub', 'Visual Studio Code', 'Postman', 'Linux/Ubuntu', 'Windows'],
    'Soft Skills': ['Problem Solving', 'Analytical Thinking', 'Communication', 'Team Collaboration', 'Adaptability', 'Time Management'],
  }

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20 animate-on-scroll">
          <div className="flex items-center gap-4 mb-4">
            <span className="section-label">Expertise</span>
            <div className="flex-1 h-px bg-gradient-to-r from-yellow-500 to-transparent" />
          </div>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <div
              key={category}
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass p-8 rounded-xl group hover:border-yellow-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-yellow-500 group-hover:scale-105 transition-transform origin-left">
                  {category}
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg hover:bg-yellow-500/10 transition-colors duration-300 group/skill cursor-default"
                    >
                      <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover/skill:scale-150 transition-transform" />
                      <span className="text-sm font-medium text-zinc-300 group-hover/skill:text-yellow-400 transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Skill bar */}
                <div className="mt-6 pt-6 border-t border-zinc-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-zinc-500 uppercase font-semibold">Proficiency</span>
                    <span className="text-xs font-bold text-yellow-500">90%</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-full rounded-full transition-all duration-1000"
                      style={{ width: '90%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            { number: '15+', label: 'Technologies', icon: '⚙️' },
            { number: '10+', label: 'Projects Shipped', icon: '🚀' },
            { number: '6+', label: 'Years Growth', icon: '📈' },
          ].map((stat, index) => (
            <div key={index} className="animate-on-scroll text-center">
              <div className="glass p-8 rounded-xl">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-black text-yellow-500 mb-2">{stat.number}</div>
                <p className="text-zinc-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
