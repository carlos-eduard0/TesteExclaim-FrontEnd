import axios from 'axios';

const api = axios.create({
    baseURL:"https://teste-eric.herokuapp.com/",
});

export default api;
