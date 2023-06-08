import axios from 'axios';

interface MyProfile {
  avatar_url: string;
  bio: string;
  login: string;
  followers: number;
  following: number;
}

export const fetchMyProfile = async (token: string): Promise<MyProfile> => {
  const baseUrl = 'https://api.github.com';
  const response = await axios.get<MyProfile>(`${baseUrl}/user`, {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  return response.data;
};
