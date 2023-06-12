import User from 'types/userTypes';

import { FetchFollowingInfoResult } from '../types/fetchFollowingInfoTypes';

import { Client } from '.';

export const fetchFollowingInfo = async (token: string): Promise<FetchFollowingInfoResult> => {
  const PER_PAGE = 100;

  const followingResponse = await Client(token).get<User[]>(`/user/following?per_page=${PER_PAGE}`);

  const following = followingResponse.data;

  const followersResponse = await Client(token).get<User[]>(`/user/followers?per_page=${PER_PAGE}`);

  const followers = followersResponse.data;

  const nonFollowing = followers.filter(follower => !following.some(user => user.login === follower.login));
  const matchingUsers = followers.filter(follower => {
    return following.some(user => user.login === follower.login);
  });

  return { following, nonFollowing, matchingUsers };
};
