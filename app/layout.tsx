import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sai Aryan Soma — Full-Stack & AI Engineer',
  description:
    'Portfolio of Sai Aryan Soma — Full-Stack & AI Engineer. Building intelligent systems that ship.',
  keywords: ['Full-Stack Engineer', 'AI Engineer', 'Software Developer', 'React', 'Next.js', 'Python', 'Machine Learning'],
  authors: [{ name: 'Sai Aryan Soma' }],
  openGraph: {
    title: 'Sai Aryan Soma — Full-Stack & AI Engineer',
    description: 'Building intelligent systems that ship.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (stored === 'dark' || (!stored && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
        {children}
      </body>
    </html>
  )
}
