import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chi-Jyun Ko",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "bg-gradient-to-br from-[#F8FAFC] to-[#f4f8fd] font-sans text-gray-900",
        )}
      >
        {/**<div className="bg-gradient-to-r from-[#F8FAFC] to-[#f4f8fd] font-sans text-gray-900"> */}
        <div className="">
          {/* <div className="bg-[#F8FAFC] font-sans text-gray-900"> */}

          <div className="flex flex-col min-h-[100dvh]">
            <Header />
            <main className="py-6 lg:py-10">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
