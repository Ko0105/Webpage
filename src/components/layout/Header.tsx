"use client";
import Link from "next/link";
import { Home } from 'lucide-react';
import { BookOpenText } from 'lucide-react';
import { Book } from 'lucide-react';
import { Database } from 'lucide-react';
import { BatteryFull } from 'lucide-react';

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center space-y-4">
      <Link className="flex items-center justify-center" href="#">
        <BatteryFull strokeWidth={3} className="h-12 w-12 " />

      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 ">
        <Link
          className="inline-flex items-center space-x-2 text-xl font-medium transition-colors hover:underline"
          href="/"
        >
          <Home strokeWidth={3} className="h-12 w-12 "  />
          Home
        </Link>
        <Link
          className="inline-flex items-center space-x-2 text-xl font-medium transition-colors hover:underline"
          href="/project"
        >
          <Database strokeWidth={3} className="h-12 w-12 " />
          Projects
        </Link>
        <Link
          className="inline-flex items-center space-x-2 text-xl font-medium transition-colors hover:underline"
          href="/publication"
        >
          <BookOpenText strokeWidth={3} className="h-12 w-12" />
          Publications
        </Link>
        <Link
          className="inline-flex items-center space-x-2 text-xl font-medium transition-colors hover:underline"
          href="/education"
        >
          <Book strokeWidth={3} className="h-12 w-12" />
          Education
        </Link>
      </nav>
    </header>
  );
};

export default Header;
