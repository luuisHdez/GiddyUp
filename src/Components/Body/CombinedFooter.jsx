import React from 'react';
import { useTranslation } from 'react-i18next'; // Hook para las traducciones

const CombinedFooter = () => {
  const { t } = useTranslation(); // Hook para acceder a las traducciones

  return (
    <footer className="flex justify-center items-center px-16 py-20 bg-violet-50 max-md:px-5">
      <div className="max-w-full w-[1174px]">
        <div className="flex gap-5 justify-between items-start max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/601a2a08c5572aa8c6202c01a0eaf9d92e16fb36ce6c14a4d9bc7680a32122f6?placeholderIfAbsent=true&apiKey=c1946530cef5422ab7dda9568063bfde"
              alt={t('footer.logoAlt')} 
              className="object-contain w-[255px] max-md:w-auto max-md:self-center"
            />
            <div className="mt-6">
              <h2 className="text-2xl font-medium leading-tight capitalize text-neutral-700">
                {t('footer.newsletterTitle')} 
              </h2>
              <p className="mt-4 text-base leading-7 text-neutral-600">
                {t('footer.newsletterDescription')} 
              </p>
              <form className="flex mt-6 max-md:flex-col">
                <input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')} 
                  className="flex-1 px-4 py-2 rounded-l-lg border-none max-md:rounded-none max-md:rounded-t-lg"
                  required
                />
                <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-r-lg max-md:rounded-none max-md:rounded-b-lg">
                  {t('footer.subscribeButton')} 
                </button>
              </form>
            </div>
          </div>

          {/* Sección de redes sociales */}
          <div className="flex flex-col w-6/12 max-md:w-full max-md:mt-10 self-center">
            <h2 className="text-2xl font-medium leading-tight capitalize text-neutral-700">
              {t('footer.socialTitle')} 
            </h2>
            <p className="mt-6 text-base leading-7 text-neutral-600">
              {t('footer.socialDescription')} 
            </p>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2635a210e161cf4044b4a2e0cc897ba8ec2f39c8deb97bdb4db609f2958b26f6?placeholderIfAbsent=true&apiKey=c1946530cef5422ab7dda9568063bfde"
              alt={t('footer.socialIconsAlt')}
              className="buttonBox object-contain mt-6 w-[489px] max-md:w-full max-md:self-center"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CombinedFooter;
