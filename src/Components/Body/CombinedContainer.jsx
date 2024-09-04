import React, { useState, useEffect } from "react";
import surveyData from "../surveyData"; // Asegúrate de que el JSON esté correctamente importado
import { getLambda } from "../../lambda-api";

function CombinedContainer({ closeModal }) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [answers, setAnswers] = useState(() => {
    // Cargar respuestas guardadas en localStorage al iniciar
    const savedAnswers = localStorage.getItem("surveyAnswers");
    return savedAnswers ? JSON.parse(savedAnswers) : {};
  });

  // Guardar las respuestas en localStorage cada vez que se actualicen
  useEffect(() => {
    localStorage.setItem("surveyAnswers", JSON.stringify(answers));
  }, [answers]);

  // Verificar que surveyData tenga la estructura correcta
  if (!surveyData || !surveyData[0]?.pages) {
    return <div>Error: No se encontraron los datos del cuestionario.</div>;
  }

  const currentPage = surveyData[0].pages[currentPageIndex];

  const handleOptionChange = (questionName, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionName]: value,
    }));
  };

  const handleCheckboxChange = (questionName, value) => {
    setAnswers((prevAnswers) => {
      const currentValues = prevAnswers[questionName] || [];
      return {
        ...prevAnswers,
        [questionName]: currentValues.includes(value)
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value],
      };
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePage = () => {
    const unansweredQuestions = currentPage.elements.filter((element) => {
      if (element.name === "correo_electronico" && !validateEmail(answers[element.name])) {
        alert(`Por favor, ingresa una dirección de correo válida.`);
        return true;
      }
      if (element.type === "radiogroup" || element.type === "text" || element.type === "comment") {
        return !answers[element.name];
      } else if (element.type === "checkbox") {
        return !answers[element.name] || answers[element.name].length === 0;
      }
      return false;
    });

    return unansweredQuestions.length === 0;
  };

  const handleNextPage = () => {
    if (validatePage()) {
      setCurrentPageIndex((prevIndex) =>
        prevIndex < surveyData[0].pages.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else {
      alert("Por favor, responde todas las preguntas antes de continuar.");
    }
  };

  const handlePreviousPage = () => {
    setCurrentPageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleFinish = async () => {
    if (!validatePage()) {
      alert("Por favor, responde todas las preguntas antes de finalizar.");
      return;
    }
  
    // Crear el objeto dataToSend con el id como clave
    const dataToSend = Object.keys(answers).reduce((acc, key) => {
      const question = surveyData[0].pages
        .flatMap((page) => page.elements)
        .find((element) => element.name === key);
      
      const selectedText = question?.choices?.find((choice) => choice.value === answers[key])?.text;
      
      if (question?.id) {
        acc[question.id] = {
          answer: answers[key],
          text: selectedText || answers[key],
          type: question.type, // Agregando el tipo de pregunta
          title: question.title, // Usando "title" en lugar de "name"
        };
      }
      
      return acc;
    }, {});
  
    console.log("resss",dataToSend);
  
    try {
      const response = await getLambda(dataToSend);
      console.log("Respuesta de Lambda:", response);
    } catch (error) {
      console.error("Error al llamar a la API:", error);
    }
  
    //localStorage.removeItem("surveyAnswers");
  
    if (closeModal) {
      closeModal();
    }
  
    alert("Encuesta finalizada. ¡Gracias por participar!");
  };
  

  const getInputValue = (name) => {
    return answers[name] !== undefined ? answers[name] : "";
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

          {/* Text Input */}
          {element.type === "text" && (
            <input
              type="text"
              name={element.name}
              value={getInputValue(element.name)}
              onChange={(e) => handleOptionChange(element.name, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Escribe tu respuesta aquí"
            />
          )}

          {/* Comment Input */}
          {element.type === "comment" && (
            <textarea
              name={element.name}
              value={getInputValue(element.name)}
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
