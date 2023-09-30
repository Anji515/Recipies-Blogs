"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect } from "react";
import useSWR from "swr";
import { useSupabase } from "./SupabaseProvider";

const Context = createContext();

export default function SupabaseAuthProvider({
  serverSession,
  children,
} ) {
  const { supabase } = useSupabase();
  const router = useRouter();

  // Get USER
  const getUser = async () => {
    const { data: user, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", serverSession?.user?.id)
      .single();
    if (error) {
      console.log(error);
      return null;
    } else {
      return user;
    }
  };

  const {
    data: user,
    error,
    isLoading,
    mutate,
  } = useSWR(serverSession ? "profile-context" : null, getUser);

  // Sign Out
  const signOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
    router.push("/login");
    alert('Sign Out Successfully !');
  };

  // Sign-In with Github
  const signInWithGithub = async () => {
    await supabase.auth.signInWithOAuth({ provider: "github" });
  };

    // Sign-In with Github
    const signInWithGoogle = async () => {
        await supabase.auth.signInWithOAuth({ provider: "google" });
      };

  // Sign-In with Email
  const signInWithPassword = async (email, password ) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return error.message;
    }
    if (!error){
      alert("Login successful");
    }

    return null;
  };

  // Refresh the Page to Sync Server and Client
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== serverSession?.access_token) {
        router.refresh();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase, serverSession?.access_token]);

  const Actions = {
    serverSession,
    user,
    error,
    isLoading,
    mutate,
    signOut,
    signInWithGithub,
    signInWithPassword,
    signInWithGoogle
  };

  return <Context.Provider value={Actions}>{children}</Context.Provider>;
}

export const useAuthentication = () => {
  let context = useContext(Context);
  if (context === undefined) {
    throw new Error("useAuth must be used inside SupabaseAuthProvider");
  } else {
    return context;
  }
};