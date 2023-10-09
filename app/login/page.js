"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { useAuthentication } from "../Providers/AuthProvider";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {signInWithGithub,signInWithPassword,signInWithGoogle} = useAuthentication()

  const [toggleShowPassword, settoggleShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    settoggleShowPassword(!toggleShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithPassword(email,password ); 
    } catch (error) {
      setError(error)
    }
  };

  return (
    <div className="w-full md:w-full bg-gradient-to-r from-blue-300 to-pink-300 pt-20 pb-10 ">
      <div className="flex w-[90%] md:w-2/5 p-10 md:p-24 flex-col mx-auto items-center justify-between rounded-md shadow-2xl border border-gray-300">
        <h1 className="text-3xl font-bold text-white">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="flex w-full md:w-4/5 flex-col mx-auto justify-between px-14 py-4 rounded-md"
        >
          <Label>Email</Label>
          <Input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-6"
          />
          <Label>Password</Label>
          <div className="relative mb-6">
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
          <h1 className="text-blue-900 font-semibold">
            <Link href="/profile/recovery">Forgot Password ?</Link>
          </h1>
          <Button type="submit">Login</Button>
        </form>
        <br />
        {error && (
          <Alert variant="destructive" className="bg-teal-200 text-xl">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <h1>
          If you don't account ? please do <Link href={"signup"} className="font-semibold text-blue-900">Signup</Link>
        </h1>
        <br />
        <h1 className="text-gray-700">OR LOG IN WITH</h1>
        <br />
        <div className="flex w-full mx-auto items-center justify-center p-2 gap-5">
          <Button
            onClick={signInWithGithub}
            className="bg-white text-black hover:bg-gray-300"
          >
            <FaGithub className="font-extrabold text-gray-600 mr-2  text-[22px]" />
            Github
          </Button>
          <Button
            onClick={signInWithGoogle}
            className="bg-white text-black hover:bg-gray-300"
          >
            <FaGoogle className="font-extrabold text-red-600 mr-2  text-[22px]" />
            Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
