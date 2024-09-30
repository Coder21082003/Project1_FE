// src/utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:2108/', // Thay đổi URL này theo API của bạn
  timeout: 90000,
});

export default api;
