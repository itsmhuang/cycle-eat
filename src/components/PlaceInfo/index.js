import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const PlaceInfo = ({ info }) => {
  console.log('info: ', info);
  
  return (
    <Styled.Container>
      {info.name}
    </Styled.Container>
  );
};
PlaceInfo.propTypes = {
  info: PropTypes.object,
};

export default PlaceInfo;
