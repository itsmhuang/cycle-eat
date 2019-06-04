import React, { useState, useEffect, useRef } from 'react';
import * as Styled from './styles';
import { Formik } from 'formik';

const PlaceInput = ({ query, onSetQuery, onFormSubmit }) => {
  const [autocomplete, setAutocomplete] = useState('');
  const inputEl = useRef(null);
  let setField = null;
  let googleDropdown = document.getElementsByClassName('pac-container');

  const onSelect = () => {
    // console.log( 'inputEl: ', inputEl.current.value );
    onSetQuery(inputEl.current.value);
    let places = autocomplete.getPlaces();
    setField('searchQuery', autocomplete.getPlaces().formatted_address);
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
                /*console.log(
                  'googleDropdown: ',
                  googleDropdown[googleDropdown.length - 1],
                );*/
                if (
                  /*googleDropdown[0].style.display === 'none' &&*/
                  event.keyCode === 13
                ) {
                  // console.log( 'googleDropdown[0].style.display: ', googleDropdown[0].style.display );
                  event.preventDefault();
                }
                // prevent google autofill from submitting form, side effect: can't submit via enter while focused on this field
              }}
            />
            <Styled.SearchBtn type="submit">
              <Styled.SearchIcon />
            </Styled.SearchBtn>
          </Styled.SearchBarForm>
        );
      }}
    />
  );
};

export default PlaceInput;
