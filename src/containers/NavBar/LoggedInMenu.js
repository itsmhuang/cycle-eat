import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Styled from './styles';

const LoggedInMenu = ({ logOut }) => {
  return (
    <>
      <Styled.NavBtn onClick={() => logOut()}>
        <Styled.User />
      </Styled.NavBtn>
    </>
  );
};

export default LoggedInMenu;
