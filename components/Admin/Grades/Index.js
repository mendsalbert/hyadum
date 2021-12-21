import SearchBar from "../SearchBar";
const Grades = () => {
  return (
    <div className="w-9/12 p-7">
      <SearchBar showPrev={true} />
      <p className="text-blue-600 text-2xl font-bold py-2">Grades</p>
      <div className="w-full ">
        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
          <div className="flex items-center space-x-6">
            <div>
              <select className="rounded-lg p-2 w-full  font-Montserrat  focus:outline-none">
                <option>A+</option>
                <option>A</option>
                <option>B+</option>
                <option>B</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                className="p-2 rounded-md"
                placeholder="Breakoff(eg; 80%)"
              />
            </div>
            <div>
              <input
                type="text"
                className="p-2 rounded-md"
                placeholder="Remarks"
              />
            </div>
            <div className="bg-blue-600 p-2 rounded-lg text-white cursor-pointer">
              ADD
            </div>
          </div>
        </div>
        {/* <p>Something</p> */}
        <div>
          <div className="flex flex-col mt-14">
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
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Breakoff
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Order
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Comment
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          A+
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          80%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Excellent
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grades;
