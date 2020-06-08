import React from 'react';
import { ie } from '../data/IE';

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
    <div dangerouslySetInnerHTML={{ __html: ie.german }} />
  ) : (
    <div dangerouslySetInnerHTML={{ __html: ie.english }} />
  );
}
