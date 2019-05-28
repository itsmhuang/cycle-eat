import React from 'react';
import { NavLinkItem } from './styles';

const SignedOutMenu = ({ logIn }) => {
  return (
    <>
      <NavLinkItem to="/" onClick={() => logIn()}>Log In</NavLinkItem>
      <NavLinkItem to="/register">Register</NavLinkItem>
    </>
  );
};

export default SignedOutMenu;
