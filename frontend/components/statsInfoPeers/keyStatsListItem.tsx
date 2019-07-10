import React, { FunctionComponent } from 'react';
import { CompanyStat } from '../../utilities/interfaces';

const KeyStatsListItem: FunctionComponent<CompanyStat> = ({ name, value }) => {
  return (
    <li>
      <span className="section-stats__list-item--label">{name}</span>
      <span className="section-stats__list-item--value">{value}</span>
    </li>
  );
};

export default KeyStatsListItem;
