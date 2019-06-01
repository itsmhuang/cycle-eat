import React, { useState, useEffect, useRef } from 'react';
import * as Styled from './styles';
import { Formik } from 'formik';

const PlaceInput = ({ query, onSetQuery, onFormSubmit }) => {
  const [autocomplete, setAutocomplete] = useState('');
  const inputEl = useRef(null);
  let setFieldValueFunc = null;

  const onSelect = () => {
    let places = autocomplete.getPlaces();
    console.log('places: ', places);
    setFieldValueFunc(
      'searchQuery',
      autocomplete.getPlaces().formatted_address,
    );
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    onFormSubmit();
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
        setFieldValueFunc = setFieldValue;
        return (
          <Styled.SearchBarForm onSubmit={handleFormSubmit}>
            <Styled.SearchInput
              type="text"
              ref={inputEl}
              name="searchQuery"
              placeholder=""
              onKeyDown={event => {
                // prevent google autofill from submitting form, side effect: can't submit via enter while focused on this field
                if (event.keyCode === 13) {
                  event.preventDefault();
                }
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
