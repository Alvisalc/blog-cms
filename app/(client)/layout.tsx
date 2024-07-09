import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google"; // direct input google font
import "./globals.css";
import Navbar from "../components/Navbar";
import Provider from "../utils/Provider";

// const inter = Inter({ subsets: ["latin"] });
const FiraCode = Fira_Code({subsets: ["latin"]}); // add the font set

export const metadata: Metadata = {
  title: "Tech Blog",
  description: "Welcome to the tech blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  suppressHydrationWarning={true} className={`${FiraCode.className}`}>
        <Provider>
           <Navbar/>
            <main className="mx-auto max-w-5xl px-6">
            {children}
            </main>
        </Provider>
        </body>
    </html>
  );
}
