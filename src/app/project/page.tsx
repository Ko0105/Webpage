import { promises as fs } from "fs";
import Project from "@/view/project/Project";

import type { EIS_Data, ISC_Data, OCV_Data } from "@/methods/project";

async function getPlotData(path: string) {
  return await fs.readFile(process.cwd() + path, "utf8");
}
export default async function Home() {
  const isc = await getPlotData("/public/ISC_Data.json");
  const eis = await getPlotData("/public/EIS_Data.json");
  const ocv = await getPlotData("/public/OCV_Data.json");

  const iscData = JSON.parse(isc) satisfies ISC_Data;
  const eisData = JSON.parse(eis) satisfies EIS_Data;
  const ocvData = JSON.parse(ocv) satisfies OCV_Data;

  return <Project iscData={iscData} eisData={eisData} ocvData={ocvData} />;
}
