import {
  ArrowCircleRightIcon,
  ClipboardListIcon,
  FolderIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import SearchBar from "../SearchBar";
import Link from "next/link";
function Course() {
  return (
    <div className="w-9/12 p-7">
      <SearchBar showPrev={true} />
      <div className="flex flex-row justify-between items-center">
        <p className="text-blue-600 text-2xl font-bold py-10">
          List of Courses
        </p>
        <div className="flex flex-row items-center space-x-3 ">
          <Link href="course/add_course" scroll={false}>
            <div className="flex flex-row items-center space-x-2 ">
              <PlusCircleIcon className="h-7 cursor-pointer text-gray-500" />
              <p className="text-gray-600 cursor-pointer text-lg font-bold py-10">
                Add Course
              </p>
            </div>
          </Link>
        </div>
      </div>
      {/* <p className="text-blue-600 text-2xl font-bold py-10">List of Levels</p> */}
      <div className="grid grid-cols-5 gap-5">
        <div className="bg-green-100 rounded-xl p-3 cursor-pointer">
          <div className="flex justify-between items-center  text-green-900">
            <ClipboardListIcon className="h-16" />
          </div>
          <p className=" text-green-900 text-xl font-bold">Nursery</p>
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

        <div className="bg-green-100 rounded-xl p-3 cursor-pointer">
          <div className="flex justify-between items-center  text-green-900">
            <ClipboardListIcon className="h-16" />
          </div>
          <p className=" text-green-900 text-xl font-bold">KG 1 </p>
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

        <div className="bg-green-100 rounded-xl p-3 cursor-pointer">
          <div className="flex justify-between items-center  text-green-900">
            <ClipboardListIcon className="h-16" />
          </div>
          <p className=" text-green-900 text-xl font-bold">KG 2</p>
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

        <div className="bg-green-100 rounded-xl p-3 cursor-pointer">
          <div className="flex justify-between items-center  text-green-900">
            <ClipboardListIcon className="h-16" />
          </div>
          <p className=" text-green-900 text-xl font-bold">KG 2</p>
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

        <div className="bg-green-100 rounded-xl p-3 cursor-pointer">
          <div className="flex justify-between items-center  text-green-900">
            <ClipboardListIcon className="h-16" />
          </div>
          <p className=" text-green-900 text-xl font-bold">KG 2</p>
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

        <div className="bg-green-100 rounded-xl p-3 cursor-pointer">
          <div className="flex justify-between items-center  text-green-900">
            <ClipboardListIcon className="h-16" />
          </div>
          <p className=" text-green-900 text-xl font-bold">KG 2</p>
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

        <div className="bg-green-100 rounded-xl p-3 cursor-pointer">
          <div className="flex justify-between items-center  text-green-900">
            <ClipboardListIcon className="h-16" />
          </div>
          <p className=" text-green-900 text-xl font-bold">KG 2</p>
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
      </div>
    </div>
  );
}

export default Course;
