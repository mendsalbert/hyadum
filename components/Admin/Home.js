import {
  AdjustmentsIcon,
  CashIcon,
  MinusCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <div className="w-9/12 p-7">
      <SearchBar showPrev={false} />
      <p className="text-blue-600 text-2xl font-bold pt-10 pb-2">
        Welcome back Mends Albert
      </p>
      <p className="text-lg text-gray-600 pb-4">
        Last login : 4:00PM 3rd December, 2021
      </p>
      <div className="grid grid-cols-3 gap-5">
        <div className="bg-gray-100 rounded-xl p-3">
          <div className="flex justify-between items-center  text-gray-900">
            <UserGroupIcon className="h-10" />
          </div>
          <p className=" text-gray-900 text-2xl font-bold">900</p>
          <p className="text-gray-900 ">Number of Students</p>
        </div>
        <div className="bg-purple-100 rounded-xl p-3">
          <div className="flex justify-between items-center  text-purple-900">
            <UserGroupIcon className="h-10" />
          </div>
          <p className=" text-purple-900 text-2xl font-bold">60</p>
          <p className="text-purple-900 ">Number of Teachers</p>
        </div>
        <div className="bg-yellow-100 rounded-xl p-3">
          <div className="flex justify-between items-center  text-yellow-900">
            <UserGroupIcon className="h-10" />
          </div>
          <p className=" text-yellow-900 text-2xl font-bold">12</p>
          <p className="text-yellow-900 ">Number of Non-Teaching Staff</p>
        </div>
        {/* <div className="bg-blue-100 rounded-xl p-3">
          <div className="flex justify-between items-center  text-blue-900">
            <UserGroupIcon className="h-10" />
          </div>
          <p className=" text-blue-900 text-2xl font-bold">40K</p>
          <p className="text-blue-900 ">Number of Buses</p>
        </div> */}
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div className="bg-green-100 rounded-xl p-3">
          <div className="flex justify-between items-center  text-green-900">
            <CashIcon className="h-20" />
          </div>
          <p className=" text-green-900 text-2xl font-bold">Ghc 50,000</p>
          <p className="text-green-900 ">Total Revenue</p>
        </div>
        <div className="bg-red-100 rounded-xl p-3">
          <div className="flex justify-between items-center  text-red-900">
            <MinusCircleIcon className="h-20" />
          </div>
          <p className=" text-red-900 text-2xl font-bold">Ghc 5,000</p>
          <p className="text-red-900 ">Bills</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
