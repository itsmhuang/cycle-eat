import styled from 'styled-components';
// import React from 'react';
import { NavLink } from 'react-router-dom';
import UserSvg from 'src/assets/svg/User';

export const Navigation = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  padding: 15px;
  background-color: ${props => props && props.theme.colors.white};
  z-index: 7777;
  transform: translate3d(0, 0, 0);

  border-bottom: ${props =>
    props && `1px solid ${props.theme.colors.lightGray}`};
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

export const NavLinkItem = styled(NavLink)`
  margin-left: 15px;
`;

export const NavBtn = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  outline: 0;
  cursor: pointer;
  margin-right: 10px;
  font-family: inherit;
  color: inherit;
`;

export const User = styled(UserSvg)`
  width: 18px;
  color: ${props => props.theme.colors.teal};
`;

export const AccountBtn = styled(NavLink)`
  display: block;
  margin: 10px;
`;

export const LogOutBtn = styled(NavBtn)`
  font-size: 16px;
  margin: 10px;
`;

export const DropdownContainer = styled.div`
  position: relative;
`;
export const Dropdown = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  position: absolute;
  top: 10px;
  right: 0px;
  width: 100px;
  text-align: left;
  background-color: ${props => props && props.theme.colors.white};
  border: ${props => props && `1px solid ${props.theme.colors.lightGray}`};
`;
