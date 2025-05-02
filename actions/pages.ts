'use server';
import axios from "axios";

export const getPages = async () => {
    try{
        const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/public/pages");
        return response.data.data;
    }catch (error) {
        return error;
    }
}