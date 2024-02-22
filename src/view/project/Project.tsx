"use client";
//  * v0 by Vercel.
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  * @see https://v0.dev/t/1fvFzyMTtOO
import { ResponsiveLine, Serie } from "@nivo/line";
import type { TEIS_Data, TISC_Data, TOCV_Data } from "@/methods/project";

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
    <main className="container py-12 space-y-12 px-4 md:px-6">
      <div className="grid gap-8 lg:gap-12 items-start lg:grid-cols-1">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Projects
          </h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            A collection of my recent projects showcasing my skills and
            interests.
          </p>
          <div className="grid md:gap-2 lg:gap-4 xl:gap-8 ">
            <div className="text-left text-2xl font-bold ">
              {" "}
              • Real-time dynamic state estimation of electric vehicles
            </div>
            <div className="aspect-[3/2] overflow-hidden rounded-2xl w-3/6  mx-auto ">
              <Project1_Chart
                chartData={chartData1}
                className="bject-cover w-full h-full rounded-lg"
              />
            </div>

            <br></br>
            <div className="lg:grid-cols-1 ">
              <div className="text-justify text-xl  ml-4">
                <li>
                  Utilizing the{" "}
                  <span className="font-bold">least squares method</span> and{" "}
                  <span className="font-bold">Kalman filter</span> for
                  estimating the dynamic charging status of electric vehicles in
                  real-world scenarios.
                </li>
                <li>
                  Using the{" "}
                  <span className="font-bold">Dynamic Time Warping (DTW)</span>{" "}
                  algorithm to synchronize voltage and current measurements in
                  asynchronous data.
                </li>
              </div>
              <div>
                <br></br>
                <div className="grid gap-1">
                  <h3 className="text-2xl font-bold">Technologies</h3>
                  <p className="text-xl ml-4">
                    Kalman filter, Least squares method, Python
                  </p>
                </div>

                <div className="grid gap-1">
                  <h3 className="text-2xl font-semibold">Impact</h3>
                  <p className="text-justify text-xl  ml-4">
                    This project helped me understand the theory of the Kalman
                    filter and apply it to real-world electric vehicle charging
                    scenarios.
                  </p>
                </div>
              </div>
            </div>
            {/* divide-y-4 divide-yellow-600 divide-dashed */}

            <div>
              <div className="text-left text-2xl font-bold  ">
                {" "}
                • Device for estimating the state of lithium-ion batteries
              </div>
              <div className="aspect-[3/2] overflow-hidden rounded-2xl w-3/6  mx-auto ">
                <Project2_Chart
                  chartData={chartData2}
                  className="bject-cover w-full h-full rounded-lg"
                />

                {/* <div>
                      {chartData1 && (
                        <pre>{JSON.stringify(chartData1, null, 2)}</pre>
                      )}
                    </div> */}
              </div>
              <br></br>
              <div className="">
                <div className="text-justify text-xl  ml-4">
                  <li>
                    Using the CN0510 to generate an alternating current signal
                    and applying partial EIS curves for{" "}
                    <span className="font-bold">
                      lithium-ion battery classification.
                    </span>
                  </li>
                  <li>
                    Combining Arduino with Raspberry Pi to estimate the health
                    status of lithium-ion batteries using 3 minutes of partial
                    discharge curve data.
                  </li>
                </div>

                <div>
                  <br></br>
                  <div className="grid gap-1">
                    <h3 className="text-2xl font-bold">Technologies</h3>
                    <p className="text-xl ml-4">
                      Arduino, Raspberry Pi, Ｃ, CN0510
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-2xl font-semibold">Impact</h3>
                    <p className="text-xl ml-4">
                      This project helped me understand the application of the
                      development board and combine software with hardware.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-left text-2xl font-bold  ">
                {" "}
                • Application of Equivalent Circuit Model (ECM) for battery
                state analysis
              </div>
              <div className="aspect-[3/2] overflow-hidden rounded-2xl w-3/6  mx-auto ">
                <Project3_Chart
                  chartData={chartData3}
                  className="bject-cover w-full h-full rounded-lg"
                />
              </div>
              <br></br>
              <div className="">
                <div className="text-justify text-xl  ml-4">
                  <li>
                    Analyzing{" "}
                    <span className="font-bold">internal short circuits</span>{" "}
                    under dynamic discharge conditions using ECM parameters.
                  </li>
                  <li>
                    Constructing an algorithm using the ECM to estimate battery
                    OCV, resulting in a significant{" "}
                    <span className="font-bold">
                      reduction of 97% in OCV acquisition time.
                    </span>
                  </li>
                  <li>
                    Applying the developed algorithm to real electric vehicle
                    data, achieving an accurate estimation of the electric
                    vehicle charging status with an{" "}
                    <span className="font-bold">error of less than 2%.</span>
                  </li>
                </div>

                <div>
                  <br></br>
                  <div className="grid gap-1">
                    <h3 className="text-2xl font-bold">Technologies</h3>
                    <p className="text-xl ml-4">Python, Least squares method</p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-2xl font-semibold">Impact</h3>
                    <p className="text-xl ml-4">
                      This project helped me understand the application of ECM
                      in real-world scenarios and the analysis of battery
                      safety.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <br></br>
            <div>
              <div className="text-left text-2xl font-bold  ">
                {" "}
                • Analysis of lithium metal battery interfaces
              </div>
              <div className="aspect-[3/2] overflow-hidden rounded-2xl w-3/6  mx-auto ">
                <video controls>
                  <source src="/PhaseField.mov" type="audio/mp4" />
                  Your browser does not support the audio tag.
                </video>
              </div>
              <br></br>
              <div className="">
                <div className="text-justify text-xl  ml-4">
                  <li>
                    Constructing a program using{" "}
                    <span className="font-bold">CUDA</span> to simulate the
                    internal structure of lithium metal batteries for{" "}
                    <span className="font-bold">GPU computing.</span>
                  </li>
                  <li>
                    Analyzing the mechanisms causing{" "}
                    <span className="font-bold">
                      instability on the surface
                    </span>{" "}
                    of lithium metal batteries.
                  </li>
                </div>

                <div>
                  <br></br>
                  <div className="grid gap-1">
                    <h3 className="text-2xl font-bold">Technologies</h3>
                    <p className="text-xl ml-4">C++, CUDA</p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-2xl font-semibold">Impact</h3>
                    <p className="text-xl ml-4">
                      This project helped me understand the interface
                      characteristics of lithium metal batteries and construct
                      efficient programs using CUDA to increase computational
                      efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div>
              <div className="text-left text-2xl font-bold  ">
                {" "}
                • Development of efficient numerical models for two-phase flow.
              </div>
              <div className="aspect-[3/2] overflow-hidden rounded-lg w-3/6  mx-auto ">
                {/* <LineChart chartData={chartData1} className="bject-cover w-full h-full rounded-lg" /> */}
                <video controls>
                  <source src="/DebrisFlow.mp4" type="audio/mp4" />
                  Your browser does not support the audio tag.
                </video>
              </div>
              <br></br>{" "}
              <div className="">
                <div className="text-justify text-xl  ml-4">
                  <li>
                    Developing a two-phase flow numerical computing model using{" "}
                    <span className="font-bold">CUDA</span> to increase program
                    efficiency by over <span className="font-bold">100%.</span>
                  </li>
                  <li>
                    Combining{" "}
                    <span className="font-bold">
                      Message passing interface (MPI)
                    </span>{" "}
                    with CUDA for <span className="font-bold">multi-GPU</span>{" "}
                    computation to remove memory limitations imposed by a single
                    GPU.
                  </li>
                  <li>
                    Using <span className="font-bold">Three.js</span> to
                    construct the program on cloud computing and design the
                    interface, enabling the model to be applied in real-world
                    scenarios.
                  </li>
                </div>

                <div>
                  <br></br>
                  <div className="grid gap-1">
                    <h3 className="text-2xl font-bold">Technologies</h3>
                    <p className="text-xl ml-4">C++, CUDA, Three.js, MPI</p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-2xl font-semibold">Impact</h3>
                    <p className="text-xl ml-4">
                      This project helped me understand using CUDA to improve
                      computational efficiency and showcasing results on the
                      cloud with Three.js.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
}

type TProject1Chart = {
  chartData: TISC_Data[];
  className?: string;
};

// TODO: 拉出去
function Project1_Chart(props: TProject1Chart) {
  const { chartData, className } = props;

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={className}>
      <ResponsiveLine
        data={chartData satisfies Serie[]}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "linear", min: 0.0, max: "auto" }}
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
            translateX: 20,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 170,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 10,
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

function Project2_Chart(props: any) {
  const { chartData, className } = props;

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={className}>
      <ResponsiveLine
        data={chartData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "linear", min: 0.023, max: 0.042 }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          // stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="basis"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Re",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Im",
          legendOffset: -40,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 20,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 170,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 10,
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
