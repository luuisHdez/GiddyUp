import React, { useState } from "react";

import CombinedContainer from "./CombinedContainer";
function ActionButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="flex relative gap-5 mt-14 mb-0 max-w-full text-xl font-medium w-[462px] max-md:mt-10 max-md:mb-2.5">
        <button
          onClick={toggleModal}
          className="flex flex-1 gap-2 justify-center items-center px-6 py-4 bg-white min-h-[56px] rounded-[100px] text-neutral-700 max-md:px-5"
        >
          <span className="self-stretch my-auto">LEARN MORE</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/62ab07bba936ffb1767a3716b896bdead1aba76049cd41e9ba23a51e98ffad14"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </button>
        <button className="flex flex-1 gap-2 justify-center items-center px-6 py-4 text-white bg-[linear-gradient(42deg,#006BD1_38.34%,#3EA1FF_81.44%)] min-h-[56px] rounded-[100px] max-md:px-5">
          <span className="self-stretch my-auto">INVEST NOW</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbfcd309b59f730f7bc15e7ca002533d7b8fd283dea1d0047f0cfa1838c5bf0a"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 p-4">
        <div className="bg-white p-6 rounded-lg max-w-full w-[800px] max-h-[90%] overflow-auto shadow-lg md:max-w-[70%] lg:max-w-[50%]">
          <button
            onClick={toggleModal}
            className="absolute top-4 right-4 text-2xl"
          >
            &times;
          </button>
          {/* Aquí se inserta el componente del formulario */}
          <CombinedContainer />
        </div>
      </div>
      )}
    </div>
  );
}

export default ActionButtons;
