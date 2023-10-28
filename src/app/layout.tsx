import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from './components/footer'

const inter = Inter({ 
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'] 
})


export const metadata: Metadata = {
  title: 'Fred Oliveira',
  description: 'Nutricionista esportivo Fred Oliveira, para acompanhamento nutricional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="PT-BR">
      <body className={inter.className}>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
