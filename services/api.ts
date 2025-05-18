import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { toast } from 'sonner';

// Tạo instance axios với cấu hình mặc định
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080',
  timeout: 10000, // Timeout sau 10 giây
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor cho response
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized access - redirecting to login');
      toast.error('Unauthorized access - redirecting to login');
    }
    // handle other error codes
    if (error.response?.status === 404) {
      console.error('Not found - redirecting to 404 page');
      toast.error('Not found - redirecting to 404 page');
    }
    return Promise.reject(error);
  }
);

// Wrapper functions
export const apiGet = async <T>(url: string, config?: AxiosRequestConfig,): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient.get(url, config);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};

export const apiPost = async <T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient.post(url, data, config);
    return response.data;
  } catch (error) {
    console.error(`Error posting data to ${url}:`, error);
    throw error;
  }
};

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