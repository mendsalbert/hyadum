import {
  CalculatorIcon,
  CogIcon,
  CreditCardIcon,
  HomeIcon,
  PhoneIcon,
  SearchIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import Head from "next/head";
import { AcademicCapIcon } from "@heroicons/react/solid";
function Index() {
  return (
    <>
      <Head>
        <title>Hyadum</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Sarabun:wght@100;300;400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="font-Montserrat flex flex-row w-full  ">
        {/* side */}
        <div className="h-screen border-r-2 p-7">
          <div className="text-gray-600 flex items-center ">
            <AcademicCapIcon className="h-8" />
            SMS
          </div>
          <div className="mt-10 space-y-4">
            <p className="text-lg font-bold text-blue-600">Menu</p>
            <div className="text-gray-500 cursor-pointer flex items-center space-x-6">
              <HomeIcon className="h-8" />
              <p className="text-lg">Home</p>
            </div>
            <div className="text-gray-500 cursor-pointer flex items-center space-x-6">
              <ViewGridIcon className="h-8" />
              <p className="text-lg">Accounts</p>
            </div>
            <div className="text-gray-500 cursor-pointer flex items-center space-x-6">
              <CreditCardIcon className="h-8" />
              <p className="text-lg">Cards</p>
            </div>
            <div className="text-gray-500 cursor-pointer flex items-center space-x-6">
              <PhoneIcon className="h-8" />
              <p className="text-lg">Contacts</p>
            </div>
            <div className="text-gray-500 cursor-pointer flex items-center space-x-6">
              <CalculatorIcon className="h-8" />
              <p className="text-lg">Loan Calculator</p>
            </div>
            <div className="text-gray-500 cursor-pointer flex items-center space-x-6">
              <CogIcon className="h-8" />
              <p className="text-lg">Settings</p>
            </div>
          </div>
        </div>
        {/* main */}
        <div className="w-7/12 p-7">
          <div>
            <div>
              <div className="border-gray-300 border-2 w-full flex flex-row items-center rounded-xl ">
                <SearchIcon className="h-6 text-gray-600  pl-2" />
                <input
                  type="text"
                  placeholder="search"
                  className=" rounded-lg p-4 w-full bg-transparent text-lg font-Montserrat  focus:outline-none"
                />
              </div>
            </div>
          </div>
          <p className="text-blue-600 text-2xl font-bold py-10">
            Welcome back Mends Albert
          </p>
          <div className="flex justify-between items-center space-x-8">
            <div className="bg-green-100 rounded-xl p-3">
              <div className="flex justify-between items-center  text-green-900">
                <UserGroupIcon className="h-10" />
              </div>
              <p className=" text-green-900 text-2xl font-bold">10K</p>
              <p className="text-green-900 ">Number of Students</p>
            </div>
            <div className="bg-purple-100 rounded-xl p-3">
              <div className="flex justify-between items-center  text-purple-900">
                <UserGroupIcon className="h-10" />
              </div>
              <p className=" text-purple-900 text-2xl font-bold">12.1K</p>
              <p className="text-purple-900 ">Number of Teachers</p>
            </div>
            <div className="bg-yellow-100 rounded-xl p-3">
              <div className="flex justify-between items-center  text-yellow-900">
                <UserGroupIcon className="h-10" />
              </div>
              <p className=" text-yellow-900 text-2xl font-bold">30K</p>
              <p className="text-yellow-900 ">Number of Staff</p>
            </div>
            <div className="bg-blue-100 rounded-xl p-3">
              <div className="flex justify-between items-center  text-blue-900">
                <UserGroupIcon className="h-10" />
              </div>
              <p className=" text-blue-900 text-2xl font-bold">40K</p>
              <p className="text-blue-900 ">Number of Buses</p>
            </div>
          </div>
        </div>
        {/* right */}
        <div></div>
      </div>
    </>
  );
}

export default Index;
