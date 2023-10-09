"use client";
import { createClient } from "@/app/utils/supabase-browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const UpdateProfile = () => {
  let [supabase] = useState(() => createClient());
  const [updateEmail, setUpdateEmail] = useState("");
  const [updatePassword, setUpdatePassword] = useState("");

  const handleUpdatePassword = async () => {
    try {
      const { data} = await supabase.auth.updateUser({
        password: updatePassword,
        email: updateEmail,
      });
      console.log('updaed user',data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto text-center py-20 w-96 min-h-screen">
      <header className="my-6">
        <h1 className="mb-2 text-2xl font-bold">Update your password</h1>
        <p>Update your email or password.</p>
      </header>
      <div className="mx-auto">
        <Input
          type="email"
          value={updateEmail}
          required
          placeholder="Email"
          onChange={(e) => setUpdateEmail(e.target.value)}
        />
        <br />
        <Input
          type="password"
          value={updatePassword}
          placeholder="MyNewPassword12"
          onChange={(e) => setUpdatePassword(e.target.value)}
        />
      </div>
      <br />
      <div>
        <Button className="" onClick={handleUpdatePassword}>
          Update
        </Button>
      </div>
    </div>
  );
};

export default UpdateProfile;
