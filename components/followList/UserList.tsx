/* eslint-disable react/function-component-definition */
import React from 'react';

import UserListItem from './UserListItems';

interface User {
  login: string;
}

interface UserListProps {
  users: User[];
  selectedUsers: string[];
  onCheckboxChange: (value: string, checked: boolean) => void;
}

const UserList: React.FC<UserListProps> = ({ users, selectedUsers, onCheckboxChange }) => {
  return (
    <ul>
      {users.map(user => (
        <UserListItem key={user.login} user={user} selectedUsers={selectedUsers} onCheckboxChange={onCheckboxChange} />
      ))}
    </ul>
  );
};

export default UserList;
