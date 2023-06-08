import React from 'react';
import styled from 'styled-components';
import User from 'types/userTypes';

import { COLOR } from '@/styles/colors';

import FollowListItem from './FollowListItem';

interface FollowListProps {
  users: User[];
  showCheckbox: boolean;
}

function FollowListMap({ users, showCheckbox }: FollowListProps) {
  return (
    <St.AllListContainer>
      <St.ListWrapper>
        {users.map(user => (
          <FollowListItem key={user.login} user={user} avatar_url={user.avatar_url} showCheckbox={showCheckbox} />
        ))}
      </St.ListWrapper>
    </St.AllListContainer>
  );
}

export default FollowListMap;

const St = {
  AllListContainer: styled.div`
    position: absolute;
    bottom: 0;
    left: 2rem;
    z-index: 2;
    margin: 0 -2rem;
    border: 0.2rem solid ${COLOR.main_black};
    border-radius: 6rem;
    width: 39rem;
    height: 44.6rem;
    overflow: scroll;
  `,

  ListWrapper: styled.ul`
    position: relative;
    top: 0rem;
    z-index: 3;
    margin: 0 4.4rem;
    font-size: 1.5rem;
  `,
};
