const Prices = () => {
  return (
    <div className="mx-4 sm:mx-16 md:mx-20 lg:mx-32 py-8 ">
      <p className="text-xl text-center font-bold text-gray-700  mb-14 mt-7 md:mb-20 md:mt-10 lg:text-3xl">
        Prices
      </p>
      <div className="grid grid-cols-3 gap-36">
        {/* first price */}
        <div className=" bg-gray-200 text-center flex flex-col h-full justify-around items-center rounded-2xl  shadow-xl ">
          <p>GHc 69/Mo</p>
          <div>PURCHASE</div>
        </div>
        {/* second price */}
        <div className=" bg-gray-200 rounded-2xl h-32  ">
          <p>GHC</p>
        </div>
        {/* third price */}
        <div className=" bg-gray-200 rounded-2xl h-32  ">
          <p>GHC</p>
        </div>
      </div>
    </div>
  );
};

export default Prices;
