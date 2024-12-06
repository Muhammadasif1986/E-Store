import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopHeader from "./components/TopHeader";
import NavBar from "./components/NavBar";
import NavigateMenu from "./components/Navigate-Menuu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
<TopHeader />
<div className="hidden lg:block"><NavBar /></div>
<div className="lg:hidden"><NavigateMenu /></div>

        {children}
        
        </body>
    </html>
  );
}
