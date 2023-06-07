import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { COLOR } from '@/styles/colors';

import { useGithubFollowAPI } from '../../api/followData';

function FollowListBody() {
  const { data: currentUser } = useGithubFollowAPI('/user');
  const [showFollowingList, setShowFollowingList] = useState(false);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    if (currentUser) {
      const fetchFollowers = async () => {
        const response = await fetch(`https://api.github.com/user/following`, {
          headers: {
            // Authorization: `Bearer ${}`,
          },
        });
      };
    }
  });

  return (
    <div>
      <St.ButtonContainer>
        <St.NoneFollowButton type="button"> 맞팔 아닌 사람</St.NoneFollowButton>
        <St.FollowButton type="button"> 맞팔 확인하기</St.FollowButton>
      </St.ButtonContainer>
    </div>
  );
}

export default FollowListBody;

const St = {
  ButtonContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.4rem;
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
    background-color: ${COLOR.main_white};
    color: ${COLOR.main_black};
    border: 0.2rem solid ${COLOR.main_black};
    border-radius: 2.6rem;
  `,
};
