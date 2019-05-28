import styled from 'styled-components';
// import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  padding: 15px;
  background-color: white;
  z-index: 7777;
  transform: translate3d(0, 0, 0);

  border-bottom: 1px solid #ccc;
`;

export const NavItem = styled(NavLink)`
  margin-left: 15px;
`;

export const LeftNav = styled.div`
  //display: flex;
`;

export const RightNav = styled.div`
  //display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 50%;
`;
