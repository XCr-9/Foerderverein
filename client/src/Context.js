import React, { useState } from 'react';
import Cookies from 'js-cookie';

import { useFetch } from './helpers/useFetch';
import Spinner from './components/Spinner';
import { trackingCode } from './helpers/analytics';

export const Context = React.createContext(null);

export default function ContextProvider({ children }) {
  const [generalMeetingIndex, setGeneralMeetingIndex] = useState(0);

  // cookies
  const [cookieOptIn, setCookieOptIn] = useState(Cookies.get('cookie-opt-in'));

  const optIn = () => {
    setCookieOptIn(true);
    Cookies.set('cookie-opt-in', true, { expires: 90 });
    window.location.reload();
  };

  const optOut = () => {
    setCookieOptIn(false);
    Cookies.set('cookie-opt-in', false, { expires: 90 });
  };

  // analytics
  if (cookieOptIn === 'true') {
    document.cookie = `Disable ${trackingCode}=false; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
    window[`ga-disable-${trackingCode}`] = false;
  } else {
    document.cookie = `Disable ${trackingCode}=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
    window[`ga-disable-${trackingCode}`] = true;
  }

  const fetched = useFetch(`https://api.foerderverein-ggnauen.de`);

  if (fetched && fetched.response) {
    const content = fetched.response.data.content;
    const legal = fetched.response.data.legal;

    return (
      <Context.Provider
        value={{
          content,
          legal,
          generalMeetingIndex,
          setGeneralMeetingIndex,
          optIn,
          optOut,
          cookieOptIn,
          setCookieOptIn,
        }}
      >
        {children}
      </Context.Provider>
    );
  } else if (fetched && fetched.error) {
    return 'Es ist ein Fehler aufgetreten. Bitte besuchen Sie uns zu einem späteren Zeitpunkt erneut.';
  }
  return <Spinner />;
}
