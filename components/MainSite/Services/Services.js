import {
  AcademicCapIcon,
  ArchiveIcon,
  CurrencyDollarIcon,
  HeartIcon,
  HomeIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
const Services = () => {
  return (
    <div className="mx-4 sm:mx-16 md:mx-20 lg:mx-32 mb-20">
      <div className="flex flex-col justify-center items-center font-Montserrat">
        <p className="text-xl text-center font-bold text-gray-700 lg:w-9/12 mb-20 mt-20 lg:text-3xl">
          Products and services
        </p>
      </div>
      {/* <div className="md:flex md:flex-col lg:flex-row md:space-x-2 lg:space-x-4"> */}
      <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        <div className="flex flex-col items-center mb-9 ">
          <div className="bg-blue-800 rounded-tr-xl rounded-tl-xl w-full  flex flex-col items-center ">
            <AcademicCapIcon className="h-14 my-5 text-white" />
          </div>
          <div className="bg-gray-200 dark:bg-gray-600 dark:text-white w-full p-5 text-center font-Montserrat text-gray-700">
            <p className="font-bold pb-2">School Managment App</p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form by injected
              humour.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center  mb-9">
          <div className="bg-blue-800 rounded-tr-xl rounded-tl-xl w-full  flex flex-col items-center">
            <ArchiveIcon className="h-14 my-5 text-white" />
          </div>
          <div className="bg-gray-200 dark:bg-gray-600 dark:text-white w-full  p-5 text-center font-Montserrat text-gray-700">
            <p className="font-bold pb-2">Web Developement</p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form by injected
              humour.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center  mb-9">
          <div className="bg-blue-800 rounded-tr-xl rounded-tl-xl  w-full flex flex-col items-center">
            <CurrencyDollarIcon className="h-14 my-5 text-white" />
          </div>
          <div className="bg-gray-200 dark:bg-gray-600 dark:text-white w-full p-5 text-center font-Montserrat text-gray-700">
            <p className="font-bold pb-2">Web Developement</p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form by injected
              humour.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center  mb-9">
          <div className="bg-blue-800 rounded-tr-xl rounded-tl-xl  w-full flex flex-col items-center">
            <CurrencyDollarIcon className="h-14 my-5 text-white" />
          </div>
          <div className="bg-gray-200 dark:bg-gray-600 dark:text-white w-full p-5 text-center font-Montserrat text-gray-700">
            <p className="font-bold pb-2">Web Developement</p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form by injected
              humour.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center  mb-9">
          <div className="bg-blue-800 rounded-tr-xl rounded-tl-xl  w-full flex flex-col items-center">
            <CurrencyDollarIcon className="h-14 my-5 text-white" />
          </div>
          <div className="bg-gray-200 dark:bg-gray-600 dark:text-white w-full p-5 text-center font-Montserrat text-gray-700">
            <p className="font-bold pb-2">Web Developement</p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form by injected
              humour.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center  mb-9">
          <div className="bg-blue-800 rounded-tr-xl rounded-tl-xl  w-full flex flex-col items-center">
            <CurrencyDollarIcon className="h-14 my-5 text-white" />
          </div>
          <div className="bg-gray-200 dark:bg-gray-600 dark:text-white w-full p-5 text-center font-Montserrat text-gray-700">
            <p className="font-bold pb-2">Web Developement</p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form by injected
              humour.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
