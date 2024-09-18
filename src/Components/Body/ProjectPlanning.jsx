import React from 'react';
import { useTranslation } from 'react-i18next';

function SectionTitle({ children }) {
  return (
    <h2 className="text-5xl font-medium leading-loose capitalize text-neutral-600 max-md:max-w-full max-md:text-4xl">
      {children}
    </h2>
  );
}

function ListItem({ title, description }) {
  return (
    <li className="flex items-start gap-4 mt-5 w-full max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd630841b9bc44721b4135362f8b0dcac05453d7fbd8e29fc3a14fffcc61708b?placeholderIfAbsent=true&apiKey=c1946530cef5422ab7dda9568063bfde"
        className="object-contain shrink-0 w-8 md:w-10 aspect-square"
        alt=""
      />
      <div className="flex-auto">
        <span className="font-medium underline text-neutral-500">{title}</span>
        <span className="font-medium text-neutral-500">:</span>{" "}
        <span className="font-medium">{description}</span>
      </div>
    </li>
  );
}

function InvestButton() {
  const { t } = useTranslation(); // Hook para las traducciones

  return (
    <button id="fifth" className="flex gap-2 buttonBox justify-center items-center px-6 py-4 mt-12 text-xl font-medium text-white bg-[linear-gradient(42deg,#006BD1_38.34%,#3EA1FF_81.44%)] min-h-[56px] rounded-[100px] w-[219px] max-md:px-5 max-md:mt-10">
      <span className="self-stretch my-auto">{t('investButtonText')}</span> {/* Traducción dinámica */}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cf06636130784b7197ad2964ae6cd05eefafc3b7b675ca5cbda89fa888663b9?placeholderIfAbsent=true&apiKey=c1946530cef5422ab7dda9568063bfde"
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        alt=""
      />
    </button>
  );
}

function ProjectPlanning() {
  const { t } = useTranslation(); // Hook para las traducciones

  const projectPlanningItems = [
    { title: t('projectPlanning.researchAndDesign.title'), description: t('projectPlanning.researchAndDesign.description') },
    { title: t('projectPlanning.initialDevelopment.title'), description: t('projectPlanning.initialDevelopment.description') },
    { title: t('projectPlanning.testingAndImprovements.title'), description: t('projectPlanning.testingAndImprovements.description') },
    { title: t('projectPlanning.launchAndMarketing.title'), description: t('projectPlanning.launchAndMarketing.description') }
  ];

  const useOfFinancingItems = [
    { title: t('useOfFinancing.technologicalDevelopment.title'), description: t('useOfFinancing.technologicalDevelopment.description') },
    { title: t('useOfFinancing.marketingAndAdvertising.title'), description: t('useOfFinancing.marketingAndAdvertising.description') },
    { title: t('useOfFinancing.operationsAndPersonnel.title'), description: t('useOfFinancing.operationsAndPersonnel.description') },
    { title: t('useOfFinancing.licensesAndContent.title'), description: t('useOfFinancing.licensesAndContent.description') },
    { title: t('useOfFinancing.transparencyAndCommunication.title'), description: t('useOfFinancing.transparencyAndCommunication.description') },
    { title: t('useOfFinancing.SupportDevelopment.title'), description: t('useOfFinancing.SupportDevelopment.description') }
  ];

  return (
    <main className="flex flex-col mt-5 py-20 px-4 max-w-full md:max-w-[843px] ml-auto">
      {/* Project Planning Section */}
      <section className="flex flex-col w-full">
        <SectionTitle>{t('projectPlanningTitle')}</SectionTitle> {/* Título traducido */}
        <ul className="flex flex-col mt-10 w-full text-xl leading-loose text-neutral-500">
          {projectPlanningItems.map((item, index) => (
            <ListItem key={index} title={item.title} description={item.description} />
          ))}
        </ul>
        <InvestButton />
      </section>

      {/* Use of Financing Section */}
      <section className="flex flex-col mt-24 w-full">
        <SectionTitle>{t('useOfFinancingTitle')}</SectionTitle> {/* Título traducido */}
        <ul className="flex flex-col mt-10 w-full text-xl leading-10">
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
