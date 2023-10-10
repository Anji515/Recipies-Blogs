'use client'
import Loader from '../../components/Loader';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useAuthentication } from '../Providers/AuthProvider';

const Profile = () => {
  const {serverSession,signOut} = useAuthentication()

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-pink-300">
  {!serverSession?.user ? <Loader /> : (
    <>
      <header className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold">User Profile</h1>
        </div>
      </header>

      <main className="container mx-auto p-4 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4">
            {serverSession?.user?.user_metadata?.avatar_url && <Image
              width={250}
              height={250}
              src={serverSession?.user?.user_metadata?.avatar_url} // Replace with the URL of the user's avatar image
              alt="User Avatar"
              className="w-40 h-40 rounded-full"
              />}
            <div className='w-full flex justify-between items-center'>
              <div>
              <h2 className="text-xl font-semibold">{serverSession?.user?.user_metadata?.name}</h2>
              <h2 className="text-xl font-semibold">{serverSession?.user?.user_metadata?.user_name}</h2>
              <p className="text-gray-500"><strong>Email : </strong>{serverSession?.user?.email}</p>
              </div>
              <Button onClick={signOut}>Logout</Button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 mt-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">Additional Information</h3>
             <p className="text-gray-500"><strong>Logged in with : </strong>{serverSession?.user?.app_metadata?.provider}</p>
        </div>
      </main>
    </>
  )}
 </div>
  );
};

export default Profile;
