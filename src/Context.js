import React, { useState } from 'react';

import { content } from './data/Content';
import { legal } from './data/Legal';

export const Context = React.createContext(null);

export default function ContextProvider({ children }) {
  const [generalMeetingIndex, setGeneralMeetingIndex] = useState(0);
  const [blogPostIndex, setBlogPostIndex] = useState(0);

  return (
    <Context.Provider
      value={{
        content,
        legal,
        blogPostIndex,
        setBlogPostIndex,
        generalMeetingIndex,
        setGeneralMeetingIndex,
      }}
    >
      {children}
    </Context.Provider>
  );
}
