import './globals.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
      <body className={inter.className}>
        <header>
          <h4>header</h4>
          <div className="nav">
            <Link href="/">Home</Link>
            <Link href="/login">login</Link>
            <Link href="register">Register</Link>
            <Link href="profile">Profile</Link>
          </div>
          </header>


        {children}
        <footer><h4>footer</h4></footer>
        </body>
    </html>
  )
}
