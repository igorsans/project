import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export function Intro() {
  return (
    <section className="min-h-screen relative bg-background px-6 flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5" />
      <div className="max-w-7xl mx-auto w-full relative">
        <div className="max-w-3xl">
          <span className="font-display text-6xl md:text-8xl font-bold text-primary md:text-xl leading-tight">
            Igor Santos
          </span>
          <span className="text-accent font-body text-lg md:text-xl mb-4 block">
            Full Stack Developer
          </span>
          <h1 className="font-display text-6xl md:text-8xl font-bold text-primary mb-8 leading-tight">
            Creating Digital <span className="text-accent">Experiences</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-primary/80 mb-12 leading-relaxed max-w-2xl">
            I craft beautiful and functional web applications with a focus on user experience and performance.
          </p>
          <div className="flex items-center gap-8">
            <a
              href="https://github.com/igorsans" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 bg-accent text-surface px-6 py-3 rounded-2xl font-body hover:bg-primary transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/devsantos/" target="_blank" rel="noreferrer" className="text-accent hover:text-primary transition-colors">
                <Linkedin size={24} strokeWidth={1.5} />
              </a>
              <a href="mailto:igor.santos0@hotmail.com" className="text-accent hover:text-primary transition-colors">
                <Mail size={24} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <ChevronDown
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent animate-bounce"
        size={32}
      />
    </section>
  );
}