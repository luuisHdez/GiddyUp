import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getAllSurveys } from '../../lambda-api';
import surveyData from '../surveyData';
import Survey from './survey';

export default class SurveyCharts extends PureComponent {
  state = {
    surveyResults: [],
    currentQuestionIndex: 0,
    showChart: false,
  };

  // Procesar datos del backend para obtener conteo de respuestas por opción
  processSurveyData = (apiResponse) =>
    surveyData[0].pages.flatMap((page) =>
      page.elements
        .filter((element) => element.type === 'radiogroup')
        .map((element) => ({
          id: element.id,
          title: element.title,
          data: element.choices.map((choice) => ({
            name: choice.text,
            value: apiResponse.reduce(
              (count, survey) =>
                count + (survey[element.id]?.answer === choice.value ? 1 : 0),
              0
            ),
          })),
        }))
    );

  // Obtener resultados y procesarlos al pulsar "Mostrar Resultados"
  showResults = async () => {
    try {
      const response = await getAllSurveys();
      console.log('Respuesta de la API:', response);
      this.setState({ surveyResults: this.processSurveyData(response), showChart: true });
    } catch (error) {
      console.error('Error al llamar a la API', error);
    }
  };

  handleQuestionChange = (direction) =>
    this.setState((prevState) => ({
      currentQuestionIndex: Math.max(
        0,
        Math.min(
          prevState.surveyResults.length - 1,
          prevState.currentQuestionIndex + direction
        )
      ),
    }));

  render() {
    const { currentQuestionIndex, surveyResults, showChart } = this.state;
    const currentQuestion = surveyResults[currentQuestionIndex];

    return (
      <div className="flex  flex-col  px-20 pt-10 pb-80 w-full max-w-[2028px] min-h-[1010px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <h1>Gráfica de Resultados</h1>
        {!showChart && (
          <button onClick={this.showResults} className="px-4 py-2 bg-gray-300 rounded mb-4">
            Mostrar Resultados
          </button>
        )}
        {showChart && currentQuestion && (
          <>
            <h2>{currentQuestion.title}</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={currentQuestion.data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => this.handleQuestionChange(-1)}
                className="px-4 py-2 bg-gray-300 rounded"
                disabled={currentQuestionIndex === 0}
              >
                Anterior
              </button>
              <button
                onClick={() => this.handleQuestionChange(1)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
                disabled={currentQuestionIndex === surveyResults.length - 1}
              >
                Siguiente
              </button>
            </div>
          </>
        )}
        <div>
          < Survey />
        </div>
      </div>
    );
  }
}
