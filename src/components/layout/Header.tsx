"use client";
import Link from "next/link";
import { Home } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { Book } from "lucide-react";
import { Database } from "lucide-react";
import { BatteryFull } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navList = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/project" },
  { name: "Publications", href: "/publication" },
  { name: "Education", href: "/education" },
];
const Header = () => {
  const pathname = usePathname();

  return (
    <header className="justify-between px-4 flex items-center md:px-12 lg:px-20 bg-[#F8FAFC] shadow-md shadow-gray-200 sticky top-0 z-10">
      <Link className="flex items-center justify-center" href="/">
        <BatteryFull strokeWidth={3} className="h-12 w-12" />
      </Link>
      <nav className="flex items-center ml-auto">
        {navList.map((item) => {
          return (
            <Link
              key={item.name}
              className={cn(
                "py-4 md:py-6 mx-1 px-4 text-center transition-colors duration-300 ease-in-out hover:underline text-gray-400 hover:text-gray-500",
                { "text-gray-900": item.href === pathname },
              )}
              href={item.href}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
