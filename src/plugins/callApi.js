import axios from 'axios';
import {toast} from 'react-toastify';

export const BASE_URL = process.env.REACT_APP_API_URL;

export const callApi = async ({url, method = 'GET', data, headers, params}) => {
    const config = {
        method: method,
        url: BASE_URL + url,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        data: data,
        params: params
    };
    return axios(config)
        .then((response) => {
            return response
        })
        .catch((error) => {
            toast.error('Ooops Something went wrong');
        });
};
