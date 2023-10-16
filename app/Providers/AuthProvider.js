"use client";

import { createClient } from "@utils/supabase-browser";
import { createContext, useContext, useState } from "react";


const Context = createContext(undefined);

export default function AuthProvider({ children }) {

  const [supabase] = useState(() => createClient());

  return (
    <Context.Provider value={{ supabase }}>
      <>{children}</>
    </Context.Provider>
  );
}

export const useSupabase = () => {
  let context = useContext(Context);
  if (context === undefined) {
    throw new Error("useSupabase must be used inside AuthProvider");
  } else {
    return context;
  }
};