'use client'
import { useEffect, useState } from 'react'
import SupabaseProvider from './SupabaseProv'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { supabase } from './supabase'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const router = useRouter();

  const [username, setUsername] = useState('')
  // console.log('userName',username)
  useEffect(()=>{
    supabase.auth.onAuthStateChange((_, session) => {
      if (session) {
        router.push('/')
        setUsername(session.user)
      } else {
        setUsername(null)
      }
    }) 
  },[])

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    console.log("error", error);
    alert('Logout successful !')
  };


  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar handleLogout={handleLogout} user={username ? username.email : null}/>
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
