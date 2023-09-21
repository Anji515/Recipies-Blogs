// import AuthForm from './auth-form'
'use client'
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { useRouter } from "next/navigation";

export default function Home() {

  const [user, setUser] = useState('');

  const router = useRouter()

  useEffect(()=>{
    setUser(localStorage.getItem('user'))

    const {data:{subscription}}=supabase.auth.onAuthStateChange(()=>{
      router.refresh();
    })

    return ()=>{
      subscription.unsubscribe()
    }
  },[])

  const handleLogout= async()=>{
    localStorage.removeItem('user')
    setUser('')
    const { error } = await supabase.auth.signOut()
    console.log('error',error)
  }

  return (
    <div className="row min-h-screen">
      <div className="container mx-auto px-1 py-10 col-6 w-full	content-center">
        <h1>Welcome to homepage</h1>
        {user && <div className="header text-left container m-auto w-full">
          <h1>{user}</h1>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
        }
      </div>
    </div>
  )
}