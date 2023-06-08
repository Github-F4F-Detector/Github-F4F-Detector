import React from 'react';
import User from 'types/userTypes';

import FollowListItem from './FollowListItem';

interface FollowListProps {
  users: User[];
}

function FollowListMap({ users }: FollowListProps) {
  return (
    <div>
      <ul>
        {users.map(user => (
          <FollowListItem key={user.login} user={user} />
        ))}
      </ul>
    </div>
  );
}

export default FollowListMap;
