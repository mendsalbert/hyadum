import SearchBar from "../SearchBar";
const Attendance = () => {
  const addCol = () => {};
  return (
    <div className="w-9/12 p-7">
      <SearchBar showPrev={true} />
      <div className="w-full ">
        <div>
          <p className="text-gray-600 text-xl font-bold">Attendance</p>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
