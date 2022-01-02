import {
  ArrowCircleRightIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Logo from "../components/MainSite/Svg/Logo";
const LoginScreen = () => {
  return (
    <div className=" w-full font-Montserrat  h-screen flex flex-col bg-gray-300 justify-center items-center">
      <div className="relative bg-white w-11/12  md:w-8/12 shadow-2xl h-4/6 md:h-5/6 flex flex-col  md:flex-row justify-between">
        <div className=" p-7 w-full md:w-5/12 flex flex-col space-y-6 justify-center ">
          <div className="  top-0  left-0  ">
            <div className="flex flex-row cursor-pointer items-center py-3 md:py-3 space-x-1 md:space-x-2">
              <Logo height="h-10" />
              <p className="font-Montserrat text-lg   text-gray-600">Hyadum</p>
            </div>
            <p className="font-Montserrat text-lg text-gray-500">
              School Management System
            </p>
          </div>
          <div className=" border-gray-600 border-2 w-full flex flex-row items-center rounded-xl ">
            <UserIcon className="h-6 text-gray-600  pl-2" />
            <input
              type="text"
              placeholder="username"
              className=" rounded-lg p-2 w-full bg-transparent text-lg font-Montserrat  focus:outline-none"
            />
          </div>

          <div className=" border-gray-600 border-2 w-full flex flex-row items-center rounded-xl ">
            <LockClosedIcon className="h-6 text-gray-600  pl-2" />
            <input
              type="password"
              placeholder="password"
              className=" rounded-lg p-2 w-full bg-transparent text-lg font-Montserrat  focus:outline-none"
            />
          </div>
          <div className="flex flex-row justify-between items-center">
            <p>Forget Password?</p>
            <div className="bg-blue-600 text-center rounded-lg cursor-pointer text-white p-2">
              Sign In
            </div>
          </div>
        </div>

        <div className="md:w-7/12 w-full hidden md:block ">
          <div className="bg-login-image h-full bg-cover bg-center">
            <div className="bg-black w-full  h-full  opacity-70 p-7 md:p-12">
              <p className="text-white text-4xl">
                Transforming education through technology
              </p>
              <div className="bg-white w-10 h-1 my-3"></div>
              <p className="text-white text-xl">
                Strenghening parents, teachers and student relationship
              </p>
              <div className="flex flex-row cursor-pointer space-x-2 text-white items-center mt-4">
                <ArrowCircleRightIcon className="h-7" />
                <span className="text-xl ">Read more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
