import React, { useState, useEffect } from 'react';
import * as Styled from './styles';

const LoggedInMenu = ({ logOut }) => {
  const [isMenuShown, setMenuVisibility] = useState(false);

  const closeMenu = () => {
    setMenuVisibility(false);
  };

  const showMenu = () => {
    if (!isMenuShown) {
      setMenuVisibility(true);
    }
  };

  useEffect(() => {
    if (isMenuShown) {
      document.addEventListener('click', closeMenu);
    } else {
      document.removeEventListener('click', closeMenu);
    }
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  },[isMenuShown]);

  return (
    <>
      <Styled.NavBtn onClick={showMenu}>
        <Styled.User />
      </Styled.NavBtn>

      {isMenuShown && (
        <Styled.DropdownContainer>
          <Styled.Dropdown>
            <Styled.AccountBtn to="/account">Account</Styled.AccountBtn>
            <Styled.LogOutBtn onClick={() => logOut()}>
              Log Out
            </Styled.LogOutBtn>
          </Styled.Dropdown>
        </Styled.DropdownContainer>
      )}
    </>
  );
};

export default LoggedInMenu;
