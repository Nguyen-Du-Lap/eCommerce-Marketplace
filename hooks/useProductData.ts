import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchProduct = (productId: string) => axios.get(`http://localhost:8080/api/products/${productId}`)
export const useProductData = (productId: string) => {
    return useQuery({
        queryKey: ["product", productId],
        queryFn: () => fetchProduct(productId),
    })
}