import { ApiResponse, TypeAuthenticationModel, TypeLoginModel, TypeRegisterModel } from "@/types";
import { apiGet, apiPost } from "./api";

export const AuthService = {
  login: async (params: TypeLoginModel): Promise<TypeAuthenticationModel> => {
    try {
      const response = await apiPost<ApiResponse<TypeAuthenticationModel>>(`/api/auth/login`, params);
      // Store token in cookies (for client-side)
      if (response.result?.token) {
        document.cookie = `auth-token=${response.result.token}; path=/; max-age=${60 * 60 * 24}; SameSite=Strict`;
      }
      
      return response.result;
    } catch (error) {
      console.error('Error logging in:', error);
      throw new Error('Failed to login');
    }
  },
  
  register: async (params: TypeRegisterModel): Promise<TypeAuthenticationModel> => {
    try {
      const response = await apiPost<ApiResponse<TypeAuthenticationModel>>(`/api/auth/register`, params);
      
      // Store token in cookies (for client-side)
      if (response.result?.token) {
        document.cookie = `auth-token=${response.result.token}; path=/; max-age=${60 * 60 * 24}; SameSite=Strict`;
      }
      
      return response.result;
    } catch (error) {
      console.error('Error registering user:', error);
      throw new Error('Failed to register');
    }
  },
  
  logout: async (): Promise<void> => {
    try {
      // Call logout API if needed
      await apiPost('/api/auth/logout', {});
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      // Always clear cookies even if API fails
      document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
      // Redirect to login page
      window.location.href = '/login';
    }
  },
  checkAuth: async (): Promise<boolean> => {
    try {
      // Call an endpoint that requires authentication
      await apiGet('/api/auth/me');
      return true;
    } catch {
      // Ignore error details
      return false;
    }
  }
};

export default AuthService;