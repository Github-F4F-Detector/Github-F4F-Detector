import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchNonFollowingUsers } from 'api/followData';
import { followUnFollowedUsers } from 'api/followUser';

const QUERY_KEY = 'followLists';

export const useFetchNonFollowingUsers = (userToken: string) => {
  const { data } = useQuery([QUERY_KEY, userToken], () => fetchNonFollowingUsers(userToken));
  return data;
};

export const useFollowUnFollowedUser = () => {
  const queryClient = useQueryClient();
  return useMutation(followUnFollowedUsers, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY]);
    },
  });
};
