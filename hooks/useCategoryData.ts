import { request } from '@/lib/axios-util';
import { TypeCreateCategoryModel } from '@/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const fetchCategories = () => request({withAuth: false, url: '/api/categories?page=0&size=20&sort=id', method: 'GET'});

const createCategory = (newCategory: TypeCreateCategoryModel) => {
    return request({url: "/api/categories", method: "POST", data: newCategory});
}

const deleteCategory = (id: string) => {
    return request({url: `/api/categories/${id}`, method: "DELETE"})
}

export const useCategoryGet = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories,
    })
}

export const useCategoryCreate = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] });
        }
    });
}

export const useCategoryDelete = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] });
        }
    });
}