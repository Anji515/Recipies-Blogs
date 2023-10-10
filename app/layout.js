import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

import { createClient } from "./utils/supabase-server";
import AuthProvider from "@/Providers/AuthProvider";
import AuthContext from "@/Providers/AuthContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cookoo Recipes",
  description: "Discover and savor mouthwatering recipes in our app",
};
export const revalidate=0;

export default async function RootLayout({ children }) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <AuthContext serverSession={session}>
            <Navbar />
            <br />
            <br />
            {children}
            <Footer />
          </AuthContext>
        </AuthProvider>
      </body>
    </html>
  );
}
