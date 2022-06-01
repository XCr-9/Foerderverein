import React, { useContext } from 'react';

import { Context } from '../Context';
import { Heading } from './Headings';

export default function GeneralMeetingsContent() {
  const { content, generalMeetingIndex } = useContext(Context);

  const section =
    generalMeetingIndex !== 'unvalid'
      ? content.generalMeetings.list[generalMeetingIndex]
      : content.generalMeetings.unvalid;

  return (
    <article>
      <Heading h2 title={section.heading} />

      <div
        dangerouslySetInnerHTML={{
          __html: section.content,
        }}
      />
    </article>
  );
}
