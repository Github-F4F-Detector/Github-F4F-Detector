import React from 'react';
import User from 'types/userTypes';

interface FollowListItemProps {
  user: User;
}

function FollowListItem({ user }: FollowListItemProps) {
  return (
    <div>
      <li key={user.login}>{user.login}</li>
    </div>
  );
}

export default FollowListItem;
