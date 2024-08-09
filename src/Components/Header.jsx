import React from 'react';
import LanguageSelector from './LanguageSelector';
import InvestButton from './InvestButton';

function Header() {
  return (
    <header className="flex relative flex-wrap gap-5 justify-between self-start w-full max-w-[1705px] max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/40dceafdffc643f25a50410625f24285a6a7e21d96e2df7e6a537110dfb7130b?apiKey=c1946530cef5422ab7dda9568063bfde&&apiKey=c1946530cef5422ab7dda9568063bfde" alt="Giddy Up Logo" className="object-contain shrink-0 max-w-full aspect-[2.46] w-[189px]" />
      <div className="flex gap-5 my-auto">
        <LanguageSelector />
        <InvestButton />
      </div>
    </header>
  );
}

export default Header;