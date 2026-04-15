import type { Metadata } from "next";
import { Montserrat, Tinos } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap"
})

const tinos = Tinos({
  variable: "--font-tinos",
  weight: "400",
  subsets: ["latin"],
  display: "swap"
})

const daydream = localFont({
  src: "./fonts/daydream.ttf", 
  variable: "--font-daydream",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Lu-Araujo",
  description: "This is a showcase of my services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${tinos.variable} ${daydream.variable} h-full antialiased`}
    >
      <body className={`${montserrat.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
