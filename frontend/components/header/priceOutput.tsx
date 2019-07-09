import React, { FunctionComponent } from 'react';
import { HeaderProps } from '../../utilities/interfaces';

const changeToPercent = (num: number) => {
  return num ? (num * 100).toFixed(2) : null;
};

const PriceOutput: FunctionComponent<HeaderProps> = ({
  latestPrice,
  change,
  changePercent,
}) => {
  const isNegative = change <= 0;
  const headerClassName = isNegative ? 'negative' : 'positive';
  return (
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
  );
};

export default PriceOutput;
