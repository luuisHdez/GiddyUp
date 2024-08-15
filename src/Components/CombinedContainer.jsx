import React, { useState } from "react";
import surveyData from "./surveyData"; // Asegurarse de que el JSON esté correctamente importado

function CombinedContainer() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  // Verificar que surveyData tenga la estructura correcta
  if (!surveyData || !surveyData[0]?.pages) {
    return <div>Error: No se encontraron los datos del cuestionario.</div>;
  }

  const currentPage = surveyData[0].pages[currentPageIndex];

  const handleOptionChange = (questionName, value) => {
    setAnswers({
      ...answers,
      [questionName]: value,
    });
  };

  const handleCheckboxChange = (questionName, value) => {
    const currentValues = answers[questionName] || [];
    if (currentValues.includes(value)) {
      // Remover el valor si ya está seleccionado
      setAnswers({
        ...answers,
        [questionName]: currentValues.filter((v) => v !== value),
      });
    } else {
      // Agregar el valor si no está seleccionado
      setAnswers({
        ...answers,
        [questionName]: [...currentValues, value],
      });
    }
  };

  const handleNextPage = () => {
    if (currentPageIndex < surveyData[0].pages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const handleFinish = () => {
    console.log("Respuestas:", answers);
    alert("Encuesta finalizada. ¡Gracias por participar!");
    // Aquí podrías agregar la lógica para enviar los datos
  };

  return (
    <div className="space-y-6 p-4 overflow-auto">
      {/* Mostrar el título de la página actual */}
      <h2 className="text-lg font-semibold text-center">{currentPage.name}</h2>

      {/* Renderizar las preguntas y sus opciones */}
      {currentPage.elements.map((element, i) => (
        <div key={i} className="space-y-2">
          <p className="font-medium">{element.title}</p>

          {/* Radiogroup */}
          {element.type === "radiogroup" && (
            <div className="space-y-1">
              {element.choices.map((choice, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="radio"
                    id={`question-${element.name}-choice-${index}`}
                    name={element.name}
                    value={choice.value}
                    checked={answers[element.name] === choice.value}
                    onChange={() => handleOptionChange(element.name, choice.value)}
                    className="mr-2"
                  />
                  <label htmlFor={`question-${element.name}-choice-${index}`}>
                    {choice.text}
                  </label>
                </div>
              ))}
            </div>
          )}

          {/* Checkbox */}
          {element.type === "checkbox" && (
            <div className="space-y-1">
              {element.choices.map((choice, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`question-${element.name}-choice-${index}`}
                    name={element.name}
                    value={choice.value}
                    checked={answers[element.name]?.includes(choice.value)}
                    onChange={() => handleCheckboxChange(element.name, choice.value)}
                    className="mr-2"
                  />
                  <label htmlFor={`question-${element.name}-choice-${index}`}>
                    {choice.text}
                  </label>
                </div>
              ))}
            </div>
          )}

          {/* Text Input */}
          {element.type === "text" && (
            <input
              type="text"
              name={element.name}
              value={answers[element.name] || ""}
              onChange={(e) => handleOptionChange(element.name, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Escribe tu respuesta aquí"
            />
          )}

          {/* Comment Input */}
          {element.type === "comment" && (
            <textarea
              name={element.name}
              value={answers[element.name] || ""}
              onChange={(e) => handleOptionChange(element.name, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Escribe tu comentario aquí"
            />
          )}
        </div>
      ))}

      {/* Botones para navegar entre páginas */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPageIndex === 0}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        {currentPageIndex === surveyData[0].pages.length - 1 ? (
          <button
            onClick={handleFinish}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Finalizar
          </button>
        ) : (
          <button
            onClick={handleNextPage}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
}

export default CombinedContainer;
