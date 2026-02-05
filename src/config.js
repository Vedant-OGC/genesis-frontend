// API Configuration
const isDevelopment = import.meta.env.DEV;

export const API_BASE_URL = isDevelopment
    ? '' 
    : 'https://genesis-api-xmqn.onrender.com';

export const RESEARCH_ENABLED = false;
