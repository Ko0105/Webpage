"use client";
import { Badge } from "@/components/ui/badge";
import VehiclePlot from "./VehiclePlot";
import type { TISC_Data } from "@/methods/project";

type VehicleProps = {
  data: TISC_Data[];
};
const Vehicle = (props: VehicleProps) => {
  const { data } = props;

  return (
    <div>
      <h2 className="text-left text-3xl font-bold pb-4 bg-clip-text text-transparent bg-gradient-to-l from-teal-600 to-teal-700">
        Real-time dynamic state estimation of electric vehicles
      </h2>
      <div className="px-4 text-center md:px-6 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col overflow-hidden rounded-2xl mx-auto">
            <VehiclePlot chartData={data} className="w-full h-[320px]" />

            <div className="space-x-2 py-4 flex flex-wrap space-y-2">
              <Badge className="hover:bg-gray-100/80 bg-gray-100 text-teal-600 shadow-md px-4 py-1 text-base">
                Kalman filter
              </Badge>
              <Badge className="hover:bg-gray-100/80 bg-gray-100 text-teal-600 shadow-md px-4 py-1 text-base">
                Least squares method
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
              Utilizing the{" "}
              <strong className="mx-0">least squares method</strong> and{" "}
              <strong className="mx-0">Kalman filter</strong> for estimating the
              dynamic charging status of electric vehicles in real-world
              scenarios.
            </li>

            <li className="pt-4">
              Using the <strong>Dynamic Time Warping (DTW)</strong> algorithm to
              synchronize voltage and current measurements in asynchronous data.
            </li>
          </div>
        </div>
      </div>

      <div className="container grid gap-6 px-4 text-center md:px-6 md:grid-cols-2">
        {/**<div className="space-x-4">
          <Badge className="bg-gray-300 text-teal-600 px-4 py-1">
            Kalman filter
          </Badge>
          <Badge className="bg-gray-300 text-teal-600 px-4 py-1">
            Least squares method
          </Badge>
          <Badge className="bg-gray-300 text-teal-600 px-4 py-1">Python</Badge>
        </div> */}
        {/**<div className="space-y-2">
          <h2 className="text-left  text-2xl font-bold">Impact</h2>
          <p className="text-justify text-xl  ml-4">
            This project helped me understand the theory of the Kalman filter
            and apply it to real-world electric vehicle charging scenarios.
          </p>
        </div>*/}
      </div>
    </div>
  );
};

export default Vehicle;
