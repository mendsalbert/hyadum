import {
  AdjustmentsIcon,
  BookOpenIcon,
  CashIcon,
  MinusCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <div className="lg:w-9/12 lg:p-7 w-full p-4 ">
      <SearchBar showPrev={false} />
      <p className="text-blue-600 text-2xl font-bold pt-10 pb-2">
        Welcome back Sir Mends Albert.
      </p>
      <p className="text-lg text-gray-600 pb-4">
        Last login : 4:00PM 3rd December, 2021
      </p>
      <div className="grid lg:grid-cols-2 lg:gap-5 grid-cols-1 gap-4 mb-6 ">
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
      </div>
    </div>
  );
};

export default Home;
