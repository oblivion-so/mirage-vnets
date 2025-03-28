import type { Metadata } from "next";
import "./globals.css";
import { myFont } from "@/lib/font";

export const metadata: Metadata = {
  title: "Mirage VNets",
  description: "Mirage Virtual Testnet"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.className}`}>
        <div className="absolute w-[50%] h-[800px] -left-[50px] -top-[900px] bg-[#D461FA] opacity-[0.32] blur-[300px]" />
        <main className="relative z-20">
          {children}
        </main>
      </body>
    </html>
  )
};