import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const PlacesList = ({ places, map }) => {
  const [detailedPlaces, setDetailedPlaces] = useState([]);

  useEffect(() => {
    if (window.google && map) {
      const service = new window.google.maps.places.PlacesService(map);
      places.forEach((place, i) => {
        
        const request = {
            placeId: place.place_id,
            fields: [
              'address_components',
              'formatted_phone_number',
              'opening_hours',
              'photos',
              'place_id',
              'name',
            ],
          };
          const callBack = (details, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              setDetailedPlaces(detailedPlaces =>
                detailedPlaces.concat([details]),
              );
            } else {
              console.log('error status: ', status);
            }
          };
          service.getDetails(request, callBack);
      });
    }
  }, [window.google, map]);

  return (
    <>
      {detailedPlaces.length
        ? detailedPlaces.map(place => {
            const streetAddress = `${place.address_components[0].long_name} ${
              place.address_components[1].long_name
            }`;
            return (
              <Styled.PlaceContainer key={place.place_id}>
                <Styled.Title>{place.name}</Styled.Title>
                <Styled.Address>{streetAddress}</Styled.Address>
              </Styled.PlaceContainer>
            );
          })
        : null}
    </>
  );
};

PlacesList.propTypes = {
  places: PropTypes.array.isRequired,
  map: PropTypes.object.isRequired,
};

export default PlacesList;
