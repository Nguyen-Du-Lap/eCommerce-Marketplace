import axios, { AxiosError, AxiosResponse } from "axios";

const client = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL});


export const request = async ({withAuth = true, ...options}) => {
    if (withAuth) {
        const token = localStorage.getItem('token');
        if(token) {
            try {
                const parsedToken = JSON.parse(token);
                client.defaults.headers.common['Authorization'] = `Bearer ${parsedToken}`;
            } catch (error) {
                console.error('Error parsing token:', error);
            }
        }
    }
    client.defaults.headers.common['Content-Type'] = 'application/json';
    const onSuccess = (response: AxiosResponse) => response;
    const onError = (error: AxiosError) => {
        if (error.response?.status === 401) {
            console.error('Unauthorized access - redirecting to login');
            // Handle unauthorized error, e.g., redirect to login page
            window.location.href = '/login';
        } else if (error.response?.status === 404) {
            console.error('Not found - redirecting to 404 page');
            // Handle not found error, e.g., redirect to 404 page
        }
        return Promise.reject(error);
    };
    return client({...options}).then(onSuccess).catch(onError);
}

