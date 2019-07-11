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
      <h2 className="heading-section">Key Stats</h2>
      <div className="section-stats__list">
        <ul>
          {companyStatsLeft.map(
            ({ name, value }: CompanyStat, index: number) => (
              <KeyStatsListItem
                key={name ? name : index}
                name={name}
                value={value}
              />
            )
          )}
        </ul>

        <ul>
          {companyStatsRight.map(
            ({ name, value }: CompanyStat, index: number) => (
              <KeyStatsListItem
                key={name ? name : index}
                name={name}
                value={value}
              />
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default KeyStatsList;
