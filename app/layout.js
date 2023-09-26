import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const revalidate = 0

export default async function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <br/>
        <br/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
