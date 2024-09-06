
import { Carousel } from "@material-tailwind/react";

export function GreetPlanning() {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl">
      <section className="px-3 pt-14 w-full rounded-[50px] max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-14 w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-wrap gap-10 self-end max-w-full w-[780px]">
                <div className="flex flex-col my-auto">
                  <div className="flex w-3 h-3 rounded-full bg-zinc-100 min-h-[12px]" />
                  <div className="flex mt-5 w-3 h-3 rounded-full bg-zinc-100 bg-opacity-40 min-h-[12px]" />
                  <div className="flex mt-5 w-3 h-3 rounded-full bg-zinc-100 bg-opacity-40 min-h-[12px]" />
                  <div className="flex mt-5 w-3 h-3 rounded-full bg-zinc-100 bg-opacity-40 min-h-[12px]" />
                </div>
                <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                  <div className="flex flex-col max-md:max-w-full">
                    <h2 className="text-6xl font-medium text-white max-md:max-w-full max-md:text-4xl">
                      Our <span className="text-white">Goals</span>
                    </h2>
                    <div className="flex flex-col items-start mt-10 w-full text-xl leading-10 text-zinc-100 max-md:max-w-full">
                      {/* Aquí puedes mapear tus objetivos */}
                      <div className="flex flex-wrap gap-4 mt-8 max-w-full w-[675px]">
                        <img
                          loading="lazy"
                          src="goal-icon.png"
                          alt="Goal Icon"
                          className="object-contain shrink-0 self-start w-8 aspect-square"
                        />
                        <div className="flex-auto w-[621px] max-md:max-w-full">
                          <span className="font-medium underline text-zinc-300">
                            Goal Title
                          </span>
                          <span className="font-medium text-zinc-300">:</span>{" "}
                          <span className="font-medium text-white">
                            Goal description goes here.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="flex gap-2 justify-center items-center self-start px-6 py-4 mt-24 text-xl font-medium bg-white min-h-[56px] rounded-[100px] text-neutral-700 max-md:px-5 max-md:mt-10">
                    <span className="self-stretch my-auto">INVEST NOW</span>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e6a24967a3613cb128c41a54ffc8452504fda6940fd5e2da17fa31f993e4867"
                      alt="Invest Now"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center p-9 w-full bg-sky-50 bg-opacity-10 rounded-[1000px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/55d168882a72753796ecc7faa39e2c2bf5e983d7c76de709b72f3e234ad5d6d5"
                alt="Goals illustration"
                className="object-contain w-full aspect-[0.95] max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Puedes repetir la estructura anterior para las otras secciones del carrusel */}
    </Carousel>
  );
}

