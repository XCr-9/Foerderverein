import React, { Fragment } from 'react';

export default function IE() {
  // Detect browser language
  let browserLanguage = navigator.language.toLowerCase();
  switch (browserLanguage) {
    case 'de':
    case 'de-at':
    case 'de-ch':
    case 'de-de':
    case 'de-li':
    case 'de-lu':
      browserLanguage = 'german';
      break;
    default:
      browserLanguage = 'english';
  }

  return browserLanguage === 'german' ? (
    <Fragment>
      <h1>Achtung! Internet Explorer wird nicht mehr unterstützt.</h1>
      <p>
        Unterstützt werden z.B. Chrome (unsere Empfehlung), Firefox, Safari,
        Edge und Opera.
      </p>
    </Fragment>
  ) : (
    <Fragment>
      <h1>Attention! Internet Explorer is no longer supported.</h1>
      <p>
        The following browsers are supported e.g. Chrome (our recommendation),
        Firefox, Safari, Edge and Opera.
      </p>
    </Fragment>
  );
}
