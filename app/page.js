// import AuthForm from './auth-form'
'use client'
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { useRouter } from "next/navigation";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';
import Image from "next/image";

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
       <div>
      <Carousel autoPlay infiniteLoop showStatus={false} className="height-400" showThumbs={false}>
        <div  className="h-400 bg-slate-400">
          <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/07/healthy-foods.jpg" alt="Carousel Image 1"  />
        </div>
        <div className="h-400 bg-slate-400">
          <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/05/avocado-bacon-bagel.jpg" alt="Carousel Image 2"  />
        </div>
        <div className="h-400 bg-slate-400">
          <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/05/avocado-bacon-bagel.jpg" alt="Carousel Image 3" />
        </div>
      </Carousel>

      <div className="container mx-auto mt-8">
        {/* Featured Food Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="https://media.istockphoto.com/id/915352850/photo/close-up-of-a-delicious-bagel-with-egg-bacon-and-vegetables.jpg?s=2048x2048&w=is&k=20&c=8pWB7PF9kEPB1JS5QiCbjdulliboC7bjMjuAR10hRew=" alt="Food Image 1" className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-2">Delicious Pasta</h2>
            <p className="text-gray-600">Try our mouthwatering pasta recipes.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/04/open-sandwich-with-salmon-cream-avocado.jpg" alt="Food Image 2" className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-2">Sizzling BBQ</h2>
            <p className="text-gray-600">Explore our BBQ recipes for a delightful experience.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/05/avocado-egg-open-sandwich.jpg" alt="Food Image 3" className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-2">Sweet Desserts</h2>
            <p className="text-gray-600">Indulge in our sweet dessert creations.</p>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="mt-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Recipe Blog</h1>
          <p className="text-lg">
            Discover a wide range of delicious recipes from around the world. Whether you're a
            seasoned chef or just starting out, we have something for everyone.
          </p>
          <Link href="/recipes">
            <p className="text-blue-600 hover:underline mt-2 block">Explore Recipes</p>
          </Link>
        </div>
      </div>
    </div>
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