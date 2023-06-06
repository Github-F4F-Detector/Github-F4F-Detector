/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

interface User {
  login: string;
}

interface UserListItemProps {
  user: User;
  selectedUsers: string[];
  onCheckboxChange: (value: string, checked: boolean) => void;
}

function UserListItem({ user, selectedUsers, onCheckboxChange }: UserListItemProps) {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    onCheckboxChange(value, checked);
  };

  return (
    <li key={user.login}>
      <label>
        <input
          type="checkbox"
          value={user.login}
          checked={selectedUsers.includes(user.login)}
          onChange={handleCheckboxChange}
        />
        {user.login}
      </label>
    </li>
  );
}

export default UserListItem;
