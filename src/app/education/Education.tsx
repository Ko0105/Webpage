
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
      <main className="flex-1">
        <div className="container py-12 space-y-12 px-4 md:px-6">
          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Education</h2>
            </div>
            <div className="space-y-2">
              <div className="space-y-1">
                <h3 className="text-xl "><span>• </span><span className="font-bold">Phd student</span> of Applied Mechanics</h3>
                <p className="text-xl text-gray-500 dark:text-gray-400">National Taiwan University (2021-now)</p>
              </div>
              <p className="text-base leading-loose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Studying the state of lithium-ion batteries, machine learning, and GPU computing.
              </p>
              <br></br>
              <div className="space-y-1">
                <h3 className="text-xl "><span>• </span><span className="font-bold">Master</span> of Hydraulic and Ocean Engineering</h3>
                <p className="text-xl text-gray-500 dark:text-gray-400">National Cheng Kung University (2019-2021)</p>
              </div>
              <p className="text-base leading-loose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Studying real-time disaster warning systems, Three.js for cloud-based 3D visualization, and GPU computing.
              </p>
              <br></br>
              <div className="space-y-1">
                <h3 className="text-xl "><span>• </span><span className="font-bold">Bachelor</span> of Hydraulic and Ocean Engineering</h3>
                <p className="text-xl text-gray-500 dark:text-gray-400">National Cheng Kung University (2015-2019)</p>
              </div>
              <p className="text-base leading-loose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Receiving book awards and being admitted to the graduate program with excellent academic performance.
              </p>
            </div>
            
          </section>
          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Work Experience</h2>
            </div>
            <div className="space-y-2">
              <div className="space-y-1">
                <h3 className="text-2xl "><span className="font-bold">TA</span></h3>

                <p className=" text-xl text-gray-500 dark:text-gray-400"><span className="font-bold">• Elastic mechanics </span> [Sep. 2022 - June. 2023], National Cheng Kung University</p>
                <p className=" text-xl text-gray-500 dark:text-gray-400"><span className="font-bold">• Engineering statistics </span> [Feb. 2020 - June. 2020], National Cheng Kung University</p>
                <p className=" text-xl text-gray-500 dark:text-gray-400"><span className="font-bold">• Computational hydraulics</span> [Sep. 2019 - Jan. 2020], National Cheng Kung University</p>
                <p className=" text-xl text-gray-500 dark:text-gray-400"><span className="font-bold">• Fluid mechanics </span> [Feb. 2019 - June. 2019], National Cheng Kung University</p>
              </div>
            </div>
          </section>
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