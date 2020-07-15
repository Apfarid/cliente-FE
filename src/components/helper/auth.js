import axios from "axios";


const TOKEN_KEY = "token";

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
  };
  
  export const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
  };
  
  export const deleteToken = () => {
    localStorage.removeItem(TOKEN_KEY);
  };
  
  export const initAxiosInterceptors = () => {
    axios.interceptors.request.use((config) => {
      const token = getToken();
  
      if (token) {
        config.headers.Authorization = `${token}`;
      }
  
      return config;
    });
  
   /* axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401) {
          logout();
          window.location = "/signin";
        } else {
          return Promise.reject(error);
        }
      }
    );*/
  };