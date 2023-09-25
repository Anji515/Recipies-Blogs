'use client'
import { useState } from 'react';
import { supabase } from '../supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { AlertCircle} from "lucide-react"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]=useState('');
  const router = useRouter()
  
  const [toggleShowPassword, settoggleShowPassword]=useState(false);
  const togglePasswordVisibility = () => {
    settoggleShowPassword(!toggleShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {data, error}= await supabase.auth.signInWithPassword({
      email:email,
      password:password,
    })
    if (!error) {
      alert('Login successful')
      console.log('login data', data)
      if(data?.user?.aud==="authenticated"){
        router.push('/')
      }
    }else{
      setError(error.message);
      console.log("error: " + error.message);
    }
  };

  const handleGithubLogin=async()=>{
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github'
    })
    if(data?.user?.aud==="authenticated"){
      router.push('/')
    }
    console.log('github', data)
  }


  return (
    <div className='flex w-2/5 flex-col mx-auto items-center justify-between p-24 bg-gray-500 rounded-md m-20'>
      <h1 className='text-3xl font-bold text-white'>Login</h1>
    <form onSubmit={handleSubmit} className='flex w-4/5 flex-col mx-auto justify-between p-14 bg-gray-500 rounded-md'>
      <Label>Email</Label>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='mb-6'
      />     
      <Label>Password</Label>
      <div className="relative mb-6">
      <Input
          className="w-full pr-12 py-2 pl-4 rounded border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          type={toggleShowPassword ? 'text' : 'password'}
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
      <span className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer text-gray-400" onClick={togglePasswordVisibility}>
          {toggleShowPassword ? <FaEye size={'22px'}/> : <FaEyeSlash size={'22px'}/>}
      </span>
      </div>
      <h1 className="text-blue-900 font-bold"><Link href='/recovery'>Forgot Password ?</Link></h1>
      <Button type="submit">Login</Button>
    </form>
    <br/>
    {error && <Alert variant="destructive" className='bg-teal-200 text-xl'>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        {error}
      </AlertDescription>
    </Alert> }
    <br/>
    <h1>If you don't account ? please do <Link href={'signup'} >Signup</Link></h1>
    <Button onClick={handleGithubLogin}>Github</Button>
    </div>
  );
};

export default LoginForm;
