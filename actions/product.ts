'use server';
import axios from "axios";

export const getProducts = async () => {
    try{
        const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/public/products");
        return response.data.data;
    }catch (error) {
        return error;
    }
}