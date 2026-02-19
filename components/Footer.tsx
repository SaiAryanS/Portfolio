import { portfolio } from '@/content/portfolioData'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)] py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--text-muted)]">
          © {year} {portfolio.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href={portfolio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            GitHub
          </a>
          <span className="w-px h-3 bg-[var(--border)]" />
          <a
            href={portfolio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            LinkedIn
          </a>
          <span className="w-px h-3 bg-[var(--border)]" />
          <a
            href={`mailto:${portfolio.email}`}
            className="text-xs text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
