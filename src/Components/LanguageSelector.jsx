import React from 'react';

function LanguageSelector() {
  return (
    <div className="flex gap-1.5 items-center my-auto text-base tracking-wider leading-5 capitalize whitespace-nowrap text-neutral-700">
      <div className="flex gap-2.5 items-center self-stretch my-auto">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ff608fc673b862dc833cc5f90887bb99fbca8b3203153a4a52b5da1e3b4e964?apiKey=c1946530cef5422ab7dda9568063bfde&&apiKey=c1946530cef5422ab7dda9568063bfde" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[100px] w-[22px]" />
        <div className="self-stretch my-auto">EN</div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cecf03faa6638e6495d53fb9e0290ae71be09b14163b91a9e67fa6feaaf3349?apiKey=c1946530cef5422ab7dda9568063bfde&&apiKey=c1946530cef5422ab7dda9568063bfde" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
    </div>
  );
}

export default LanguageSelector;