"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";

export const Context = createContext();

export default function SupabaseProvider({
  children,
}) {
  const [supabase] = useState(() => createPagesBrowserClient());
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  console.log('user', user);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      router.refresh();
    });

    supabase.auth.getSession().then((res) => {
      if (!res.data.session) {
        setIsOpen(true);
        return;
      }
      setUser(res.data.session.user);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);

  return (
    <Context.Provider value={{ supabase,user,isOpen }}>
        {children}
    </Context.Provider>
  );
}

export const useSupabase = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("useSupabase must be used inside SupabaseProvider");
  }

  return context;
};