const Modal = (props) => {
  return (
    <div className="fixed flex flex-row justify-center items-center w-screen h-screen bg-[#000000a8]  z-50 top-0 left-0">
      <div className="bg-white rounded-lg w-6/12">
        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
          <div className="grid grid-cols-1 gap-5  ">
            <div>
              <input type="date" className="p-2 rounded-md w-full" />
            </div>
            <div>
              <input
                type="text"
                className="p-2 rounded-md w-full"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="text"
                className="p-2 rounded-md w-full"
                placeholder="Amount"
              />
            </div>
          </div>
          <div>
            <div
              //   onClick={props.payAmount()}
              className="bg-green-600 mt-3 p-2 text-center rounded-lg text-white cursor-pointer"
            >
              PAY
            </div>
            <div
              onClick={props.canclePayment}
              className="bg-red-600 mt-3 p-2 text-center rounded-lg text-white cursor-pointer"
            >
              CANCEL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
