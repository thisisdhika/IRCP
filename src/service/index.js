import axios from "axios";
import qs from "qs";
import { store } from "../store";
import { logout } from "../store/actions/auth";
const API_URL = "http://localhost:8000/api";

// axios with interceptors response
const api = axios.create({
  baseURL: API_URL,
  timeout: 30000, // 30 second
});

// Request Configuration for Request Interceptors
const configRequest = async (request) => {
  const token = localStorage.getItem("token");
  request.paramsSerializer = (params) => {
    return qs.stringify(params, {
      arrayFormat: "comma",
      allowDots: true,
      encode: true,
    });
  };
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
};

// Response Configuration for Response Interceptors
const configResponse = (response) => {
  return response;
};

// Error Request and Error Response Handler
const errorHandler = (error) => {
  if (error.response) {
    const { status } = error.response;
    // logout if 401
    // Next add overlay popup when 401
    if (status === 401) {
      return store.dispatch(logout());
    }
  }
  return Promise.reject(error);
};

// Global Axios Request Interceptors
api.interceptors.request.use(configRequest, errorHandler);

// Global Axios Response Interceptors
api.interceptors.response.use(configResponse, errorHandler);

export default api;
