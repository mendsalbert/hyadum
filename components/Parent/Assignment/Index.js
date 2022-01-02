import SearchBar from "../SearchBar";
const Assignment = () => {
  return (
    <div className="lg:w-9/12 lg:p-7 w-full p-4">
      <SearchBar showPrev={true} />
      <p className="text-blue-600 text-2xl font-bold py-2">
        Assignment Available
      </p>
      <div className="w-full space-y-2">
        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
          <p className="text-gray-700 text-lg py-2">Submit assignment</p>
          <p className="text-red-500 text-lg pb-4">Due date: 21st May,2020</p>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-2 ">
            <div>
              <select className="rounded-lg p-2 w-full  font-Montserrat  focus:outline-none">
                <option>English</option>
                <option>Math</option>
                <option>Science</option>
                <option>RME </option>
              </select>
            </div>
            <div>
              <input type="date" className="p-2 rounded-md w-full" />
            </div>
            <div className="rounded-lg p-2 w-full  font-Montserrat  focus:outline-none">
              <input type="file" />
            </div>
          </div>
          <p className="w-full py-3">
            Question: what is the difference between adjective and a noun
          </p>
          <div className="bg-blue-600 text-center p-2 rounded-lg w-full text-white cursor-pointer">
            SUBMIT
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
