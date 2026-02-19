'use client'

import { motion } from 'framer-motion'
import { FadeIn } from './FadeIn'
import { portfolio } from '@/content/portfolioData'

function ProjectCard({ project, index }: { project: typeof portfolio.projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[var(--text-muted)] hover:bg-[var(--card-hover)] transition-all duration-200"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-base font-semibold text-[var(--text)] leading-snug group-hover:text-[var(--accent)] transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Period */}
      <p className="text-xs text-[var(--text-muted)] mb-3">{project.period}</p>

      {/* Description */}
      <p className="text-sm text-[var(--text-muted)] leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="inline-block text-[11px] font-medium px-2.5 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-muted)]"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export function Projects() {
  const featured = portfolio.projects.filter((p) => p.featured)
  const rest = portfolio.projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] mb-4">
            Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)] tracking-tight">
            Selected Projects
          </h2>
          <p className="text-base text-[var(--text-muted)] mt-3 max-w-lg">
            A curated selection of projects across AI, full-stack, and DevOps — each built to solve a real problem.
          </p>
        </FadeIn>

        {/* Featured grid (2-col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Additional projects row */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rest.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={featured.length + i} />
            ))}
          </div>
        )}

        {/* GitHub link */}
        <FadeIn className="mt-10 text-center">
          <a
            href="https://github.com/SaiAryanS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            View all repositories on GitHub
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7"/>
            </svg>
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
