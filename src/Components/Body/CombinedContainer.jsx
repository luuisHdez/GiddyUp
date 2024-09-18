import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getLambda } from "../../lambda-api"; // Para enviar datos

function CombinedContainer({ closeModal }) {
  const { t, i18n } = useTranslation();  // Hook para la traducción
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [answers, setAnswers] = useState(() => {
    const savedAnswers = localStorage.getItem("surveyAnswers");
    return savedAnswers ? JSON.parse(savedAnswers) : {};
  });

  // Almacenar respuestas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("surveyAnswers", JSON.stringify(answers));
  }, [answers]);

  // Obtener datos de la encuesta desde i18n.js
  const surveyData = t('surveyData', { returnObjects: true });

  if (!surveyData || !surveyData.pages) {
    return <div>{t("Error: No se encontraron los datos del cuestionario.")}</div>;
  }

  const currentPage = surveyData.pages[currentPageIndex];

  // Almacenar respuestas en su idioma original
  const handleOptionChange = (questionName, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionName]: value,
    }));
  };

  const handleNextPage = () => {
    if (validatePage()) {
      setCurrentPageIndex((prevIndex) =>
        prevIndex < surveyData.pages.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else {
      alert(t("Por favor, responde todas las preguntas antes de continuar."));
    }
  };

  const handlePreviousPage = () => {
    setCurrentPageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const validatePage = () => {
    const unansweredQuestions = currentPage.elements.filter((element) => {
      if (element.name === "correo_electronico" && !validateEmail(answers[element.name])) {
        alert(t("Por favor, ingresa una dirección de correo válida."));
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

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Traducir todas las respuestas al español antes de almacenarlas
  const translateAnswersToSpanish = () => {
    const translatedAnswers = {};
    Object.keys(answers).forEach((key) => {
      translatedAnswers[key] = i18n.language === "en" ? t(answers[key], { lng: "es" }) : answers[key];
    });
    return translatedAnswers;
  };

  const handleFinish = async () => {
    if (!validatePage()) {
      alert(t("Por favor, responde todas las preguntas antes de finalizar."));
      return;
    }

    // Traducir todas las respuestas a español antes de almacenarlas
    const translatedAnswers = translateAnswersToSpanish();

    const dataToSend = Object.keys(translatedAnswers).reduce((acc, key) => {
      const question = surveyData.pages
        .flatMap((page) => page.elements)
        .find((element) => element.name === key);

      const selectedText = question?.choices?.find((choice) => choice.value === translatedAnswers[key])?.text;

      if (question?.id) {
        acc[question.id] = {
          answer: translatedAnswers[key],
          text: selectedText || translatedAnswers[key],
          type: question.type,
          title: question.title,
        };
      }

      return acc;
    }, {});

    console.log("Datos a enviar:", dataToSend);

    try {
      const response = await getLambda(dataToSend);
      console.log("Respuesta de Lambda:", response);
      localStorage.removeItem("surveyAnswers");
    } catch (error) {
      console.error("Error al llamar a la API:", error);
    }

    if (closeModal) {
      closeModal();
    }
    
    alert(t("Encuesta finalizada. ¡Gracias por participar!"));
  };

  const getInputValue = (name) => {
    return answers[name] !== undefined ? answers[name] : "";
  };

  return (
    <div className="space-y-6 p-4 overflow-auto">
      <h2 className="text-lg font-semibold text-center">{t(currentPage.name)}</h2>

      {currentPage.elements.map((element, i) => (
        <div key={i} className="space-y-2">
          <p className="font-medium">{t(element.title)}</p>

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
                    {t(choice.text)} {/* Mostrar la opción en el idioma seleccionado */}
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
              placeholder={t("Escribe tu respuesta aquí")}
            />
          )}

          {/* Comment Input */}
          {element.type === "comment" && (
            <textarea
              name={element.name}
              value={getInputValue(element.name)}
              onChange={(e) => handleOptionChange(element.name, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder={t("Escribe tu comentario aquí")}
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
          {t("Anterior")}
        </button>
        {currentPageIndex === surveyData.pages.length - 1 ? (
          <button onClick={handleFinish} className="px-4 py-2 bg-green-500 text-white rounded">
            {t("Finalizar")}
          </button>
        ) : (
          <button onClick={handleNextPage} className="px-4 py-2 bg-blue-500 text-white rounded">
            {t("Siguiente")}
          </button>
        )}
      </div>
    </div>
  );
}

export default CombinedContainer;
