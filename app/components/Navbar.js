'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GiCancel, GiHamburgerMenu } from 'react-icons/gi';

const Navbar = ({handleLogout,user}) => {

  let [open,setOpen]=useState(false);

  return (
    <nav className='shadow-md w-full fixed top-0 left-0 z-[99]'>
      <div className='md:flex items-center justify-between bg-white py-1 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <Link href="/">
        <div className="flex items-center space-x-2 cursor-pointer">
          <Image
            src="https://i.ibb.co/SXMDvvv/4c8022c6e30e46139eb905d74c5605b5-removebg-preview.png"
            alt="Logo"
            width={80}
            height={20}
          />
          <span className="text-black text-xl font-bold">Cookoo</span>
        </div>
      </Link>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 content-center items-center cursor-pointer md:hidden'>
       {open ? <GiCancel/>:<GiHamburgerMenu />}
      </div>

      <div className={`md:flex md:items-center md:pb-0 gap-10 pb-12 absolute md:static bg-white md:z-auto z-[-1] right-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-10 p-12 lg:p-0':'top-[-490px]'}`}>
      <div className="flex flex-col md:gap-10 gap-2 md:flex-row md:items-center items-right md:pb-0">
        <Link href="/about">
          <span className="hover:underline cursor-pointer">About</span>
        </Link>
        <Link href="/contact">
          <span className="hover:underline cursor-pointer">Contact</span>
        </Link>
        <Link href="/recipes">
          <span className="hover:underline cursor-pointer">Recipes</span>
        </Link>
        {user && (
          <div className="flex items-center header text-left container m-auto w-full gap-10">
            <h1>{user}</h1>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        )}
        { !user && <Link href="/login">
          <Button className="hover:underline hover:bg-gray-300 cursor-pointer text-black bg-slate-200">
            Log In
          </Button>
        </Link>}
         {!user && <Link href="/signup">
          <Button className="hover:underline cursor-pointer">Sign Up</Button>
        </Link>}
      </div>
      </div>
      </div>
    </nav>
   )
};

export default Navbar;
