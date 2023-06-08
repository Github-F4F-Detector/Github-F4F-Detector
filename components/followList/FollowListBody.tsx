import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchNonFollowingUsers } from 'api/followData';
import { useRecoilValue } from 'recoil';
import { userTokenState } from 'states/user';
import styled from 'styled-components';

import { COLOR } from '@/styles/colors';

import AllCheckBox from './AllCheckBox';
import FollowListMap from './FollowListMap';
import MyProfile from './MyProfile';

interface User {
  login: string;
  avatar_url: string;
}

function FollowListBody() {
  const userToken = useRecoilValue(userTokenState);

  const [selectedFollow, setSelectedFollow] = useState(true);

  const {
    data: followLists,
    isLoading,
    isError,
  } = useQuery<{ following: User[]; nonFollowing: User[] }, Error>(['followLists', userToken], () =>
    fetchNonFollowingUsers(userToken),
  );

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (isError) {
    return <div>데이터 패치 중 에러발생.</div>;
  }

  const handleFollowButtonClick = () => {
    setSelectedFollow(false);
  };

  return (
    <div>
      <MyProfile />
      <St.ButtonContainer>
        <St.NoneFollowButton type="button" onClick={() => setSelectedFollow(true)}>
          맞팔 아닌 사람
        </St.NoneFollowButton>
        <St.FollowButton type="button" onClick={handleFollowButtonClick} disabled={!selectedFollow}>
          맞팔 확인하기
        </St.FollowButton>
      </St.ButtonContainer>

      {selectedFollow ? (
        <div>
          <AllCheckBox />
          <FollowListMap users={followLists?.nonFollowing || []} showCheckbox />
        </div>
      ) : (
        <FollowListMap users={followLists?.following || []} showCheckbox={false} />
      )}
      <St.BackgroundImage />
    </div>
  );
}

export default FollowListBody;
const St = {
  FollowListBodyContainer: styled.div`
    overflow: hidden;
  `,
  BackgroundImage: styled.div`
    width: 39rem;
    height: 50.8rem;
    position: relative;
    left: 0rem;
    background-color: ${COLOR.main_white};
    border: 0.2rem solid ${COLOR.main_black};
    border-radius: 6rem;
  `,
  ButtonContainer: styled.div`
    display: flex;
    width: 25.5rem;
    height: 3.6rem;
    justify-content: center;
    align-items: center;
    margin: 1.4rem 6.8rem 1.4rem 6.7rem;
  `,
  NoneFollowButton: styled.button`
    width: 10.5rem;
    height: 3.6rem;
    margin-right: 4.5rem;
    background-color: ${COLOR.main_green};
    color: ${COLOR.main_black};
    border: 0.2rem solid ${COLOR.main_black};
    border-radius: 2.6rem;
  `,
  FollowButton: styled.button`
    width: 10.5rem;
    height: 3.6rem;
    margin: 1.4rem;
    background-color: ${COLOR.main_white};
    color: ${COLOR.main_black};
    border: 0.2rem solid ${COLOR.main_black};
    border-radius: 2.6rem;
  `,
};
