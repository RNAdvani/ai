import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ['latin'],weight:['400','500'],variable:"--font-poppins" });

export const metadata: Metadata = {
  title: "Ravian.ai",
  description: "A next generation visual intelligence and data analysis",
  icons:{
    icon:"/icons/ravian.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${poppins.variable} scroll-smooth`}>{children}</body>
    </html>
  );
}
