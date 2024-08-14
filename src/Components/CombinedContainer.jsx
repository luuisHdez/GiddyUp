import React from "react";

function CombinedContainer() {
  return (
    <div className="flex flex-wrap gap-8 justify-center items-center px-4 py-20 w-full max-w-[2200px] min-h-[1400px] bg-gray-100 rounded-[30px] mt-10">
      {/* Este contenedor tiene el tamaño total combinado de los cuatro artículos */}
      <div className="w-full flex flex-wrap gap-8 justify-between">
        <div className="bg-violet-50 p-8 rounded-[30px] min-h-[347px] w-[calc(50%-16px)]"></div>
        <div className="bg-violet-50 p-8 rounded-[30px] min-h-[347px] w-[calc(50%-16px)]"></div>
        <div className="bg-violet-50 p-8 rounded-[30px] min-h-[347px] w-[calc(50%-16px)]"></div>
        <div className="bg-violet-50 p-8 rounded-[30px] min-h-[347px] w-[calc(50%-16px)]"></div>
      </div>
    </div>
  );
}

export default CombinedContainer;
