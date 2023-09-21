"use client";
import { useState } from "react";
import { supabase } from "../supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Label } from "@/components/ui/label";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (!error) {
      setError("");
      console.log('success', data)
    }
    if (error) {
      setError(error.message);
      console.log("error: " + error.message);
    }
  };

  return (
    <div className='flex w-2/5 flex-col mx-auto items-center justify-between p-24 bg-gray-500 rounded-md'>
      <h1 className='text-3xl font-bold text-white'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex w-4/5 flex-col mx-auto justify-between p-14 bg-gray-500 rounded-md'>
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <br/>
        <Button type="submit">Signup</Button>
        <br/>
        {error && <p className='text-red-500'>{error}</p>}
      </form>
    <h1>If you already registered ? please do <Link className="text-blue.500" href={'/login'}>Login</Link></h1>
    </div>
  );
};

export default LoginForm;
