import {
  ArrowCircleRightIcon,
  ClipboardListIcon,
} from "@heroicons/react/outline";
import SearchBar from "../SearchBar";
const Index = () => {
  return (
    <div className="w-full lg:w-9/12 lg:p-7 p-4 ">
      <SearchBar showPrev={true} />

      <div className="w-full pt-3 ">
        <div className="bg-green-100 rounded-xl p-3 cursor-pointer">
          <div className="flex justify-between items-center  text-green-900">
            <ClipboardListIcon className="h-16" />
          </div>
          <p className=" text-green-900 text-xl font-bold">Class 6 courses</p>
          <div className="text-green-900">
            <div className="flex space-x-1 items-center">
              <ArrowCircleRightIcon className="h-5" />
              <p className="text-green-900 ">Course 1</p>
            </div>
            <div className="flex space-x-1 items-center">
              <ArrowCircleRightIcon className="h-5" />
              <p className="text-green-900 ">Course 1</p>
            </div>
            <div className="flex space-x-1 items-center">
              <ArrowCircleRightIcon className="h-5" />
              <p className="text-green-900 ">Course 1</p>
            </div>
            <div className="flex space-x-1 items-center">
              <ArrowCircleRightIcon className="h-5" />
              <p className="text-green-900 ">Course 1</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 pt-4">
          <div className="bg-gray-100 p-6  border-2  ">English 8:00PM</div>
          <div className="bg-gray-100 p-6  border-2  ">English 8:00PM</div>
          <div className="bg-gray-100 p-6  border-2  ">English 8:00PM</div>
          <div className="bg-gray-100 p-6  border-2  ">English 8:00PM</div>
          <div className="bg-gray-100 p-6  border-2  ">English 8:00PM</div>
          <div className="bg-gray-100 p-6  border-2  ">English 8:00PM</div>
          <div className="bg-gray-100 p-6  border-2  ">English 8:00PM</div>
          <div className="bg-gray-100 p-6  border-2  ">English 8:00PM</div>
          <div className="bg-gray-100 p-6  border-2  ">English 8:00PM</div>
          <div className="bg-gray-100 p-6  border-2  ">English 8:00PM</div>
          <div className="bg-gray-100 p-6  border-2  ">English 8:00PM</div>
          <div className="bg-gray-100 p-6  border-2  ">English 8:00PM</div>
          <div className="bg-gray-100 p-6  border-2  ">English 8:00PM</div>
          <div className="bg-gray-100 p-6  border-2  ">English 8:00PM</div>
          <div className="bg-gray-100 p-6  border-2  ">English 8:00PM</div>
          <div className="bg-gray-100 p-6  border-2  ">English 8:00PM</div>
          <div className="bg-gray-100 p-6  border-2  ">English 8:00PM</div>
          <div className="bg-gray-100 p-6  border-2  ">English 8:00PM</div>
          <div className="bg-gray-100 p-6  border-2  ">English 8:00PM</div>
          <div className="bg-gray-100 p-6  border-2  ">English 8:00PM</div>
          <div className="bg-gray-100 p-6  border-2  ">English 8:00PM</div>
          <div className="bg-gray-100 p-6  border-2  ">English 8:00PM</div>
          <div className="bg-gray-100 p-6  border-2  ">English 8:00PM</div>
          <div className="bg-gray-100 p-6  border-2  ">English 8:00PM</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
