import { ApiResponse, TypeAuthenticationModel, TypeLoginModel, TypeRegisterModel } from "@/types";
import { apiGet, apiPost } from "./api";
import { JWT_CONFIG } from "@/config/jwt";
import { toast } from "sonner";

export const AuthService = {
  login: async (params: TypeLoginModel): Promise<any> => {
    try {
      const response = await apiPost<ApiResponse<TypeAuthenticationModel>>(`/api/auth/login`, params);
      // Store token in cookies (for client-side)
      if (response.result?.token) {
        document.cookie = `${JWT_CONFIG.cookie.name}=${response.result.token}; path=/; max-age=${JWT_CONFIG.cookie.maxAge}; SameSite=Strict`;
      }

      if (response.result?.roles?.includes("ADMIN")) {
        window.location.href = "/admin";
      }
      else {
        window.location.href = "/";
      }
      toast.success("Login successful");
      return response.result;
    } catch (error) {
      console.error('Error logging in:', error);
      throw new Error('Failed to login');
    }
  },
  
  register: async (params: TypeRegisterModel): Promise<TypeAuthenticationModel> => {
    try {
      const response = await apiPost<ApiResponse<TypeAuthenticationModel>>(`/api/auth/register`, params);
      
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