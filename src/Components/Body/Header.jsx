import React, { useState, useRef, useEffect } from 'react';
import Error from '../Modals/Error';
import { useTranslation } from 'react-i18next';  // Asegúrate de importar esto
import '../../assets/ButtonStyles.css';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();  // Hook para manejar traducciones

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);  // Cambiar el idioma
    setIsDropdownOpen(false);  // Cerrar el menú desplegable
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);  // Cerrar el dropdown si haces clic fuera de él
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="flex relative items-center justify-between w-full max-w-[1705px] px-4 py-2 max-md:flex max-md:items-center max-md:gap-2 max-md:justify-between max-md:w-full">
      {/* Logo de la izquierda */}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/40dceafdffc643f25a50410625f24285a6a7e21d96e2df7e6a537110dfb7130b?apiKey=c1946530cef5422ab7dda9568063bfde"
        alt="Giddy Up Logo"
        className="object-contain shrink-0 w-[189px] max-md:w-[130px]" // Tamaño ajustado para mobile
      />

      {/* Contenedor de idioma y botón */}
      <div className="flex items-center gap-5">
        {/* Sección de idioma */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}  // Abrir/cerrar el menú desplegable
            className="flex items-center gap-2 text-base tracking-wider capitalize whitespace-nowrap text-neutral-700 max-md:text-sm cursor-pointer"
          >
            {/* Imagen del idioma actual */}
            <div className="flex items-center gap-2">
  <svg
    aria-hidden="true"
    className="object-contain w-[22px] rounded-full max-md:w-[18px]" // Mantén las clases de estilo
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    {i18n.language === 'en' ? (
      // SVG para la bandera de Estados Unidos
      <g fillRule="evenodd">
        <g strokeWidth="1pt">
          <path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" />
          <path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" />
        </g>
        <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
        <path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3z" />
      </g>
    ) : (
      // SVG para la bandera de México
      <g fillRule="evenodd">
        <path fill="#006847" d="M0 0h170.7v512H0z" />
        <path fill="#fff" d="M170.7 0h170.6v512H170.7z" />
        <path fill="#ce1126" d="M341.3 0H512v512H341.3z" />
        <path fill="#006847" d="M256 287.6c-20.3 0-35.6-15.8-35.6-35.6 0-13.2 7.3-24.7 18-30.8L256 256l17.6-34.9c10.7 6.1 18 17.6 18 30.8-.1 19.8-15.4 35.7-35.6 35.7z" />
      </g>
    )}
  </svg>
  
  {/* Texto del idioma actual desde JSON */}
  <span className="text-neutral-700 max-md:text-sm">
    {i18n.language === 'en' ? t('English') : t('Español')}
  </span>
</div>

            {/* Imagen del ícono de flecha (dropdown) */}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cecf03faa6638e6495d53fb9e0290ae71be09b14163b91a9e67fa6feaaf3349?apiKey=c1946530cef5422ab7dda9568063bfde"
              alt=""
              className="object-contain w-6 max-md:w-5"
            />
          </button>
          {isDropdownOpen && (
            <div className="absolute mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <ul className="py-1 text-sm text-gray-700">
                <li>
                  <button
                    onClick={() => changeLanguage('es')}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {t('Español')} {/* Texto desde el archivo de traducción */}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => changeLanguage('en')}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {t('English')} {/* Texto desde el archivo de traducción */}
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Botón de inversión */}
        <button
          id="fifth"
          onClick={toggleModal}
          className="flex items-center justify-center gap-2.5 px-6 py-3 text-xl font-medium bg-white rounded-full text-neutral-700 min-h-[56px] max-md:px-4 max-md:py-2 max-md:text-sm buttonBox"
        >
          {t('invest')}  {/* Texto traducido desde JSON */}
        </button>
      </div>

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
            <Error closeModal={toggleModal} />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
