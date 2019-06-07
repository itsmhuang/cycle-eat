import React, { useState, useEffect, useRef } from 'react';
import queryString from 'query-string';
import PlaceInput from 'src/components/PlaceInput';
import PlaceInfo from 'src/components/PlaceInfo';
import * as Styled from './styles';

const MapPage = ({ location }) => {
  // console.log('location: ', queryString.parse(location.search));

  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [markers, setMarkers] = useState(null);
  const [map, setMap] = useState(null);
  const [placeInfo, setPlaceInfo] = useState(null);
  const mapEl = useRef(null);

  const onScriptLoad = () => {
    setMap(
      new window.google.maps.Map(mapEl.current, {
        center: { lat: 48, lng: 8 },
        zoom: 12,
      }),
    );
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${
      process.env.REACT_APP_GOOGLE_API_KEY
    }&libraries=places`;
    const headScript = document.getElementsByTagName('script')[0];

    if (!window.google) {
      headScript.parentNode.insertBefore(script, headScript);
      script.addEventListener('load', onScriptLoad);
      return () => script.removeEventListener('load', onScriptLoad);
    } else {
      onScriptLoad();
    }
    setScriptLoaded(true);
  }, [window.google]);

  return (
    <Styled.Container>
      <Styled.LeftColumn>
        <Styled.SearchBarContainer>
          <PlaceInput
            onFormSubmit={() => console.log('hello')}
            scriptLoaded={scriptLoaded}
            onSetPlaceInfo={setPlaceInfo}
            markers={markers}
            onSetMarkers={setMarkers}
            map={map}
            fullWidth
          />
        </Styled.SearchBarContainer>
        <Styled.Map ref={mapEl} scriptLoaded={scriptLoaded} />
      </Styled.LeftColumn>
      <Styled.RightColumn>
        {placeInfo && <PlaceInfo info={placeInfo} />}
        {/*<PlaceInfo info={placeInfo} />*/}
      </Styled.RightColumn>
    </Styled.Container>
  );
};

export default MapPage;
