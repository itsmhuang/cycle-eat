import React, { useState, useEffect } from 'react';
import * as Styled from './styles';
import Script from 'react-load-script';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

const PlaceInput = ({ onFormSubmit, address, onSetAddress, onSetLatLng }) => {
  const [itemSelected, setItemSelected] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const onChange = address => {
    onSetAddress(address);
  };

  const onSelectDropdown = address => {
    onSetAddress(address);
    setItemSelected(true);
  };

  const scriptUrl = `https://maps.googleapis.com/maps/api/js?key=${
    process.env.REACT_APP_PLACES_API_KEY
  }&libraries=places`;

  const handleFormSubmit = event => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        onSetLatLng(latLng);
        onFormSubmit();
      })
      .catch(error => console.error('Error', error));
  };

  //submit form right after selecting dropdown via click or enter key
  useEffect(() => {
    if (itemSelected) {
      handleFormSubmit();
    }
    return () => {
      setItemSelected(false);
    };
  }, [itemSelected]);

  const inputProps = {
    value: address,
    onChange,
    placeholder: 'address, neighborhood, city, state, or zip',
    type: 'search',
    autoFocus: true,
  };

  const cssClasses = {
    root: 'form-group',
    input: 'form-input',
    autocompleteContainer: 'autocomplete-container',
  };

  const searchOptions = {
    types: ['(geocode)'],
    // types: ['(cities)'],
  };
  return (
    <>
      <Script url={scriptUrl} onLoad={() => setScriptLoaded(true)} />
      <Styled.SearchBarContainer
        onSubmit={e => {
          e.preventDefault();
          handleFormSubmit();
        }}
      >
        <Styled.SearchTitle>Near</Styled.SearchTitle>
        {scriptLoaded && (
          <PlacesAutocomplete
            inputProps={inputProps}
            classNames={cssClasses}
            onEnterKeyDown={handleFormSubmit}
            onSelect={onSelectDropdown}
            searchOptions={searchOptions}
          />
        )}
        <Styled.SearchBtn type="submit">
          <Styled.SearchIcon />
        </Styled.SearchBtn>
      </Styled.SearchBarContainer>
    </>
  );
};

export default PlaceInput;
