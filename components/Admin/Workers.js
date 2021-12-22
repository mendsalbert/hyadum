import { UserGroupIcon, UserAddIcon } from "@heroicons/react/outline";
import SearchBar from "./SearchBar";
import Link from "next/link";
const Home = () => {
  return (
    <div className="w-9/12 p-7">
      <SearchBar showPrev={false} />

      <div className="flex flex-row justify-between items-center">
        <p className="text-blue-600 text-2xl font-bold py-10">Workers</p>
        <Link href="student/add_student" scroll={false}>
          <div className="flex flex-row items-center space-x-2 ">
            <UserAddIcon className="h-7 cursor-pointer text-gray-500" />
            <p className="text-gray-600 cursor-pointer text-lg font-bold py-10">
              Add Staff (User)
            </p>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="bg-green-100 rounded-xl p-3">
          <div className="flex justify-between items-center  text-green-900">
            <UserGroupIcon className="h-10" />
          </div>
          <p className=" text-green-900 text-2xl font-bold">5</p>
          <p className="text-green-900 ">Adminstration Staff</p>
        </div>
        <Link href="workers/teachers/all_teachers">
          <div className="bg-purple-100 rounded-xl p-3 cursor-pointer">
            <div className="flex justify-between items-center  text-purple-900">
              <UserGroupIcon className="h-10" />
            </div>
            <p className=" text-purple-900 text-2xl font-bold">35</p>
            <p className="text-purple-900 ">Teaching Staff</p>
          </div>
        </Link>
        <div className="bg-yellow-100 rounded-xl p-3">
          <div className="flex justify-between items-center  text-yellow-900">
            <UserGroupIcon className="h-10" />
          </div>
          <p className=" text-yellow-900 text-2xl font-bold">20</p>
          <p className="text-yellow-900 ">Non Teaching Staff</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
