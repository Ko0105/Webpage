const Edu = () => {
  return (
    <div>
    <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
    Education
    </h2>


    <ol className="relative border-s border-gray-200 dark:border-gray-700">

      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
         Now
        </time>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
         
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
         
        </p>
       
      </li>

      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
          Sept. 2021 - Now
        </time>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Phd student of Applied Mechanics
        </h3>
        <p className=" text-xl font-normal text-gray-500 dark:text-gray-400">
        National Taiwan University
        </p>
        <p className="mt-2 indent-4 text-base font-normal text-gray-500 dark:text-gray-400">
        Studying the state of lithium-ion batteries, machine learning, and GPU computing.
        </p>
       
      </li>
  
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
          Sept. 2019 - June 2021
        </time>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Master of Hydraulic and Ocean Engineering
        </h3>
        <p className=" text-xl font-normal text-gray-500 dark:text-gray-400">
        National Cheng Kung University
        </p>
        <p className="mt-2 indent-4 text-base font-normal text-gray-500 dark:text-gray-400">
        Studying real-time disaster warning systems, Three.js for cloud-based 3D visualization, and GPU computing
        </p>
       
      </li>

   

      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
          Sept. 2015 - June 2019
        </time>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Bachelor of Hydraulic and Ocean Engineering
        </h3>
        <p className="text-xl font-normal text-gray-500 dark:text-gray-400">
        National Cheng Kung University
        </p>
        <p className="mt-2 indent-4 text-base font-normal text-gray-500 dark:text-gray-400">
        Receiving book awards and being admitted to the graduate program with excellent academic performance.
        </p>
       
      </li>

      
    </ol>
    </div>
  );
};

export default Edu;
