import React, { FunctionComponent } from 'react';
import { changeToPercent } from '../../utilities/numberFormatters';

interface PriceOutputProps {
  latestPrice: number | null;
  change: number | null;
  changePercent: number | null;
}

const PriceOutput: FunctionComponent<PriceOutputProps> = ({
  latestPrice,
  change,
  changePercent,
}) => {
  const isNegative = change ? change <= 0 : false;
  const headerClassName = isNegative ? 'negative' : 'positive';
  return (
    <div className="header__top-price">
      <span>
        <span className="icon--small">$</span>
        {latestPrice != null ? Math.abs(latestPrice).toFixed(2) : '0'}
      </span>
      <div className={`header__top-price--change ` + headerClassName}>
        <span>
          <span className="icon--small">
            {isNegative ? '\u2193' : '\u2191'}
          </span>
          {change != null ? Math.abs(change) : '0'}
        </span>
        <span>
          {changeToPercent(Math.abs(changePercent ? changePercent : 0))}
          <span className="icon--small">%</span>
        </span>
      </div>
    </div>
  );
};

export default PriceOutput;
