import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Tạo instance axios với cấu hình mặc định
const apiClient = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:8080',
  timeout: 10000, // Timeout sau 10 giây
  headers: {
    'Content-Type': 'application/json'
  }
});

// // Interceptor cho request
// apiClient.interceptors.request.use(
//   (config) => {
//     // Thêm token nếu cần
//     const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// Interceptor cho response
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Xử lý lỗi chung
    if (error.response) {
      // Xử lý lỗi từ server (status codes không phải 2xx)
      if (error.response.status === 401) {
        // Xử lý khi token hết hạn
        if (typeof window !== 'undefined') {
          // Xóa token và chuyển hướng người dùng về trang đăng nhập
          localStorage.removeItem('token');
          window.location.href = '/login';
        }
      }
    } else if (error.request) {
      // Xử lý khi không nhận được response
      console.error('No response received:', error.request);
    } else {
      // Lỗi khi thiết lập request
      console.error('Error setting up request:', error.message);
    }
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