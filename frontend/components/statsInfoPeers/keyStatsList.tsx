import React, { FunctionComponent } from 'react';
import { CompanyStat } from '../../utilities/interfaces';
import KeyStatsListItem from './keyStatsListItem';

interface CompanyStatsProps {
  companyStatsLeft: CompanyStat[];
  companyStatsRight: CompanyStat[];
}

const KeyStatsList: FunctionComponent<CompanyStatsProps> = ({
  companyStatsLeft,
  companyStatsRight,
}) => {
  return (
    <div>
      <h2>Key Stats</h2>
      <div>
        <ul>
          {companyStatsLeft.map(({ name, value }: CompanyStat) => (
            <KeyStatsListItem key={name} name={name} value={value} />
          ))}
        </ul>

        <ul>
          {companyStatsRight.map(({ name, value }: CompanyStat) => (
            <KeyStatsListItem key={name} name={name} value={value} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KeyStatsList;
