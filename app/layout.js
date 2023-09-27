import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Inter } from 'next/font/google'
import './globals.css'
import SupabaseProvider from './Providers/SupabaseProvider'
import SupabaseAuthProvider from './Providers/AuthProvider'
import { createClient } from './supabase-server'
const inter = Inter({ subsets: ['latin'] })

export const revalidate = 0

export default async function RootLayout({ children }) {

  const supabase =createClient() ;

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // console.log('layoutSession',session)

  return (
    <html lang="en">
      <body className={inter.className}>
        <SupabaseProvider >
          <SupabaseAuthProvider serverSession={session}>
        <Navbar />
        <br/>
        <br/>
          {children}
        <Footer />
          </SupabaseAuthProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
