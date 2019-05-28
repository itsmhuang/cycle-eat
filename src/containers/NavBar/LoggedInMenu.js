import React, { useState, useEffect } from 'react';
import * as Styled from './styles';

const LoggedInMenu = ({ logOut }) => {
  const [isMenuShown, toggleMenu] = useState(false);

  
  return (
    <>
      <Styled.NavBtn onClick={() => toggleMenu(!isMenuShown)}>
        <Styled.User />
      </Styled.NavBtn>

      {isMenuShown && (
        <Styled.DropdownContainer>
          <Styled.Dropdown>
          {/*<Styled.AccountBtn to="/profile">Profile</Styled.AccountBtn>*/}
          {/*<Styled.AccountBtn to="/settings">Settings</Styled.AccountBtn>*/}
          <Styled.LogOutBtn onClick={() => logOut()}>Log Out</Styled.LogOutBtn>
        </Styled.Dropdown>
        </Styled.DropdownContainer>
        
      )}
    </>
  );
};

export default LoggedInMenu;
