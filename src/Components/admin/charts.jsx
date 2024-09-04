import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { getAllSurveys } from '../../lambda-api';
import surveyData from '../surveyData';
import Survey from './survey';

export default class SurveyCharts extends PureComponent {
  state = {
    surveyResults: [],
    currentQuestionIndex: 0,
    showChart: false,
  };

  // Función para generar un color aleatorio en formato hexadecimal
  getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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
            color: this.getRandomColor(), // Asigna un color aleatorio a cada barra
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
      <div className=" flex flex-col items-center max-md:max-w-full border border-gray-400 p-4 rounded">
        <h1 className='mb-2 text-2xl font-medium leading-tight text-primary text-center'>Gráfica de Resultados</h1>
        {!showChart && (
          <button onClick={this.showResults} className="px-4 py-2 bg-gray-300 rounded">
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
                <Bar dataKey="value">
                  {currentQuestion.data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
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
       <div className='flex flex-col items-center max-md:max-w-full border border-gray-400 p-4 rounded mt-2'>
          <Survey />
       </div>

      </div>
    );
  }
}
