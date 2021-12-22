import react, { useState, useEffect } from "react";
import urlRegex from "url-regex";
import {
  CalculatorIcon,
  CashIcon,
  CheckCircleIcon,
  ClockIcon,
  GlobeIcon,
  HomeIcon,
  OfficeBuildingIcon,
  UserAddIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { AcademicCapIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const Sidebar = () => {
  const rtr = useRouter();
  let patternMatch = rtr.pathname;

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
        <Link href="/admin/admission" scroll={false}>
          <div
            className={`${
              rtr.pathname === "/admin/admission"
                ? `text-gray-900`
                : `text-gray-500 `
            } cursor-pointer flex items-center space-x-6`}
          >
            <UserAddIcon className="h-8" />
            <p className="text-lg">Admission</p>
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

        {/* <div>
          <Link href="/admin/attendance" scroll={false}>
            <div
              className={`${
                patternMatch.match(/attendance/g)
                  ? `text-gray-900`
                  : `text-gray-500 `
              } cursor-pointer flex items-center space-x-6 text-lg`}
            >
              <ClockIcon className="h-8" />
              <p>Attendance</p>
            </div>
          </Link>

          {patternMatch.match(/attendance/g) ? (
            <div className="ml-16 pt-2 space-y-2">
              <Link href="/admin/attendance/income" scroll={false}>
                <p
                  className={`text-lg text-gray-500 ${
                    rtr.pathname === "/admin/attendance/income"
                      ? "text-gray-900"
                      : ""
                  }  cursor-pointer`}
                >
                  Income
                </p>
              </Link>
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
        </div> */}
        <div>
          <Link href="/admin/accounting" scroll={false}>
            <div
              className={`${
                patternMatch.match(/accounting/g)
                  ? `text-gray-900`
                  : `text-gray-500 `
              } cursor-pointer flex items-center space-x-6 text-lg`}
            >
              <CalculatorIcon className="h-8" />
              <p className="text-lg">Accounting</p>
            </div>
          </Link>
          {patternMatch.match(/accounting/g) ? (
            <div className="ml-16 pt-2 space-y-2">
              <Link href="/admin/accounting/income" scroll={false}>
                <p
                  className={`text-lg text-gray-500 ${
                    rtr.pathname === "/admin/accounting/income"
                      ? "text-gray-900"
                      : ""
                  }  cursor-pointer`}
                >
                  Income
                </p>
              </Link>
              <Link href="/admin/accounting/expense" scroll={false}>
                <p
                  className={`text-lg text-gray-500 ${
                    rtr.pathname === "/admin/accounting/expense"
                      ? "text-gray-900"
                      : ""
                  }  cursor-pointer`}
                >
                  Expenses
                </p>
              </Link>
              <Link href="/admin/workers/" scroll={false}>
                <p
                  className={`text-lg text-gray-500 ${
                    rtr.pathname === "/admin/accounting/salary"
                      ? "text-gray-900"
                      : ""
                  }  cursor-pointer`}
                >
                  Salaries
                </p>
              </Link>
              {/* <Link href="/admin/accounting/staff_payment">
                <p
                  className={`text-lg text-gray-500 ${
                    rtr.pathname === "/admin/accounting/staff_payment"
                      ? "text-gray-900"
                      : ""
                  }  cursor-pointer`}
                >
                  Staff Payments
                </p>
              </Link> */}
              <Link href="/admin/accounting/transaction" scroll={false}>
                <p
                  className={`text-lg text-gray-500 ${
                    rtr.pathname === "/admin/accounting/transaction"
                      ? "text-gray-900"
                      : ""
                  }  cursor-pointer`}
                >
                  Transactions
                </p>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <Link href="/admin/grade" scroll={false}>
            <div
              className={`${
                patternMatch.match(/grade/g)
                  ? `text-gray-900`
                  : `text-gray-500 `
              } cursor-pointer flex items-center space-x-6 text-lg`}
            >
              <CheckCircleIcon className="h-8" />
              <p className="text-lg">Grades</p>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/admin/student" scroll={false}>
            <div
              className={`${
                patternMatch.match(/fees/g) ? `text-gray-900` : `text-gray-500 `
              } cursor-pointer flex items-center space-x-6 text-lg`}
            >
              <CashIcon className="h-8" />
              <p className="text-lg">Student Fees</p>
            </div>
          </Link>
          {/* {patternMatch.match(/fees/g) ? (
            <div className="ml-16 pt-2 space-y-2">
              <Link href="/admin/fees/payment" scroll={false}>
                <p
                  className={`${
                    patternMatch.match(/payment/g)
                      ? `text-gray-900`
                      : `text-gray-500 `
                  } cursor-pointer flex items-center space-x-6 text-lg`}
                >
                  Payment
                </p>
              </Link>
            </div>
          ) : (
            ""
          )} */}
        </div>
        <Link href="/admin/resources" scroll={false}>
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
  );
};

export default Sidebar;
