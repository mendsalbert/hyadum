import { SearchIcon, ArrowLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
const SearchBar = (props) => {
  const rtr = useRouter();
  //   console.log(props.showPrev);
  return (
    <div>
      <div>
        <div className="border-gray-300 border-2 w-full flex flex-row items-center rounded-xl ">
          <SearchIcon className="h-6 text-gray-600  pl-2" />
          <input
            type="text"
            placeholder="search"
            className=" rounded-lg p-2 w-full bg-transparent text-lg font-Montserrat  focus:outline-none"
          />
        </div>
        {props.showPrev ? (
          <div>
            <ArrowLeftIcon
              onClick={() => {
                rtr.back();
              }}
              className="h-7 text-gray-500 mt-6 cursor-pointer"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SearchBar;
