import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const PlacesList = ({ places }) => {
  return (
    <>
      {places.map(place => {
        const streetAddress = place.formatted_address.split(',')[0];
        return (
          <Styled.PlaceContainer key={place.id}>
            <Styled.Title>{place.name}</Styled.Title>
            <Styled.Address>{streetAddress}</Styled.Address>
          </Styled.PlaceContainer>
        );
      })}
    </>
  );
};

PlacesList.propTypes = {
  places: PropTypes.array.isRequired,
};

export default PlacesList;
