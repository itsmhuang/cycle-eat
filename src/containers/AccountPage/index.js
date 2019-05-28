import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavBtn } from 'src/containers/NavBar/styles';
import * as Styled from './styles';

const AccountPage = ({ logOut }) => {
  return (
    <>
      <NavBtn >
        Log Out
      </NavBtn>
    </>
  );
};

export default AccountPage;
