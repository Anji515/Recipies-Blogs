"use client";
import { useState } from "react";
import { supabase } from "../supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { FaExclamationCircle, FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [succes, setSuccess] = useState("");
  

  const [toggleShowPassword, settoggleShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    settoggleShowPassword(!toggleShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password==confirmPassword) {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (!error) {
      setError("");
      console.log("success", data);
      setSuccess('Email confirmation link has been sent')
    }
    if (error) {
      setError(error.message);
      console.log("error: " + error.message);
    }
    }else{
      setError("Passwords are not match !");
    }
  };

  return (
    <div className="flex w-2/5 flex-col mx-auto items-center justify-between p-24 bg-gray-500 rounded-md m-20">
      <h1 className="text-3xl font-bold text-white">Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        className="flex w-4/5 flex-col mx-auto justify-between p-14 bg-gray-500 rounded-md"
      >
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <Label>Password</Label>
        <div className="relative">
          <Input
            className="w-full pr-12 py-2 pl-4 rounded border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            type={toggleShowPassword ? "text" : "password"}
            placeholder="Password"
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
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />
        <Button type="submit">Signup</Button>
        <br />
        {error && <p className="text-red-900 font-bold"><FaExclamationCircle/>{error}</p>}
        {succes && <p className="text-green-900 font-bold"><FaExclamationCircle/>{succes}</p>}
      </form>
      <h1>
        If you already registered ? please do{" "}
        <Link className="text-blue.500" href={"/login"}>
          Login
        </Link>
      </h1>
    </div>
  );
};

export default LoginForm;
