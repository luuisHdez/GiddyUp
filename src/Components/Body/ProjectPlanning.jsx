import React from 'react';

function SectionTitle({ children }) {
  return (
    <h2 className="text-5xl font-medium leading-loose capitalize text-neutral-600 max-md:max-w-full max-md:text-4xl">
      {children}
    </h2>
  );
}

function ListItem({ title, description }) {
  return (
    <li className="flex flex-wrap gap-3 mt-7 w-full max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd630841b9bc44721b4135362f8b0dcac05453d7fbd8e29fc3a14fffcc61708b?placeholderIfAbsent=true&apiKey=c1946530cef5422ab7dda9568063bfde" className="object-contain shrink-0 self-start w-8 aspect-square" alt="" />
      <div className="flex-auto w-[794px] max-md:max-w-full">
        <span className="font-medium underline text-neutral-500">{title}</span>
        <span className="font-medium text-neutral-500">:</span>{" "}
        <span className="font-medium">{description}</span>
      </div>
    </li>
  );
}

function InvestButton() {
  return (
    <button className="flex gap-2 justify-center items-center px-6 py-4 mt-12 max-w-full text-xl font-medium text-white bg-[linear-gradient(42deg,#006BD1_38.34%,#3EA1FF_81.44%)] min-h-[56px] rounded-[100px] w-[219px] max-md:px-5 max-md:mt-10">
      <span className="self-stretch my-auto">INVEST NOW</span>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cf06636130784b7197ad2964ae6cd05eefafc3b7b675ca5cbda89fa888663b9?placeholderIfAbsent=true&apiKey=c1946530cef5422ab7dda9568063bfde" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" />
    </button>
  );
}

function ProjectPlanning() {
  const projectPlanningItems = [
    { title: 'Research and Design', description: 'Definition of key functionalities and interface design.' },
    { title: 'Initial Development', description: 'Building the application with essential functions.' },
    { title: 'Testing and Improvements', description: 'Refinement based on alpha and beta testing.' },
    { title: 'Launch and Marketing', description: 'Strategies for launch and promotion in application stores.' }
  ];

  const useOfFinancingItems = [
    { title: 'Technological Development', description: 'Hiring of developers and acquisition of infrastructure.' },
    { title: 'Marketing and Advertising', description: 'Campaigns to increase visibility and attract users.' },
    { title: 'Operations and Personnel', description: 'Compensation for equipment and operating expenses.' },
    { title: 'Licenses and Content', description: 'Strategies for launch and promotion in application stores.' },
    { title: 'Transparency and Communication', description: 'We will keep our backers informed with regular updates through newsletters, social media and our project blog.' },
    { title: 'Support the Development of Giddy Up', description: 'Join our crowdfunding campaign to make this innovative application a reality. Your contribution will be essential to transform the management of daily activities.' }
  ];

  return (
    <main className="flex flex-col py-20 font-medium px-4 max-w-full md:max-w-[843px] ml-auto">
      <section className="flex flex-col w-full max-md:max-w-full">
        <SectionTitle>Project planning :</SectionTitle>
        <ul className="flex flex-col mt-10 w-full text-xl leading-loose text-neutral-500 max-md:max-w-full">
          {projectPlanningItems.map((item, index) => (
            <ListItem key={index} title={item.title} description={item.description} />
          ))}
        </ul>
        <InvestButton />
      </section>
      <section className="flex flex-col mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <SectionTitle>Use of Financing :</SectionTitle>
        <ul className="flex flex-col mt-10 w-full text-xl leading-10 max-md:max-w-full">
          {useOfFinancingItems.map((item, index) => (
            <ListItem key={index} title={item.title} description={item.description} />
          ))}
        </ul>
        <InvestButton />
      </section>
    </main>
  );
}

export default ProjectPlanning;