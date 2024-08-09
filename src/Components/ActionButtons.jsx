import React from 'react';

function ActionButtons() {
  return (
    <div className="flex relative gap-5 mt-14 mb-0 max-w-full text-xl font-medium w-[462px] max-md:mt-10 max-md:mb-2.5">
      <button className="flex flex-1 gap-2 justify-center items-center px-6 py-4 bg-white min-h-[56px] rounded-[100px] text-neutral-700 max-md:px-5">
        <span className="self-stretch my-auto">LEARN MORE</span>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/62ab07bba936ffb1767a3716b896bdead1aba76049cd41e9ba23a51e98ffad14?apiKey=c1946530cef5422ab7dda9568063bfde&&apiKey=c1946530cef5422ab7dda9568063bfde" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      </button>
      <button className="flex flex-1 gap-2 justify-center items-center px-6 py-4 text-white bg-[linear-gradient(42deg,#006BD1_38.34%,#3EA1FF_81.44%)] min-h-[56px] rounded-[100px] max-md:px-5">
        <span className="self-stretch my-auto">INVEST NOW</span>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbfcd309b59f730f7bc15e7ca002533d7b8fd283dea1d0047f0cfa1838c5bf0a?apiKey=c1946530cef5422ab7dda9568063bfde&&apiKey=c1946530cef5422ab7dda9568063bfde" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      </button>
    </div>
  );
}

export default ActionButtons;