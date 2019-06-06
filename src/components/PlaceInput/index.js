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
  map,
  fullWidth,
  // markers,
  // onSetMarkers
}) => {
  const [value, setValue] = useState('');
  const [autocomplete, setAutocomplete] = useState('');
  const [itemSelected, setItemSelected] = useState(false);
  const inputEl = useRef(null);
  let setField = null;
  let googleDropdown = document.getElementsByClassName('pac-container');
  let markers = [];

  //todo: prevent re-submit if input value has not been changed, minimize api calls
  const onSelect = () => {
    onSetQuery
      ? onSetQuery(inputEl.current.value)
      : setValue(inputEl.current.value);
    const places = autocomplete.getPlaces();
    console.log('places: ', places);

    if (places.length === 0) {
      return;
    }

    setField('searchQuery', autocomplete.getPlaces().formatted_address);
    setItemSelected(true);

    markers.forEach(marker => {
      marker.setMap(null);
    });
    markers = [];

    let bounds = new window.google.maps.LatLngBounds();

    places.forEach(function(place) {
      if (!place.geometry) {
        console.log('Returned place contains no geometry');
        return;
      }
      const icon = {
        url: place.icon,
        size: new window.google.maps.Size(71, 71),
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(17, 34),
        scaledSize: new window.google.maps.Size(25, 25),
      };

      //create marker for each place
      markers.push(
        new window.google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location,
        }),
      );

      if (place.geometry.viewport) {
        // Only geocodes have viewport
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
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
    if (scriptLoaded) {
      if (!window.google) {
        const scripts = Array.prototype.slice.call(
          document.getElementsByTagName('script'),
        );

        const gMapScript = scripts.find(script =>
          script.src.includes('maps.googleapis.com/maps/api/js'),
        );
        if (gMapScript) {
          gMapScript.addEventListener('load', onScriptLoad);
          return () => gMapScript.removeEventListener('load', onScriptLoad);
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

  useEffect(() => {
    if (map && autocomplete) {
      map.addListener('bounds_changed', () => {
        autocomplete.setBounds(map.getBounds());
      });
    }
  }, [map, autocomplete]);

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
          <Styled.SearchBarForm
            onSubmit={handleFormSubmit}
            centered={centered}
            fullWidth={fullWidth}
          >
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
  markers: PropTypes.string,
  onSetMarkers: PropTypes.func,
  onFormSubmit: PropTypes.func.isRequired,
  centered: PropTypes.bool,
  scriptLoaded: PropTypes.bool.isRequired,
  fullWidth: PropTypes.bool,
};

PlaceInput.defaultProps = {
  centered: false,
};

export default PlaceInput;
