import React from 'react';
import { Menu, Avatar } from '@mantine/core';
import { logOut } from '../redux/Slices/LoginSlice';
import { useDispatch } from 'react-redux';
function ProfileDropdown() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <Menu>
        <Menu.Target>
          <Avatar className="cursor-pointer" color="cyan" radius="xl">
            MK
          </Avatar>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Profile</Menu.Item>
          <Menu.Item onClick={handleLogout} color="red">
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export default ProfileDropdown;
