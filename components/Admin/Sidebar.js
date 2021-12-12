import {
  CalculatorIcon,
  CogIcon,
  CreditCardIcon,
  HomeIcon,
  PhoneIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { AcademicCapIcon } from "@heroicons/react/solid";
import router, { useRouter } from "next/router";

const Sidebar = () => {
  const rtr = useRouter();

  return (
    <div className="w-2/12 h-screen border-r-2 p-7">
      <div className="text-gray-600 flex items-center ">
        <AcademicCapIcon className="h-8" />
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
        <div className="text-gray-500 cursor-pointer flex items-center space-x-6">
          <CreditCardIcon className="h-8" />
          <p className="text-lg">Cards</p>
        </div>
        <div className="text-gray-500 cursor-pointer flex items-center space-x-6">
          <PhoneIcon className="h-8" />
          <p className="text-lg">Contacts</p>
        </div>
        <div className="text-gray-500 cursor-pointer flex items-center space-x-6">
          <CalculatorIcon className="h-8" />
          <p className="text-lg">Loan Calculator</p>
        </div>
        <div className="text-gray-500 cursor-pointer flex items-center space-x-6">
          <CogIcon className="h-8" />
          <p className="text-lg">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
