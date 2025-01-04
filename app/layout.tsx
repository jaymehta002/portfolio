import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import Navbar from '../components/navbar'
import { ThemeProvider } from '../components/theme-provider'
import { TooltipProvider } from '../components/ui/tooltip'
import { DATA } from '../data/resume'
import { ny } from '../lib/utils'
import '../styles/globals.css'

const fontSans = FontSans({
   subsets: ['latin'],
   variable: '--font-sans',
})

export const metadata: Metadata = {
   metadataBase: new URL(DATA.url),
   title: {
      default: DATA.name,
      template: `%s | ${DATA.name} - Full Stack Developer`,
   },
   description: DATA.description,
   keywords: [
      'Full Stack Developer',
      'Web Development',
      ...DATA.skills,
   ],
   authors: [{ name: DATA.name }],
   creator: DATA.name,
   openGraph: {
      title: DATA.name,
      description: DATA.description,
      url: DATA.url,
      siteName: DATA.name,
      locale: 'en_US',
      type: 'website',
      images: [
         {
            url: DATA.avatarUrl,
            width: 800,
            height: 800,
            alt: DATA.name,
         },
      ],
   },
   robots: {
      index: true,
      follow: true,
      googleBot: {
         'index': true,
         'follow': true,
         'max-video-preview': -1,
         'max-image-preview': 'large',
         'max-snippet': -1,
      },
   },
   twitter: {
      card: 'summary_large_image',
      title: DATA.name,
      description: DATA.description,
      creator: '@jaymehta002',
      images: [DATA.avatarUrl],
   },
   alternates: {
      canonical: DATA.url,
   },
   verification: {
      google: '',
      yandex: '',
   },
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html className='scroll-smooth' lang="en" suppressHydrationWarning>
         <body
            className={ny(
               'scroll-smooth min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6',
               fontSans.variable,
            )}
         >
            <ThemeProvider attribute="class" defaultTheme="dark">
               <TooltipProvider delayDuration={0}>
                  {children}
                  <Navbar />
               </TooltipProvider>
            </ThemeProvider>
         </body>
      </html>
   )
}
