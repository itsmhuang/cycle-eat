import React, { useState, useEffect, useRef } from 'react';

const PlaceInput2 = () => {
  const [query, setQuery] = useState('');
  const [list, setList] = useState(null);

  const inputEl = useRef(null);
  let autocomplete = null;

  const displaySuggestions = (predictions, status) => {
    if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
      alert(status);
      return;
    }

    /*predictions.forEach(function(prediction) {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(prediction.description));
      document.getElementById('results').appendChild(li);
    });*/
    console.log('predictions: ', predictions);
  };

  const onChange = e => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const onScriptLoad = () => {
    // autocomplete = new window.google.maps.places.AutocompleteService();

    inputEl.current.addEventListener('change', onChange);
  };

  useEffect(() => {
    if (query) {
      autocomplete = new window.google.maps.places.AutocompleteService();
      autocomplete.getQueryPredictions({ input: query }, displaySuggestions);
    }
  }, [query]);

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://maps.googleapis.com/maps/api/js?key=${
        process.env.REACT_APP_GOOGLE_API_KEY
      }&libraries=places`;
      const headScript = document.getElementsByTagName(`script`)[0];
      headScript.parentNode.insertBefore(script, headScript);
      script.addEventListener(`load`, onScriptLoad);
      return () => script.removeEventListener(`load`, onScriptLoad);
    } else {
      onScriptLoad();
    }
  }, [window.google]);

  return (
    <>
      <input value={query} onChange={onChange} ref={inputEl} />
      <div>{list}</div>
    </>
  );
};

export default PlaceInput2;
