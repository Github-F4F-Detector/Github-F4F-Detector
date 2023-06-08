import axios from 'axios';

interface User {
  login: string;
  avatar_url: string;
}

export const fetchNonFollowingUsers = async (token: string): Promise<{ following: User[]; nonFollowing: User[] }> => {
  const BASE_URL = 'https://api.github.com';

  const followingResponse = await axios.get<User[]>(`${BASE_URL}/user/following`, {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  const following = followingResponse.data;

  const followersResponse = await axios.get<User[]>(`${BASE_URL}/user/followers`, {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  const followers = followersResponse.data;

  const nonFollowing = followers.filter(user => {
    return !following.some(followedUser => followedUser.login === user.login);
  });

  return { nonFollowing, following };
};
