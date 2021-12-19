import react, { useState, useEffect } from "react";
import {
  CalculatorIcon,
  CashIcon,
  CheckCircleIcon,
  ClockIcon,
  GlobeIcon,
  HomeIcon,
  OfficeBuildingIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { AcademicCapIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const Sidebar = () => {
  const rtr = useRouter();
  const [attendanceSubMenu, setAttendanceSubMenu] = useState(false);

  return (
    <div className="w-2/12 max-h-full border-r-2 p-7">
      <div className="text-gray-600 flex items-center ">
        <AcademicCapIcon className="h-12" />
        SMS
      </div>
      <div className="mt-10 space-y-4">
        <p className="text-lg font-bold text-blue-600">Menu</p>
        <Link href="/admin" scroll={false}>
          <div
            className={`${
              rtr.pathname === "/admin" ? `text-gray-900` : `text-gray-500 `
            } cursor-pointer flex items-center space-x-6`}
          >
            <HomeIcon className="h-8" />
            <p className="text-lg">Home</p>
          </div>
        </Link>
        <Link href="/admin/school" scroll={false}>
          <div
            className={`${
              rtr.pathname === "/admin/school"
                ? `text-gray-900`
                : `text-gray-500 `
            } cursor-pointer flex items-center space-x-6`}
          >
            <OfficeBuildingIcon className="h-8" />
            <p className="text-lg">School</p>
          </div>
        </Link>
        <Link href="/admin/workers/" scroll={false}>
          <div
            className={`${
              rtr.pathname === "/admin/workers"
                ? `text-gray-900`
                : `text-gray-500 `
            } cursor-pointer flex items-center space-x-6`}
          >
            <UserGroupIcon className="h-8" />
            <p className="text-lg">Workers</p>
          </div>
        </Link>
        <Link href="/admin/student" scroll={false}>
          <div
            className={`${
              rtr.pathname === "/admin/student"
                ? `text-gray-900`
                : `text-gray-500 `
            } cursor-pointer flex items-center space-x-6`}
          >
            <UsersIcon className="h-8" />
            <p className="text-lg">Students</p>
          </div>
        </Link>

        <div>
          <Link href="/admin/attendance" scroll={false}>
            <div
              className={`${
                rtr.pathname == "/admin/attendance"
                  ? `text-gray-900`
                  : `text-gray-500 `
              } cursor-pointer flex items-center space-x-6 text-lg`}
            >
              <ClockIcon className="h-8" />
              <p>Attendance</p>
              {/* sub menu for attendance */}
            </div>
          </Link>

          {rtr.pathname === "/admin/attendance/[all]" ? (
            <div className="ml-16 pt-2 space-y-2">
              {/* <Link href="/admin/attendance/income" scroll={false}> */}
              <p
                onClick={() => {
                  rtr.push("/admin/attendance/income");
                  // setAttendanceSubMenu(true);
                }}
                className={`text-lg text-gray-500 ${
                  rtr.pathname === "/admin/attendance/income"
                    ? "text-gray-900"
                    : ""
                }  cursor-pointer`}
              >
                Income
              </p>
              {/* </Link> */}
              <p className="text-lg text-gray-500 cursor-pointer">Expenses</p>
              <p className="text-lg text-gray-500 cursor-pointer">Salaries</p>
              <p className="text-lg text-gray-500 cursor-pointer">
                Staff Payments
              </p>
              <p className="text-lg text-gray-500 cursor-pointer">
                Transactions
              </p>
              <p className="text-lg text-gray-500 cursor-pointer">
                Staff Balance
              </p>
              <p className="text-lg text-gray-500 cursor-pointer">
                Print Statement
              </p>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="text-gray-500 cursor-pointer flex items-center space-x-6">
          <CalculatorIcon className="h-8" />
          <p className="text-lg">Accounting</p>
        </div>
        <div className="text-gray-500 cursor-pointer flex items-center space-x-6">
          <CheckCircleIcon className="h-8" />
          <p className="text-lg">Grades</p>
        </div>
        <div className="text-gray-500 cursor-pointer flex items-center space-x-6">
          <CashIcon className="h-8" />
          <p className="text-lg">Student Fees</p>
        </div>
        <div className="text-gray-500 cursor-pointer flex items-center space-x-6">
          <GlobeIcon className="h-8" />
          <p className="text-lg">Resources</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
