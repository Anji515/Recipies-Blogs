'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { createClient, supabase } from '../supabase-browser';
import Loader from '../components/Loader';
import { Button } from '@/components/ui/button';

const Profile = () => {
  const router = useRouter();

  const supabase=createClient()

  const [profile, setProfile] = useState('')
  console.log('profile',profile)

  const date = new Date(profile?.last_sign_in_at);

  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const formattedDate = date.toLocaleDateString('en-US', options);


  useEffect(()=>{
    supabase.auth.onAuthStateChange((_, session) => {
      if (session) {
        setProfile(session.user)
      } else {
        setProfile(null)
        router.push('/')
      }
    }) 
  },[])

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    console.log("error", error);
    alert('Logout successful !')
    // router.push('/')
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-pink-300">
  {!profile ? <Loader /> : (
    <>
      <header className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold">User Profile</h1>
        </div>
      </header>

      <main className="container mx-auto p-4 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4">
            {profile?.user_metadata?.avatar_url && <img
              src={profile?.user_metadata?.avatar_url} // Replace with the URL of the user's avatar image
              alt="User Avatar"
              className="w-36 h-36 rounded-full"
              />}
            <div className='w-full flex justify-between items-center'>
              <div>
              <h2 className="text-xl font-semibold">{profile?.user_metadata?.name}</h2>
              <h2 className="text-xl font-semibold">{profile?.user_metadata?.user_name}</h2>
              <p className="text-gray-500"><strong>Email : </strong>{profile.email}</p>
              </div>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 mt-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">Additional Information</h3>
              <p className="text-gray-500"><strong>Last Signin At : </strong>{formattedDate}</p>
        </div>
      </main>
    </>
  )}
 </div>
  );
};

export default Profile;
