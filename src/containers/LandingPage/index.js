import React from 'react';
import * as Styled from './styles';
import heroPath from 'public/assets/bike-menu.jpg';
// import { NavBtn } from 'src/containers/NavBar/styles';

const LandingPage = () => {
  return (
    <Styled.Container>
      <Styled.HeroImage src={heroPath} />

      <Styled.Content>
        <Styled.MainHeader>
          Not sure where to eat after a ride?
        </Styled.MainHeader>
        <Styled.SubHeader>
          Search for cyclist-friendly cafes and restaurants
        </Styled.SubHeader>
        <Styled.SearchBarContainer>
          <Styled.SearchTitle>Near</Styled.SearchTitle>
          <Styled.SearchBar placeholder="Los Angeles, CA" />
          <Styled.SearchBtn>
            <Styled.SearchIcon />
          </Styled.SearchBtn>
        </Styled.SearchBarContainer>
      </Styled.Content>
    </Styled.Container>
  );
};

export default LandingPage;
