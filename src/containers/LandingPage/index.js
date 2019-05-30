import React, { useState } from 'react';
import * as Styled from './styles';
import heroPath from 'public/assets/bike-menu.jpg';
import Script from 'react-load-script';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

const LandingPage = () => {
  const [address, setAddress] = useState('');
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const onChange = address => {
    setAddress(address);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  const inputProps = {
    value: address,
    onChange,
  };

  const cssClasses = {
    root: 'form-group',
    input: 'form-input',
    autocompleteContainer: 'autocomplete-container',
  };

  return (
    <>
      <Script
        url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCzQSI2YHpFAOn5mxWagvWG6q0eMWKam4Y&libraries=places"
        onLoad={() => setScriptLoaded(true)}
      />
      <Styled.Container>
        <Styled.HeroImage src={heroPath} />

        <Styled.Content>
          <Styled.MainHeader>
            Not sure where to eat after a ride?
          </Styled.MainHeader>
          <Styled.SubHeader>
            Search for cyclist-friendly cafes and restaurants
          </Styled.SubHeader>
          
          
          <Styled.SearchBarContainer2 onSubmit={handleFormSubmit}>
            <Styled.SearchTitle>Near</Styled.SearchTitle>
            {scriptLoaded && (
              <PlacesAutocomplete
                inputProps={inputProps}
                classNames={cssClasses}
              />
            )}
            <Styled.SearchBtn type="submit">
              <Styled.SearchIcon />
            </Styled.SearchBtn>
          </Styled.SearchBarContainer2>
          
          
        </Styled.Content>
      </Styled.Container>
    </>
  );
};

export default LandingPage;
