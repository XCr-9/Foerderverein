import React, { useState } from 'react';

import { useFetch } from './helpers/useFetch';
import Spinner from './components/Spinner';

export const Context = React.createContext(null);

export default function ContextProvider({ children }) {
  const [generalMeetingIndex, setGeneralMeetingIndex] = useState(0);

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
