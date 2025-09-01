// src/services/api.js
import axios from 'axios';
import {useAuth} from "@/store/auth"


const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Remplacez par l'URL de votre API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour ajouter le token d'authentification
api.interceptors.request.use(
  (config) => {
    const auth = useAuth();
    const token = auth.getTokens;
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;