"use client";
import { ResponsiveLine } from "@nivo/line";
import type { TEIS_Data, TISC_Data, TOCV_Data } from "@/methods/project";
import Vehicle from "./Vehicle";
import Raspberry from "./Raspberry";
import OCV from "./OCV";
import Dendrite from "./Dendrite";
import Debris from "./Debris";

type MyProjectProps = {
  iscData: TISC_Data[];
  eisData: TEIS_Data[];
  ocvData: TOCV_Data[];
};

export default function MyProject(props: MyProjectProps) {
  const {
    iscData: chartData1,
    eisData: chartData2,
    ocvData: chartData3,
  } = props;

  return (
    <>
      <div className="container px-8 md:px-16 lg:px-24 flex flex-col items-center space-y-2 pb-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tighter lg:text-4xl py-2">
            Projects
          </h1>
          <p className="text-gray-500 md:text-lg lg:text-xl font-light">
            A collection of my recent projects showcasing my skills and
            interests.
          </p>

          <section className={"py-12"}>
            <Vehicle data={chartData1} />
          </section>

          <section className={"py-12"}>
          <Raspberry data={chartData2} />
          </section>

          <section className={"py-12"}>
          <OCV data={chartData3} />
          </section>

          <section className={"py-12"}>
          <Dendrite />
          </section>

          <section className={"py-12"}>
          <Debris />
          </section>
          
        </div>
      </div>
    </>
  );
}


