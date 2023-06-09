import { Client } from '.';

interface FollowPutProps {
  token: string;
  userId: string;
}
export const followUnFollowedUsers = (props: FollowPutProps) => {
  const { token, userId } = props;
  return Client(token).put(`/user/following/${userId}`);
};
