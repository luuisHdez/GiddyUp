import React from "react";

function Error() {
  return (
    <div className="space-y-6 p-4 rounded-[50px]  ">
  {/* Mensaje de error 404 */}
<div class="flex justify-center items-center ">
    <div class="max-w-[720px] mx-auto">
        <div class="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
            <a 
                class="block w-full px-4 py-2 text-center text-slate-700 transition-all"
            >
               <b>Datos de la cuenta bancaria</b>.
            </a>
        </div>

        <div
            class="relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-md w-full max-w-[20rem] p-8">
            <div
                class="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none bg-clip-border border-white/10">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                    Banco
                </p>
                <h1 class="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                    <span class="mt-2 text-4xl">Banamex</span>
                </h1>
            </div>
            <div class="p-0">
                <ul class="flex flex-col gap-4">
                    <li class="flex items-center gap-4">
                        <span class="p-1 border rounded-full border-white/20 bg-white/20">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="w-3 h-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                        </span>
                        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                            100% Segura
                        </p>
                    </li>
                   
                    
                    <li class="flex items-center gap-4">
                        <span class="p-1 border rounded-full border-white/20 bg-white/20">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="w-3 h-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                        </span>
                        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                            Destinada a mejorar tu experiencia
                        </p>
                    </li>
                </ul>
            </div>
            <div class="p-0 mt-12 bg-blue-500">
                <button
                id="fifth"
                    class="align-middle buttonBox text-blue-500 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                    type="button">
                    Donar
                </button>
            </div>
        </div>
    </div>
</div>
    
  </div>
  );
}

export default Error;
