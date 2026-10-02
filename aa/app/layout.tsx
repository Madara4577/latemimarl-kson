import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageTransitionProvider } from '@/components/page-transition'
import './globals.css'

const neueMontreal = localFont({
  src: [
    { path: './fonts/NeueMontreal-Light.woff2', weight: '300', style: 'normal' },
    { path: './fonts/NeueMontreal-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/NeueMontreal-Medium.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-neue-montreal',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Late Mimarlık | Mekanı Özel Kıl',
    template: '%s | Late Mimarlık',
  },
  description:
    'Late Mimarlık — İstanbul merkezli mimarlık ve iç mimarlık stüdyosu. Sade ve şık, size özel mekanlar tasarlıyoruz.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={neueMontreal.variable}>
      <body className="antialiased">
        <PageTransitionProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </PageTransitionProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
