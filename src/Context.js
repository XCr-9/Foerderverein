import React from 'react';

import { content } from './data/Content';

export const Context = React.createContext(null);

export default function ContextProvider({ children }) {
  return (
    <Context.Provider
      value={{
        content,
      }}
    >
      {children}
    </Context.Provider>
  );
}
