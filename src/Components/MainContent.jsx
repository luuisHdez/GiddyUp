import React from 'react';

function MainContent() {
  return (
    <main className="flex relative flex-col mt-32 max-w-full w-[1047px] max-md:mt-10">
      <section className="flex flex-col justify-center items-center w-full max-md:max-w-full">
        <div className="overflow-hidden gap-2.5 self-stretch px-5 py-3.5 max-w-full text-xl font-medium leading-none rounded-[59px] text-neutral-700 w-[281px]">
          Giddy Up! Application
        </div>
        <h1 className="flex flex-wrap gap-5 mt-6 max-w-full text-7xl leading-none text-center whitespace-nowrap w-[713px] max-md:text-4xl">
<span className="flex flex-auto text-neutral-700 max-md:text-4xl min-h-[84px]">
  Discover
</span>
<span className="flex flex-auto gap-2.5 font-medium text-sky-600 max-md:text-4xl min-h-[84px] max-md:-mr-4">
  Giddy Up!</span>

        </h1>
      </section>
      <p className="mt-8 text-lg font-medium leading-9 text-center text-neutral-600 max-md:max-w-full">
        The all-in-one mobile app designed to revolutionize your daily life. From social media and ride-sharing to e-commerce and entertainment, Giddy Up has it all. Watch our introductory video to learn how our innovative platform can simplify and improve your daily routine, offering you maximum convenience and efficiency in a single application. Join the Giddy Up revolution and transform the way you manage your daily activities!
      </p>
  </main>
  );
}

export default MainContent;