import axios from 'axios';
export const http = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });
http.interceptors.request.use(cfg => {
  cfg.headers['x-api-key'] = import.meta.env.VITE_API_KEY;
  return cfg;
});
