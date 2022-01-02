import react, { useState } from "react";
import {
  CalculatorIcon,
  CashIcon,
  CheckCircleIcon,
  BookOpenIcon,
  GlobeIcon,
  HomeIcon,
  OfficeBuildingIcon,
  UserAddIcon,
  UserGroupIcon,
  UsersIcon,
  MenuAlt1Icon,
  BellIcon,
  ChatIcon,
  XIcon,
  TableIcon,
  ClockIcon,
  MailIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { AcademicCapIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const Sidebar = () => {
  const rtr = useRouter();
  let patternMatch = rtr.pathname;

  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="w-2/12 hidden lg:block max-h-full border-r-2 p-7">
        <div className="text-gray-600 flex items-center ">
          <AcademicCapIcon className="h-12" />
          SMS
        </div>
        <div className="mt-10 space-y-4">
          <p className="text-lg font-bold text-blue-600">Menu</p>
          <Link href="/parent" scroll={false}>
            <div
              className={`${
                rtr.pathname === "/parent" ? `text-gray-900` : `text-gray-500 `
              } cursor-pointer flex items-center space-x-6`}
            >
              <HomeIcon className="h-8" />
              <p className="text-lg">Home</p>
            </div>
          </Link>
          <Link href="/parent/school" scroll={false}>
            <div
              className={`${
                rtr.pathname === "/parent/school"
                  ? `text-gray-900`
                  : `text-gray-500 `
              } cursor-pointer flex items-center space-x-6`}
            >
              <OfficeBuildingIcon className="h-8" />
              <p className="text-lg">School</p>
            </div>
          </Link>
          <Link href="/parent/timetable" scroll={false}>
            <div
              className={`${
                rtr.pathname === "/parent/timetable"
                  ? `text-gray-900`
                  : `text-gray-500 `
              } cursor-pointer flex items-center space-x-6`}
            >
              <TableIcon className="h-8" />
              <p className="text-lg">TimeTable</p>
            </div>
          </Link>

          <div>
            <Link href="/parent/grade" scroll={false}>
              <div
                className={`${
                  patternMatch.match(/grade/g)
                    ? `text-gray-900`
                    : `text-gray-500 `
                } cursor-pointer flex items-center space-x-6 text-lg`}
              >
                <CheckCircleIcon className="h-8" />
                <p className="text-lg">Grade</p>
              </div>
            </Link>
          </div>
          <Link href="/parent/assignment" scroll={false}>
            <div
              className={`${
                rtr.pathname === "/parent/assignment"
                  ? `text-gray-900`
                  : `text-gray-500 `
              } cursor-pointer flex items-center space-x-6`}
            >
              <BookOpenIcon className="h-8" />
              <p className="text-lg">Assignment</p>
            </div>
          </Link>

          <Link href="/parent/resources" scroll={false}>
            <div
              className={`${
                patternMatch.match(/resources/g)
                  ? `text-gray-900`
                  : `text-gray-500 `
              } cursor-pointer flex items-center space-x-6 text-lg`}
            >
              <GlobeIcon className="h-8" />
              <p className="text-lg">Resources</p>
            </div>
          </Link>
        </div>
      </div>
      {/* mobile nav */}
      {toggle ? (
        <div className="bg-white w-full h-screen fixed z-50">
          <div
            onClick={() => {
              setToggle(false);
            }}
            className="absolute top-0 right-0 p-4"
          >
            <XIcon className="h-9 cursor-pointer" />
          </div>
          <div className="mt-3 space-y-4 p-5 flex flex-col justify-center items-start">
            <p className="text-lg font-bold text-blue-600">Menu</p>
            <Link href="/parent">
              <div
                onClick={() => {
                  setToggle(false);
                }}
                className={`${
                  rtr.pathname === "/parent"
                    ? `text-gray-900`
                    : `text-gray-500 `
                } cursor-pointer flex items-center space-x-6`}
              >
                <HomeIcon className="h-10" />
                <p className="text-xl">Home</p>
              </div>
            </Link>
            <Link href="/parent/school">
              <div
                className={`${
                  rtr.pathname === "/parent/school"
                    ? `text-gray-900`
                    : `text-gray-500 `
                } cursor-pointer flex items-center space-x-6`}
              >
                <OfficeBuildingIcon className="h-10" />
                <p className="text-xl">School</p>
              </div>
            </Link>
            <Link href="/parent/timetable">
              <div
                className={`${
                  rtr.pathname === "/parent/timetable"
                    ? `text-gray-900`
                    : `text-gray-500 `
                } cursor-pointer flex items-center space-x-6`}
              >
                <TableIcon className="h-10" />
                <p className="text-xl">Time Table</p>
              </div>
            </Link>

            <div>
              <Link href="/parent/grade" scroll={false}>
                <div
                  className={`${
                    patternMatch.match(/grade/g)
                      ? `text-gray-900`
                      : `text-gray-500 `
                  } cursor-pointer flex items-center space-x-6 text-lg`}
                >
                  <CheckCircleIcon className="h-10" />
                  <p className="text-lg">Grade</p>
                </div>
              </Link>
            </div>
            <Link href="/parent/assignment" scroll={false}>
              <div
                className={`${
                  rtr.pathname === "/parent/assignment"
                    ? `text-gray-900`
                    : `text-gray-500 `
                } cursor-pointer flex items-center space-x-6`}
              >
                <BookOpenIcon className="h-10" />
                <p className="text-lg">Assignment</p>
              </div>
            </Link>

            <Link href="/parent/resources" scroll={false}>
              <div
                className={`${
                  patternMatch.match(/resources/g)
                    ? `text-gray-900`
                    : `text-gray-500 `
                } cursor-pointer flex items-center space-x-6 text-lg`}
              >
                <GlobeIcon className="h-10" />
                <p className="text-lg">Resources</p>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="bg-white lg:hidden fixed w-full px-5 flex flex-row justify-between items-center h-20  shadow-xl">
        <div
          className="cursor-pointer"
          onClick={() => {
            setToggle(true);
          }}
        >
          <MenuAlt1Icon className="h-9" />
        </div>
        <div className="flex flex-row items-center justify-end space-x-7 text-gray-500">
          <Link href="/parent/notification">
            <div className=" relative cursor-pointer">
              <BellIcon className="h-7" />
              <span className="absolute -top-2 -right-1 text-xs text-center flex justify-center items-center bg-red-500 text-white rounded-full w-5 h-5">
                25
              </span>
            </div>
          </Link>
          <Link href="/parent/message">
            <div className="relative cursor-pointer">
              <MailIcon className="h-7" />
              <span className="absolute -top-2 -right-1 text-xs text-center flex justify-center items-center bg-red-500 text-white rounded-full w-5 h-5">
                5
              </span>
            </div>
          </Link>
          <div className="bg-user-icon w-9 h-9 rounded-full bg-cover bg-center"></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
