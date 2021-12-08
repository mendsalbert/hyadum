const News = () => {
  return (
    <div className="bg-[#f7f7f7] py-7">
      <div className="mx-4 sm:mx-16 md:mx-20 lg:mx-32 mt-10 font-Montserrat">
        <p className="text-2xl  text-left font-bold text-gray-700 lg:w-9/12 md:mb-12 mb-10 mt-10 md:mt-16  lg:text-2xl">
          Featured news
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 gap-8">
          <div className="w-full space-y-2 ">
            <div className="bg-header-backgroundImage bg-cover w-full lg:w-full h-48 relative"></div>
            <p className="text-xl text-gray-700 pt-2">Hyadum</p>
            <div className="bg-blue-600 w-20 h-1.5"></div>
            <p className="text-lg text-gray-600 ">
              The best SaaS company in the world. Welcome to Hyadum
            </p>
            <p className="text-md text-gray-500">December 1, 2021</p>
          </div>

          <div className="w-full space-y-2">
            <div className="bg-header-backgroundImage bg-cover w-full lg:w-full h-48 relative"></div>
            <p className="text-xl text-gray-700 pt-2">Hyadum</p>
            <div className="bg-blue-600 w-20 h-1.5"></div>
            <p className="text-lg text-gray-600 ">
              Building the next gen of softwares
            </p>
            <p className="text-md text-gray-500">December 1, 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
