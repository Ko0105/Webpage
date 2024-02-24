"use client";
import { ResponsiveLine } from "@nivo/line";
import type { TEIS_Data, TISC_Data, TOCV_Data } from "@/methods/project";
import Vehicle from "./Vehicle";
import Raspberry from "./Raspberry";

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

          <br></br>
          <Raspberry data={chartData2} />

          <br></br>

          <div className="text-left text-2xl font-bold ">
            • Application of Equivalent Circuit Model (ECM) for battery
          </div>
          <div className="container grid gap-6 px-4 text-center md:px-6 md:grid-cols-2">
            <div className="space-y-2">
              <div className="aspect-[3/2] overflow-hidden rounded-2xl mx-auto ">
                <Project3_Chart
                  chartData={chartData3}
                  className="bject-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-justify text-xl  ml-4">
                <h2 className="text-left text-2xl font-bold">Abstract</h2>
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
          <br></br>
          <div className="container grid gap-6 px-4 text-center md:px-6 md:grid-cols-2">
            <div className="space-y-2">
              <h2 className="text-left  text-2xl font-bold">Technologies</h2>
              <div className="text-left  text-xl ml-4">
                <li>Least squares method</li>
                <li>Python</li>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-left  text-2xl font-bold">Impact</h2>
              <p className="text-justify text-xl  ml-4">
                This project helped me understand the application of ECM in
                real-world scenarios and the analysis of battery safety.
              </p>
            </div>
          </div>

          <br></br>
          <div className="text-left text-2xl font-bold ">
            {" "}
            • Analysis of lithium metal battery interfaces
          </div>
          <div className="container grid gap-6 px-4 text-center md:px-6 md:grid-cols-2">
            <div className="space-y-2">
              <div className="aspect-[3/2] overflow-hidden rounded-2xl mx-auto ">
                <video controls>
                  <source src="/PhaseField.mov" type="audio/mp4" />
                  Your browser does not support the audio tag.
                </video>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-justify text-xl  ml-4">
                <h2 className="text-left text-2xl font-bold">Abstract</h2>
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
              </div>
            </div>
          </div>
          <br></br>
          <div className="container grid gap-6 px-4 text-center md:px-6 md:grid-cols-2">
            <div className="space-y-2">
              <h2 className="text-left  text-2xl font-bold">Technologies</h2>
              <div className="text-left  text-xl ml-4">
                <li>C++</li>
                <li>CUDA</li>
                <li>MPI</li>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-left  text-2xl font-bold">Impact</h2>
              <p className="text-justify text-xl  ml-4">
                This project helped me understand the interface characteristics
                of lithium metal batteries and construct efficient programs
                using CUDA to increase computational efficiency.
              </p>
            </div>
          </div>

          <br></br>
          <div className="text-left text-2xl font-bold ">
            {" "}
            • Development of efficient numerical models for two-phase flow.
          </div>
          <div className="container grid gap-6 px-4 text-center md:px-6 md:grid-cols-2">
            <div className="space-y-2">
              <div className="aspect-[3/2] overflow-hidden rounded-2xl mx-auto ">
                <video controls>
                  <source src="/DebrisFlow.mp4" type="audio/mp4" />
                  Your browser does not support the audio tag.
                </video>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-justify text-xl  ml-4">
                <h2 className="text-left text-2xl font-bold">Abstract</h2>
                <li>
                  Developing a two-phase flow numerical computing model using{" "}
                  <span className="font-bold">CUDA</span> to increase program
                  efficiency by over <span className="font-bold">100%.</span>
                </li>
                <li className="pt-4">
                  Combining{" "}
                  <span className="font-bold">
                    Message passing interface (MPI)
                  </span>{" "}
                  with CUDA for <span className="font-bold">multi-GPU</span>{" "}
                  computation to remove memory limitations imposed by a single
                  GPU.
                </li>
                <li className="pt-4">
                  Using <span className="font-bold">Three.js</span> to construct
                  the program on cloud computing and design the interface,
                  enabling the model to be applied in real-world scenarios.
                </li>
              </div>
            </div>
          </div>
          <br></br>
          <div className="container grid gap-6 px-4 text-center md:px-6 md:grid-cols-2">
            <div className="space-y-2">
              <h2 className="text-left  text-2xl font-bold">Technologies</h2>
              <div className="text-left  text-xl ml-4">
                <li>C++</li>
                <li>CUDA</li>
                <li>MPI</li>
                <li>Three.js</li>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-left  text-2xl font-bold">Impact</h2>
              <p className="text-justify text-xl  ml-4">
                This project helped me understand using CUDA to improve
                computational efficiency and showcasing results on the cloud
                with Three.js.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Project3_Chart(props: any) {
  const { chartData, className } = props;

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={className}>
      <ResponsiveLine
        data={chartData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "linear", min: 0.0, max: 160 }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          // stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Time (min)",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Voltage",
          legendOffset: -40,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={6}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "top-right",
            direction: "column",
            justify: false,
            translateX: 10,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}
