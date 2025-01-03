import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CareerPrep',
  description: 'Empowering students with project ideas and coding resources',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <nav className="bg-teal-700 text-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold hover:text-teal-200 transition-colors">CareerPrep</Link>
            <div className="space-x-4">
              <Link href="/project-generator" className="hover:text-teal-200 transition-colors">Project Generator</Link>
              <Link href="/coding-arena" className="hover:text-teal-200 transition-colors">Coding Arena</Link>
              <Link href="/resources" className="hover:text-teal-200 transition-colors">Resources</Link>
            </div>
          </div>
        </nav>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-teal-800 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} CareerPrep. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

