import React from 'react';
import { NavLink } from 'react-router-dom';
import logoPath from 'public/assets/logo-temp.png';
import * as Styled from './styles';

const NavBar = () => {
  return (
    <Styled.Navigation>
      <Styled.LeftNav>
        <NavLink to="/">
          <Styled.Logo src={logoPath} />
        </NavLink>
        
      </Styled.LeftNav>
      <Styled.RightNav>
        
        <Styled.NavItem to="/register">Register</Styled.NavItem>
        <Styled.NavItem to="/sign-in">Sign In</Styled.NavItem>
        
      </Styled.RightNav>
      
    </Styled.Navigation>
  );
};

export default NavBar;
