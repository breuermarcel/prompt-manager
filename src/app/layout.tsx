import type { Metadata } from 'next'
import { Sen } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marcel Breuer | Prompt Manager',
  description:
    'Der Prompt Manager kategorisiert und veröffentlicht ChatGPT-Prompts, sodass sie einfach durchsucht, getestet und in die Zwischenablage kopiert werden können. Ideal für alle, die ihre AI-Workflows optimieren möchten!',
}

const font = Sen({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={font.className}>
        {children}

        <footer className="pb-4 w-full text-gray-600 text-center -6">
          <p>&copy; Marcel Breuer {new Date().getFullYear()} </p>
        </footer>
      </body>
    </html>
  )
}
