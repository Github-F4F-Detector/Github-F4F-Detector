import axios, { AxiosInstance } from 'axios';

export const Client = (token: string) => {
  const client: AxiosInstance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
      Authorization: `token ${token}`,
    },
  });
  return client;
};
