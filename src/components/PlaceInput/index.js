import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Formik } from 'formik';

const PlaceInput = ({
  query,
  onSetQuery,
  onFormSubmit,
  centered,
  scriptLoaded,
}) => {
  const [value, setValue] = useState('');
  const [autocomplete, setAutocomplete] = useState('');
  const [itemSelected, setItemSelected] = useState(false);
  const inputEl = useRef(null);
  let setField = null;
  let googleDropdown = document.getElementsByClassName('pac-container');

  const onSelect = () => {
    onSetQuery
      ? onSetQuery(inputEl.current.value)
      : setValue(inputEl.current.value);
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

  //add event listener
  useEffect(() => {
    const scripts = Array.prototype.slice.call(
      document.getElementsByTagName('script'),
    );

    const gMapScript = scripts.find(script =>
      script.src.includes('https://maps.googleapis.com/maps/api/js'),
    );

    if (scriptLoaded) {
      if (!window.google) {
        if (gMapScript) {
          gMapScript.addEventListener('load', onScriptLoad);
        }
      } else {
        //hot update adds dropdown container each time, need to clean up
        //declarative tho, hopefully google doesn't change class name
        if (googleDropdown.length) {
          googleDropdown[0].remove();
        }
        onScriptLoad();
      }
    }
  }, [scriptLoaded]);

  //add listener for searchBox
  useEffect(() => {
    if (autocomplete) {
      autocomplete.addListener('places_changed', onSelect);
    }
  }, [autocomplete]);

  return (
    <Formik
      initialValues={{
        searchQuery: query || value,
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
          <Styled.SearchBarForm onSubmit={handleFormSubmit} centered={centered}>
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

PlaceInput.propTypes = {
  query: PropTypes.string,
  onSetQuery: PropTypes.func,
  onFormSubmit: PropTypes.func.isRequired,
  centered: PropTypes.bool,
  scriptLoaded: PropTypes.bool.isRequired,
};

PlaceInput.defaultProps = {
  centered: false,
};

export default PlaceInput;
