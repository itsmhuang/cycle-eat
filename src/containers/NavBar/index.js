import React from 'react';
import logoPath from 'public/assets/logo-temp.png';
import * as Styled from './styles';

const NavBar = () => {
  return (
    <Styled.Navigation>
      <Styled.LeftNav>
        <a href="/">
          <Styled.Logo src={logoPath} />
        </a>
      </Styled.LeftNav>
      <Styled.RightNav>
        <Styled.Link href="#">Register</Styled.Link>
        <Styled.Link href="#">Sign In</Styled.Link>
        
      </Styled.RightNav>
      
    </Styled.Navigation>
  );
};

export default NavBar;
