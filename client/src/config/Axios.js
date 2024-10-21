import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',  // Adjust the base URL as needed
});


