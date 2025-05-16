import { ApiListResponse, TypeCategoryModel } from '@/types';
import { apiGet } from './api';

// Interface cho params lấy danh sách categories
interface GetCategoriesParams {
  page?: number;
  size?: number;
  sort?: string;
}

// Service cho categories
export const CategoryService = {
  // Lấy danh sách categories
  getCategories: async (params: GetCategoriesParams = { page: 0, size: 20, sort: 'name' }): Promise<TypeCategoryModel[]> => {
    try {
      const { page = 0, size = 20, sort = 'name' } = params;
      const queryParams = `page=${page}&size=${size}&sort=${sort}`;
      const response = await apiGet<ApiListResponse<TypeCategoryModel>>(`/api/categories?${queryParams}`);
      return response.result.content;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  },
};

export default CategoryService;
