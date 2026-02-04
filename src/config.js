// API Configuration
const isDevelopment = import.meta.env.DEV;

export const API_BASE_URL = isDevelopment
    ? '' // Empty for local development (uses Vite proxy)
    : 'https://genesis-api-xmqn.onrender.com';
