import React from 'react';

const CombinedFooter = () => {
  return (
    <footer className="flex overflow-hidden flex-col justify-center items-center px-16 py-20 bg-violet-50 max-md:px-5">
      <div className="max-w-full w-[1174px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/601a2a08c5572aa8c6202c01a0eaf9d92e16fb36ce6c14a4d9bc7680a32122f6?placeholderIfAbsent=true&apiKey=c1946530cef5422ab7dda9568063bfde"
                alt="Company logo"
                className="object-contain max-w-full aspect-[2.11] w-[255px]"
              />
              <div className="mt-6">
                <h2 className="text-2xl font-medium leading-tight capitalize text-neutral-700 max-md:max-w-full">
                  Subscribe to our Newsletter
                </h2>
                <p className="mt-4 text-base leading-7 text-neutral-600 max-md:max-w-full">
                  Stay updated with the latest news and promotions by subscribing to our newsletter. We promise not to spam your inbox.
                </p>
                <form className="flex mt-6 max-md:flex-col">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-l-lg border-none max-md:rounded-none max-md:rounded-t-lg"
                    required
                  />
                  <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-r-lg max-md:rounded-none max-md:rounded-b-lg">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <h2 className="text-2xl font-medium leading-tight capitalize text-neutral-700 max-md:max-w-full">
              Follow us on Social Networks
            </h2>
            <p className="mt-6 text-base leading-7 text-neutral-600 max-md:max-w-full">
              Follow our accounts on social networks to stay up to date with the latest news and share our publications. Your support on social networks is crucial to expanding our community.
            </p>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2635a210e161cf4044b4a2e0cc897ba8ec2f39c8deb97bdb4db609f2958b26f6?placeholderIfAbsent=true&apiKey=c1946530cef5422ab7dda9568063bfde"
              alt="Social network icons"
              className="object-contain mt-6 aspect-[10] w-[489px] max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CombinedFooter;
