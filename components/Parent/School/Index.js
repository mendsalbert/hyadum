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
