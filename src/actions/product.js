import axios from 'axios';
import { setProducts, setShouldRefreshProductsData } from '../slices/product';

export const addProduct = (params, setError) => {
    return async(dispatch) => {
        try {
            await axios.post('http://localhost:4000/products', params);
            dispatch(setShouldRefreshProductsData(true));
        } catch (error) {
            setError(error?.response?.data?.msg);
        };
    };
};

export const getAllProducts = (setError) => {
    return async(dispatch) => {
        try {
            const res = await axios.get('http://localhost:4000/products/all');
            dispatch(setProducts(res.data));
        } catch (error) {
            setError(error?.response?.data?.msg);
        };
    };
};

export const deleteProduct = (id) => {
    return async() => {
        try {
            await axios.delete(`http://localhost:4000/products/${id}`);
        } catch (error) {
            return error?.response?.data?.msg;
        };
    };
};

export const favoriteProduct = (id, params) => {
    return async() => {
        try {
            await axios.put(`http://localhost:4000/products/${id}`, params);
        } catch (error) {
            return error?.response?.data?.msg;
        };
    };
};

