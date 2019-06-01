import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import * as Styled from './styles';
import heroPath from 'public/assets/bike-menu.jpg';
import PlaceInput from 'src/components/PlaceInput';

const LandingPage = () => {
  const [query, setQuery] = useState('');
  const [formSubmitted, setFormSubmitted] = useState('');
  return (
    <>
      {!formSubmitted ? (
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
            <PlaceInput
              query={query}
              onSetQuery={setQuery}
              onFormSubmit={setFormSubmitted}
            />
          </Styled.Content>
        </Styled.Container>
      ) : (
        <Redirect
          to={{
            pathname: '/search',
          }}
        />
      )}
    </>
  );
};

export default LandingPage;
