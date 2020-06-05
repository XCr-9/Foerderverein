import React, { useContext } from 'react';

import { Context } from '../../Context';
import { Heading } from '../Headings';

export default function LegalNotice() {
  const { legal } = useContext(Context);

  return (
    <div className="wrap">
      <Heading h1 title={legal.legalNotice.heading} />

      <ul className="blank">
        <li style={{ marginBottom: '9px', fontWeight: 'bold' }}>
          {legal.legalNotice.data.name}
        </li>
        <li style={{ marginBottom: '9px' }}>
          {legal.legalNotice.data.address.map((item) => (
            <span key={item} style={{ display: 'block' }}>
              {item}
            </span>
          ))}
        </li>
        <li style={{ marginBottom: '9px' }}>
          {legal.legalNotice.data.numbers.map((item) => (
            <span key={item} style={{ display: 'block' }}>
              {item}
            </span>
          ))}
        </li>
        <li>
          {legal.legalNotice.data.web.map((item) => (
            <span key={item} style={{ display: 'block' }}>
              {item}
            </span>
          ))}
        </li>
      </ul>
    </div>
  );
}
