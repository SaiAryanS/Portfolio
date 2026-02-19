import { FadeIn } from './FadeIn'
import { portfolio } from '@/content/portfolioData'

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 px-6 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Education */}
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] mb-4">
              Education
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)] tracking-tight mb-10">
              Academic Background
            </h2>

            <div className="space-y-10">
              {portfolio.education.map((edu) => (
                <div key={edu.degree} className="relative pl-6 border-l-2 border-[var(--border)]">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[var(--accent)]" />

                  <div className="flex flex-col gap-1 mb-3">
                    <span className="text-xs font-medium text-[var(--text-muted)] tracking-wide">
                      {edu.period}
                    </span>
                    <h3 className="text-base font-semibold text-[var(--text)]">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">
                      {edu.institution} · {edu.location}
                    </p>
                    <p className="text-sm font-medium text-[var(--text)]">
                      {edu.grade}
                    </p>
                  </div>

                  {edu.coursework.length > 0 && (
                    <div>
                      <p className="text-xs font-medium tracking-widest uppercase text-[var(--text-muted)] mb-2">
                        Coursework
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((c) => (
                          <span
                            key={c}
                            className="text-xs px-2.5 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-muted)]"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Certifications compact list */}
          <FadeIn delay={0.15}>
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] mb-4">
              Certifications
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)] tracking-tight mb-10">
              Continuous Learning
            </h2>

            <div className="space-y-4">
              {portfolio.certifications.map((cert, i) => (
                <div
                  key={cert.name}
                  className="flex items-start gap-4 py-4 border-b border-[var(--border)] last:border-none"
                >
                  <span className="flex-shrink-0 text-sm font-mono text-[var(--text-muted)] w-5 text-right">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-[var(--text)]">{cert.name}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
