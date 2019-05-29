import React, { useState, useEffect } from 'react';
import * as Styled from './styles';

const LoggedInMenu = ({ logOut }) => {
  const [isMenuShown, setMenuVisibility] = useState(false);

  const showMenu = () => {
    if (!isMenuShown) {
      setMenuVisibility(true);
    }
  };

  const closeMenu = () => {
    setMenuVisibility(false);
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
  }, [isMenuShown]);

  return (
    <>
      <Styled.NavBtn onClick={showMenu}>
        <Styled.User />
      </Styled.NavBtn>

      {isMenuShown && (
        <Styled.DropdownContainer>
          <Styled.Dropdown>
            <li>
              <Styled.AccountBtn to="/account">Account</Styled.AccountBtn>
            </li>
            <li>
              <Styled.LogOutBtn onClick={() => logOut()}>
                Log Out
              </Styled.LogOutBtn>
            </li>
          </Styled.Dropdown>
        </Styled.DropdownContainer>
      )}
    </>
  );
};

export default LoggedInMenu;
