import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const Map = ({ scriptLoaded }) => {
  const [map, setMap] = useState(null);
  const mapEl = useRef(null);

  const onScriptLoad = () => {
    setMap(
      new window.google.maps.Map(mapEl.current, {
        center: { lat: 48, lng: 8 },
        zoom: 12,
      }),
    );
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
        onScriptLoad();
      }
    }
  }, [scriptLoaded]);

  return <div ref={mapEl} style={{ height: '70vh' }} />;
};

Map.propTypes = {
  scriptLoaded: PropTypes.bool.isRequired,
};

Map.defaultProps = {};

export default Map;
