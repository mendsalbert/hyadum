import {
  AcademicCapIcon,
  ArchiveIcon,
  ChipIcon,
  CubeTransparentIcon,
  CurrencyDollarIcon,
  DotsCircleHorizontalIcon,
  HeartIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
const Services = () => {
  return (
    <div id="whatWeBuild" className="mx-4 sm:mx-16 md:mx-20 lg:mx-32 mb-20">
      <div className="flex flex-col justify-center items-center font-Montserrat">
        <p className="text-xl text-center font-bold text-gray-700 lg:w-9/12 mb-14 mt-7 md:mb-20 md:mt-20 lg:text-3xl">
          Products and services
        </p>
      </div>
      {/* <div className="md:flex md:flex-col lg:flex-row md:space-x-2 lg:space-x-4"> */}
      <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-14">
        <div className="flex flex-col items-center  ">
          <div className="bg-blue-800 rounded-tr-xl rounded-tl-xl w-full  flex flex-col items-center ">
            <AcademicCapIcon className="h-14 my-5 text-white" />
          </div>
          <div className="bg-gray-200 dark:bg-gray-600 dark:text-white w-full p-5 text-center font-Montserrat text-gray-700">
            <Link href="/product/school_management_app">
              <p className="font-bold text-xl cursor-pointer pb-2">
                School Managment App
              </p>
            </Link>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form by injected
              humour.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center  ">
          <div className="bg-blue-800 rounded-tr-xl rounded-tl-xl w-full  flex flex-col items-center">
            <ArchiveIcon className="h-14 my-5 text-white" />
          </div>
          <div className="bg-gray-200 dark:bg-gray-600 dark:text-white w-full  p-5 text-center font-Montserrat text-gray-700">
            <p className="font-bold pb-2 text-xl cursor-pointer">Voting App </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form by injected
              humour.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center  ">
          <div className="bg-blue-800 rounded-tr-xl rounded-tl-xl  w-full flex flex-col items-center">
            <HeartIcon className="h-14 my-5 text-white" />
          </div>
          <div className="bg-gray-200 dark:bg-gray-600 dark:text-white w-full p-5 text-center font-Montserrat text-gray-700">
            <p className="font-bold pb-2 text-xl cursor-pointer">
              Hospital Management App
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form by injected
              humour.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center  ">
          <div className="bg-blue-800 rounded-tr-xl rounded-tl-xl  w-full flex flex-col items-center">
            <ShoppingCartIcon className="h-14 my-5 text-white" />
          </div>
          <div className="bg-gray-200 dark:bg-gray-600 dark:text-white w-full p-5 text-center font-Montserrat text-gray-700">
            <p className="font-bold pb-2 text-xl cursor-pointer">
              Shop Management App
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form by injected
              humour.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center  ">
          <div className="bg-blue-800 rounded-tr-xl rounded-tl-xl  w-full flex flex-col items-center">
            <CurrencyDollarIcon className="h-14 my-5 text-white" />
          </div>
          <div className="bg-gray-200 dark:bg-gray-600 dark:text-white w-full p-5 text-center font-Montserrat text-gray-700">
            <p className="font-bold pb-2 text-xl cursor-pointer">Hyadum Coin</p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form by injected
              humour.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center  ">
          <div className="bg-blue-800 rounded-tr-xl rounded-tl-xl  w-full flex flex-col items-center">
            <ChipIcon className="h-14 my-5 text-white" />
          </div>
          <div className="bg-gray-200 dark:bg-gray-600 dark:text-white w-full p-5 text-center font-Montserrat text-gray-700">
            <p className="font-bold pb-2 text-xl cursor-pointer">
              Software Developement
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form by injected
              humour.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center  ">
          <div className="bg-blue-800 rounded-tr-xl rounded-tl-xl  w-full flex flex-col items-center">
            <ShoppingBagIcon className="h-14 my-5 text-white" />
          </div>
          <div className="bg-gray-200 dark:bg-gray-600 dark:text-white w-full p-5 text-center font-Montserrat text-gray-700">
            <p className="font-bold pb-2 text-xl cursor-pointer">TheMerchGuy</p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form by injected
              humour.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center  ">
          <div className="bg-blue-800 rounded-tr-xl rounded-tl-xl  w-full flex flex-col items-center">
            <DotsCircleHorizontalIcon className="h-14 my-5 text-white" />
          </div>
          <div className="bg-gray-200 dark:bg-gray-600 dark:text-white w-full p-5 text-center font-Montserrat text-gray-700">
            <p className="font-bold pb-2 text-xl cursor-pointer">Splorite</p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form by injected
              humour.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center  ">
          <div className="bg-blue-800 rounded-tr-xl rounded-tl-xl  w-full flex flex-col items-center">
            <CubeTransparentIcon className="h-14 my-5 text-white" />
          </div>
          <div className="bg-gray-200 dark:bg-gray-600 dark:text-white w-full p-5 text-center font-Montserrat text-gray-700">
            <p className="font-bold pb-2 text-xl cursor-pointer">CryptoFile</p>
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
