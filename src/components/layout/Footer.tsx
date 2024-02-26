import Link from "next/link";
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <div className="container flex flex-col items-center gap-4 px-4 md:px-6">
        <nav className="flex items-center space-x-4 text-gray-900 dark:text-gray-100">
          <Link
            className="inline-flex items-center space-x-2 text-sm font-medium transition-colors hover:underline"
            href="mailto: d10543004@ntu.edu.tw"
          >
            
            <Mail strokeWidth={3} className="w-10 h-10" />
            <span className="text-xl ">Contact</span>
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © Chi-Jyun Ko | Last updated on 26 February 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
