import React, { useState, useEffect, useRef } from 'react';
import * as Styled from './styles';
import { Formik } from 'formik';

const PlaceInput = ({ query, onSetQuery, onFormSubmit }) => {
  const [autocomplete, setAutocomplete] = useState('');
  const inputEl = useRef(null);
  let setFieldValueFunc = null;

  const onChange = () => {
    
    let places = autocomplete.getPlaces();
    console.log( 'places: ', places );
    
    // e.preventDefault();
    // onSetQuery(e.target.value);
    setFieldValueFunc('searchQuery', autocomplete.getPlaces().formatted_address);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    onFormSubmit();

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
    <Formik
      initialValues={{
        searchQuery: query,
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        handleFormSubmit();
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
          <Styled.SearchBarForm>
            <Styled.SearchInput
              type="text"
              ref={inputEl}
              name="searchQuery"
              placeholder=""
              // value={query}
              // onChange={onChange}
              onKeyDown={event => {
                // prevent google autofill from submitting form, side effect: can't submit via enter while focused on this field
                if (event.keyCode === 13) {
                  event.preventDefault();
                }
              }}
            />
          </Styled.SearchBarForm>
        );
      }}
    />
  );
};

export default PlaceInput;
