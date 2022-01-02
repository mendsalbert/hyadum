import {
  AdjustmentsIcon,
  BookOpenIcon,
  CashIcon,
  MinusCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { PencilAltIcon } from "@heroicons/react/solid";
import SearchBar from "./SearchBar";
import Link from "next/link";
const Home = () => {
  return (
    <div className="lg:w-9/12 lg:p-7 w-full p-4 ">
      <SearchBar showPrev={false} />
      <p className="text-blue-600 text-2xl font-bold pt-10 pb-2">
        Welcome back Mends Kofi Albert
      </p>
      <p className="text-lg text-gray-600 pb-4">
        Last login : 4:00PM 3rd December, 2021
      </p>
      <div className="grid lg:grid-cols-2 lg:gap-5 grid-cols-1 gap-4 mb-6 ">
        <Link href="/parent/assignment">
          <div className="bg-red-100 rounded-xl p-3 cursor-pointer ">
            <div className="flex justify-between items-center  text-red-900">
              <PencilAltIcon className="h-10" />
            </div>
            <p className=" text-red-900 text-2xl font-bold">4</p>
            <p className="text-red-900 ">Assignment to sumbit</p>
          </div>
        </Link>
        <div className="bg-gray-100 rounded-xl p-3 ">
          <div className="flex justify-between items-center  text-gray-900">
            <UserGroupIcon className="h-10" />
          </div>
          <p className=" text-gray-900 text-2xl font-bold">24</p>
          <p className="text-gray-900 ">Student in your class</p>
        </div>
        <div className="bg-purple-100 rounded-xl p-3">
          <div className="flex justify-between items-center  text-purple-900">
            <BookOpenIcon className="h-10" />
          </div>
          <p className=" text-purple-900 text-2xl font-bold">7</p>
          <p className="text-purple-900 ">Courses Available</p>
        </div>
        <div className="bg-green-100 rounded-xl p-3">
          <div className="flex justify-between items-center  text-green-900">
            <CashIcon className="h-10" />
          </div>
          <p className=" text-green-900 text-2xl font-bold">Fees</p>
          <p className="text-green-900 ">
            You have paid your fees for this term
          </p>
        </div>
      </div>
      {/* semester activities */}
      <div>
        <p className="text-gray-700 text-2xl pb-2">
          Semester activities (2022)
        </p>
        <div>
          <p className="text-blue-600 font-bold text-lg">January </p>
          <hr />
          <div className="text-gray-800  py-5 grid grid-cols-2 gap-5 lg:grid lg:grid-cols-4 lg:gap-5">
            <div className="bg-blue-300 rounded-lg px-4 py-6">
              <p className="text-gray-800 font-bold text-xl">
                Executive meeting
              </p>
              <p className="text-blue-900 font-bold">8th January 4:00PM</p>
            </div>
            <div className="bg-blue-300 rounded-lg px-4 py-6">
              <p className="text-gray-800 font-bold text-xl">
                Executive meeting
              </p>
              <p className="text-blue-900 font-bold">10th January 4:00PM</p>
            </div>
            <div className="bg-blue-300 rounded-lg px-4 py-6">
              <p className="text-gray-800 font-bold text-xl">
                Executive meeting
              </p>
              <p className="text-blue-900 font-bold">13th January 4:00PM</p>
            </div>
            <div className="bg-blue-300 rounded-lg px-4 py-6">
              <p className="text-gray-800 font-bold text-xl">
                Executive meeting
              </p>
              <p className="text-blue-900 font-bold">18th January 4:00PM</p>
            </div>
            <div className="bg-blue-300 rounded-lg px-4 py-6">
              <p className="text-gray-800 font-bold text-xl">
                Executive meeting
              </p>
              <p className="text-blue-900 font-bold">21th January 4:00PM</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-blue-600 font-bold text-lg">Febuary </p>
          <hr />
          <div className="text-gray-800 py-5 grid grid-cols-2 gap-5 lg:grid lg:grid-cols-4 lg:gap-5">
            <div className="bg-blue-300 rounded-lg px-4 py-6">
              <p className="text-gray-800 font-bold text-xl">
                Executive meeting
              </p>
              <p className="text-blue-900 font-bold">8th January 4:00PM</p>
            </div>
            <div className="bg-blue-300 rounded-lg px-4 py-6">
              <p className="text-gray-800 font-bold text-xl">
                Executive meeting
              </p>
              <p className="text-blue-900 font-bold">10th January 4:00PM</p>
            </div>
            <div className="bg-blue-300 rounded-lg px-4 py-6">
              <p className="text-gray-800 font-bold text-xl">
                Executive meeting
              </p>
              <p className="text-blue-900 font-bold">13th January 4:00PM</p>
            </div>
            <div className="bg-blue-300 rounded-lg px-4 py-6">
              <p className="text-gray-800 font-bold text-xl">
                Executive meeting
              </p>
              <p className="text-blue-900 font-bold">18th January 4:00PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
