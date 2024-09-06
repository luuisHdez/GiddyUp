import React from 'react';
import carouselItems from './carrouselItems';

function Carrousel() {
  const { content: goals } = carouselItems.find(item => item.title === "Our Goals");

  return (
    <section className="px-3 pt-14 w-full rounded-[50px] bg-blue-500 max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex flex-col mt-14 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 self-end max-w-full w-[780px] max-md:w-full">
              
              <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:w-full">
                <div className="flex flex-col max-md:w-full">
                  <h2 className="text-6xl font-medium text-white max-md:max-w-full max-md:text-4xl">
                    Our <span className="text-white">Goals</span>
                  </h2>
                  <div className="flex flex-col items-start mt-10 w-full text-xl leading-10 text-zinc-100 max-md:w-full">
                    {goals.map((goal, index) => (
                      <div key={index} className="flex items-center gap-4 mt-8 max-w-full w-[675px] max-md:w-full">
                        <img loading="lazy" src={goal.icon} alt="" className="object-contain shrink-0 w-8 aspect-square" />
                        <div className="flex-auto max-md:w-full">
                          <span className="font-medium underline text-zinc-300">{goal.title}</span>
                          <span className="font-medium text-zinc-300">:</span>{" "}
                          <span className="font-medium text-white">{goal.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button id="fifth" className="flex gap-2 buttonBox justify-center items-center self-start px-6 py-4 mt-24 text-xl font-medium bg-white min-h-[56px] rounded-[100px] text-neutral-700 max-md:px-5 max-md:mt-10">
                  <span className="self-stretch my-auto">INVEST NOW</span>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e6a24967a3613cb128c41a54ffc8452504fda6940fd5e2da17fa31f993e4867?apiKey=c1946530cef5422ab7dda9568063bfde&&apiKey=c1946530cef5422ab7dda9568063bfde" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start px-9 mt-6 max-w-full rounded-full border-2 border-solid border-white border-opacity-30 w-[540px] max-md:pl-5 max-md:w-full">  
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex flex-col justify-center p-9 w-full bg-sky-50 bg-opacity-10 rounded-[1000px] max-md:w-full max-md:px-5 max-md:mt-10">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/55d168882a72753796ecc7faa39e2c2bf5e983d7c76de709b72f3e234ad5d6d5?apiKey=c1946530cef5422ab7dda9568063bfde&&apiKey=c1946530cef5422ab7dda9568063bfde" alt="Goals illustration" className="object-contain w-full aspect-[0.95] max-md:max-w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carrousel;
