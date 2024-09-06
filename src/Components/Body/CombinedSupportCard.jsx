import React from "react";

function CombinedSupportCard() {
  const supportData = [
    {
      title: "Direct Donations",
      description: "Your donation will allow us to fund the development and launch of Giddy Up. Any amount, large or small, is valuable and brings us closer to our goal.",
      buttonText: "INVEST NOW",
      bgColor: "bg-violet-50",
    },
    {
      title: "Participate in Our Crowdfunding",
      description: "We have launched a crowdfunding campaign to raise the necessary funds. Visit our page on www.crowdfunding.com to learn more details and contribute. Every contribution counts!",
      buttonText: "INVEST NOW",
      bgColor: "bg-violet-50",
    },
    {
      title: "Provide Feedback",
      description: "Although we are still in the development phase, we would love to hear your thoughts on the mockups and vision for the app. Participate in our questionnaire and give us your opinion.",
      buttonText: "INVEST NOW",
      bgColor: "bg-violet-50",
    },
  ];

  return (
    <main className="flex flex-col items-center">
      <section className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-center items-end w-full max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
            <h1 className="text-6xl font-medium capitalize leading-[78px] text-neutral-700 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              How to Support the <br /> Development of Giddy Up
            </h1>
            <p className="mt-12 text-lg tracking-normal leading-8 text-neutral-600 max-md:mt-10 max-md:max-w-full">
              Your support is essential to make Giddy Up a reality. Although the application is still in development, with your contributions we can move forward quickly and launch an innovative platform that will revolutionize the management of daily activities.
            </p>
          </div>
          <h2 className="text-4xl font-medium leading-loose text-right underline capitalize text-neutral-600 max-md:max-w-full">
            Here's how you can help
          </h2>
        </div>
        <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-8 w-full max-md:max-w-full">
            {/* Fila superior con "Direct Donations" y "Share Our Campaign" */}
            <article
              className={`flex flex-col flex-1 shrink justify-between px-10 pt-10 pb-8 ${supportData[0].bgColor} basis-0 min-w-[240px] rounded-[30px] max-md:px-5 max-md:max-w-full`}
            >
              <div className="flex flex-col w-full text-neutral-600 max-md:max-w-full">
                <h3 className="text-4xl font-medium leading-loose capitalize max-md:max-w-full">
                  {supportData[0].title}
                </h3>
                <p className="mt-10 text-2xl tracking-wide leading-8 max-md:max-w-full">
                  {supportData[0].description}
                </p>
              </div>
              <button id="fifth" className="flex gap-2 buttonBox justify-center items-center px-6 py-4 mt-20 max-w-full text-xl font-medium text-white bg-[linear-gradient(42deg,#006BD1_38.34%,#3EA1FF_81.44%)] min-h-[56px] rounded-[100px] w-[219px] max-md:px-5 max-md:mt-10">
                <span className="self-stretch my-auto">{supportData[0].buttonText}</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbfcd309b59f730f7bc15e7ca002533d7b8fd283dea1d0047f0cfa1838c5bf0a?placeholderIfAbsent=true&apiKey=c1946530cef5422ab7dda9568063bfde"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  alt=""
                />
              </button>
            </article>

            <article className="flex relative flex-col flex-1 shrink self-start px-10 pt-10 pb-8 basis-0 min-h-[347px] min-w-[240px] rounded-[30px] max-md:px-5 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7e7d8abc17a4d7f557a8900f0424f8443aa0df44b2d72a2a7c894405b7b8655?placeholderIfAbsent=true&apiKey=c1946530cef5422ab7dda9568063bfde"
                className="object-cover absolute inset-0 size-full rounded-[30px]"
                alt=""
              />
              <div className="flex relative flex-col w-full max-md:max-w-full z-10">
                <h3 className="text-4xl font-medium leading-loose text-white max-md:max-w-full">
                  Share Our Campaign
                </h3>
                <p className="mt-10 text-2xl tracking-wide leading-8 text-zinc-100 max-md:max-w-full">
                  Help us reach more people by sharing our crowdfunding campaign on your social networks, with friends, family and colleagues. The more people know about our project, the closer we will be to reaching our goal.
                </p>
              </div>
              <button id="fifth" className="flex relative buttonBox gap-2 justify-center items-center px-6 py-4 mt-12 max-w-full text-xl font-medium bg-white min-h-[56px] rounded-[100px] text-neutral-700 w-[219px] max-md:px-5 max-md:mt-10 z-10">
                <span className="self-stretch my-auto">INVEST NOW</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae5bf93f290e54d6e172b3a4991119a82910d50acd4cbe5880f896ff0d53f556?placeholderIfAbsent=true&apiKey=c1946530cef5422ab7dda9568063bfde"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  alt=""
                />
              </button>
            </article>
          </div>
          <div className="flex flex-wrap gap-8 w-full max-md:max-w-full mt-8">
            {/* Fila inferior con "Participate in Our Crowdfunding" y "Provide Feedback" */}
            <article
              className={`flex flex-col flex-1 shrink justify-between px-10 pt-10 pb-8 ${supportData[1].bgColor} basis-0 min-w-[240px] rounded-[30px] max-md:px-5 max-md:max-w-full`}
            >
              <div className="flex flex-col w-full text-neutral-600 max-md:max-w-full">
                <h3 className="text-4xl font-medium leading-loose capitalize max-md:max-w-full">
                  {supportData[1].title}
                </h3>
                <p className="mt-10 text-2xl tracking-wide leading-8 max-md:max-w-full">
                  {supportData[1].description}
                </p>
              </div>
              <button id="fifth" className="flex gap-2 buttonBox justify-center items-center px-6 py-4 mt-20 max-w-full text-xl font-medium text-white bg-[linear-gradient(42deg,#006BD1_38.34%,#3EA1FF_81.44%)] min-h-[56px] rounded-[100px] w-[219px] max-md:px-5 max-md:mt-10">
                <span className="self-stretch my-auto">{supportData[1].buttonText}</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbfcd309b59f730f7bc15e7ca002533d7b8fd283dea1d0047f0cfa1838c5bf0a?placeholderIfAbsent=true&apiKey=c1946530cef5422ab7dda9568063bfde"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  alt=""
                />
              </button>
            </article>

            <article
              className={`flex flex-col flex-1 shrink justify-between px-10 pt-10 pb-8 ${supportData[2].bgColor} basis-0 min-w-[240px] rounded-[30px] max-md:px-5 max-md:max-w-full`}
            >
              <div className="flex flex-col w-full text-neutral-600 max-md:max-w-full">
                <h3 className="text-4xl font-medium leading-loose capitalize max-md:max-w-full">
                  {supportData[2].title}
                </h3>
                <p className="mt-10 text-2xl tracking-wide leading-8 max-md:max-w-full">
                  {supportData[2].description}
                </p>
              </div>
              <button id="fifth" className="flex gap-2 buttonBox justify-center items-center px-6 py-4 mt-20 max-w-full text-xl font-medium text-white bg-[linear-gradient(42deg,#006BD1_38.34%,#3EA1FF_81.44%)] min-h-[56px] rounded-[100px] w-[219px] max-md:px-5 max-md:mt-10">
                <span className="self-stretch my-auto">{supportData[2].buttonText}</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbfcd309b59f730f7bc15e7ca002533d7b8fd283dea1d0047f0cfa1838c5bf0a?placeholderIfAbsent=true&apiKey=c1946530cef5422ab7dda9568063bfde"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  alt=""
                />
              </button>
            </article>
          </div>
        </div>
      </section>
      <section>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9c80c983ad59895fe9deeef7427a3e76bd15f1d2827c6b26c8bcf83c0fe698d?placeholderIfAbsent=true&apiKey=c1946530cef5422ab7dda9568063bfde"
              className="object-contain w-full rounded-none aspect-[2.1] max-md:max-w-full"
              alt=""
            />
          </section>
    </main>
  );
}

export default CombinedSupportCard;
