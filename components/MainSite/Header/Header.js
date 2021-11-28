import Logo from "../Svg/Logo";
import { MenuAlt3Icon } from "@heroicons/react/outline";
const Header = () => {
  return (
    <div className="bg-white">
      <div className="mx-4 sm:mx-16 md:mx-20 lg:mx-32 ">
        <div className="flex flex-row items-center py-4 space-x-1">
          <Logo />
          <p className="font-Montserrat text-lg font-bold  text-gray-600">
            Hyadum
          </p>
        </div>
        <div>
          <MenuAlt3Icon className="h-7" />
        </div>
      </div>
    </div>
  );
};

export default Header;
