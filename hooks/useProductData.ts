import { request } from "@/lib/axios-util"
import { TypeFormProduct } from "@/types"
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

const fetchProduct = (productId: string) => request({
    withAuth: false,
    url: `/api/products/${productId}`,
    method: "GET"
})

const fetchProducts = (page: number, searchTerm?: string, categoryId?: string, brandId?: string, sort = "id") => request({
    withAuth: false,
    url: `/api/products?page=${page}&size=6&sort=${sort}${searchTerm ? `&name=${searchTerm}` : ""}${categoryId ? `&categoryId=${categoryId}` : ""}${brandId ? `&brandId=${brandId}` : ""}`,
    method: "GET"
})

const updateProduct = (data: TypeFormProduct) => request({
    url: `/api/products/${data.id}`,
    method: "PUT",
    data
})

const createProduct = (data: TypeFormProduct) => request({
    url: "/api/products",
    method: "POST",
    data
})

const deleteProduct = (id: string) => request({
    url: `/api/products/${id}`,
    method: "DELETE"
})

export const useProductData = (productId: string) => {
    return useQuery({
        queryKey: ["product", productId],
        queryFn: () => fetchProduct(productId),
    })
}

export const useProductGet = (page: number, searchTerm?: string, categoryId?: string, brandId?: string, sort = "id") => {
    return useQuery({
        queryKey: ["products", page, searchTerm, categoryId, brandId, sort],
        queryFn: () => fetchProducts(page, searchTerm, categoryId, brandId, sort),
        select: (data) => data.data.result,
        placeholderData: keepPreviousData,
    })
}

export const useProductUpdate = () => {
    const clientQuery = useQueryClient()
    return useMutation({
        mutationKey: ["product"],
        mutationFn: (product: TypeFormProduct) => updateProduct(product),
        onSuccess: () => {
            toast.success("Product updated successfully!", {
                duration: 3000,
            })
            clientQuery.invalidateQueries({ queryKey: ["products"] })
        },
        onError: (error: Error) => {
            toast.error(`Error updating product: ${error.message}`, {
                duration: 3000,
            })
        }
    })
}

export const useProductCreate = () => {
    const clientQuery = useQueryClient()
    return useMutation({
        mutationKey: ["product"],
        mutationFn: (product: TypeFormProduct) => createProduct(product),
        onSuccess: () => {
            toast.success("Product created successfully!", {
                duration: 3000,
            })
            clientQuery.invalidateQueries({ queryKey: ["products"] })
        },
        onError: (error: Error) => {
            toast.error(`Error creating product: ${error.message}`, {
                duration: 3000,
            })
        }
    })
}

export const useProductDelete = () => {
    const clientQuery = useQueryClient()
    return useMutation({
        mutationKey: ["product"],
        mutationFn: (id: string) => deleteProduct(id),
        onSuccess: () => {
            toast.success("Product deleted successfully!", {
                duration: 3000,
            })
            clientQuery.invalidateQueries({ queryKey: ["products"] })
        },
        onError: (error: Error) => {
            toast.error(`Error deleting product: ${error.message}`, {
                duration: 3000,
            })
        }
    })
}


