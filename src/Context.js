import React from 'react';

import { content } from './data/Content';
import { legal } from './data/Legal';

export const Context = React.createContext(null);

export default function ContextProvider({ children }) {
  return (
    <Context.Provider
      value={{
        content,
        legal,
      }}
    >
      {children}
    </Context.Provider>
  );
}
