
//  * v0 by Vercel.
//  * @see https://v0.dev/t/1fvFzyMTtOO
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 

// import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MyProfile() {
  return (
    <div className="bg-[#e7e8ea] text-gray-900">
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <BatteryIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Projects
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Experience
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </nav>
      </header>
      <main className="px-4 py-6 space-y-6 md:space-y-8 lg:py-12 lg:space-y-10">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Hi, I'm John Doe</h1>
            <img alt="John Doe" className="h-40 w-40 rounded-full" src="/placeholder.svg" />
            <p className="max-w-[600px] text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
              I'm a passionate developer who loves creating web experiences.
            </p>
          </div>
          <div className="mx-auto max-w-sm space-y-2">
            <form className="flex space-x-2">
              {/* <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" /> */}
              <Button type="submit">Sign Up</Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Sign up to get notified when we launch.
              <a className="underline underline-offset-2" href="#">
                Terms & Conditions
              </a>
            </p>
          </div>
        </div>
        <div className="container grid gap-6 px-4 text-center md:px-6 md:grid-cols-2">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/relaxed lg:text-4xl/relaxed">
              Skills
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Let your team focus on shipping features instead of managing infrastructure with automated CI/CD.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/relaxed lg:text-4xl/relaxed">
              Experience
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Let your team focus on shipping features instead of managing infrastructure with automated CI/CD.
            </p>
          </div>
        </div>
        <div className="container grid gap-6 px-4 text-center md:px-6 md:grid-cols-2">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/relaxed lg:text-4xl/relaxed">
              Education
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Let your team focus on shipping features instead of managing infrastructure with automated CI/CD.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/relaxed lg:text-4xl/relaxed">
              Projects
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Let your team focus on shipping features instead of managing infrastructure with automated CI/CD.
            </p>
          </div>
        </div>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the workflow the best frontend teams love.
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let your team focus on shipping features instead of managing infrastructure with automated CI/CD.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                {/* <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" /> */}
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <a className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
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

