import { BellIcon, ChatIcon, MailIcon } from "@heroicons/react/outline";
import Link from "next/link";
const SideRight = () => {
  return (
    <div className="w-full p-4 hidden lg:block lg:w-3/12 bg-gray-50 lg:p-7">
      <div className="flex flex-row items-center justify-end space-x-7 text-gray-500">
        <div className="relative cursor-pointer">
          <BellIcon className="h-7" />
          <span className="absolute -top-2 -right-1 text-xs text-center flex justify-center items-center bg-red-500 text-white rounded-full w-5 h-5">
            25
          </span>
        </div>
        <Link href="/parent/message">
          <div className="relative  cursor-pointer">
            <MailIcon className="h-7" />
            <span className="absolute -top-2 -right-1 text-xs text-center flex justify-center items-center bg-red-500 text-white rounded-full w-5 h-5">
              5
            </span>
          </div>
        </Link>
        <div className="bg-user-icon w-9 h-9 rounded-full bg-cover bg-center"></div>
      </div>

      <div>
        <div className="space-y-5 mt-12">
          <p className="text-blue-600 font-Montserrat text-xl">Add a task</p>
          <input
            type="text"
            placeholder="Task Name"
            className="bg-white rounded-lg p-2 w-full  font-Montserrat  focus:outline-none"
          />
          {/* <div className="flex flex-row justify-center items-center space-x-2"> */}
          <input
            type="date"
            placeholder="Task Name"
            className="bg-white rounded-lg p-2 w-full  font-Montserrat  focus:outline-none"
          />
          <input
            type="time"
            placeholder="Task Name"
            className="bg-white rounded-lg p-2 w-full  font-Montserrat  focus:outline-none"
          />
          {/* </div> */}
          <div className="p-2 w-full bg-blue-600 font-Montserrat text-white text-center rounded-lg cursor-pointer">
            Add
          </div>
        </div>
        <div>
          {/* <hr className="text-gray-500 w-full " /> */}
          <p className="text-blue-600  pt-10 pb-2 font-Montserrat text-xl">
            Tasks
          </p>
          <div>
            <div className="space-y-4">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center space-x-1 ">
                  <div className="bg-blue-600 w-10 h-10 rounded-lg"></div>
                  <div className="flex flex-col text-gray-600">
                    <p className="text-lg">Staff Meeting</p>
                    <p className="text-sm">Successfull</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">12:30PM</p>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center space-x-1 ">
                  <div className="bg-pink-600 w-10 h-10 rounded-lg"></div>
                  <div className="flex flex-col text-gray-600">
                    <p className="text-lg">Electricity Bill</p>
                    <p className="text-sm">Successfull</p>
                  </div>
                </div>
                <p className="text-gray-600">40.00</p>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center space-x-1 ">
                  <div className="bg-purple-600 w-10 h-10 rounded-lg"></div>
                  <div className="flex flex-col text-gray-600">
                    <p className="text-lg">Electricity Bill</p>
                    <p className="text-sm">Successfull</p>
                  </div>
                </div>
                <p className="text-gray-600">40.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideRight;
