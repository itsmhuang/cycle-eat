import React, { useState } from 'react';
import queryString from 'query-string';
import PlaceInput from 'src/components/PlaceInput';
import * as Styled from './styles';

const MapPage = ({ location }) => {
  console.log('location: ', queryString.parse(location.search));

  return (
    <>
      <Styled.SearchBarContainer>
        <PlaceInput onFormSubmit={() => console.log('hello')} />
      </Styled.SearchBarContainer>
    </>
  );
};

export default MapPage;
