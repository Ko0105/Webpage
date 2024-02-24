const About = () => {
  return (
    <div className="container px-8 md:px-16 lg:px-24 flex flex-col items-center space-y-2 pb-6">
      <h1 className="text-2xl py-2 font-semibold tracking-tighter md:text-4xl">
        Chi-Jyun Ko
      </h1>
      <h2 className="font-medium racking-tighter sm:text-2xl pb-4 text-gray-900">
        Third-year PhD student at National Taiwan University
      </h2>

      <div className="">
        <div className="flex flex-row items-center">
          <div className="">
            <h2 className="text-2xl font-bold pb-1">Research Topic</h2>
            <div className="text-xl font-extralight tracking-wide indent-8 pb-6 leading-9">
              Lithium-ion battery, Lithium Dendrite, GPU Computing, and Machine
              Learning
            </div>
            <h2 className="text-2xl font-bold pb-1">Short Biography</h2>
            <div className="text-xl font-extralight tracking-wide indent-8 pb-6 leading-9">
              I am a third-year Ph.D. student at the Institute of Applied
              Mechanics at National Taiwan University. My research interests
              focus on analyzing Lithium-ion batteries with Machine Learning and
              simulating lithium dendrite using C++ and CUDA. During my Ph.D.
              studies, I have published{" "}
              <span className="font-bold">four top-tier journals</span>, all as
              the <span className="font-bold">first author</span>. Recently, I
              collaborated with the Industrial Technology Research Institute
              (ITRI) to draft a patent based on our research findings. My recent
              work focus has been on implementing the battery state detection
              algorithm we developed into practical devices using development
              boards.
            </div>
          </div>

          <img
            alt="PersonalPhotor"
            className="mx-12 object-fit rounded-xl shadow-xl"
            src="/PersonalPhoto.jpg"
            width="220"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
