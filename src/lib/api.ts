import axios, { AxiosError } from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error: unknown) {
    throw new Error(`Failed to fetch users: ${(error as AxiosError).message}`);
  }
};

export const fetchUserById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/users/${id}`);
    return response.data;
  } catch (error: unknown) {
    throw new Error(`Failed to fetch user: ${(error as AxiosError).message}`);
  }
};