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

  const [user, setUser] = useState("");
  const [session, setSession] = useState(false)

  const router = useRouter();
  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession()
    if (error) {
      console.error(error)
    } else {
      console.log('session',data)
      router.refresh();
      setSession(data)
    }
  }

  useEffect(() => {
    setUser(localStorage.getItem("user"));
    getSession()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      router.refresh();
    });

    console.log('sub',subscription)

    return () => {
      subscription.unsubscribe();
    };
  }, [user]);

  const handleLogout = async () => {
    localStorage.removeItem("user");
    setUser("");
    const { error } = await supabase.auth.signOut();
    console.log("error", error);
  };


  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar handleLogout={handleLogout} session={session} user={user}/>
        <br/>
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
