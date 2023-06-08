import axios from 'axios';

interface User {
  login: string;
  avatar_url: string;
}

export const fetchNonFollowingUsers = async (
  token: string,
): Promise<{ following: User[]; nonFollowing: User[]; matchingUsers: User[] }> => {
  const BASE_URL = 'https://api.github.com';
  const PER_PAGE = 100;

  const followingResponse = await axios.get<User[]>(`${BASE_URL}/user/following?per_page=${PER_PAGE}`, {
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

  const nonFollowing = followers.filter(follower => !following.some(user => user.login === follower.login));
  const matchingUsers = followers.filter(follower => {
    return following.some(user => user.login === follower.login);
  });

  return { following, nonFollowing, matchingUsers };
};
