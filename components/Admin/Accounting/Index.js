import { CashIcon } from "@heroicons/react/outline";
import SearchBar from "../SearchBar";
const Accounting = () => {
  return (
    <div className="w-9/12 p-7">
      <SearchBar showPrev={false} />
      <p className="text-blue-600 text-2xl font-bold py-10">Summary</p>
      <div className="grid grid-cols-4 gap-5">
        <div className="bg-gray-100 rounded-xl p-3">
          <div className="flex justify-between items-center  text-gray-900">
            <CashIcon className="h-10" />
          </div>
          <p className=" text-gray-900 text-2xl font-bold">10K</p>
          <p className="text-gray-900 ">Total from incomes</p>
        </div>
        <div className="bg-purple-100 rounded-xl p-3">
          <div className="flex justify-between items-center  text-purple-900">
            <CashIcon className="h-10" />
          </div>
          <p className=" text-purple-900 text-2xl font-bold">12.1K</p>
          <p className="text-purple-900 ">Total from student payment</p>
        </div>
        <div className="bg-yellow-100 rounded-xl p-3">
          <div className="flex justify-between items-center  text-yellow-900">
            <CashIcon className="h-10" />
          </div>
          <p className=" text-yellow-900 text-2xl font-bold">30K</p>
          <p className="text-yellow-900 ">Total from expenses</p>
        </div>
        <div className="bg-blue-100 rounded-xl p-3">
          <div className="flex justify-between items-center  text-blue-900">
            <CashIcon className="h-10" />
          </div>
          <p className=" text-blue-900 text-2xl font-bold">40K</p>
          <p className="text-blue-900 ">Total from staff Payments</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-5">
        <div className="bg-green-100 rounded-xl p-3">
          <div className="flex justify-between items-center  text-green-900">
            <CashIcon className="h-20" />
          </div>
          <p className=" text-green-900 text-2xl font-bold">Ghc 50,000</p>
          <p className="text-green-900 ">General Balance</p>
        </div>
      </div>
    </div>
  );
};

export default Accounting;
