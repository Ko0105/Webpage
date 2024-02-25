const Edu = () => {
  return (
    <section className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter lg:text-4xl py-2">
          Education
        </h2>
      </div>
      <div className="space-y-2">
        <div className="space-y-1">
          <h3 className="text-xl ">
            <span>• </span>
            <span className="font-bold">Phd student</span> of Applied Mechanics
          </h3>
          <p className="text-xl text-gray-500 dark:text-gray-400">
            National Taiwan University (2021-now)
          </p>
        </div>
        <p className="text-base leading-loose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Studying the state of lithium-ion batteries, machine learning, and GPU
          computing.
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
          Studying real-time disaster warning systems, Three.js for cloud-based
          3D visualization, and GPU computing.
        </p>
        <br></br>
        <div className="space-y-1">
          <h3 className="text-xl ">
            <span>• </span>
            <span className="font-bold">Bachelor</span> of Hydraulic and Ocean
            Engineering
          </h3>
          <p className="text-xl text-gray-500 dark:text-gray-400">
            National Cheng Kung University (2015-2019)
          </p>
        </div>
        <p className="text-base leading-loose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Receiving book awards and being admitted to the graduate program with
          excellent academic performance.
        </p>
      </div>
    </section>
  );
};

export default Edu;
