import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <div className="container flex flex-col items-center gap-4 px-4 md:px-6">
        <nav className="flex items-center space-x-4 text-gray-900 dark:text-gray-100">
          <Link
            className="inline-flex items-center space-x-2 text-sm font-medium transition-colors hover:underline"
            href="#"
          >
            <MailIcon className="w-8 h-8" />
            <span className="text-xl ">Contact</span>
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © Chi-Jyun Ko | Last updated on 19 February 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
