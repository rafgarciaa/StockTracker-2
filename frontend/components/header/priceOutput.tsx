import React, { FunctionComponent } from 'react';
import { HeaderProps } from '../../utilities/interfaces';
import { changeToPercent } from '../../utilities/numberFormatters';

const PriceOutput: FunctionComponent<HeaderProps> = ({
  latestPrice,
  change,
  changePercent,
  fetchingStatus,
}) => {
  const isNegative = change <= 0;
  const headerClassName = isNegative ? 'negative' : 'positive';
  return (
    <div>
      {fetchingStatus.startFetching && (
        <div className="header__top-price">
          <span>
            <span className="icon--small">$</span>
            {latestPrice != null ? Math.abs(latestPrice) : '0'}
          </span>
          <div className={`header__top-price--change ` + headerClassName}>
            <span>
              <span className="icon--small">
                {isNegative ? '\u2193' : '\u2191'}
              </span>
              {change != null ? Math.abs(change) : '0'}
            </span>
            <span>
              {changeToPercent(Math.abs(changePercent))}
              <span className="icon--small">%</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceOutput;
