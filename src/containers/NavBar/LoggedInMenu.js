import React, { useState, useEffect } from 'react';
import * as Styled from './styles';

const LoggedInMenu = ({ logOut }) => {
  const [isMenuShown, toggleMenu] = useState(false);

  const closeMenu = () => {
    toggleMenu(false);
    document.removeEventListener('click', closeMenu);
  };

  const showMenu = () => {
    toggleMenu(true);
    document.addEventListener('click', closeMenu);
  };

  /*useEffect(() => {
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  },[closeMenu]);*/
  return (
    <>
      <Styled.NavBtn onClick={() => showMenu()}>
        <Styled.User />
      </Styled.NavBtn>

      {isMenuShown && (
        <Styled.AccountDropdown>
          {/*<Styled.AccountBtn to="/profile">Profile</Styled.AccountBtn>*/}
          {/*<Styled.AccountBtn to="/settings">Settings</Styled.AccountBtn>*/}
          <Styled.LogOutBtn onClick={() => logOut()}>Log Out</Styled.LogOutBtn>
        </Styled.AccountDropdown>
      )}
    </>
  );
};

export default LoggedInMenu;
