import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { userTokenState } from 'states/user';
import styled from 'styled-components';

import { COLOR } from '@/styles/colors';

import { fetchMyProfile } from '../../api/myProfileData';

interface MyProfileProps {
  avatar_url: string;
  bio: string;
  login: string;
  followers: number;
  following: number;
}

function MyProfile() {
  const userToken = useRecoilValue(userTokenState);

  const {
    data: userProfile,
    isLoading,
    isError,
  } = useQuery<MyProfileProps, Error>(['userProfile', userToken], () => fetchMyProfile(userToken));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching user profile.</div>;
  }

  return (
    <St.UserInfoContainer>
      <St.ProfileImage src={userProfile.avatar_url} alt="Profile Avatar" width={70} height={70} />
      <St.ProfileContainer>
        <St.NickName> {userProfile.login}</St.NickName>
        <St.Bio> {userProfile.bio}</St.Bio>
        <St.FollowCount>
          <St.FollowerWrapper>
            <St.Follower>팔로워: {userProfile.followers}</St.Follower>
          </St.FollowerWrapper>
          <St.FollowingWrapper>
            <St.Following>팔로잉: {userProfile.following}</St.Following>
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
    width: 8.8rem;
    height: 3.1rem;
    background: ${COLOR.main_white};
    border: 0.1rem solid ${COLOR.main_black};
    box-shadow: 0 0.3rem 0 rgba(0, 0, 0, 0.25);
    border-radius: 0.7rem;
    margin: 0.9rem 0 0 0.8rem;
    font-size: 1.2rem;
  `,
  Following: styled.p`
    margin-top: 0.9rem;
    font-size: 1.2rem;
  `,
  FollowerWrapper: styled.div`
    display: flex;
    justify-content: center;
    width: 8.8rem;
    height: 3.1rem;
    background: ${COLOR.main_pink};
    border: 0.1rem solid ${COLOR.main_black};
    box-shadow: 0 0.3rem 0 rgba(0, 0, 0, 0.25);
    border-radius: 0.7rem;
    margin-top: 0.9rem;
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
    width: 34rem;
    height: 14.6rem;
    margin: 3.2rem 2.5rem 0 2.5rem;
    background-color: ${COLOR.main_yellow};
    border: 0.2rem solid ${COLOR.main_black};
    border-radius: 2.6rem;
  `,
  ProfileImage: styled.img`
    border-radius: 6rem;
    margin: 2.7rem 0 0 2.4rem;
  `,
};
