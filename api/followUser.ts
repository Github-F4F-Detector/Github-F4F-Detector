import { Client } from '.';

interface FollowPutProps {
  token: string;
  userId: string;
}
export const followUnFollowedUsers = async (props: FollowPutProps) => {
  const { token, userId } = props;
  const { data } = await Client(token).put(`/user/following/${userId}`);
  return data;
};
