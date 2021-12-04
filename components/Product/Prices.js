import { CheckIcon } from "@heroicons/react/outline";
const Prices = () => {
  return (
    <div className="mx-4 sm:mx-16 md:mx-20 lg:mx-32 py-8 font-Montserrat">
      <p className="text-xl text-center font-bold text-gray-700  mb-14 mt-7 md:mb-2 md:mt-10 lg:text-3xl">
        Flexible Plans
      </p>
      <p className="text-xl text-center  text-gray-700  mb-14 mt-7 md:mb-20 md:mt-5 lg:text-2xl">
        Choose a plan that works best for you and your team
      </p>
      <div className="flex flex-col space-y-7 md:space-y-0 lg:flex-row md:flex-row md:space-x-5 justify-evenly ">
        {/* first price */}
        <div className="bg-white flex flex-col h-full p-6 space-y-3 rounded-2xl  shadow-2xl ">
          <div className="flex flex-row space-x-6 items-center ">
            <div className="bg-green-500 rounded-2xl w-16 h-16"></div>
            <div className="text-left">
              <p className="text-2xl  text-gray-600"> Basic</p>
              <p className="text-lg font-bold text-gray-700">Ghc 69/Mo</p>
            </div>
          </div>
          <div className="bg-gray-600 opacity-30 my-4 w-full h-0.5"></div>
          <div className="text-left">
            <div className="flex flex-row space-x-3 text-gray-500">
              <CheckIcon className="h-7" />
              <p className="text-lg font-bold ">Get started with messaging</p>
            </div>
            <div className="flex flex-row space-x-3 text-gray-500">
              <CheckIcon className="h-7" />
              <p className="text-lg font-bold ">Flexible team meetings</p>
            </div>
            <div className="flex flex-row space-x-3 text-gray-500">
              <CheckIcon className="h-7" />
              <p className="text-lg font-bold ">5TB cloud storage</p>
            </div>
          </div>
          <div
            className="bg-blue-600 text-center text-white p-3 cursor-pointer  text-xl
           rounded-2xl "
          >
            Choose Plan
          </div>
        </div>
        {/* second price */}
        <div className="bg-gray-800  flex flex-col h-full p-6 space-y-7 rounded-2xl  shadow-2xl ">
          <div className="flex flex-row space-x-6 items-center ">
            <div className="bg-yellow-300 rounded-2xl w-16 h-16"></div>
            <div className="text-left">
              <p className="text-2xl  text-gray-200"> Advance</p>
              <p className="text-lg font-bold text-gray-300">Ghc 69/Mo</p>
              <div className="bg-blue-500 py-0.5 px-2 text-white rounded-2xl">
                Popular
              </div>
            </div>
          </div>
          <div className="bg-gray-300 opacity-30 my-4 w-full h-0.5"></div>
          <div className="text-left">
            <div className="flex flex-row space-x-3 text-gray-300">
              <CheckIcon className="h-7" />
              <p className="text-lg font-bold ">Get started with messaging</p>
            </div>
            <div className="flex flex-row space-x-3 text-gray-300">
              <CheckIcon className="h-7" />
              <p className="text-lg font-bold ">Flexible team meetings</p>
            </div>
            <div className="flex flex-row space-x-3 text-gray-300">
              <CheckIcon className="h-7" />
              <p className="text-lg font-bold ">5TB cloud storage</p>
            </div>
          </div>
          <div
            className="bg-blue-600 text-center text-white p-3 cursor-pointer  text-xl
           rounded-2xl "
          >
            Choose Plan
          </div>
        </div>
        {/* third price */}
        <div className="bg-white flex flex-col h-full p-6 space-y-3 rounded-2xl  shadow-2xl ">
          <div className="flex flex-row space-x-6 items-center ">
            <div className="bg-blue-500 rounded-2xl w-16 h-16"></div>
            <div className="text-left">
              <p className="text-2xl  text-gray-600"> Meduim</p>
              <p className="text-lg font-bold text-gray-700">Ghc 69/Mo</p>
            </div>
          </div>
          <div className="bg-gray-600 opacity-30 my-4 w-full h-0.5"></div>
          <div className="text-left">
            <div className="flex flex-row space-x-3 text-gray-500">
              <CheckIcon className="h-7" />
              <p className="text-lg font-bold ">Get started with messaging</p>
            </div>
            <div className="flex flex-row space-x-3 text-gray-500">
              <CheckIcon className="h-7" />
              <p className="text-lg font-bold ">Flexible team meetings</p>
            </div>
            <div className="flex flex-row space-x-3 text-gray-500">
              <CheckIcon className="h-7" />
              <p className="text-lg font-bold ">5TB cloud storage</p>
            </div>
          </div>
          <div
            className="bg-blue-600 text-center text-white p-3 cursor-pointer  text-xl
           rounded-2xl "
          >
            Choose Plan
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
