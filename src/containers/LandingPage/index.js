import React from 'react';
import * as Styled from './styles';
import heroPath from 'public/assets/bike-menu.jpg';
import PlaceInput from 'src/components/PlaceInput';

const LandingPage = () => {
  return (
    <>
      <Styled.Container>
        <picture>
          <Styled.HeroImage src={heroPath} />
        </picture>

        <Styled.Content>
          <Styled.MainHeader>
            Not sure where to eat after a ride?
          </Styled.MainHeader>
          <Styled.SubHeader>
            Search for cyclist-friendly cafes and restaurants
          </Styled.SubHeader>
          <PlaceInput />
        </Styled.Content>
      </Styled.Container>
    </>
  );
};

export default LandingPage;
