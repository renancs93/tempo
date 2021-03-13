import axios from 'axios';

// https://api.hgbrasil.com/weather?key=25c07a05&lat=-23.682&lon=-46.875

export const key = '25c07a05';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com',
});

export default api;
