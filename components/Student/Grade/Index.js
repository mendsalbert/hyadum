import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  UserAddIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
const Index = (props) => {
  const [activePag, setActivePag] = useState(0);
  const [modal, setModal] = useState(false);
  const products = [
    {
      id: "1",
      name: "Mends Albert",
      class: "5",
      salary: "80.00",
      age: "22",
    },
  ];

  return (
    <div className="w-full lg:w-9/12 lg:p-7 p-4">
      <SearchBar showPrev={true} />

      <div className="flex flex-row justify-between items-center">
        <p className="text-blue-600 text-2xl font-bold py-10">
          Mends Albert get access to your grades
        </p>
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
                          <Link href="grade/single_student">
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="space-y-2">
                            <Link href="grade/assesment">
                              <div className="bg-blue-600 px-4 py-1 text-white text-center rounded-md cursor-pointer">
                                Assesment
                              </div>
                            </Link>

                            <Link href="grade/report">
                              <div className="bg-green-600 px-4 py-1 text-white text-center rounded-md cursor-pointer">
                                Report
                              </div>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
