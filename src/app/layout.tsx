import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from './components/footer'
import Script from 'next/script'
import { GoogleAnalytics } from '@/components/googleAnalytics'

const inter = Inter({ 
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'] 
})


export const metadata: Metadata = {
  title: 'Fred Oliveira Nutricionista esportivo',
  description: 'Nutricionista esportivo Fred Oliveira, para acompanhamento nutricional em Arcos, Minas Gerais',
  keywords: ["Nutricionista", "Nutricionista Esportivo", "Ganho de massa muscular", "Dieta", "Nutricionista em Arcos"]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="PT-BR">
      <GoogleAnalytics GA_MEASUREMENT_ID='G-TXNVVNL5LP'/>
      <body className={inter.className}>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
<meta  />