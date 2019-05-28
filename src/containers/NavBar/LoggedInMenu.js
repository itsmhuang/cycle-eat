import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavBtn, User } from './styles';


const LoggedInMenu = ({ logOut }) => {
  return (
    <>
      <NavBtn href="#" onClick={() => logOut()}>
        <User />
      </NavBtn>
    </>
  );
};

export default LoggedInMenu;
