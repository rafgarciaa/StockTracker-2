import React, { FunctionComponent } from 'react';
import { HeaderProps } from '../../utilities/interfaces';

const PriceOutput: FunctionComponent<HeaderProps> = ({
  latestPrice,
  change,
  changePercent,
}) => {
  const isNegative = change <= 0;
  const headerClassName = isNegative
    ? 'header__price negative'
    : 'header__price positive';
  return (
    <>
      <div className={headerClassName}>
        <span>
          <span className="icon--small">$</span>
          {latestPrice != null ? Math.abs(latestPrice) : '0'}
        </span>
        <div className="header__price--change">
          <span>
            <span className="icon--small">
              {isNegative ? '\u2193' : '\u2191'}
            </span>
            {change != null ? Math.abs(change) : '0'}
          </span>
          <span>
            {Math.abs(changePercent)}
            <span className="icon--small">%</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default PriceOutput;
