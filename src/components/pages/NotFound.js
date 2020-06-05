import React, { Fragment, useContext } from 'react';

import { Context } from '../../Context';
import { meta } from '../../helpers/meta';

export default function NotFound() {
  const { content } = useContext(Context);

  document.title = content.notFound.meta.title;
  meta('name', 'description', content.notFound.meta.description);

  return (
    <Fragment>
      <h1>Error 404</h1>
    </Fragment>
  );
}
