import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Ruscão Brands',
    description: 'A portfolio that connects your clients to your projects.',
    image: '/projects/ruscaobrands.png',
    github: 'https://github.com/igorsans/ruscaobrands',
    demo: 'https://ruscaobrands.vercel.app',
    tags: ['React', 'Styled Components']
  },
  {
    title: 'Disney Clone',
    description: 'A Disney clone complete functionality app.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com/igorsans/disney-clone',
    demo: 'https://demo.com',
    tags: ['React', 'Firebase']
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with Java.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tags: ['React', 'Node.js', 'PostgreSQL']
  }
];

export function Projects() {
  return (
    <section className="min-h-screen relative bg-background px-6 py-22 flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5" />
      <div className="max-w-7xl mx-auto w-full relative">
        <div className="mb-18">
          <span className="text-accent font-body text-lg block mb-4">Projects</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-8">
            Featured <span className="text-accent">Work</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-surface/50 backdrop-blur-sm rounded-4xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-accent/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-primary mb-3">
                  {project.title}
                </h3>
                <p className="font-body text-primary/70 mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm font-body bg-accent/10 text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <a
                    href={project.github} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                  >
                    <Github size={20} strokeWidth={1.5} />
                    <span className="font-body">Code</span>
                  </a>
                  <a
                    href={project.demo} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                  >
                    <ExternalLink size={20} strokeWidth={1.5} />
                    <span className="font-body">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}