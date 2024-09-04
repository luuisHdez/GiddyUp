import React from 'react';

function Button () {
    return (
        <div className="w-full flex justify-center">
    <button className="flex gap-2 justify-center items-center px-6 py-4 text-xl font-medium text-white bg-[linear-gradient(42deg,#006BD1_38.34%,#3EA1FF_81.44%)] min-h-[56px] rounded-[100px] w-[219px] max-md:px-5">
      <span className="self-stretch my-auto">INVEST NOW</span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/34684746faacd0b350c6fa68e56dab229beff81b3a246b768975d8eca135d54f?apiKey=c1946530cef5422ab7dda9568063bfde&&apiKey=c1946530cef5422ab7dda9568063bfde"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      />
    </button>
  </div>
    );
}

export default Button