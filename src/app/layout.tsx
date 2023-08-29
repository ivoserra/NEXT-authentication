import './globals.css'
import './tailwindClasses.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { LayoutProvider } from '@/components/LayoutProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Authentication JS',
  description: 'app learning from udemy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  //here we put apollo server 
  return (
    <html lang="en">
      <body>
        <LayoutProvider>
          {children}
        </LayoutProvider>
      </body>
    </html>
  )
}
