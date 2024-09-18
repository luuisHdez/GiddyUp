import React from 'react';
import { useTranslation } from 'react-i18next'; // Hook para las traducciones

function CombinedContactSection() {
  const { t } = useTranslation(); // Hook para acceder a las traducciones

  return (
    <section className="px-14 pt-9 w-full rounded-[30px] bg-blue-500 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-7 max-md:mt-10 max-md:max-w-full">
            <header className="flex flex-col justify-center max-md:max-w-full">
              <h1 className="text-6xl text-white leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                {t('contactSection.questionsTitle')} {/* Título traducido */}
              </h1>
              <p className="mt-4 text-2xl leading-8 text-gray-200 max-md:max-w-full">
                {t('contactSection.questionsDescription')} {/* Descripción traducida */}
              </p>
            </header>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9450576dfac47e70fc6217a248e453df19345ee6d9a59c281b0cb6684f9f687?placeholderIfAbsent=true&apiKey=c1946530cef5422ab7dda9568063bfde"
              alt="Decorative image"
              className="object-contain mt-16 max-w-full aspect-[2.33] w-[312px] max-md:mt-10"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full mt-5 mb-5">
          <form className="flex flex-col px-4 py-6 mx-auto w-full font-medium rounded-3xl bg-white bg-opacity-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col w-full text-lg text-white max-md:max-w-full">
              <div className="flex flex-wrap gap-4 w-full max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink self-start basis-0 min-w-[240px]">
                  <label>
                    {t('contactSection.nameLabel')} <span className="text-red-500">*</span> {/* Etiqueta Nombre */}
                  </label>
                  <input
                    type="text"
                    placeholder={t('contactSection.namePlaceholder')}  
                    className="flex-1 shrink gap-2.5 self-stretch px-3 py-5 mt-2.5 w-full bg-white bg-opacity-20 rounded-[100px]"
                    required
                  />
                </div>
                <div className="flex flex-col flex-1 shrink self-start basis-0 min-w-[240px]">
                  <label>
                    {t('contactSection.emailLabel')} <span className="text-red-500">*</span> {/* Etiqueta Email */}
                  </label>
                  <input
                    type="text"
                    placeholder={t('contactSection.emailPlaceholder')}  
                    className="flex-1 shrink gap-2.5 self-stretch px-3 py-5 mt-2.5 w-full bg-white bg-opacity-20 rounded-[100px]"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-4 items-start mt-4 w-full max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
                  <label>
                    {t('contactSection.messageLabel')} <span className="text-red-500">*</span> 
                  </label>
                  <div className="relative mt-2.5 w-full">
                    <textarea
                      placeholder={t('contactSection.messagePlaceholder')}  
                      required
                      className="flex gap-2.5 items-start px-3 pt-3.5 pb-40 w-full rounded-2xl bg-white bg-opacity-20 max-md:pb-24 max-md:max-w-full"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6006771c14c538e8a561da604ef6b112aa556619f1b3607c7fd6e4e77802713?placeholderIfAbsent=true&apiKey=c1946530cef5422ab7dda9568063bfde"
                      alt=""
                      className="object-contain absolute right-1.5 bottom-[7px] h-[17px] w-[17px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="flex justify-center items-center px-6 py-4 mt-10 max-w-full text-xl font-medium text-white bg-white bg-opacity-20 min-h-[56px] rounded-[100px]">
              {t('contactSection.sendButton')} {/* Botón traducido */}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CombinedContactSection;
