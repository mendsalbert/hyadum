import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  UserAddIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

const Home = (props) => {
  const [activePag, setActivePag] = useState(0);
  const products = [
    {
      id: "1",
      name: "Mends Albert",
      class: "5",
      salary: "80.00",
      age: "22",
    },
    {
      id: "2",
      name: "Augustine Mends",
      class: "6",
      salary: "85.00",
      age: "25",
    },
    {
      id: "3",
      name: "Mends Priscilla",
      class: "2",
      salary: "80.00",
      age: "20",
    },
    {
      id: "4",
      name: "Elvis Mends",
      class: "1",
      salary: "80.00",
      age: "14",
    },
    {
      id: "5",
      name: "Irene Mends",
      class: "4",
      salary: "80.00",
      age: "12",
    },
  ];

  const resultsPerPage = 10;
  const divides = Math.round(5 / resultsPerPage);

  const paginationNumber = () => {
    const row = [];
    for (var i = 1; i <= divides; i++) {
      row.push(i);
    }
    return row;
  };

  const paginationNavigation = (num = 0, val = 0, next) => {
    if (num === val) {
      setActivePag(num);
    } else {
      setActivePag(0);
    }
    // console.log(num);
    //when this function is clicked it is going to trigger something in the database to make this pagination posible
  };

  const paginationNextPrev = (type) => {
    if (type === "next") {
      var curPage = activePag;
      setActivePag(curPage >= divides ? (curPage = 1) : ++curPage);
    }
    //curpage page value will be used to do the backend logic
    else if (type === "prev") {
      var curPage = activePag;
      setActivePag(curPage <= 1 ? (curPage = divides) : --curPage);
    }
  };

  return (
    <div className="w-7/12 p-7">
      <SearchBar showPrev={true} />

      <div className="flex flex-row justify-between items-center">
        <p className="text-blue-600 text-2xl font-bold py-10">
          All Teachers (50)
        </p>
        <Link href="add_teacher" scroll={false}>
          <div className="flex flex-row items-center space-x-2 ">
            <UserAddIcon className="h-7 cursor-pointer text-gray-500" />
            <p className="text-gray-600 cursor-pointer text-lg font-bold py-10">
              Add Teacher
            </p>
          </div>
        </Link>
      </div>

      <div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Class
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Salary
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Age
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <Link href="single_teacher">
                            <div className=" mr-2 rounded-lg w-32 ">
                              <div className="bg-user-icon w-16 h-16 rounded-full bg-cover bg-center"></div>
                            </div>
                          </Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {product.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {product.class}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {product.salary}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {product.age}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between items-end">
          <div className="flex flex-row items-center space-x-5 mt-4">
            <p
              className="bg-gray-400 text-white p-1  cursor-pointer rounded-lg"
              onClick={() => {
                paginationNextPrev("prev");
              }}
            >
              <ChevronLeftIcon className="h-7" />
            </p>
            {paginationNumber().map((val, i) => (
              <p
                className={`text-gray-700 cursor-pointer ${
                  activePag === i + 1
                    ? "bg-gray-500 text-gray-50 py-1 px-3 rounded-lg"
                    : ""
                }`}
                onClick={() => paginationNavigation(i + 1, val)}
              >
                {i + 1}
              </p>
            ))}
            <p
              className="bg-gray-400 text-white p-1 cursor-pointer rounded-lg"
              onClick={() => {
                paginationNextPrev("next");
              }}
            >
              <ChevronRightIcon className="h-7" />
            </p>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-between items-center space-x-8">
        <div className="bg-green-100 rounded-xl p-3">
          <div className="flex justify-between items-center  text-green-900">
            <UserGroupIcon className="h-10" />
          </div>
          <p className=" text-green-900 text-2xl font-bold">10K</p>
          <p className="text-green-900 ">Number of Students</p>
        </div>
        <div className="bg-purple-100 rounded-xl p-3">
          <div className="flex justify-between items-center  text-purple-900">
            <UserGroupIcon className="h-10" />
          </div>
          <p className=" text-purple-900 text-2xl font-bold">12.1K</p>
          <p className="text-purple-900 ">Number of Teachers</p>
        </div>
        <div className="bg-yellow-100 rounded-xl p-3">
          <div className="flex justify-between items-center  text-yellow-900">
            <UserGroupIcon className="h-10" />
          </div>
          <p className=" text-yellow-900 text-2xl font-bold">30K</p>
          <p className="text-yellow-900 ">Number of Staff</p>
        </div>
        <div className="bg-blue-100 rounded-xl p-3">
          <div className="flex justify-between items-center  text-blue-900">
            <UserGroupIcon className="h-10" />
          </div>
          <p className=" text-blue-900 text-2xl font-bold">40K</p>
          <p className="text-blue-900 ">Number of Buses</p>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
