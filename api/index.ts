import axios, { AxiosInstance } from 'axios';
import { useRecoilValue } from 'recoil';
import { userTokenState } from 'states/user';

export const Client = () => {
  const token = useRecoilValue(userTokenState);
  const client: AxiosInstance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
      Authorization: `token ${token}`,
    },
  });
  return client;
};
