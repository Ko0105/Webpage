
//  * v0 by Vercel.
//  * @see https://v0.dev/t/1fvFzyMTtOO
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 
// import Link from "next/link"
import { Button } from "@/components/ui/button"
import '../index.css'

const MyProfile = () =>{
  return (
    <>
      <div className="bg-[#4b5563] text-white">
      <header className="flex justify-between items-center py-4 px-8">
        <div className="flex items-center space-x-4">
          <nav className="flex space-x-4">
            <a className="hover:underline" href="#">
              About Me
            </a>
            <a className="hover:underline" href="#">
              Portfolio
            </a>
            <a className="hover:underline" href="#">
              Contact
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <a className="hover:underline" href="#">
            Log in
          </a>
          <Button className="bg-green-700 hover:bg-green-800">Hire Me</Button>
        </div>
      </header>
      <main>
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Personal Website</h1>
          <p className="text-xl mb-8">Explore my work and get in touch for collaborations.</p>
          <Button className="bg-green-700 hover:bg-green-800">View Portfolio</Button>
        </section>
        <section className="py-20">
          <div className="text-center">
            {/* <Heading1Icon className="mx-auto mb-4" /> */}
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg mb-8">Learn more about my background and skills.</p>
          </div>
        </section>
        <section className="py-20">
          <div className="text-center">
            {/* <Users2Icon className="mx-auto mb-4" /> */}
            <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
            <p className="text-lg mb-8">Explore my projects and creations.</p>
          </div>
        </section>
        <section className="py-20">
          <div className="text-center">
            {/* <Heading3Icon className="mx-auto mb-4" /> */}
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <p className="text-lg mb-8">Get in touch for collaborations and inquiries.</p>
          </div>
        </section>
        <section className="py-20 grid grid-cols-4 gap-4">
          <div className="bg-[#2d3748] p-4 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Skills</h3>
            <p className="text-sm mb-4">Discover the technologies I work with.</p>
            <a className="text-green-600 hover:underline" href="#">
              View more
            </a>
          </div>
          <div className="bg-[#2d3748] p-4 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Projects</h3>
            <p className="text-sm mb-4">Explore my latest projects and creations.</p>
            <a className="text-green-600 hover:underline" href="#">
              View more
            </a>
          </div>
          <div className="bg-[#2d3748] p-4 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Experience</h3>
            <p className="text-sm mb-4">Learn about my professional journey.</p>
            <a className="text-green-600 hover:underline" href="#">
              View more
            </a>
          </div>
          <div className="bg-[#2d3748] p-4 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">and more...</h3>
            <p className="text-sm mb-4">Discover all the aspects of my work and expertise.</p>
            <a className="text-green-600 hover:underline" href="#">
              View more
            </a>
          </div>
        </section>
        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-8">Get to Know Me Better</h2>
          <p className="text-lg text-center mb-8">Explore my skills, projects, and experiences.</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#2d3748] p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Skills Showcase</h3>
              <p className="text-sm mb-4">Discover the technologies I excel in.</p>
              <a className="text-green-600 hover:underline" href="#">
                View more
              </a>
            </div>
            <div className="bg-[#2d3748] p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Projects Gallery</h3>
              <p className="text-sm mb-4">Explore my latest projects and creations.</p>
              <a className="text-green-600 hover:underline" href="#">
                View more
              </a>
            </div>
            <div className="bg-[#2d3748] p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Professional Journey</h3>
              <p className="text-sm mb-4">Learn about my career path and experiences.</p>
              <a className="text-green-600 hover:underline" href="#">
                View more
              </a>
            </div>
            <div className="bg-[#2d3748] p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Collaboration Opportunities</h3>
              <p className="text-sm mb-4">Interested in working together? Let's connect.</p>
              <a className="text-green-600 hover:underline" href="#">
                Get in Touch
              </a>
            </div>
          </div>
        </section>
        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
          <a className="text-green-600 hover:underline block text-center mb-8" href="#">
            Read what others say about working with me →
          </a>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#2d3748] p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Client Satisfaction</h3>
              <p className="text-sm mb-4">Discover why clients love working with me.</p>
            </div>
            <div className="bg-[#2d3748] p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Project Success</h3>
              <p className="text-sm mb-4">See how my projects have made an impact.</p>
            </div>
            <div className="bg-[#2d3748] p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Professionalism</h3>
              <p className="text-sm mb-4">Learn about my dedication to professionalism.</p>
            </div>
            <div className="bg-[#2d3748] p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Client Testimonials</h3>
              <p className="text-sm mb-4">Read what clients have to say about our collaborations.</p>
            </div>
            <div className="bg-[#2d3748] p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Success Stories</h3>
              <p className="text-sm mb-4">Explore success stories from my projects.</p>
            </div>
            <div className="bg-[#2d3748] p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Positive Feedback</h3>
              <p className="text-sm mb-4">Discover the positive feedback received from clients.</p>
            </div>
          </div>
        </section>
        <section className="py-20 bg-green-700 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Create Something Amazing Together</h2>
          <p className="text-lg mb-8">Reach out to start a new project or collaboration.</p>
          <Button className="bg-green-800 hover:bg-green-900">Get in Touch</Button>
        </section>
      </main>
      <footer className="py-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            {/* <FlagIcon className="h-8 w-8 mb-4" /> */}
            <p className="text-sm">© Your Name 2024. All rights reserved.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-2">About Me</h3>
              <nav className="flex flex-col space-y-1">
                <a className="hover:underline text-sm" href="#">
                  About
                </a>
                <a className="hover:underline text-sm" href="#">
                  Portfolio
                </a>
                <a className="hover:underline text-sm" href="#">
                  Contact
                </a>
              </nav>
            </div>
            <div>
              <h3 className="font-bold mb-2">Social</h3>
              <nav className="flex flex-col space-y-1">
                <a className="hover:underline text-sm" href="#">
                  aedIn
                </a>
                <a className="hover:underline text-sm" href="#">
                  GitHub
                </a>
                <a className="hover:underline text-sm" href="#">
                  Twitter
                </a>
              </nav>
            </div>
            <div>
              <h3 className="font-bold mb-2">Legal</h3>
              <nav className="flex flex-col space-y-1">
                <a className="hover:underline text-sm" href="#">
                  Terms of Service
                </a>
                <a className="hover:underline text-sm" href="#">
                  Privacy Policy
                </a>
                <a className="hover:underline text-sm" href="#">
                  Cookies Policy
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
)
};

// function FlagIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
//       <line x1="4" x2="4" y1="22" y2="15" />
//     </svg>
//   )
// }

export default MyProfile;

