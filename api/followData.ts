import axios from 'axios';

interface User {
  login: string;
}

export const fetchNotFollowingUsers = async (token: string): Promise<User[]> => {
  const baseUrl = 'https://api.github.com';

  const followingResponse = await axios.get<User[]>(`${baseUrl}/user/following`, {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  const following = followingResponse.data;

  const followersResponse = await axios.get<User[]>(`${baseUrl}/user/followers`, {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  const followers = followersResponse.data;

  const notFollowing = followers.filter(user => {
    return !following.some(followedUser => followedUser.login === user.login);
  });

  return notFollowing;
};

export const followUsers = async (token: string, users: string[]): Promise<void> => {
  const baseUrl = 'https://api.github.com';

  await Promise.all(
    users.map(async user => {
      await axios.put(`${baseUrl}/user/following/${user}`, null, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
    }),
  );
};
