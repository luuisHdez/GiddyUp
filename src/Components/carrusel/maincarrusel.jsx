import React, { useEffect } from "react";
import { Carousel, initTWE } from "tw-elements";
import Carrousel1 from './Carrousel1';
import Carrousel2 from './Carrousel2';
import Carrousel3 from './Carrousel3';
import Carrousel from './Carrousel';

export function MainCarrousel() {
  useEffect(() => {
    initTWE({ Carousel });
  }, []);

  return (
    <div
      id="carouselDarkVariant"
      className="relative"
      data-twe-carousel-init
      data-twe-ride="carousel"
      data-twe-interval="2000"
    >
      {/* Indicadores del carrusel */}
      <div
        className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-twe-carousel-indicators
      >
        <button
          data-twe-target="#carouselDarkVariant"
          data-twe-slide-to="0"
          data-twe-carousel-active
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 opacity-50 transition-opacity"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          data-twe-target="#carouselDarkVariant"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 opacity-50 transition-opacity"
          data-twe-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          data-twe-target="#carouselDarkVariant"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 opacity-50 transition-opacity"
          data-twe-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          data-twe-target="#carouselDarkVariant"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 opacity-50 transition-opacity"
          data-twe-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>

      {/* Elementos del carrusel */}
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div
          className="relative float-left -mr-[100%] w-full opacity-100 transition-opacity duration-1000 ease-in-out"
          data-twe-carousel-fade
          data-twe-carousel-item
          data-twe-carousel-active
        >
          <div className="block w-full">
            <Carrousel />
          </div>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full opacity-0 transition-opacity duration-1000 ease-in-out"
          data-twe-carousel-fade
          data-twe-carousel-item
        >
          <div className="block w-full">
            <Carrousel1 />
          </div>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full opacity-0 transition-opacity duration-1000 ease-in-out"
          data-twe-carousel-fade
          data-twe-carousel-item
        >
          <div className="block w-full">
            <Carrousel2 />
          </div>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full opacity-0 transition-opacity duration-1000 ease-in-out"
          data-twe-carousel-fade
          data-twe-carousel-item
        >
          <div className="block w-full">
            <Carrousel3 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCarrousel;
