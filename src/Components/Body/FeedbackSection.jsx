import React from 'react';
import { useTranslation } from 'react-i18next'; // Importar el hook de traducción

const feedbackIcons = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/e5eba08426d551374c6836fa85f5d52cdfa8e89f8ca62f263a413a389640c705?placeholderIfAbsent=true&apiKey=c1946530cef5422ab7dda9568063bfde",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/e5eba08426d551374c6836fa85f5d52cdfa8e89f8ca62f263a413a389640c705?placeholderIfAbsent=true&apiKey=c1946530cef5422ab7dda9568063bfde",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/07ea247ce785f2860c0b81406a276263266235a3d2a1832089d56b4f38bb29b5?placeholderIfAbsent=true&apiKey=c1946530cef5422ab7dda9568063bfde"
];

function FeedbackSection() {
  const { t } = useTranslation(); // Hook de traducción

  const feedbackPoints = t('feedbackPoints', { returnObjects: true });

  return (
    <section className="rounded-[30px] px-4 mt-10">
      <div className="flex gap-5 flex-wrap md:flex-nowrap">
        {/* Imagen de la izquierda */}
        <div className="flex flex-col w-full md:w-6/12">
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0942c1f77e15c216c62efb68a78f17c3d1e1b3e650ea1d4a4e7cfe30990f773?placeholderIfAbsent=true&apiKey=c1946530cef5422ab7dda9568063bfde" 
            alt="Feedback illustration" 
            className="object-contain grow w-full rounded-2xl aspect-[1.05] max-md:mt-10"
          />
        </div>
    
        {/* Texto y lista de puntos */}
        <div className="flex flex-col ml-0 md:ml-5 w-full md:w-6/12">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10">
            {/* Encabezado */}
            <header className="flex flex-col w-full">
              <h1 className="text-4xl md:text-6xl font-semibold text-sky-600 capitalize leading-[51px] md:leading-[74px]">
                {t('feedbackTitle')}
              </h1>
              <p className="mt-6 md:mt-10 text-base md:text-lg tracking-normal leading-6 md:leading-8 text-neutral-600">
                {t('feedbackDescription')}
              </p>
            </header>
    
            {/* Lista de puntos con íconos */}
            <div className="flex flex-col mt-10 md:mt-20 capitalize w-full">
              <h2 className="text-2xl md:text-3xl font-medium text-sky-600">
                {t('feedbackHelp')}
              </h2>
              <ul className="flex flex-col mt-6 md:mt-10 w-full text-xl md:text-2xl leading-8 md:leading-10 text-neutral-700">
                {feedbackPoints.map((point, index) => (
                  <li key={index} className="flex gap-4 items-center mt-6 md:mt-9 first:mt-0">
                    <img 
                      loading="lazy" 
                      src={feedbackIcons[index]} 
                      alt="" 
                      className="object-contain shrink-0 w-6 md:w-8 aspect-square"
                    />
                    <div className="flex-auto">
                      <span className="underline">{point.title}</span>:{" "}
                      <span className="font-medium">{point.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    
      {/* Sección final con agradecimiento */}
      <section className="flex flex-col font-medium px-4 max-w-full">
        <p className="self-end mt-1.5 text-4xl md:text-7xl text-center leading-[56px] md:leading-[85px] text-neutral-600">
          {t('feedbackThankYou')}
        </p>
        <h2 className="mt-5 md:mt-62 text-4xl md:text-6xl capitalize leading-[54px] md:leading-[78px] text-neutral-700 w-full">
          {t('feedbackPlan')}
        </h2>
      </section>
    </section>
  );
}

export default FeedbackSection;
