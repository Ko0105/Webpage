//  * v0 by Vercel.
//  * @see https://v0.dev/t/1fvFzyMTtOO
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app

export default function MyEducation() {
  return (
    <main className="flex-1">
      <div className="container py-12 space-y-12 px-4 md:px-6">
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
              Education
            </h2>
          </div>
          <div className="space-y-2">
            <div className="space-y-1">
              <h3 className="text-xl ">
                <span>• </span>
                <span className="font-bold">Phd student</span> of Applied
                Mechanics
              </h3>
              <p className="text-xl text-gray-500 dark:text-gray-400">
                National Taiwan University (2021-now)
              </p>
            </div>
            <p className="text-base leading-loose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Studying the state of lithium-ion batteries, machine learning, and
              GPU computing.
            </p>
            <br></br>
            <div className="space-y-1">
              <h3 className="text-xl ">
                <span>• </span>
                <span className="font-bold">Master</span> of Hydraulic and Ocean
                Engineering
              </h3>
              <p className="text-xl text-gray-500 dark:text-gray-400">
                National Cheng Kung University (2019-2021)
              </p>
            </div>
            <p className="text-base leading-loose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Studying real-time disaster warning systems, Three.js for
              cloud-based 3D visualization, and GPU computing.
            </p>
            <br></br>
            <div className="space-y-1">
              <h3 className="text-xl ">
                <span>• </span>
                <span className="font-bold">Bachelor</span> of Hydraulic and
                Ocean Engineering
              </h3>
              <p className="text-xl text-gray-500 dark:text-gray-400">
                National Cheng Kung University (2015-2019)
              </p>
            </div>
            <p className="text-base leading-loose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Receiving book awards and being admitted to the graduate program
              with excellent academic performance.
            </p>
          </div>
        </section>
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
              Work Experience
            </h2>
          </div>
          <div className="space-y-2">
            <div className="space-y-1">
              <h3 className="text-2xl ">
                <span className="font-bold">TA</span>
              </h3>

              <p className=" text-xl text-gray-500 dark:text-gray-400">
                <span className="font-bold">• Elastic mechanics </span> [Sep.
                2022 - June. 2023], National Cheng Kung University
              </p>
              <p className=" text-xl text-gray-500 dark:text-gray-400">
                <span className="font-bold">• Engineering statistics </span>{" "}
                [Feb. 2020 - June. 2020], National Cheng Kung University
              </p>
              <p className=" text-xl text-gray-500 dark:text-gray-400">
                <span className="font-bold">• Computational hydraulics</span>{" "}
                [Sep. 2019 - Jan. 2020], National Cheng Kung University
              </p>
              <p className=" text-xl text-gray-500 dark:text-gray-400">
                <span className="font-bold">• Fluid mechanics </span> [Feb. 2019
                - June. 2019], National Cheng Kung University
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
