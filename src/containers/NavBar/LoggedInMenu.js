import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Styled from './styles';
import { NavItem } from './styles';

const LoggedInMenu = ({ logOut }) => {
  return (
    <>
      <a href="#" onClick={() => logOut()}>Account</a>
    </>
  );
};

export default LoggedInMenu;
