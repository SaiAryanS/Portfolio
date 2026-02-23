import Image from 'next/image'
import { FadeIn } from './FadeIn'
import { portfolio } from '@/content/portfolioData'

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: Bio */}
          <FadeIn>
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] mb-4">
                About
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)] tracking-tight mb-6 leading-snug">
                I build things that<br />work in the real world.
              </h2>
              <p className="text-base text-[var(--text-muted)] leading-relaxed">
                {portfolio.about}
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={portfolio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-colors border border-[var(--border)] rounded-full px-4 py-2 hover:border-[var(--text-muted)]"
                >
                  GitHub Profile →
                </a>
                <a
                  href={portfolio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-colors border border-[var(--border)] rounded-full px-4 py-2 hover:border-[var(--text-muted)]"
                >
                  LinkedIn Profile →
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right: Photo + Achievements */}
          <FadeIn delay={0.15}>
            <div className="flex flex-col gap-8">

              {/* Photo */}
              <div className="relative w-full overflow-hidden rounded-2xl border border-[var(--border)]" style={{ aspectRatio: '4/5' }}>
                <Image
                  src="/AryanFormal.jpg"
                  alt="Sai Aryan Soma"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-xs font-medium tracking-widest uppercase text-[var(--text-muted)] mb-4">
                  Achievements
                </h3>
                <ul className="space-y-3">
                  {portfolio.achievements.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-[var(--text)]"
                    >
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
