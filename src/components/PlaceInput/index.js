import React, { useState } from 'react';
import * as Styled from './styles';
import Script from 'react-load-script';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

const PlaceInput = () => {
  const [address, setAddress] = useState('');
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const onChange = address => {
    setAddress(address);
  };
  
  const scriptUrl = `https://maps.googleapis.com/maps/api/js?key=${
    process.env.REACT_APP_PLACES_API_KEY
  }&libraries=places`;

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
      <Script url={scriptUrl} onLoad={() => setScriptLoaded(true)} />
      <Styled.SearchBarContainer onSubmit={handleFormSubmit}>
        <Styled.SearchTitle>Near</Styled.SearchTitle>
        {scriptLoaded && (
          <PlacesAutocomplete inputProps={inputProps} classNames={cssClasses} />
        )}
        <Styled.SearchBtn type="submit">
          <Styled.SearchIcon />
        </Styled.SearchBtn>
      </Styled.SearchBarContainer>
    </>
  );
};

export default PlaceInput;
