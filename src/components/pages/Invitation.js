import React, { useContext } from 'react';

import { Context } from '../../Context';
import { meta } from '../../helpers/meta';

export default function Invitation() {
  const { content } = useContext(Context);

  document.title = content.invitation.meta.title;
  meta('name', 'description', content.invitation.meta.description);

  return (
    <div className="wrap">
      <h1>{content.invitation.heading}</h1>

      {content.invitation.texts
        ? content.invitation.texts.map((text) => (
            <article key={text} dangerouslySetInnerHTML={{ __html: text }} />
          ))
        : content.invitation.default}
    </div>
  );
}
