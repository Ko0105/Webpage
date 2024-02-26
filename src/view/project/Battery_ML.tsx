import React from "react";
// import RaspberryPlot from "./RaspberryPlot";
// import { TEIS_Data } from "@/methods/project";
import { Badge } from "@/components/ui/badge";

// type RaspberryProps = {
//   data: TEIS_Data[];
// };
const Battery_ML = (props: any) => {
//   const { data } = props;
  return (
  <div>
  <h2 className="text-left text-3xl font-bold pb-4 bg-clip-text text-transparent bg-gradient-to-l from-teal-600 to-teal-700">
  Battery state analysis applying Machine Learning
  </h2>
  <div className="px-4 text-center md:px-6 flex flex-col lg:flex-row items-center">
    <div className="w-full lg:w-1/2">
      <div className="flex flex-col overflow-hidden rounded-2xl mx-auto">
      <img
            alt="Device"
            className="mx-12 object-fit rounded-xl shadow-xl"
            src="/CV_ML.jpg"
            width="500"
          />

        <div className="space-x-2 py-4 flex flex-wrap space-y-2">
          <Badge className="hover:bg-gray-100/80 bg-gray-100 text-teal-600 shadow-md px-4 py-1 text-base">
             ML
          </Badge>
          <Badge className="hover:bg-gray-100/80 bg-gray-100 text-teal-600 shadow-md px-4 py-1 text-base">
          Python
          </Badge>
          <Badge className="hover:bg-gray-100/80 bg-gray-100 text-teal-600 shadow-md px-4 py-1 text-base">
          Pytorch
          </Badge>
          <Badge className="hover:bg-gray-100/80 bg-gray-100 text-teal-600 shadow-md px-4 py-1 text-base">
          GPU
          </Badge>
         
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/2 bg-gray-800/10 text-teal-800 py-10 px-12 mx-4 shadow-xl">
      <div className="text-justify text-base list-none">
      <li>
        Estimating SOC and SOH of Lithium-ion batteries using  <span className="font-bold">Machine Learning</span>.
        </li>
        <li className="pt-4">
        Estimating battery state using only  <span className="font-bold">30 seconds</span> relaxation voltage or constant voltage charging current.
        </li>
        <li className="pt-4">
        Analyzing the relationship between constant voltage charging current signals and SOH using  <span className="font-bold">Attention Matrix</span>.
        </li>

      </div>
    </div>
  </div>

  <div className="container grid gap-6 px-4 text-center md:px-6 md:grid-cols-2">
   
  </div>
</div>
  );
};

export default Battery_ML;
