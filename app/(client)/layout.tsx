import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google"; // direct input google font
import "./globals.css";
import Navbar from "../components/Navbar";
import Provider from "../utils/Provider";

// const inter = Inter({ subsets: ["latin"] });
const FiraCode = Fira_Code({subsets: ["latin"]}); // add the font set

export const metadata: Metadata = {
  title: "Dev Blog",
  description: "Welcome to the dev blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/tech.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
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
