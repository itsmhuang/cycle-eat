import React, { useState, useEffect, useRef } from 'react';
import * as Styled from './styles';

const PlaceInput = () => {
  const [address, setAddress] = useState('');

  const inputEl = useRef(null);
  let autocomplete = null;

  const onChange = e => {
    e.preventDefault();
    setAddress(e.target.value);
  };

  const handleFormSubmit = event => {
    /*geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
    
    */
    event.preventDefault();

    console.log('autocomplete.getPlace(): ', autocomplete.getPlace());
  };

  const onScriptLoad = () => {
    autocomplete = new window.google.maps.places.Autocomplete(inputEl.current, {
      types: ['geocode'],
    });
    autocomplete.addListener('place_changed', onChange);
  };

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

  return (
    <>
      <Styled.SearchBarContainer onSubmit={handleFormSubmit}>
        <Styled.SearchTitle>Near</Styled.SearchTitle>
        <Styled.SearchInput ref={inputEl} value={address} onChange={onChange} />
        <Styled.SearchBtn type="submit">
          <Styled.SearchIcon />
        </Styled.SearchBtn>
      </Styled.SearchBarContainer>
    </>
  );
};

export default PlaceInput;
