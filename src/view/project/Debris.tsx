import React from "react";
// import RaspberryPlot from "./RaspberryPlot";
// import { TEIS_Data } from "@/methods/project";
import { Badge } from "@/components/ui/badge";

// type RaspberryProps = {
//   data: TEIS_Data[];
// };
const Dendrite = (props: any) => {
  const { data } = props;
  return (
  <div>
  <h2 className="text-left text-3xl font-bold pb-4 bg-clip-text text-transparent bg-gradient-to-l from-teal-600 to-teal-700">
  Development of efficient numerical models for two-phase flow.
  </h2>
  <div className="px-4 text-center md:px-6 flex flex-col lg:flex-row items-center">
    <div className="w-full lg:w-1/2">
      <div className="flex flex-col overflow-hidden rounded-2xl mx-auto">
        {/* <RaspberryPlot chartData={data} className="w-full h-[320px]" />
        <div className="aspect-[3/2] overflow-hidden rounded-2xl mx-auto "> */}
        <video controls className="w-full h-[320px] flex-rwo-reverse">
            <source src="/DebrisFlow.mp4" type="audio/mp4" />
            Your browser does not support the audio tag.
        </video>
        {/* </div> */}

        <div className="space-x-2 py-4 flex flex-wrap space-y-2">
          <Badge className="hover:bg-gray-100/80 bg-gray-100 text-teal-600 shadow-md px-4 py-1 text-base">
              C++
          </Badge>
          <Badge className="hover:bg-gray-100/80 bg-gray-100 text-teal-600 shadow-md px-4 py-1 text-base">
          CUDA
          </Badge>

          <Badge className="hover:bg-gray-100/80 bg-gray-100 text-teal-600 shadow-md px-4 py-1 text-base">
          Three.js
          </Badge>

          <Badge className="hover:bg-gray-100/80 bg-gray-100 text-teal-600 shadow-md px-4 py-1 text-base">
          OpenGL
          </Badge>
         
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/2 bg-gray-800/10 text-teal-800 py-10 px-12 mx-4 shadow-xl">
      <div className="text-justify text-base list-none">
        <li>
            Developing a two-phase flow numerical computing model using{" "}
            <span className="font-bold">CUDA</span> to increase program
            efficiency by over <span className="font-bold">100%.</span>
        </li>

        <li className="pt-4">
            Using <span className="font-bold">Three.js</span> to construct
            the program on cloud computing and design the interface,
            enabling the model to be applied in real-world scenarios.
        </li>
        <li className="pt-4">
            
          Constructing an efficient computational program for local execution using <span className="font-bold">OpenGL</span> and <span className="font-bold">CUDA</span>.
        </li>
      </div>
    </div>
  </div>

  <div className="container grid gap-6 px-4 text-center md:px-6 md:grid-cols-2">
   
  </div>
</div>
  );
};

export default Dendrite;
