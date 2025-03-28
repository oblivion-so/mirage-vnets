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
        <div className="absolute w-[600px] h-[600px] left-[-320px] top-[-190px] bg-[#D461FA] opacity-[0.32] blur-[300px]" />
        <main className="max-w-7xl mx-auto">
          {children}
        </main>
        <div className="absolute w-[450px] h-[380px] right-[0px] bottom-[0px] bg-[#D461FA] opacity-[0.50] blur-[300px]" />
      </body>
    </html>
  )
};