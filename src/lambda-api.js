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
