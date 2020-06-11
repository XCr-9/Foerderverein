import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../Context';

export default function GeneralMeetingsList() {
  const { content, setGeneralMeetingIndex } = useContext(Context);

  const year = ['#2020', '#2019', '#2018', '#2017'];

  return content.generalMeetings.list.map((listItem, index) => (
    <div
      key={listItem.year}
      onClick={() => {
        setGeneralMeetingIndex(index);
      }}
    >
      <Link to={year[index]}>{listItem.year}</Link>
    </div>
  ));
}
