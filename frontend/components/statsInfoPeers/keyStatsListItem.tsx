import React, { FunctionComponent } from 'react';
import { CompanyStat } from '../../utilities/interfaces';

const KeyStatsListItem: FunctionComponent<CompanyStat> = ({ name, value }) => {
  return (
    <li>
      <span>{name}</span>
      <span>{value}</span>
    </li>
  );
};

export default KeyStatsListItem;
