import { SearchIcon, UserGroupIcon } from "@heroicons/react/outline";
const SearchBar = () => {
  return (
    <div>
      <div>
        <div className="border-gray-300 border-2 w-full flex flex-row items-center rounded-xl ">
          <SearchIcon className="h-6 text-gray-600  pl-2" />
          <input
            type="text"
            placeholder="search"
            className=" rounded-lg p-4 w-full bg-transparent text-lg font-Montserrat  focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
