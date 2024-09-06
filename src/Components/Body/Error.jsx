import React from "react";

function Error() {
  return (
    <div className="space-y-6 p-4 overflow-auto">
      {/* Mensaje de error 404 */}
      <div className="flex justify-center items-center h-full">
        <h1 className="text-3xl font-semibold text-center">404 - Page Not Found</h1>
      </div>
    </div>
  );
}

export default Error;
