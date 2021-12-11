import { SearchIcon, UserGroupIcon } from "@heroicons/react/outline";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <div className="w-7/12 p-7">
      <SearchBar />
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
  );
};

export default Home;
