import React, { useState, useEffect, useRef } from 'react';

import * as Styled from './styles';

const PlaceInput = ({query, onSetQuery, onFormSubmit}) => {
  
  const [autocomplete, setAutocomplete] = useState('');

  const inputEl = useRef(null);
  // let autocomplete = null;

  const onChange = e => {
    // e.preventDefault();
    onSetQuery(e.target.value);
  };

  const handleFormSubmit = event => {
    /*geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
    
    */
    event.preventDefault();
    
    onFormSubmit(true);

    /*if (autocomplete) {
      const places = autocomplete.getPlaces();

      console.log('places.geometry: ', places[0].geometry.location.lat());
    }*/
  };

  const onScriptLoad = () => {
    setAutocomplete(new window.google.maps.places.SearchBox(inputEl.current));
  };

  //load script
  useEffect(() => {
    if (!window.google) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://maps.googleapis.com/maps/api/js?key=${
        process.env.REACT_APP_GOOGLE_API_KEY
      }&libraries=places`;
      const headScript = document.getElementsByTagName(`script`)[0];
      headScript.parentNode.insertBefore(script, headScript);
      script.addEventListener(`load`, onScriptLoad);
      return () => script.removeEventListener(`load`, onScriptLoad);
    } else {
      onScriptLoad();
    }
  }, [window.google]);

  //add event listener for searchBox
  useEffect(() => {
    if (autocomplete) {
      autocomplete.addListener('places_changed', onChange);
    }
  }, [autocomplete]);

  return (
    <>
      <Styled.SearchBarContainer onSubmit={handleFormSubmit}>
        <Styled.SearchTitle>Near</Styled.SearchTitle>
        <Styled.SearchInput ref={inputEl} value={query} onChange={onChange} />
        <Styled.SearchBtn type="submit">
          <Styled.SearchIcon />
        </Styled.SearchBtn>
      </Styled.SearchBarContainer>
    </>
  );
};

export default PlaceInput;
