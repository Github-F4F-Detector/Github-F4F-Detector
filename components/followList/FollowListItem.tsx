import styled from 'styled-components';
import User from 'types/userTypes';

import { COLOR } from '@/styles/colors';

import Checkbox from './CheckBox';

interface FollowListItemProps {
  user: User;
  showCheckbox: boolean;
}

function FollowListItem({ user, showCheckbox }: FollowListItemProps) {
  return (
    <div>
      <St.UserListWrapper key={user.login}>
        {user.login}
        <div>{showCheckbox && <Checkbox />}</div>
      </St.UserListWrapper>
    </div>
  );
}

export default FollowListItem;

const St = {
  UserListWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.2rem 0 2.7rem 0;
    border-bottom: 0.2rem solid ${COLOR.main_black};
  `,
};
