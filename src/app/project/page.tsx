import { promises as fs } from "fs";
import Project from "@/view/project/Project";

import type { TEIS_Data, TISC_Data, TOCV_Data } from "@/methods/project";

async function getPlotData(path: string) {
  return await fs.readFile(process.cwd() + path, "utf8");
}
export default async function Home() {
  const isc = await getPlotData("/public/ISC_Data.json");
  const eis = await getPlotData("/public/EIS_Data.json");
  const ocv = await getPlotData("/public/OCV_Data.json");

  const iscData = JSON.parse(isc) as TISC_Data[];
  const eisData = JSON.parse(eis) as TEIS_Data[];
  const ocvData = JSON.parse(ocv) as TOCV_Data[];

  return <Project iscData={iscData} eisData={eisData} ocvData={ocvData} />;
}
