import styled from 'styled-components';
import User from 'types/userTypes';

import { COLOR } from '@/styles/colors';

import Checkbox from './CheckBox';

interface FollowListItemProps {
  user: User;
  avatar_url: string;
  showCheckbox: boolean;
}

function FollowListItem({ user, showCheckbox }: FollowListItemProps) {
  return (
    <div>
      <St.UserListWrapper key={user.login}>
        <St.ListUserInfo>
          <St.FollowListProfile src={user.avatar_url} alt="유저 프로필 사진" width={45} height={45} />
          {user.login}
        </St.ListUserInfo>

        <div>{showCheckbox && <Checkbox login={user.login} />}</div>
      </St.UserListWrapper>
    </div>
  );
}

export default FollowListItem;
const St = {
  ListUserInfo: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  FollowListProfile: styled.img`
    margin-right: 1.7rem;
    border-radius: 6rem;
  `,
  UserListWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.2rem solid ${COLOR.main_black};
    padding: 2.2rem 0 2.7rem 0;
  `,
};
