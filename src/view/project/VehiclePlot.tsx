"use client";
import { TISC_Data } from "@/methods/project";
import { ResponsiveLine, Serie } from "@nivo/line";

type TProject1Chart = {
  chartData: TISC_Data[];
  className?: string;
};

function VehiclePlot(props: TProject1Chart) {
  const { chartData, className } = props;

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={className}>
      <ResponsiveLine
        data={chartData satisfies Serie[]}
        margin={{ top: 50, right: 40, bottom: 50, left: 40 }}
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

export default VehiclePlot;
