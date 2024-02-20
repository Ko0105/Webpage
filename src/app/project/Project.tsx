
//  * v0 by Vercel.
//  * @see https://v0.dev/t/1fvFzyMTtOO
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 
"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { useEffect, useState } from 'react'
// import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveLine } from "@nivo/line"

export default function MyProject() {
  const [count, setCount] = useState(0)

  const [chartData1, setChartData1] = useState(null);
  const [chartData2, setChartData2] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch('/ChartData.json');
        const response2 = await fetch('/ChartData.json');

        if (!response1.ok || !response2.ok) {
          throw new Error('Failed to fetch data');
        }

        const data1 = await response1.json();
        const data2 = await response2.json();

        setChartData1(data1);
        setChartData2(data2);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
          
            <div className="grid gap-8 lg:gap-12 items-start lg:grid-cols-1">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projects</h1>
                   <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    A collection of my recent projects showcasing my skills and interests.
                  </p>
              <div className="grid md:gap-2 lg:gap-4 xl:gap-8 ">

                <div className="text-left text-2xl font-bold "> • Real-time dynamic state estimation of electric vehicles</div>
                  <div className="aspect-[3/2] overflow-hidden rounded-2xl w-3/6  mx-auto ">
                  <LineChart chartData={chartData1} className="bject-cover w-full h-full rounded-lg" />
                  </div>
                  
                  <br></br>
                  <div className="lg:grid-cols-1 ">
                    <div className="text-justify text-xl  ml-4">
                      <li >Utilizing the <span className="font-bold">least squares method</span> and <span className="font-bold">Kalman filter</span> for estimating the dynamic charging status of electric vehicles in real-world scenarios.</li>
                      <li >Using the <span className="font-bold">Dynamic Time Warping (DTW)</span> algorithm to synchronize voltage and current measurements in asynchronous data.</li>
                    </div>
                    <div>
                      <br></br>
                      <div className="grid gap-1">
                        <h3 className="text-2xl font-bold">Technologies</h3>
                        <p className="text-xl ml-4">Kalman filter, Least squares method, Python</p>
                      </div>
                  
                      <div className="grid gap-1">
                        <h3 className="text-2xl font-semibold">Impact</h3>
                        <p className="text-justify text-xl  ml-4">This project helped me understand the theory of the Kalman filter and apply it to real-world electric vehicle charging scenarios.</p>
                      </div>
                    </div>
                  
                  </div>
                  {/* divide-y-4 divide-yellow-600 divide-dashed */}
                  
                  <div >
                  
                    <div className="text-left text-2xl font-bold  "> • Device for estimating the state of lithium-ion batteries</div>
                    <div className="aspect-[3/2] overflow-hidden rounded-2xl w-3/6  mx-auto ">
                    <LineChart chartData={chartData1} className="bject-cover w-full h-full rounded-lg" />
                    {/* <div>
                      {chartData && (
                        <pre>{JSON.stringify(chartData, null, 2)}</pre>
                      )}
                    </div> */}
      
                    </div>
                    <br></br>
                    <div className="">
                    
                      <div className="text-justify text-xl  ml-4">
                        <li>Using the CN0510 to generate an alternating current signal and applying partial EIS curves for  <span className="font-bold">lithium-ion battery classification.</span></li>
                        <li>Combining Arduino with Raspberry Pi to estimate the health status of lithium-ion batteries using 3 minutes of partial discharge curve data.</li>
                      </div>

                    <div>
                        <br></br>
                        <div className="grid gap-1">
                          <h3 className="text-2xl font-bold">Technologies</h3>
                          <p className="text-xl ml-4">Arduino, Raspberry Pi, Ｃ, CN0510</p>
                        </div>
                        <div className="grid gap-1">
                          <h3 className="text-2xl font-semibold">Impact</h3>
                          <p className="text-xl ml-4">This project helped me understand the application of the development board and combine software with hardware.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div >
                  
                  <div className="text-left text-2xl font-bold  "> • Application of Equivalent Circuit Model (ECM) for battery state analysis</div>
                  <div className="aspect-[3/2] overflow-hidden rounded-2xl w-3/6  mx-auto ">
                  <LineChart chartData={chartData1} className="bject-cover w-full h-full rounded-lg" />
    
                  </div>
                  <br></br>
                  <div className="">
                  
                    <div className="text-justify text-xl  ml-4">
                      <li>Analyzing <span className="font-bold">internal short circuits</span> under dynamic discharge conditions using ECM parameters.</li>
                      <li>Constructing an algorithm using the ECM to estimate battery OCV, resulting in a significant  <span className="font-bold">reduction of 97% in OCV acquisition time.</span></li>
                      <li>Applying the developed algorithm to real electric vehicle data, achieving an accurate estimation of the electric vehicle charging status with an  <span className="font-bold">error of less than 2%.</span></li>
                    </div>

                  <div>
                      <br></br>
                      <div className="grid gap-1">
                        <h3 className="text-2xl font-bold">Technologies</h3>
                        <p className="text-xl ml-4">Python, Least squares method</p>
                      </div>
                      <div className="grid gap-1">
                        <h3 className="text-2xl font-semibold">Impact</h3>
                        <p className="text-xl ml-4">This project helped me understand the application of ECM in real-world scenarios and the analysis of battery safety.</p>
                      </div>
                    </div>
                  </div>
                </div>

                </div>
                <div>
                
                <br></br>
                <div >
                  
                  <div className="text-left text-2xl font-bold  "> • Analysis of lithium metal battery interfaces</div>
                  <div className="aspect-[3/2] overflow-hidden rounded-2xl w-3/6  mx-auto ">
                  <LineChart chartData={chartData1} className="bject-cover w-full h-full rounded-lg" />
    
                  </div>
                  <br></br>
                  <div className="">
                  
                    <div className="text-justify text-xl  ml-4">
                      <li>Constructing a program using <span className="font-bold">CUDA</span> to simulate the internal structure of lithium metal batteries for <span className="font-bold">GPU computing.</span></li>
                      <li>Analyzing the mechanisms causing <span className="font-bold">instability on the surface</span> of lithium metal batteries.</li>
                      
                    </div>

                  <div>
                      <br></br>
                      <div className="grid gap-1">
                        <h3 className="text-2xl font-bold">Technologies</h3>
                        <p className="text-xl ml-4">C++, CUDA</p>
                      </div>
                      <div className="grid gap-1">
                        <h3 className="text-2xl font-semibold">Impact</h3>
                        <p className="text-xl ml-4">This project helped me understand the interface characteristics of lithium metal batteries and construct efficient programs using CUDA to increase computational efficiency.</p>
                      </div>
                    </div>
                  </div>
                </div>
                  <br></br>
                <div >
                  
                  <div className="text-left text-2xl font-bold  "> • Development of efficient numerical models for two-phase flow.</div>
                  <div className="aspect-[3/2] overflow-hidden rounded-lg w-3/6  mx-auto ">
                  {/* <LineChart chartData={chartData1} className="bject-cover w-full h-full rounded-lg" /> */}
                  <video controls>
                     <source src="/DebrisFlow.mp4" type="audio/mp4" />
                    Your browser does not support the audio tag.
                  </video>
                  </div>
                  <br></br>
                  <div className="">
                  
                    <div className="text-justify text-xl  ml-4">
                      <li>Developing a two-phase flow numerical computing model using <span className="font-bold">CUDA</span> to increase program efficiency by over <span className="font-bold">100%.</span></li>
                      <li>Combining <span className="font-bold">Message passing interface (MPI)</span> with CUDA for  <span className="font-bold">multi-GPU</span> computation to remove memory limitations imposed by a single GPU.</li>
                      <li>Using <span className="font-bold">Three.js</span> to construct the program on cloud computing and design the interface, enabling the model to be applied in real-world scenarios.</li>
                      
                    </div>

                  <div>
                      <br></br>
                      <div className="grid gap-1">
                        <h3 className="text-2xl font-bold">Technologies</h3>
                        <p className="text-xl ml-4">C++, CUDA, Three.js, MPI</p>
                      </div>
                      <div className="grid gap-1">
                        <h3 className="text-2xl font-semibold">Impact</h3>
                        <p className="text-xl ml-4">
                          This project helped me understand using CUDA to improve computational efficiency and showcasing results on the cloud with Three.js.</p>
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

function LineChart(props: any) {
  const { chartData, className } = props; 

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={className}>
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
  );
}