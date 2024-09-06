import React from 'react';
import '../../assets/ButtonStyles.css';

function Header() {
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
        <div className="flex items-center gap-2 text-base tracking-wider capitalize whitespace-nowrap text-neutral-700 max-md:text-sm">
          <div className="flex items-center gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ff608fc673b862dc833cc5f90887bb99fbca8b3203153a4a52b5da1e3b4e964?apiKey=c1946530cef5422ab7dda9568063bfde"
              alt=""
              className="object-contain w-[22px] rounded-full max-md:w-[18px]"  // Tamaño ajustado para mobile
            />
            <div>EN</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cecf03faa6638e6495d53fb9e0290ae71be09b14163b91a9e67fa6feaaf3349?apiKey=c1946530cef5422ab7dda9568063bfde"
            alt=""
            className="object-contain w-6 max-md:w-5"  // Tamaño ajustado para mobile
          />
        </div>

        {/* Botón de inversión */}
        <button
          id="fifth"
          className="flex items-center justify-center gap-2.5 px-6 py-3 text-xl font-medium bg-white rounded-full text-neutral-700 min-h-[56px] max-md:px-4 max-md:py-2 max-md:text-sm buttonBox"  // Agregamos la clase "buttonBox"
        >
          INVEST IN GIDDY UP
        </button>
      </div>
    </header>
  );
}

export default Header;
