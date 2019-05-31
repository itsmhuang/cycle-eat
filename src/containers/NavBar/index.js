import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import logoPath from 'public/assets/logo-temp.png';
import * as Styled from './styles';
import LoggedInMenu from './LoggedInMenu';
import LoggedOutMenu from './LoggedOutMenu';

const NavBar = (props) => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogIn = () => {
    setAuthenticated(true);
  };

  const handleLogOut = () => {
    setAuthenticated(false);
    props.history.push('/');
  };

  return (
    <Styled.Navigation>
      <Styled.LeftNav>
        <NavLink to="/">
          <Styled.Logo src={logoPath} />
        </NavLink>
      </Styled.LeftNav>
      <Styled.RightNav>
        {authenticated ? (
          <LoggedInMenu logOut={handleLogOut} />
        ) : (
          <LoggedOutMenu logIn={handleLogIn} />
        )}
      </Styled.RightNav>
    </Styled.Navigation>
  );
};

export default withRouter(NavBar);
