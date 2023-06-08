import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchNonFollowingUsers } from 'api/followData';
import { useRecoilValue } from 'recoil';
import { userTokenState } from 'states/user';

import FollowListMap from './FollowListMap';

interface User {
  login: string;
}

function FollowListBody() {
  const userToken = useRecoilValue(userTokenState);
  const {
    data: nonFollowingUsers,
    isLoading,
    isError,
  } = useQuery<User[], Error>(['nonFollowingUsers', userToken], () => fetchNonFollowingUsers(userToken));

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (isError) {
    return <div>데이터 패치 중 에러발생.</div>;
  }

  return (
    <div>
      <FollowListMap users={nonFollowingUsers} />
    </div>
  );
}

export default FollowListBody;
