import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const bodyFont = Inter({ 
  subsets: ['latin'],
  variable: '--font-body'
})

const headingFont = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-heading'
})

export const metadata = {
  title: 'HotOrNot - Rate & Discover',
  description: 'The ultimate platform for rating and social discovery'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
