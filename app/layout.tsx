import type { Metadata } from "next";
import {Manrope} from "next/font/google"
import "./globals.css";

const manrope = Manrope ({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap"
})

export const metadata: Metadata = {
  title: "Umusaare | The Safer Way Home",
  description:
    "Umusaare connects you with a trusted driver when you can't or shouldn't drive home yourself.",
  icons:{
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}