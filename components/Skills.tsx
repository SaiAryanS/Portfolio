import { FadeIn } from './FadeIn'
import { portfolio } from '@/content/portfolioData'

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-6 border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] mb-4">
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)] tracking-tight">
            Technical Skills
          </h2>
          <p className="text-base text-[var(--text-muted)] mt-3 max-w-md">
            Technologies I work with across the full product lifecycle.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.skills.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.08}>
              <div>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--text-muted)] mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm font-medium text-[var(--text)] bg-[var(--card)] border border-[var(--border)] rounded-lg px-3 py-1.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
