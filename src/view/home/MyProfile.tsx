//  * v0 by Vercel.
//  * @see https://v0.dev/t/1fvFzyMTtOO
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
import Link from "next/link";

export default function MyProfile() {
  return (
    <main className="px-4 py-6 space-y-6 md:space-y-8 lg:py-12 lg:space-y-10">
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Chi-Jyun Ko
        </h1>
        <h2 className="font-bold racking-tighter sm:text-2xl">
          Third-year PhD student at National Taiwan University
        </h2>
        <div className="max-w-4xl mx-auto my-12 p-8shadow-lg">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2 space-y-6">
              <h2 className="text-2xl font-bold">Research Topic</h2>
              <div className="text-xl text-justify">
                Lithium-ion battery, Lithium Dendrite, GPU Computing, and
                Machine Learning
              </div>
              <h2 className="text-2xl font-bold">Short Biography</h2>
              <div className="text-xl text-justify">
                I am a third-year Ph.D. student at the Institute of Applied
                Mechanics at National Taiwan University. My research interests
                focus on analyzing Lithium-ion batteries with Machine Learning
                and simulating lithium dendrite using C++ and CUDA. During my
                Ph.D. studies, I have published{" "}
                <span className="font-bold">four top-tier journals</span>, all
                as the <span className="font-bold">first author</span>.
                Recently, I collaborated with the Industrial Technology Research
                Institute (ITRI) to draft a patent based on our research
                findings. My recent work focus has been on implementing the
                battery state detection algorithm we developed into practical
                devices using development boards.
              </div>
            </div>
            <div>
              <img
                alt="PersonalPhotor"
                // className="rounded-lg shadow-xl"
                height="250"
                src="/PersonalPhoto.jpg"
                style={{
                  aspectRatio: "230/300",
                  objectFit: "cover",
                }}
                width="200"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container grid gap-6 px-4 text-center md:px-6 md:grid-cols-2">
        <div className="space-y-2">
          <h2 className="text-left text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/relaxed lg:text-4xl/relaxed">
            Skills
          </h2>
          <div className="font-bold text-left mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            <li>Numerical Simulation : C++, CUDA, MPI</li>
            <li>Mchine Learning : Python, Pytorch, Tensorflow</li>
            <li>Web development : TypeScript, Three.js</li>
            <li>Tool : Git, Docker</li>
            <li>OS : Windows, Linux, MaxOS</li>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-left text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/relaxed lg:text-4xl/relaxed">
            Projects
          </h2>
          <div className="font-bold text-left mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            <li>Estimation of electric vehicle charging status</li>
            <li>Device for estimating the state of lithium-ion batteries</li>
            <Link href="/project">more...</Link>
          </div>
        </div>
      </div>
      <div className="container grid gap-6 px-4 text-center md:px-6 md:grid-cols-2">
        <div className="space-y-2">
          <h2 className="text-left  text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/relaxed lg:text-4xl/relaxed">
            Publications
          </h2>
          <div className="font-bold text-justify  mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            <Link href="https://doi.org/10.1016/j.apenergy.2023.122454">
              <li>
                Constructing battery impedance spectroscopy using partial
                current in constant-voltage charging or partial relaxation
                voltage.
              </li>
            </Link>
            <Link href="https://doi.org/10.1016/j.jpowsour.2023.232779">
              <li>
                Influence of inhomogeneity of lithium-ion transport within the
                anode/electrolyte interface on mossy lithium formation.
              </li>
            </Link>

            <Link href="/publication">more...</Link>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-left  text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/relaxed lg:text-4xl/relaxed">
            Education
          </h2>
          <div className="text-left mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            <li>
              <span className="font-bold">Phd student</span> of Applied
              Mechanics, National Taiwan University
            </li>
            <li>
              <span className="font-bold">Master</span> of Hydraulic and Ocean
              Engineering, National Cheng Kung University
            </li>
            <li>
              <span className="font-bold">Bachelor</span> of Hydraulic and Ocean
              Engineering, National Cheng Kung University
            </li>
          </div>
        </div>
      </div>
    </main>
  );
}

function BatteryIcon(props: any) {
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
  );
}

function BookIcon(props: any) {
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
  );
}

function BookOpenIcon(props: any) {
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
  );
}

function HomeIcon(props: any) {
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
  );
}

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

function UserIcon(props: any) {
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
  );
}

function ServerIcon(props: any) {
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
  );
}
