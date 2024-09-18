import React, { useState } from "react";
import { getAllSurveys } from '../../lambda-api';

function Survey() {
  const [surveys, setSurveys] = useState([]);
  const [currentSurveyIndex, setCurrentSurveyIndex] = useState(0);

  // Función para obtener las encuestas del backend
  const getSurveys = async () => {
    try {
      const response = await getAllSurveys();
      console.log("respuesta", response);
      setSurveys(response);
    } catch (error) {
      console.error("Error al llamar a la API", error);
    }
  };

  // Función para descargar el archivo Excel
  const ecxel = async () => {
    try {
      const response = await getAllSurveys(true); // Enviar el parámetro excel=true
      
      // Decodificar el archivo Base64
      const byteCharacter = atob(response); // Decodificar la respuesta que viene en Base64
      const byteNumbers = new Array(byteCharacter.length);
      for (let i = 0; i < byteCharacter.length; i++){
        byteNumbers[i] = byteCharacter.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);

      // Crear un Blob a partir de los datos decodificados
      const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);

      // Crear un enlace temporal para descargar el archivo
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'items.xlsx'); // Nombre del archivo
      document.body.appendChild(link);
      link.click();
      link.remove(); // Remover el enlace después de la descarga
    } catch (error) {
      console.error("Error al descargar el archivo:", error);
    }
  };

  // Navegación entre encuestas
  const handleNextSurvey = () => {
    setCurrentSurveyIndex((prevIndex) =>
      prevIndex < surveys.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePreviousSurvey = () => {
    setCurrentSurveyIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  // Encuesta actual
  const currentSurvey = surveys[currentSurveyIndex] || {};

  return (
    <div className="flex flex-col items-center max-md:max-w-full">
      <h2 className="mb-2 mt-0 text-2xl font-medium leading-tight text-primary text-center">
        {surveys.length > 0
          ? `Respuestas de la Encuesta ${currentSurveyIndex + 1}`
          : "Componente de Revisión de Encuestas"}
      </h2>
      <div className="space-y-6 p-4 overflow-auto max-h-80">
        {surveys.length > 0 ? (
          <>
            {/* Renderizar preguntas y respuestas */}
            {Object.entries(currentSurvey).map(([key, value], index) => (
              value.title && value.text && (
                <div key={index} className="space-y-2">
                  <p className="font-medium">{value.title}</p>
                  <p className="p-2 border border-gray-300 rounded">
                    {value.text}
                  </p>
                </div>
              )
            ))}

            <div className="flex justify-between">
              <button
                onClick={handlePreviousSurvey}
                disabled={currentSurveyIndex === 0}
                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
              >
                Anterior
              </button>
              <button
                onClick={handleNextSurvey}
                disabled={currentSurveyIndex === surveys.length - 1}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Siguiente
              </button>
            </div>
          </>
        ) : (
          <div className="flex justify-center mt-4">
            <button onClick={getSurveys} className="px-4 py-2 bg-gray-300 rounded">
              Obtener Encuestas
            </button>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-4">
            <button onClick={ecxel} className="px-4 py-2 bg-gray-300 rounded">
              Obtener Excel
            </button>
          </div>
    </div>
  );
}

export default Survey;
