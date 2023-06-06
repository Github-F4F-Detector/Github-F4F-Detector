import React, { useEffect, useState } from 'react';
import { fetchNotFollowingUsers } from 'api/followData';
import styled from 'styled-components';

import { COLOR } from '@/styles/colors';

import UserList from './UserList';

interface User {
  login: string;
}

function FollowListBody() {
  const [notFollowing, setNotFollowing] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = '토큰입력';
        const notFollowingUsers = await fetchNotFollowingUsers(token);
        setNotFollowing(notFollowingUsers);
      } catch (error: any) {
        console.error('오류 발생:', error.response.data.message);
      }
    };
    fetchUsers();
  }, []);

  const handleCheckboxChange = (value: string, checked: boolean) => {
    if (checked) {
      setSelectedUsers(prevSelectedUsers => [...prevSelectedUsers, value]);
    } else {
      setSelectedUsers(prevSelectedUsers => prevSelectedUsers.filter(user => user !== value));
    }
  };

  return (
    <St.ListBackgroundContainer>
      <St.MyProfileContainer>여기는 본인 프로필 정보를 보여주는 곳</St.MyProfileContainer>
      <div>
        <button type="button">맞팔이 아닌 사람</button> <button type="button">맞팔 확인하기</button>
      </div>
      <div>
        <St.ListBackgroundWrapper>
          <St.ListBackground>
            <UserList users={notFollowing} selectedUsers={selectedUsers} onCheckboxChange={handleCheckboxChange} />
          </St.ListBackground>
        </St.ListBackgroundWrapper>
      </div>
    </St.ListBackgroundContainer>
  );
}

export default FollowListBody;

const St = {
  MyProfileContainer: styled.div`
    width: 34rem;
    height: 15.6rem;
    margin-top: 3.2rem;
    border: 0.1rem solid black;
  `,
  ListBackground: styled.div`
    position: absolute;
    bottom: 8.4rem;
    left: -0.2rem;
    width: 39rem;
    height: 37.6rem;
    border: 0.2rem solid ${COLOR.main_black};
    border-radius: 6rem;
    background-color: ${COLOR.main_white};
  `,
  ListBackgroundWrapper: styled.div`
    position: fixed;
    bottom: -1.6rem;
    width: 39rem;
    height: 50.8rem;
    border: 0.2rem solid ${COLOR.main_black};
    border-radius: 6rem;
    background-color: ${COLOR.main_white};
  `,

  ListBackgroundContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};
