import React, { useRef, useState, useEffect } from 'react';
import queryString from 'query-string';
import PlaceInput from 'src/components/PlaceInput';
import * as Styled from './styles';

const MapPage = ({ location }) => {
  console.log('location: ', queryString.parse(location.search));
  console.log('location: ', queryString.parse(location.search));

  const [map, setMap] = useState(null);
  const mapEl = useRef(null);

  const onScriptLoad = () => {
    //second param is optios
    setMap(
      new window.google.maps.Map(mapEl.current, {
        center: { lat: 48, lng: 8 },
        zoom: 5,
      }),
    );
  };

  //add script
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://maps.google.com/maps/api/js?key=${
      process.env.REACT_APP_GOOGLE_API_KEY
    }`;
    const headScript = document.getElementsByTagName(`script`)[0];
    if (!window.google) {
      headScript.parentNode.insertBefore(script, headScript);
      script.addEventListener('load', onScriptLoad);
    } else {
      /*if (googleDropdown.length) {
        googleDropdown[0].remove();
      }*/
      onScriptLoad();
    }
    return () => {
      script.removeEventListener('load', onScriptLoad);
    };
  }, [window.google]);

  return (
    <>
      <Styled.SearchBarContainer>
        {/*<PlaceInput onFormSubmit={() => console.log('hello')} />*/}
      </Styled.SearchBarContainer>

      <div ref={mapEl} style={{height: '70vh'}} />
    </>
  );
};

export default MapPage;
