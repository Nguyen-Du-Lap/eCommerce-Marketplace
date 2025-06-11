// import { TypeProductModel } from "@/types";
// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";

// const fetchProduct = (productId: string) => axios.get(`http://localhost:8080/api/products/${productId}`);

// export function useProductCatData(productId: string) {
//     const queryClient = useQueryClient();
//     return useQuery({
//         queryKey: ["product", productId],
//         queryFn: () => fetchProduct(productId),
//         initialData: () => {
//             const product = queryClient.getQueryData(["page-react-query"])
//             ?.data?.result?.content?.find((p: TypeProductModel) => p.id === productId);
//             if(product) {
//                 return { data: product } 
//             } else {
//                 return undefined; // Return undefined if no initial data is found
//             }
//         },
//     })
//  }