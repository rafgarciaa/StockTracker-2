import React, { FunctionComponent } from 'react';
import PriceOutput from '../header/priceOutput';
import {
  harcodedDataType,
  FetchStatusElement,
} from '../../utilities/interfaces';

interface FooterMarketProps {
  marketList: harcodedDataType;
  fetchStatus: FetchStatusElement;
}

const FooterMarket: FunctionComponent<FooterMarketProps> = ({
  marketList,
  fetchStatus,
}) => {
  return (
    <>
      {fetchStatus.startFetching && (
        <div className="section-footer__slice">
          <h4 className="section-footer__heading">Market</h4>
          {Object.keys(marketList).map((symbol, idx) => {
            const market = marketList[symbol];
            return (
              <div className="section-market-favorite" key={idx}>
                <span>{market.symbol}</span>
                <PriceOutput
                  latestPrice={market.latestPrice}
                  change={market.change}
                  changePercent={market.changePercent}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default FooterMarket;
