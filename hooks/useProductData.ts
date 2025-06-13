import { request } from "@/lib/axios-util"
import { TypeProductModel } from "@/types"
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

const fetchProduct = (productId: string) => request({
    withAuth: false,
    url: `/api/products/${productId}`,
    method: "GET"
})

const fetchProducts = (page: number, sort = "id") => request({
    withAuth: false,
    url: `/api/products?page=${page}&size=6&sort=${sort}`,
    method: "GET"
})

const updateProduct = (productId: string, data: TypeProductModel) => request({
    withAuth: true,
    url: `/api/products/${productId}`,
    method: "PUT",
    data
})


export const useProductData = (productId: string) => {
    return useQuery({
        queryKey: ["product", productId],
        queryFn: () => fetchProduct(productId),
    })
}

export const useProductGet = (page: number, sort = "id") => {
    return useQuery({
        queryKey: ["products", page, sort],
        queryFn: () => fetchProducts(page, sort),
        select: (data) => data.data.result,
        placeholderData: keepPreviousData,
    })
}

export const useProductUpdate = () => {
    const clientQuery = useQueryClient()
    return useMutation({
        mutationKey: ["product"],
        mutationFn: (product: TypeProductModel) => updateProduct(product.id, product),
        onSuccess: () => {
            toast.success("Product updated successfully!", {
                duration: 3000,
            })
            clientQuery.invalidateQueries({ queryKey: ["products"] })
        },
    })
}
