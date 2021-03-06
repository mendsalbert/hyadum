import { UserAddIcon } from "@heroicons/react/outline";
import SearchBar from "../SearchBar";
import Link from "next/link";
const Index = () => {
  return (
    <div className="w-full p-5 lg:w-9/12 lg:p-7 ">
      <SearchBar showPrev={false} />
      <div className="w-full ">
        <div className="flex flex-row justify-between items-center">
          <p className="text-blue-600  text-xl lg:text-2xl font-bold pb-3 pt-5">
            School Information
          </p>
          <Link href="school/add_timetable" scroll={false}>
            <div className="flex flex-row items-center lg:space-x-2 space-x-1 ">
              <UserAddIcon className="h-7 cursor-pointer text-gray-500" />
              <p className="text-gray-600 cursor-pointer text-sm lg:text-lg  font-bold py-10">
                Add Timetable
              </p>
            </div>
          </Link>
        </div>
        <div>
          <div className="space-y-4 bg-gray-50 shadow-xl p-4 rounded-lg">
            <p>faf</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
