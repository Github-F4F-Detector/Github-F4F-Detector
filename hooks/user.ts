import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchNonFollowingUsers } from 'api/followData';
import { followUnFollowedUsers } from 'api/followUser';
import { fetchMyProfile } from 'api/myProfileData';

const QUERY_KEY = { followList: 'followLists', profile: 'userProfile' };

export const useFetchMyProfile = (userToken: string) => {
  const { data } = useQuery([QUERY_KEY.profile, userToken], () => fetchMyProfile(userToken));
  return data;
};
export const useFetchNonFollowingUsers = (userToken: string) => {
  const { data } = useQuery([QUERY_KEY.followList, userToken], () => fetchNonFollowingUsers(userToken));
  return data;
};

export const useFollowUnFollowedUser = () => {
  const queryClient = useQueryClient();
  return useMutation(followUnFollowedUsers, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.followList]);
      queryClient.invalidateQueries([QUERY_KEY.profile]);
    },
  });
};
