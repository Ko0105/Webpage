import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Feature = () => {
  return (
    <>
      <div className="bg-gradient-to-tr from-slate-300/50 via-slate-300/10 to-slate-300/40 flex flex-col px-4 py-12 my-6 md:px-20 lg:px-20 text-center md:flex-row justify-center">
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
            <div className="text-xl leading-8 font-extralight tracking-wide   space-y-1 text-left">
              <li>Estimation of electric vehicle charging status</li>
              <li>Device for estimating the state of lithium-ion batteries</li>
            </div>
          </CardContent>
          <CardFooter className="justify-end">
            <Link
              href="/project"
              className="text-lg font-medium hover:text-blue-400/80 text-blue-400 text-end block w-fit px-4"
            >
              see more...
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="container px-10">
        <Card className="bg-transparent border-none shadow-none px-6">
          <CardHeader className={"text-left ml-6 pt-5 pb-2"}>
            <CardTitle className="font-semibold text-3xl">
              Publications
            </CardTitle>
          </CardHeader>
          <CardContent className={"px-12 pb-2"}>
            <div className="text-xl leading-8 indent-8 font-extralight flex flex-col [list-style-type:square] space-y-1 text-left">
              <Link href="https://doi.org/10.1016/j.apenergy.2023.122454">
                <li>
                Using tens of seconds of relaxation voltage to estimate open 
                circuit voltage and state of health of lithium ion batteries.
                </li>
              </Link>
              <Link href="https://doi.org/10.1016/j.jpowsour.2023.232779">
                <li>
                  Influence of inhomogeneity of lithium-ion transport within the
                  anode/electrolyte interface on mossy lithium formation.
                </li>
              </Link>
              <Link
                href="/publication"
                className="text-lg font-medium hover:text-blue-400/80 text-blue-400 self-end block w-fit px-4"
              >
                see more...
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-transparent border-none shadow-none px-6">
          <CardHeader className={"text-left ml-6 pt-0 pb-2"}>
            <CardTitle className="font-semibold text-3xl">Educatoin</CardTitle>
          </CardHeader>
          <CardContent className={"px-12"}>
            <div className="text-xl indent-8 leading-8 font-extralight tracking-wide [list-style-type:square] space-y-1 text-left">
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
