import React from 'react';
import { useFetchMyProfile } from 'hooks/user';
import { useRecoilValue } from 'recoil';
import { userTokenState } from 'states/user';
import styled from 'styled-components';

import { COLOR } from '@/styles/colors';

function MyProfile() {
  const userToken = useRecoilValue(userTokenState);

  const userProfile = useFetchMyProfile(userToken);

  return (
    <St.UserInfoContainer>
      <St.ProfileImage src={userProfile?.avatar_url} alt="Profile Avatar" width={70} height={70} />
      <St.ProfileContainer>
        <St.NickName> {userProfile?.login}</St.NickName>
        <St.Bio> {userProfile?.bio}</St.Bio>
        <St.FollowCount>
          <St.FollowerWrapper>
            <St.Follower>팔로워: {userProfile?.followers}</St.Follower>
          </St.FollowerWrapper>
          <St.FollowingWrapper>
            <St.Following>팔로잉: {userProfile?.following}</St.Following>
          </St.FollowingWrapper>
        </St.FollowCount>
      </St.ProfileContainer>
    </St.UserInfoContainer>
  );
}

export default MyProfile;
const St = {
  ProfileContainer: styled.div`
    margin-left: 1.4rem;
  `,
  FollowingWrapper: styled.div`
    display: flex;
    justify-content: center;
    margin: 0.9rem 0 0 0.8rem;
    border: 0.1rem solid ${COLOR.main_black};
    border-radius: 0.7rem;
    box-shadow: 0 0.3rem 0 rgba(0, 0, 0, 0.25);
    background: ${COLOR.main_white};
    width: 8.8rem;
    height: 3.1rem;
    font-size: 1.2rem;
  `,
  Following: styled.p`
    margin-top: 0.9rem;
    font-size: 1.2rem;
  `,
  FollowerWrapper: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 0.9rem;
    border: 0.1rem solid ${COLOR.main_black};
    border-radius: 0.7rem;
    box-shadow: 0 0.3rem 0 rgba(0, 0, 0, 0.25);
    background: ${COLOR.main_pink};
    width: 8.8rem;
    height: 3.1rem;
    font-size: 1.2rem;
  `,
  Follower: styled.p`
    margin-top: 0.9rem;
    font-size: 1.2rem;
  `,
  Bio: styled.p`
    margin-top: 0.9rem;
    font-size: 1.5rem;
  `,
  NickName: styled.p`
    margin-top: 3.1rem;
    font-size: 2.5rem;
  `,
  FollowCount: styled.div`
    display: flex;
  `,
  UserInfoContainer: styled.div`
    display: flex;
    margin: 3.2rem 2.5rem 0 2.5rem;
    border: 0.2rem solid ${COLOR.main_black};
    border-radius: 2.6rem;
    background-color: ${COLOR.main_yellow};
    width: 34rem;
    height: 14.6rem;
  `,
  ProfileImage: styled.img`
    margin: 2.7rem 0 0 2.4rem;
    border-radius: 6rem;
  `,
};
