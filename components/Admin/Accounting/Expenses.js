import SearchBar from "../SearchBar";
const Expenses = () => {
  return (
    <div className="w-9/12 p-7">
      <SearchBar showPrev={true} />
      <p className="text-blue-600 text-2xl font-bold py-2">Expenses</p>
      <div className="w-full ">
        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
          <div className="grid grid-cols-3 gap-3  ">
            <div>
              <input
                type="number"
                className="p-2 rounded-md"
                placeholder="amount"
              />
            </div>
            <div>
              <input
                type="date"
                className="p-2 rounded-md"
                placeholder="Date"
              />
            </div>
            <div>
              <input
                type="text"
                className="p-2 rounded-md"
                placeholder="Comment"
              />
            </div>
            <div>
              <input
                type="file"
                className="p-2 rounded-md"
                // placeholder="Comments"
              />
            </div>
          </div>
          <div className="bg-blue-600 mt-3 p-2 text-center rounded-lg text-white cursor-pointer">
            SAVE
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
