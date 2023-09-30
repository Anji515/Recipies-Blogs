"use client";

import { createContext, useContext, useState } from "react";
import { createClient } from "../utils/supabase-browser";


const Context = createContext(undefined);

export default function SupabaseProvider({ children }) {

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
    throw new Error("useSupabase must be used inside SupabaseProvider");
  } else {
    return context;
  }
};