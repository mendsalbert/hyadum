import {
  FolderIcon,
  PlusCircleIcon,
  UserAddIcon,
} from "@heroicons/react/outline";
import SearchBar from "../SearchBar";
import Link from "next/link";
function Student() {
  return (
    <div className="w-9/12 p-7">
      <SearchBar showPrev={true} />
      <div className="flex flex-row justify-between items-center">
        <p className="text-blue-600 text-2xl font-bold py-10">List of Levels</p>
        <div className="flex flex-row items-center space-x-3 ">
          <Link href="student/add_student" scroll={false}>
            <div className="flex flex-row items-center space-x-2 ">
              <UserAddIcon className="h-7 cursor-pointer text-gray-500" />
              <p className="text-gray-600 cursor-pointer text-lg font-bold py-10">
                Add Student
              </p>
            </div>
          </Link>
          <Link href="student/add_level" scroll={false}>
            <div className="flex flex-row items-center space-x-2 ">
              <PlusCircleIcon className="h-7 cursor-pointer text-gray-500" />
              <p className="text-gray-600 cursor-pointer text-lg font-bold py-10">
                Add Level
              </p>
            </div>
          </Link>
        </div>
      </div>
      {/* <p className="text-blue-600 text-2xl font-bold py-10">List of Levels</p> */}
      <div className="grid grid-cols-4 gap-5">
        <Link href="student/all_student">
          <div className="bg-green-100 rounded-xl p-3 cursor-pointer">
            <div className="flex justify-between items-center  text-green-900">
              <FolderIcon className="h-16" />
            </div>
            <p className=" text-green-900 text-xl font-bold">35 Students</p>
            <p className="text-green-900 ">Nursery </p>
          </div>
        </Link>
        <Link href="student/all_student">
          <div className="bg-purple-100 rounded-xl p-3 cursor-pointer">
            <div className="flex justify-between items-center  text-purple-900">
              <FolderIcon className="h-16" />
            </div>
            <p className=" text-purple-900 text-xl font-bold">35 Students</p>
            <p className="text-purple-900 ">Kindergarten 1</p>
          </div>
        </Link>
        <div className="bg-yellow-100 rounded-xl p-3">
          <div className="flex justify-between items-center  text-yellow-900">
            <FolderIcon className="h-16" />
          </div>
          <p className=" text-yellow-900 text-xl font-bold">40 Students</p>
          <p className="text-yellow-900 ">Kindergarten 2</p>
        </div>
        <Link href="student/all_student">
          <div className="bg-gray-100 rounded-xl p-3 cursor-pointer">
            <div className="flex justify-between items-center  text-gray-900">
              <FolderIcon className="h-16" />
            </div>
            <p className=" text-gray-900 text-xl font-bold">35 Students</p>
            <p className="text-gray-900 ">Primary 1</p>
          </div>
        </Link>
        <Link href="student/all_student">
          <div className="bg-blue-100 rounded-xl p-3 cursor-pointer">
            <div className="flex justify-between items-center  text-blue-900">
              <FolderIcon className="h-16" />
            </div>
            <p className=" text-blue-900 text-xl font-bold">35 Students</p>
            <p className="text-blue-900 ">Primary 2</p>
          </div>
        </Link>
        <Link href="student/all_student">
          <div className="bg-pink-100 rounded-xl p-3 cursor-pointer">
            <div className="flex justify-between items-center  text-pink-900">
              <FolderIcon className="h-16" />
            </div>
            <p className=" text-pink-900 text-xl font-bold">35 Students</p>
            <p className="text-pink-900 ">Primary 3</p>
          </div>
        </Link>
        <Link href="student/all_student">
          <div className="bg-indigo-100 rounded-xl p-3 cursor-pointer">
            <div className="flex justify-between items-center  text-indigo-900">
              <FolderIcon className="h-16" />
            </div>
            <p className=" text-indigo-900 text-xl font-bold">35 Students</p>
            <p className="text-indigo-900 ">Primary 4</p>
          </div>
        </Link>
        <Link href="student/all_student">
          <div className="bg-green-100 rounded-xl p-3 cursor-pointer">
            <div className="flex justify-between items-center  text-green-900">
              <FolderIcon className="h-16" />
            </div>
            <p className=" text-green-900 text-xl font-bold">35 Students</p>
            <p className="text-green-900 ">Primary 5 </p>
          </div>
        </Link>
        <Link href="student/all_student">
          <div className="bg-yellow-100 rounded-xl p-3 cursor-pointer">
            <div className="flex justify-between items-center  text-yellow-900">
              <FolderIcon className="h-16" />
            </div>
            <p className=" text-yellow-900 text-xl font-bold">35 Students</p>
            <p className="text-yellow-900 ">Primary 6</p>
          </div>
        </Link>
        <Link href="student/all_student">
          <div className="bg-gray-100 rounded-xl p-3 cursor-pointer">
            <div className="flex justify-between items-center  text-gray-900">
              <FolderIcon className="h-16" />
            </div>
            <p className=" text-gray-900 text-xl font-bold">35 Students</p>
            <p className="text-gray-900 ">JHS 1</p>
          </div>
        </Link>
        <Link href="student/all_student">
          <div className="bg-purple-100 rounded-xl p-3 cursor-pointer">
            <div className="flex justify-between items-center  text-purple-900">
              <FolderIcon className="h-16" />
            </div>
            <p className=" text-purple-900 text-xl font-bold">35 Students</p>
            <p className="text-purple-900 ">JHS 2</p>
          </div>
        </Link>
        <Link href="student/all_student">
          <div className="bg-indigo-100 rounded-xl p-3 cursor-pointer">
            <div className="flex justify-between items-center  text-indigo-900">
              <FolderIcon className="h-16" />
            </div>
            <p className=" text-indigo-900 text-xl font-bold">35 Students</p>
            <p className="text-indigo-900 ">JHS 3</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Student;
