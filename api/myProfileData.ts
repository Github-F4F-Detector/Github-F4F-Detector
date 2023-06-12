import { Client } from '.';

interface MyProfile {
  avatar_url: string;
  bio: string;
  login: string;
  followers: number;
  following: number;
}

export const fetchMyProfile = async (token: string): Promise<MyProfile> => {
  const response = await Client(token).get<MyProfile>(`/user`);
  return response.data;
};
