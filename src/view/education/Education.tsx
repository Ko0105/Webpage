//  * v0 by Vercel.
//  * @see https://v0.dev/t/1fvFzyMTtOO
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app

import Edu from "./Edu";
import Experience from "./Experience";
import Timeline from "./Timeline";

export default function MyEducation() {
  return (
    <div className="container px-8 md:px-16 lg:px-24 flex flex-col space-y-2 pb-6">
      <Edu />
      <Experience />
      {/* <Timeline />  */}
    </div>
  );
}
