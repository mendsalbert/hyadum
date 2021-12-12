import { UserGroupIcon } from "@heroicons/react/outline";
import SearchBar from "./SearchBar";
import Link from "next/link";
const Home = () => {
  return (
    <div className="w-7/12 p-7">
      <SearchBar showPrev={false} />
      <p className="text-blue-600 text-2xl font-bold py-10">
        Welcome back Mends Albert
      </p>
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
