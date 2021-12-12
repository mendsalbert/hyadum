import { UserAddIcon } from "@heroicons/react/outline";
import SearchBar from "../SearchBar";
import Link from "next/link";
const School = () => {
  return (
    <div className="w-9/12 p-7">
      <SearchBar showPrev={false} />

      <div className="flex flex-row justify-between items-center">
        <p className="text-blue-600 text-3xl font-bold py-10">
          Diving Montesore Inc.
        </p>
        <Link href="school/add_event" scroll={false}>
          <div className="flex flex-row items-center space-x-2 ">
            <UserAddIcon className="h-7 cursor-pointer text-gray-500" />
            <p className="text-gray-600 cursor-pointer text-lg font-bold py-10">
              Add Events
            </p>
          </div>
        </Link>
      </div>
      {/* semester activities */}
      <div>
        <p className="text-gray-700 text-2xl pb-2">
          Semester activities (2022)
        </p>
        <div>
          <p className="text-blue-600 font-bold text-lg">January </p>
          <hr />
          <div className="text-gray-800  py-5 grid grid-cols-4 gap-5">
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
          <div className="text-gray-800  py-5 grid grid-cols-4 gap-5">
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

export default School;
