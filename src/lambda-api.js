import axios from 'axios';

const lambdaapi = axios.create({
    baseURL: 'https://ollffxgxwd.execute-api.us-east-1.amazonaws.com/dev'
});

export const getLambda = (data) => {
    return lambdaapi.post('/prueba', data)
        .then(response => response.data)
        .catch(error => {
            console.error("error", error);
            throw error;
        });
};

export const getAllSurveys = (excel) => {
    // Construir la URL solo si el parámetro excel existe
    const url = excel ? `/prueba?excel=${excel}` : '/prueba';

    return lambdaapi.get(url)
        .then(response => response.data)
        .catch(error => {
            console.error("error", error);
            throw error;
        });
};