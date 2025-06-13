import { request } from "@/lib/axios-util";
import { useQuery } from "@tanstack/react-query"

const fetchBrands = () => request({ withAuth: false, url: '/api/brands?page=0&size=20&sort=id', method: 'GET' });

export const useBrandGet = () => {
    return useQuery({
        queryKey: ['brands'],
        queryFn: fetchBrands,
    })
}