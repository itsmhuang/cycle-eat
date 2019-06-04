import React, { useState, useEffect, useRef } from 'react';
import * as Styled from './styles';
import { Formik } from 'formik';

const PlaceInput = ({ query, onSetQuery, onFormSubmit }) => {
  const [autocomplete, setAutocomplete] = useState('');
  const [itemSelected, setItemSelected] = useState(false);
  const inputEl = useRef(null);
  let setField = null;
  let googleDropdown = document.getElementsByClassName('pac-container');

  const onSelect = () => {
    onSetQuery(inputEl.current.value);
    let places = autocomplete.getPlaces();
    if (places.length) {
      setField('searchQuery', autocomplete.getPlaces().formatted_address);
      setItemSelected(true);
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    onFormSubmit();
  };

  const onScriptLoad = () => {
    setAutocomplete(new window.google.maps.places.SearchBox(inputEl.current));
  };

  //add script
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${
      process.env.REACT_APP_GOOGLE_API_KEY
    }&libraries=places`;
    const headScript = document.getElementsByTagName(`script`)[0];
    if (!window.google) {
      headScript.parentNode.insertBefore(script, headScript);
      script.addEventListener('load', onScriptLoad);
    } else {
      if (googleDropdown.length) {
        googleDropdown[0].remove();
      }
      onScriptLoad();
    }
    return () => {
      script.removeEventListener('load', onScriptLoad);
    };
  }, [window.google]);

  //add listener for searchBox
  useEffect(() => {
    if (autocomplete) {
      autocomplete.addListener('places_changed', onSelect);
    }
  }, [autocomplete]);

  return (
    <Formik
      initialValues={{
        searchQuery: query,
      }}
      render={({
        isSubmitting,
        values,
        isValid,
        setFieldValue,
        // setSubmitting,
      }) => {
        setField = setFieldValue;
        return (
          <Styled.SearchBarForm onSubmit={handleFormSubmit}>
            <Styled.SearchInput
              type="text"
              ref={inputEl}
              name="searchQuery"
              placeholder=""
              onKeyDown={event => {
                if (!itemSelected && event.keyCode === 13) {
                  event.preventDefault();
                }
              }}
            />
            <Styled.SearchBtn type="submit" disabled={!itemSelected}>
              <Styled.SearchIcon />
            </Styled.SearchBtn>
          </Styled.SearchBarForm>
        );
      }}
    />
  );
};

export default PlaceInput;
