import { useMutation } from '@tanstack/react-query';
import React, { createContext, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();
const baseURL ='http://localhost:3000/api'
const PostUserData = async (userData) => {
    try {
        const response = await axios.post(baseURL + 'auth/register', userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Something went wrong');
    }
};

export const AuthProvider = ({ children }) => {
    const { isLoading, isError, error, data, mutate } = useMutation({
        mutationFn: PostUserData,
    });

    return (
        <AuthContext.Provider value={{ data, isLoading, isError, error, mutate }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useApi = () => {
    return useContext(AuthContext);
};
