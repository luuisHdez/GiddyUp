import React, { useState } from "react";
import CombinedContainer from "./CombinedContainer";
import CenteredImage from "./CenteredImage";
import '../../assets/ButtonStyles.css'

function MainContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <main className="flex relative flex-col mt-32 max-w-full w-[1047px] max-md:mt-10">
      <div className="flex relative justify-center">
         
         <button
            id="fifth"
            className="flex items-center buttonBox gap-2 justify-center px-6 py-4 text-white bg-[linear-gradient(42deg,#C0C0C0_38.34%,#D3D3D3_81.44%)] min-h-[56px] rounded-[100px] max-md:px-4 max-md:py-3 w-full min-w-[160px] max-w-[220px] flex-grow transition-transform transform hover:scale-105"
            >
           Giddy Up! Application
          </button>
         
        </div>
      <section className="flex flex-col justify-center items-center w-full max-md:max-w-full">
        
          <h1 className="flex justify-center gap-5 mt-6 max-w-full text-7xl leading-none text-center whitespace-nowrap w-full max-md:text-4xl text-animate text-container">
            <span className="word flex text-neutral-700 max-md:text-4xl min-h-[84px]">
              {Array.from("Discover").map((letter, index) => (
                <span key={index}>{letter}</span>
              ))}
            </span>
            <span className="word flex gap-2.5 font-medium text-sky-600 max-md:text-4xl min-h-[84px] max-md:-mr-4">
              {Array.from("Giddy Up!").map((letter, index) => (
                <span key={index}>{letter}</span>
              ))}
            </span>
          </h1>

      </section>
      <p className="mt-8 text-lg font-medium leading-9 text-center text-neutral-600 max-md:max-w-full">
        The all-in-one mobile app designed to revolutionize your daily life. From social media and ride-sharing to e-commerce and entertainment, Giddy Up has it all. Watch our introductory video to learn how our innovative platform can simplify and improve your daily routine, offering you maximum convenience and efficiency in a single application. Join the Giddy Up revolution and transform the way you manage your daily activities!
      </p>

      {/* Botones */}
      <div className="flex justify-center w-full">
        <div className="flex gap-5 w-full max-w-[462px] text-xl font-medium mt-14 mb-0 max-md:mt-10 max-md:mb-2.5">
          <button
            id="fifth"
            onClick={toggleModal}
            className="flex items-center buttonBox gap-2 justify-center px-6 py-4 bg-white min-h-[56px] rounded-[100px] text-neutral-700 max-md:px-4 max-md:py-3 w-full min-w-[160px] max-w-[220px] flex-grow transition-transform transform hover:scale-105"
          >
            <span className="my-auto">LEARN MORE</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/62ab07bba936ffb1767a3716b896bdead1aba76049cd41e9ba23a51e98ffad14"
              alt=""
              className="object-contain w-6 aspect-square"
            />
          </button>
          <button
            id="fifth"
            className="flex items-center buttonBox gap-2 justify-center px-6 py-4 text-white bg-[linear-gradient(42deg,#006BD1_38.34%,#3EA1FF_81.44%)] min-h-[56px] rounded-[100px] max-md:px-4 max-md:py-3 w-full min-w-[160px] max-w-[220px] flex-grow transition-transform transform hover:scale-105"
          >
            <span className="my-auto">INVEST NOW</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbfcd309b59f730f7bc15e7ca002533d7b8fd283dea1d0047f0cfa1838c5bf0a"
              alt=""
              className="object-contain w-6 aspect-square"
            />
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white p-6 rounded-lg max-w-full w-[800px] max-h-[90%] overflow-auto shadow-lg md:max-w-[70%] lg:max-w-[50%] relative">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-2xl"
            >
              &times;
            </button>
            {/* Aquí se inserta el componente del formulario */}
            <CombinedContainer closeModal={toggleModal} />
          </div>
        </div>
      )}

      {/* Elemento añadido */}
      <div className="flex relative z-10 flex-col mt-20 gap-2.5 justify-center items-center self-center py-72 mt-0 ml-0 max-w-[1109px] min-h-[726px] px-[607px] rounded-[30px] max-md:px-5 max-md:py-24 max-md:mt-0 w-full">
        <CenteredImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ba1dfcc2b7e666fbb58dc84bae4e016df1c2e59c2f7f244cc7a7a4974d7b1ea?apiKey=c1946530cef5422ab7dda9568063bfde&&apiKey=c1946530cef5422ab7dda9568063bfde"
          overlay={true}
        />
      </div>
    </main>
  );
}

export default MainContent;
