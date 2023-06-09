import React, { MouseEventHandler, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchNonFollowingUsers } from 'api/followData';
import { useFollowUnFollowedUser } from 'hooks/user';
import Image from 'next/image';
import { UpArrowIcon } from 'public/icon';
import { useRecoilValue } from 'recoil';
import { checkListState } from 'states/follow';
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
  const checkList = useRecoilValue(checkListState);
  const [selectedFollow, setSelectedFollow] = useState(true);

  const { mutate: followUser } = useFollowUnFollowedUser();

  const {
    data: followLists,
    isLoading,
    isError,
  } = useQuery<{ following: User[]; nonFollowing: User[]; matchingUsers: User[] }, Error>(
    ['followLists', userToken],
    () => fetchNonFollowingUsers(userToken),
  );

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (isError) {
    return <div>데이터 패치 중 에러발생.</div>;
  }

  const handleFollowButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    setSelectedFollow(false);
  };

  // 사용자 팔로우 함수
  const handleFollowUser = () => {
    checkList.forEach(userId => {
      followUser({ token: userToken, userId });
    });
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
        <FollowListMap users={followLists?.matchingUsers || []} showCheckbox={false} />
      )}
      <St.FollowButtonContainer>
        <Image src={UpArrowIcon} alt="맞팔하기 컨테이너 올리기 버튼" />
        <St.GoFollowButton type="button" onClick={handleFollowUser}>
          맞팔하기!
        </St.GoFollowButton>
      </St.FollowButtonContainer>
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
    position: relative;
    left: 0rem;
    border: 0.2rem solid ${COLOR.main_black};
    border-radius: 6rem;
    background-color: ${COLOR.main_white};
    width: 39rem;
    height: 50.8rem;
  `,
  ButtonContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.4rem 6.8rem 1.4rem 6.7rem;
    width: 25.5rem;
    height: 3.6rem;
  `,
  NoneFollowButton: styled.button`
    margin-right: 4.5rem;
    border: 0.2rem solid ${COLOR.main_black};
    border-radius: 2.6rem;
    background-color: ${COLOR.main_green};
    width: 10.5rem;
    height: 3.6rem;
    color: ${COLOR.main_black};
  `,
  FollowButton: styled.button`
    margin: 1.4rem;
    border: 0.2rem solid ${COLOR.main_black};
    border-radius: 2.6rem;
    background-color: ${COLOR.main_white};
    width: 10.5rem;
    height: 3.6rem;
    color: ${COLOR.main_black};
  `,
  FollowButtonContainer: styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    flex-direction: column;
    align-items: center;
    z-index: 10;
    border: 0.1rem solid ${COLOR.main_black};

    border-radius: 1.3rem;
    background-color: ${COLOR.main_white};
    padding-top: 0.9rem;

    width: 39rem;
    height: 9rem;
  `,
  GoFollowButton: styled.button`
    margin-top: 1rem;
    border: 0.2rem solid ${COLOR.main_black};
    border-radius: 0.3rem;
    background-color: ${COLOR.main_yellow};

    width: 33.5rem;
    height: 4rem;
  `,
};
