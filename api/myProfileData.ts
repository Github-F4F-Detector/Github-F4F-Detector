import { MyProfileProps } from 'types/myProfile';

import { Client } from '.';

export const fetchMyProfile = async (token: string): Promise<MyProfileProps> => {
  const response = await Client(token).get<MyProfileProps>(`/user`);
  return response.data;
};
