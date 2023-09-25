import SupabaseProvider from './SupabaseProv'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <br/>
        <br/>
        <SupabaseProvider>
        {children}
        </SupabaseProvider>
        <Footer />
      </body>
    </html>
  )
}
