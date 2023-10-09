"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { FaExclamationCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { createClient } from "../utils/supabase-browser";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [succes, setSuccess] = useState("");
  const [username, setUsername] = useState("");

  let [supabase] = useState(() => createClient());

  const [toggleShowPassword, settoggleShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    settoggleShowPassword(!toggleShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   const { data: { existingUser } } = await supabase.auth.getUser()
   console.log('user',existingUser)

    if (!email || !username || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    
    if (password == confirmPassword) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/v1/callback`,
          data: {
            user_name: `${username}` ,
          },
        },
      });
      if (!error) {
        setError("");
        console.log("success", data);
        setSuccess("Email confirmation link has been sent");
      }
      if (error) {
        setError(error.message);
        console.log("error: " + error.message);
      }
    } else {
      setError("Passwords are not match !");
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-300 to-pink-300 pt-20 pb-10 ">
      <div className="flex w-[90%] md:w-2/5 p-10 md:p-24 flex-col mx-auto items-center justify-between rounded-md m-20 shadow-2xl">
        <h1 className="text-3xl font-bold text-white">Sign Up</h1>
        <form
          onSubmit={handleSubmit}
          className="flex w-full md:w-4/5 flex-col mx-auto justify-between px-14 py-4 rounded-md"
        >
          <Label>Email</Label>
          <Input
            type="email"
            required
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <Label>Username</Label>
          <Input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <Label>Password</Label>
          <div className="relative">
            <Input
              className="w-full pr-12 py-2 pl-4 rounded border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              type={toggleShowPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer text-gray-400"
              onClick={togglePasswordVisibility}
            >
              {toggleShowPassword ? (
                <FaEye size={"22px"} />
              ) : (
                <FaEyeSlash size={"22px"} />
              )}
            </span>
          </div>
          <br />
          <Label>Confirm Password</Label>
          <Input
            type="text"
            placeholder="Enter your confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <Button type="submit">Signup</Button>
          <br />
          {error && (
            <p className="text-red-900 font-bold flex gap-2 items-center justify-center">
              <FaExclamationCircle />
              {error}
            </p>
          )}
          {succes && (
            <p className="text-green-900 font-bold flex gap-2 items-center justify-center">
              <FaExclamationCircle />
              {succes}
            </p>
          )}
        </form>
        <h1>
          If you already registered ? please do{" "}
          <Link className="font-semibold text-blue-900" href={"/login"}>
            Login
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default LoginForm;
