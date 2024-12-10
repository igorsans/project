import React from 'react';
import { Code2, Database, Globe, Palette, Server, Terminal } from 'lucide-react';

const skills = [
  { name: 'Languages', icon: Code2, items: ['JavaScript',  'Java', 'Python'] },
  { name: 'Frontend', icon: Globe, items: ['React', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Backend', icon: Server, items: ['Node.js', 'Express', 'Python'] },
  { name: 'Database', icon: Database, items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { name: 'Tools', icon: Terminal, items: ['Git', 'Docker', 'AWS'] },
  { name: 'UI/UX', icon: Palette, items: ['Figma', 'Responsive Design'] },
];

export function Skills() {
  return (
    <section className="min-h-screen relative bg-surface px-6 py-22 flex items-center">
      <div className="absolute inset-0 bg-gradient-to-tl from-accent/5 to-secondary/5" />
      <div className="max-w-7xl mx-auto w-full relative">
        <div className="mb-18">
          <span className="text-accent font-body text-lg block mb-4">Skills</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-8">
            Technical <span className="text-accent">Expertise</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div 
              key={skill.name}
              className="group bg-background/50 backdrop-blur-sm p-8 rounded-4xl hover:shadow-lg transition-all duration-300 border border-accent/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-2xl">
                  <skill.icon 
                    className="w-6 h-6 text-accent" 
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">
                  {skill.name}
                </h3>
              </div>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li 
                    key={item} 
                    className="font-body text-primary/70 flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}