import React, { useContext } from 'react';
import { HashLink } from 'react-router-hash-link';

import { Context } from '../../Context';
import { meta } from '../../helpers/meta';
import { Heading } from '../Headings';

export default function NotFound() {
  const { content } = useContext(Context);

  document.title = content.notFound.meta.title;
  meta('name', 'description', content.notFound.meta.description);

  return (
    <div className="wrap">
      <Heading h1 title={content.notFound.heading} />
      {content.notFound.content.map((text) => (
        <p key={text}>{text}</p>
      ))}

      <ul>
        {content.header.navigation.map((navItem) => (
          <li key={navItem.linkText}>
            <HashLink style={{ textDecoration: 'none' }} to={navItem.href}>
              {navItem.linkText}
            </HashLink>
          </li>
        ))}
        {content.footer.nav.map((navItem) => (
          <li key={navItem.linkText}>
            <HashLink style={{ textDecoration: 'none' }} to={navItem.href}>
              {navItem.linkText}
            </HashLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
