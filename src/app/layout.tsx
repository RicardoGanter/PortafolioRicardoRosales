import '@/styles/globals.scss'
import type { Metadata, Viewport } from 'next'
import Layout from './(layout)/layout'
import { monomaniacOne } from './fonts'
import SocialNetworks from './(layout)/components/socialNetworks'

export const metadata: Metadata = {
  title: 'Portfolio Ricardo Rosales',
  description: 'Professional portfolio showcasing the work of Ricardo Rosales',
  authors: [{ name: 'Ricardo Rosales' }],
  keywords: ['portfolio', 'web development', 'Ricardo Rosales'],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // themeColor: [
  //   { media: '(prefers-color-scheme: light)', color: 'white' },
  //   { media: '(prefers-color-scheme: dark)', color: 'black' },
  // ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={monomaniacOne.className}>
        <Layout />
        {children}
        <SocialNetworks />
      </body>
    </html>
  )
}
