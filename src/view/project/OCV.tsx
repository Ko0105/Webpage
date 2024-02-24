import React from "react";
import OCVPlot from "./OCVPlot";
import { TOCV_Data } from "@/methods/project";
import { Badge } from "@/components/ui/badge";

type RaspberryProps = {
  data: TOCV_Data[];
};
const OCV = (props: RaspberryProps) => {
  const { data } = props;
  return (
  <div>
  <h2 className="text-left text-3xl font-bold pb-4 bg-clip-text text-transparent bg-gradient-to-l from-teal-600 to-teal-700">
  Application of Equivalent Circuit Model (ECM) for battery
  </h2>
  <div className="px-4 text-center md:px-6 flex flex-col lg:flex-row items-center">
    <div className="w-full lg:w-1/2">
      <div className="flex flex-col overflow-hidden rounded-2xl mx-auto">
        <OCVPlot chartData={data} className="w-full h-[320px]" />

        <div className="space-x-2 py-4 flex flex-wrap space-y-2">
          <Badge className="hover:bg-gray-100/80 bg-gray-100 text-teal-600 shadow-md px-4 py-1 text-base">
          ECM
          </Badge>
          <Badge className="hover:bg-gray-100/80 bg-gray-100 text-teal-600 shadow-md px-4 py-1 text-base">
          Python
          </Badge>

        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/2 bg-gray-800/10 text-teal-800 py-10 px-12 mx-4 shadow-xl">
      <div className="text-justify text-base list-none">
        <li>
          Analyzing{" "}
          <span className="font-bold">internal short circuits</span>{" "}
          under dynamic discharge conditions using ECM parameters.
        </li>
        <li className="pt-4">
          Constructing an algorithm using the ECM to estimate battery
          OCV, resulting in a significant{" "}
          <span className="font-bold">
            reduction of 97% in OCV acquisition time.
          </span>
        </li>
        <li className="pt-4">
          Applying the developed algorithm to real electric vehicle
          data, achieving an accurate estimation of the electric vehicle
          charging status with an{" "}
          <span className="font-bold">error of less than 2%.</span>
        </li>
      </div>
    </div>
  </div>

  <div className="container grid gap-6 px-4 text-center md:px-6 md:grid-cols-2">
   
  </div>
</div>
  );
};

export default OCV;
