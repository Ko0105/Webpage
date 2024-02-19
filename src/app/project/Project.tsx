
//  * v0 by Vercel.
//  * @see https://v0.dev/t/1fvFzyMTtOO
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 
"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { useState } from 'react'
// import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveLine } from "@nivo/line"
// import chartData from '../../../public/chartData.json'

export default function MyProject() {
  const [count, setCount] = useState(0)
  return (
    // <div className="flex flex-col items-center min-h-screen justify-between space-y-4">
    <div className="bg-[#e7e8ea] text-gray-900 flex flex-col min-h-[100dvh]">
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
      {/* <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  A collection of my recent projects showcasing my skills and interests.
      </p> */}
        <main className="container py-12 space-y-12 px-4 md:px-6">
          
        
            <div className="grid gap-8 lg:gap-12 items-start lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projects</h1>
                   <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    A collection of my recent projects showcasing my skills and interests.
                  </p>
              <div className="grid gap-1 md:gap-2 lg:gap-4 xl:gap-8 items-start justify-center">
               
                <div className="text-left text-2xl font-bold ">Estimation of electric vehicle charging status</div>
                  <div className="aspect-[4/3] overflow-hidden rounded-lg w-3/6">
                  {/* <LineChart className="bject-cover w-full h-full  rounded-lg " /> */}
                  </div>
                  <br></br>
                  <div className="max-w-3xl">
                    <div>
                      <div className="text-left text-xl ">Real-time estimation of dynamic charging status of electric vehicles.</div>
                    </div>
                    <div>
                      <br></br>
                      <div className="grid gap-1">
                        <h3 className="text-2xl font-bold">Technologies</h3>
                        <p className="text-xl">Kalman filter, Least squares method, Python</p>
                      </div>
                      <div className="grid gap-1">
                        <h3 className="text-2xl font-semibold">Impact</h3>
                        <p className="text-xl">This project helped me understand the theory of Kalman filter and demonstrate its practical applications.</p>
                      </div>
                    </div>
                  </div>
        
                  <div className="">
                    <div className="text-left text-2xl font-bold  ">Device for estimating the state of lithium-ion batteries</div>
                    <div className="aspect-[4/3] overflow-hidden rounded-lg w-3/6">
                    {/* <LineChart className="bject-cover w-full h-full  rounded-lg " /> */}
                    </div>
                    <br></br>
                    <div className="max-w-3xl">
                      <div>
                        <div className="text-left text-xl ">Construct hardware devices for battery health estimation.</div>
                      </div>
                      <div>
                        <br></br>
                        <div className="grid gap-1">
                          <h3 className="text-2xl font-bold">Technologies</h3>
                          <p className="text-xl">Arduino, Raspberry Pi, Ｃ, Development board</p>
                        </div>
                        <div className="grid gap-1">
                          <h3 className="text-2xl font-semibold">Impact</h3>
                          <p className="text-xl">This project helped me understand the application of the development board and combine software with hardware.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div>
                  
                  
                  
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
          // { id: "Mobile", data: chartData.mobile }
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
