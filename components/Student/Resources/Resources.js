import { DownloadIcon } from "@heroicons/react/outline";
import SearchBar from "../SearchBar";

const Resource = () => {
  return (
    <div className="w-full p-4 lg:w-9/12 lg:p-7">
      <SearchBar showPrev={false} />
      <p className="text-blue-600 text-2xl font-bold py-10">Resources</p>
      <div className="flex flex-row justify-between items-center ">
        <p className="text-gray-600 text-lg">Student Handout</p>
        <div className="bg-blue-600 cursor-pointer flex flex-row  justify-between items-center rounded-md py-1 px-4 text-white">
          <DownloadIcon className="h-6 mr-2" />
          Download
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default Resource;
