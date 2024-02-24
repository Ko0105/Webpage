import React from "react";
import RaspberryPlot from "./RaspberryPlot";
import { TEIS_Data } from "@/methods/project";

type RaspberryProps = {
  data: TEIS_Data[];
};
const Raspberry = (props: RaspberryProps) => {
  const { data } = props;
  return (
    <div>
      <div className="text-left text-2xl font-bold ">
        • Device for estimating the state of lithium-ion batteries
      </div>
      <div className="container grid gap-6 px-4 text-center md:px-6 md:grid-cols-2">
        <div className="space-y-2">
          <div className="aspect-[3/2] overflow-hidden rounded-2xl mx-auto ">
            <RaspberryPlot
              chartData={data}
              className="bject-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-justify text-xl  ml-4">
            <h2 className="text-left text-2xl font-bold">Abstract</h2>
            <li>
              Using the CN0510 to generate an alternating current signal and
              applying partial EIS curves for{" "}
              <span className="font-bold">
                lithium-ion battery classification.
              </span>
            </li>
            <li className="pt-4">
              Combining Arduino with Raspberry Pi to estimate the health status
              of lithium-ion batteries using 3 minutes of partial discharge
              curve data.
            </li>
          </div>
        </div>
      </div>
      <br></br>
      <div className="container grid gap-6 px-4 text-center md:px-6 md:grid-cols-2">
        <div className="space-y-2">
          <h2 className="text-left  text-2xl font-bold">Technologies</h2>
          <div className="text-left  text-xl ml-4">
            <li>Arduino</li>
            <li>Raspberry Pi</li>
            <li>CN0510</li>
            <li>C</li>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-left  text-2xl font-bold">Impact</h2>
          <p className="text-justify text-xl  ml-4">
            This project helped me understand the application of the development
            board and combine software with hardware.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Raspberry;
