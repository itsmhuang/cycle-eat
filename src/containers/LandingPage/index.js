import React from 'react';
import * as Styled from './styles';
import heroPath from 'public/assets/bike-menu.jpg';

const LandingPage = () => {
  return (
    <Styled.Container>
      <Styled.HeroImage src={heroPath}/>
      
      
      
      {/*<div style={{margin: 0, textAlign: 'center'}}>
        <h1>Not sure where to eat after a ride?</h1>
      <h2>Search for cyclist-friendly cafes and restaurants</h2>
      </div>*/}
      <Styled.Content>
        <Styled.MainHeader>Not sure where to eat after a ride?</Styled.MainHeader>
        <Styled.SubHeader>Search for cyclist-friendly cafes and restaurants</Styled.SubHeader>
        
      </Styled.Content>
      
    </Styled.Container>
  );
};

export default LandingPage;
