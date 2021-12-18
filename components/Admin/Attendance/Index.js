import SearchBar from "../SearchBar";
const Attendance = () => {
  const addCol = () => {};
  return (
    <div className="w-9/12 p-7">
      <SearchBar showPrev={true} />
      <div className="w-full ">
        <div>
          <p className="text-gray-600 text-xl font-bold">Add Event</p>
          <div>
            <div className="border-gray-300 border-2 my-5 w-full flex flex-row items-center rounded-xl ">
              <input
                type="text"
                placeholder="Name"
                className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
              />
            </div>

            <button
              onClick={() => {
                addCol();
              }}
              className="bg-blue-400 p-5"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
