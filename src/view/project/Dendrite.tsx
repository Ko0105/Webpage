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
  Analysis of lithium metal battery interfaces using CUDA
  </h2>
  <div className="px-4 text-center md:px-6 flex flex-col lg:flex-row items-center">
    <div className="w-full lg:w-1/2">
      <div className="flex flex-col overflow-hidden rounded-2xl mx-auto">
        {/* <RaspberryPlot chartData={data} className="w-full h-[320px]" />
        <div className="aspect-[3/2] overflow-hidden rounded-2xl mx-auto "> */}
        <video controls className="w-full h-[320px]">
            <source src="/PhaseField.mov" type="audio/mp4" />
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
          MPI
          </Badge>
         
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/2 bg-gray-800/10 text-teal-800 py-10 px-12 mx-4 shadow-xl">
      <div className="text-justify text-base list-none">
      <li>
            Constructing a program using{" "}
            <span className="font-bold">CUDA</span> to simulate the
            internal structure of lithium metal batteries for{" "}
            <span className="font-bold">GPU computing.</span>
        </li>
        <li className="pt-4">
            Analyzing the mechanisms causing{" "}
            <span className="font-bold">instability on the surface</span>{" "}
            of lithium metal batteries.
        </li>
        <li className="pt-4">
            Combining{" "}
            <span className="font-bold">
            Message passing interface (MPI)
            </span>{" "}
            with CUDA for <span className="font-bold">multi-GPU</span>{" "}
            computation to increase computational efficiency and reduce memory constraints
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
