import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom';
import * as Styled from './styles';
import heroPath from 'public/assets/bike-menu.jpg';
import PlaceInput from 'src/components/PlaceInput';

const LandingPage = () => {
  const [query, setQuery] = useState('');
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [ableToRedirect, setAbleToRedirect] = useState(false);
  
  const handleFormSubmit = () => {
    setAbleToRedirect(true);
  };

  //add script
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${
      process.env.REACT_APP_GOOGLE_API_KEY
    }&libraries=places`;
    const headScript = document.getElementsByTagName('script')[0];

    if (!window.google) {
      headScript.parentNode.insertBefore(script, headScript);
    }
    setScriptLoaded(true);
  }, [window.google]);

  return (
    <>
      {!ableToRedirect ? (
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
              scriptLoaded={scriptLoaded}
              centered
              query={query}
              onSetQuery={setQuery}
              onFormSubmit={handleFormSubmit}
            />
          </Styled.Content>
        </Styled.Container>
      ) : (
        <Redirect
          to={{
            pathname: '/search',
            search: queryString.stringify({
              loc: query,
            }),
          }}
        />
      )}
    </>
  );
};

export default LandingPage;
