
//  * v0 by Vercel.
//  * @see https://v0.dev/t/1fvFzyMTtOO
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 

import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function MyEducation() {
  return (
    // <div className="flex flex-col items-center min-h-screen justify-between space-y-4">
    <div className="bg-[#e7e8ea] text-gray-900 flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center space-y-4">
        <a className="flex items-center justify-center" href="#">
          <BatteryIcon className="h-12 w-12 " />
        </a>
        
        <nav className="ml-auto flex gap-4 sm:gap-6 ">
        <Link className="inline-flex items-center space-x-2 text-xl font-medium transition-colors hover:underline" href="/">
        <HomeIcon className="h-10 w-10" />
            Home
          </Link>
         <Link className="inline-flex items-center space-x-2 text-xl font-medium transition-colors hover:underline" href="/project">
         <ServerIcon className="h-10 w-10 " />
            Projects
          </Link>
          <a className="inline-flex items-center space-x-2 text-xl font-medium transition-colors hover:underline" href="/publication">
          <BookOpenIcon className="h-10 w-10" />
            Publications
          </a>
          <a className="inline-flex items-center space-x-2 text-xl font-medium transition-colors hover:underline" href="/education">
          <BookIcon className="h-10 w-10" />
            Education
          </a>
        </nav>
      
      </header>
      <main className="flex-1 container py-12 space-y-12 px-4 md:px-6">
      <div className="px-4 py-6 md:py-12 lg:py-16">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Journal Papers</h1>
        {/* <p className="text-gray-500 dark:text-gray-400">Keep up to date with my latest research.</p> */}
      </div>
      <div className="divide-y divide-gray-100 dark:divide-gray-800">
        <div className="grid items-start gap-4 py-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">
            Using tens of seconds of relaxation voltage to estimate open circuit voltage and state of health of lithium ion batteries
            </h2>
            <p className="text-gray-500 grid gap-1.5 items-center text-lg dark:text-gray-400">
              <span>Applied Energy, 2024</span>
              {/* <span>•</span> */}
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400">
            This paper investigates the estimation of battery Open-Circuit Voltage (OCV) and State of Health (SOH) using partial relaxation voltages.
            </p>
          </div>
          <div className="space-y-2">
          <Link href="https://doi.org/10.1016/j.apenergy.2023.122488">
            <Button type="submit">Read more</Button>
            </Link>
          </div>
        </div>
        <div className="grid items-start gap-4 py-8">
          <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Constructing battery impedance spectroscopy using partial current in constant-voltage charging or partial relaxation voltage
             </h2>
             <p className="text-gray-500 grid gap-1.5 items-center text-lg dark:text-gray-400">
               <span>Applied Energy, 2024</span>
               {/* <span>•</span> */}
             </p>
             <p className="text-lg text-gray-500 dark:text-gray-400">
             This paper explores the use of partial relaxation voltage or constant voltage charging current to estimate the electrochemical impedance spectra(EIS) of steady states.
             </p>
           </div>
           <div className="space-y-2">
           <Link href="https://doi.org/10.1016/j.apenergy.2023.122454">
             <Button type="submit">Read more</Button>
             </Link>
           </div>
        </div>

        <div className="grid items-start gap-4 py-8">
          <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
          Differential current in constant-voltage charging mode: A novel tool for state-of-health and state-of-charge estimation of lithium-ion batteries
             </h2>
             <p className="text-gray-500 grid gap-1.5 items-center text-lg dark:text-gray-400">
               <span>Energy, 2024</span>
               {/* <span>•</span> */}
             </p>
             <p className="text-lg text-gray-500 dark:text-gray-400">
             This paper investigates estimating the charging and health status of batteries using the current curve differentials during constant-voltage charging stages.
             </p>
           </div>
           <div className="space-y-2">
           <Link href="https://doi.org/10.1016/j.energy.2023.129826 ">
             <Button type="submit">Read more</Button>
             </Link>
           </div>
        </div>

        <div className="grid items-start gap-4 py-8">
          <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Influence of inhomogeneity of lithium-ion transport within the anode/electrolyte interface on mossy lithium formation
          </h2>
             <p className="text-gray-500 grid gap-1.5 items-center text-lg dark:text-gray-400">
               <span>Journal of Power Sources, 2023</span>
               {/* <span>•</span> */}
             </p>
             <p className="text-lg text-gray-500 dark:text-gray-400">
             This paper employs phase-field method to investigate the instability analysis of lithium metal battery interfaces and conducts numerical computations using CUDA.
             </p>
           </div>
           <div className="space-y-2">
           <Link href="https://doi.org/10.1016/j.jpowsour.2023.232779">
             <Button type="submit">Read more</Button>
             </Link>
           </div>
        </div>

        <div className="grid items-start gap-4 py-8">
          <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
          Precise prediction of open circuit voltage of lithium ion batteries in a short time period
          </h2>
             <p className="text-gray-500 grid gap-1.5 items-center text-lg dark:text-gray-400">
               <span>Journal of Power Sources, 2023</span>
               {/* <span>•</span> */}
             </p>
             <p className="text-lg text-gray-500 dark:text-gray-400">
             The paper adopts an Equivalent Circuit Model (ECM) to construct the relaxation voltage curve for estimating the open-circuit voltage (OCV) of the battery.
             </p>
           </div>
           <div className="space-y-2">
           <Link href="https://doi.org/10.1016/j.jpowsour.2022.232295">
             <Button type="submit">Read more</Button>
             </Link>
           </div>
        </div>

      </div>
    </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="container flex flex-col items-center gap-4 px-4 md:px-6">
          <nav className="flex items-center space-x-4 text-gray-900 dark:text-gray-100">
            <Link
              className="inline-flex items-center space-x-2 text-sm font-medium transition-colors hover:underline"
              href="#"
            >
              <MailIcon className="w-8 h-8" />
              <span className="text-xl ">
              Contact
              </span>
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
          <p className="text-xs text-gray-500 dark:text-gray-400">© Chi-Jyun Ko | Last updated on 19 February 2024</p>
          </div>
        </div>
      </footer>
      {/* <footer className="border-t py-4">
        <div className="container flex items-center justify-between px-4 md:px-6">
          <ul className="flex gap-4 text-sm font-medium">
            <li>
              <Link className="text-gray-900 dark:text-gray-100" href="#">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link className="text-gray-900 dark:text-gray-100" href="#">
                GitHub
              </Link>
            </li>
            <li>
              <Link className="text-gray-900 dark:text-gray-100" href="#">
                Twitter
              </Link>
            </li>
          </ul>
          <div className="text-sm text-gray-500 dark:text-gray-400">© 2024 Your Name. All rights reserved.</div>
        </div>
      </footer> */}
    </div>
  )
}

function BatteryIcon(props : any) {
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
      <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
      <line x1="22" x2="22" y1="11" y2="13" />
    </svg>
  )
}

function BookIcon(props : any) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}

function BookOpenIcon(props : any) {
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
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


function HomeIcon(props : any) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function MailIcon(props : any) {
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
  )
}


function UserIcon(props : any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function ServerIcon(props : any) {
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
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  )
}