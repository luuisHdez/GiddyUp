import React from 'react';
import MainCarrousel from '../carrusel/maincarrusel';

const missionVisionData = [
  {
    title: "Our Mission",
    content: "Our mission at <span className=\"font-medium text-neutral-600\">Giddy Up</span> is to simplify and improve our users' daily lives by offering an all-in-one mobile application that seamlessly integrates essential services. We are dedicated to providing an innovative platform that combines social networking, ride-hailing, e-commerce, entertainment and more, all from a single, easy-to-use interface. We seek to make the management of daily activities more efficient, convenient and enjoyable for all our users.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/21ac5b2ce47dda07db21dc716047fd59a28a86ec548653bf86fb3e5789a43b2c?apiKey=c1946530cef5422ab7dda9568063bfde&&apiKey=c1946530cef5422ab7dda9568063bfde",
    titleColor: "text-neutral-600"
  },
  {
    title: "Our Vision",
    content: "Our vision is to become the world's reference application for managing daily activities, offering a comprehensive and accessible solution that revolutionizes the way people interact with technology in their daily lives. We aspire to be an industry leader in integrated digital services, providing our users with maximum convenience and an exceptional user experience, and continually expanding our functionalities to meet the changing needs of a dynamic and constantly evolving society.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f285fb044fd15de57ac07578f3475d6bdc94e75fd25fadf82aae786a85bdcb31?apiKey=c1946530cef5422ab7dda9568063bfde&&apiKey=c1946530cef5422ab7dda9568063bfde",
    titleColor: "text-sky-600"
  }
];



function GoalSection() {
  
  return (
    <div>
      {/* Mission and Vision Section */}
      <section className="w-full flex flex-col md:flex-row items-start justify-between gap-10 px-10 pt-16">
        {missionVisionData.map((block, index) => (
          <article key={index} className="flex flex-col md:flex-row items-start gap-10 w-full max-w-7xl p-6 md:p-12 mb-16">
            <img 
              loading="lazy" 
              src={block.imageSrc} 
              alt={`Illustration for ${block.title}`}
              className="w-full md:w-1/2 rounded-2xl" 
            />
            <div className="flex flex-col items-start w-full md:w-2/3">
              <h2 className={`text-3xl md:text-5xl font-bold capitalize leading-tight ${block.titleColor}`}>
                Our<br />{block.title.split(" ")[1]}
              </h2>
              <p className="mt-5 text-lg md:text-x2 leading-relaxed" dangerouslySetInnerHTML={{ __html: block.content }} />
            </div>
          </article>
        ))}
      </section>

      {/* Button Section */}
      <div className="w-full flex justify-center">
        <button id="fifth" className="flex gap-2 buttonBox justify-center items-center px-6 py-4 text-xl font-medium text-white bg-[linear-gradient(42deg,#006BD1_38.34%,#3EA1FF_81.44%)] min-h-[56px] rounded-[100px] w-[219px] max-md:px-5">
          <span className="self-stretch my-auto">INVEST NOW</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/34684746faacd0b350c6fa68e56dab229beff81b3a246b768975d8eca135d54f?apiKey=c1946530cef5422ab7dda9568063bfde&&apiKey=c1946530cef5422ab7dda9568063bfde"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </button>
      </div>

      {/* Goals Section */}
      <div className='mt-5'>
      <MainCarrousel/>
      </div>
      
    </div>
  );
}

export default GoalSection;
