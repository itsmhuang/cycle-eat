import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import PlaceInput from 'src/components/PlaceInput';
import Map from 'src/components/Map';
import * as Styled from './styles';

const MapPage = ({ location }) => {
  // console.log('location: ', queryString.parse(location.search));

  const [scriptLoaded, setScriptLoaded] = useState(false);

  //add script
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${
      process.env.REACT_APP_GOOGLE_API_KEY
    }&libraries=places`;
    const headScript = document.getElementsByTagName('script')[0];

    if (!window.google) {
      headScript.parentNode.insertBefore(script, headScript);
    }
    setScriptLoaded(true);
  }, [window.google]);

  return (
    <>
      <Styled.SearchBarContainer>
        <PlaceInput
          onFormSubmit={() => console.log('hello')}
          scriptLoaded={scriptLoaded}
        />
      </Styled.SearchBarContainer>

      <Map scriptLoaded={scriptLoaded} />
    </>
  );
};

export default MapPage;
