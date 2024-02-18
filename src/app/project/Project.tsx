
//  * v0 by Vercel.
//  * @see https://v0.dev/t/1fvFzyMTtOO
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 
"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { useState } from 'react'
// import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveLine } from "@nivo/line"
import chartData from './chartData.json'

export default function MyProject() {
  const [count, setCount] = useState(0)
  return (
    // <div className="flex flex-col items-center min-h-screen justify-between space-y-4">
    <div className="bg-[#e7e8ea] text-gray-900">
      <div className="w-full">
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
        <main className="py-8 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:gap-12 items-start lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  A collection of my recent projects showcasing my skills and interests.
                </p>
              </div>
              <div className="flex items-start justify-start">
                <div className="grid gap-1">
                  <h2 className="text-xl font-semibold cursor-pointer hover:underline">Project 1</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description of project 1. It does something really cool.
                  </p>
                  {/* <GroupedbarChart className="aspect-[4/3]" /> */}
                  <LineChart className="aspect-[4/3]" />
                </div>
              </div>
            </div>
            <div className="grid gap-1 md:gap-2 lg:gap-4 xl:gap-8 items-start justify-center">
              <div>
                <div className="aspect-[1/1] overflow-hidden rounded-lg w-[100px]">
                  <img
                    alt="Project 1"
                    className="object-cover w-full h-full aspect-[1/1] rounded-lg"
                    height={200}
                    src="/placeholder.svg"
                    width={200}
                  />
                </div>
                <div className="max-w-3xl">
                  <div>
                    <div>Project 1</div>
                    <div>Description of project 1. It does something really cool.</div>
                  </div>
                  <div>
                    <div className="grid gap-1">
                      <h3 className="text-lg font-semibold">Technologies</h3>
                      <p>Next.js, Tailwind CSS, Vercel</p>
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-lg font-semibold">Impact</h3>
                      <p>This project helped me understand the power of building with components.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </main>
        <footer className="flex-shrink-0 bg-gray-100 border-t border-gray-200 py-4 dark:bg-gray-800 dark:border-gray-800 dark:border-t dark:text-gray-50">
          <div className="container flex items-center justify-between px-4 md:px-6 space-x-4 text-sm">
            <div className="flex gap-2">
              <a className="text-gray-500 hover:underline dark:text-gray-400 dark:hover:underline" href="#">
                Twitter
              </a>
              <a className="text-gray-500 hover:underline dark:text-gray-400 dark:hover:underline" href="#">
                GitHub
              </a>
            </div>
            <div className="text-gray-500 dark:text-gray-400">© 2023 Your Name</div>
          </div>
        </footer>
      </div>
    </div>
  )
}

function BatteryIcon(props) {
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

function BookIcon(props) {
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

function BookOpenIcon(props) {
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


function HomeIcon(props) {
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


function MailIcon(props) {
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


function UserIcon(props) {
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

function ServerIcon(props) {
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


function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          { id: "Desktop", data: chartData.desktop },
          { id: "Mobile", data: chartData.mobile }
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}
