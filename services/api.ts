import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Tạo instance axios với cấu hình mặc định
const apiClient = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:8080',
  timeout: 10000, // Timeout sau 10 giây
  headers: {
    'Content-Type': 'application/json'
  }
});

// apiClient.interceptors.request.use(
//   (config) => {
//     const token = store.getState().auth.token;
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Interceptor cho response
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // handle error code
    console.log('Error response:', error.response);
    return Promise.reject(error);
  }
);

// Wrapper functions
export const apiGet = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient.get(url, config);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};

// Thay thế kiểu `any` bằng generic type parameter
export const apiPost = async <T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient.post(url, data, config);
    return response.data;
  } catch (error) {
    console.error(`Error posting data to ${url}:`, error);
    throw error;
  }
};

// Thay thế kiểu `any` bằng generic type parameter
export const apiPut = async <T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient.put(url, data, config);
    return response.data;
  } catch (error) {
    console.error(`Error updating data at ${url}:`, error);
    throw error;
  }
};

export const apiDelete = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient.delete(url, config);
    return response.data;
  } catch (error) {
    console.error(`Error deleting data from ${url}:`, error);
    throw error;
  }
};

export default apiClient;