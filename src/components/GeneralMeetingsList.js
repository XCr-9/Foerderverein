import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../Context';

export default function GeneralMeetingsList() {
  const { content, setGeneralMeetingIndex } = useContext(Context);

  const year = ['#2017', '#2018', '#2019', '#2020'];

  return content.generalMeetings.list
    .slice(0)
    .reverse()
    .map((listItem, index) => (
      <div
        key={listItem.year}
        onClick={() => {
          setGeneralMeetingIndex(index);
        }}
      >
        <Link to={year[year.length - index - 1]}>{listItem.year}</Link>
      </div>
    ));
}
