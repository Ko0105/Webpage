import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Feature = () => {
  return (
    <>
      <div className="grid gap-6 px-4 text-center md:px-6 md:grid-cols-2">
        <Card className="bg-transparent border-none shadow-none">
          <CardHeader className={"text-left ml-6 pt-5 pb-2"}>
            <CardTitle className="font-semibold text-3xl">Skills</CardTitle>
          </CardHeader>
          <CardContent className={"px-12"}>
            <div className="text-xl leading-8 font-extralight tracking-wide [list-style-type:square] space-y-1 text-left">
              <li>Numerical Simulation : C++, CUDA, MPI</li>
              <li>Machine Learning : Python, Pytorch, Tensorflow</li>
              <li>Web development : TypeScript, Three.js</li>
              <li>Tool : Git, Docker</li>
              <li>OS : Windows, Linux, MaxOS</li>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-transparent border-none shadow-none">
          <CardHeader className={"text-left ml-6 pt-5 pb-2"}>
            <CardTitle className="font-semibold text-3xl">Projects</CardTitle>
          </CardHeader>
          <CardContent className={"px-12"}>
            <div className="text-xl leading-8 font-extralight tracking-wide  [list-style-type:square] space-y-1 text-left">
              <li>Estimation of electric vehicle charging status</li>
              <li>Device for estimating the state of lithium-ion batteries</li>
              <Link href="/project">more...</Link>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-transparent border-none shadow-none">
          <CardHeader className={"text-left ml-6 pt-5 pb-2"}>
            <CardTitle className="font-semibold text-3xl">
              Publications
            </CardTitle>
          </CardHeader>
          <CardContent className={"px-12"}>
            <div className="text-xl leading-8 font-extralight tracking-wide [list-style-type:square] space-y-1 text-left">
              <Link href="https://doi.org/10.1016/j.apenergy.2023.122454">
                <li>
                  Constructing battery impedance spectroscopy using partial
                  current in constant-voltage charging or partial relaxation
                  voltage.
                </li>
              </Link>
              <Link href="https://doi.org/10.1016/j.jpowsour.2023.232779">
                <li>
                  Influence of inhomogeneity of lithium-ion transport within the
                  anode/electrolyte interface on mossy lithium formation.
                </li>
              </Link>
              <Link href="/publication">more...</Link>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-transparent border-none shadow-none">
          <CardHeader className={"text-left ml-6 pt-5 pb-2"}>
            <CardTitle className="font-semibold text-3xl">Educatoin</CardTitle>
          </CardHeader>
          <CardContent className={"px-12"}>
            <div className="text-xl leading-8 font-extralight tracking-wide [list-style-type:square] space-y-1 text-left">
              <li>
                <span className="font-semibold">Phd student</span> of Applied
                Mechanics, National Taiwan University
              </li>
              <li>
                <span className="font-semibold">Master</span> of Hydraulic and
                Ocean Engineering, National Cheng Kung University
              </li>
              <li>
                <span className="font-semibold">Bachelor</span> of Hydraulic and
                Ocean Engineering, National Cheng Kung University
              </li>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Feature;
