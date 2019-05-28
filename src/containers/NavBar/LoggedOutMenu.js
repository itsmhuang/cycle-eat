import React from 'react';
import { NavItem } from './styles';

const SignedOutMenu = ({ logIn }) => {
  return (
    <>
      <NavItem onClick={() => logIn()}>Log In</NavItem>
      <NavItem to="/register">Register</NavItem>
    </>
  );
};

export default SignedOutMenu;
