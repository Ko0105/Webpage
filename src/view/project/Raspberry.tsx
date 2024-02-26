import React from "react";
import RaspberryPlot from "./RaspberryPlot";
import { TEIS_Data } from "@/methods/project";
import { Badge } from "@/components/ui/badge";

type RaspberryProps = {
  data: TEIS_Data[];
};
const Raspberry = (props: RaspberryProps) => {
  const { data } = props;
  return (
  <div>
  <h2 className="text-left text-3xl font-bold pb-4 bg-clip-text text-transparent bg-gradient-to-l from-teal-600 to-teal-700">
  Device for estimating the state of lithium-ion batteries
  </h2>
  <div className="px-4 text-center md:px-6 flex flex-col lg:flex-row items-center">
    <div className="w-full lg:w-1/2">
      <div className="flex flex-col overflow-hidden rounded-2xl mx-auto">
        {/* <RaspberryPlot chartData={data} className="w-full h-[320px]" /> */}
        <img
            alt="Device"
            className="mx-12 object-fit rounded-xl shadow-xl"
            src="/Device.jpg"
            width="auto"
          />

        <div className="space-x-2 py-4 flex flex-wrap space-y-2">
          <Badge className="hover:bg-gray-100/80 bg-gray-100 text-teal-600 shadow-md px-4 py-1 text-base">
            Arduino
          </Badge>
          <Badge className="hover:bg-gray-100/80 bg-gray-100 text-teal-600 shadow-md px-4 py-1 text-base">
          Raspberry Pi
          </Badge>
          <Badge className="hover:bg-gray-100/80 bg-gray-100 text-teal-600 shadow-md px-4 py-1 text-base">
          CN0510
          </Badge>
          <Badge className="hover:bg-gray-100/80 bg-gray-100 text-teal-600 shadow-md px-4 py-1 text-base">
          EIS
          </Badge>
          <Badge className="hover:bg-gray-100/80 bg-gray-100 text-teal-600 shadow-md px-4 py-1 text-base">
          ML
          </Badge>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/2 bg-gray-800/10 text-teal-800 py-10 px-12 mx-4 shadow-xl">
      <div className="text-justify text-base list-none">
      <li >
        Designing a circuit for <span className="font-bold">constant current discharge</span> for battery signal measurement.
      </li>
      <li  className="pt-4">
        Combining Arduino with Raspberry Pi to estimate the health status
        of lithium-ion batteries using  <span className="font-bold">3 minutes</span> of partial discharge
        curve data.
      </li>
      <li className="pt-4">
        Using the CN0510 to generate an alternating current signal and
        applying partial EIS curves for{" "}
        <span className="font-bold">
          lithium-ion battery classification.
        </span>
      </li>

      <li className="pt-4">
        Using the CN0510 to generate an alternating current signal and
        applying partial EIS curves for{" "}
        <span className="font-bold">
          lithium-ion battery classification.
        </span>
      </li>
      <li className="pt-4">
      Using a Raspberry Pi to apply trained  <span className="font-bold">Machine learning</span> models for battery state analysis.
      </li>
      
      </div>
    </div>
  </div>

  <div className="container grid gap-6 px-4 text-center md:px-6 md:grid-cols-2">
   
  </div>
</div>
  );
};

export default Raspberry;
