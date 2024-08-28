import axios from 'axios';


const lambdaapi = axios.create({
    baseURL: 'https://x103wivm31.execute-api.us-east-1.amazonaws.com/dev'
})

export const getLambda = () => {
    return lambdaapi.get('/items')
    .then(response => response.data)
    .catch(error => {
        console.error("error", error);
        throw error;
    });
}