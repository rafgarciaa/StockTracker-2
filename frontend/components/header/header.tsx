import React, { FunctionComponent } from 'react';
import SearchInputContainer from './searchInputContainer';

interface HeaderProps {
  latestPrice: number;
  change: number;
  changePercent: number;
  exchange: string;
  sector: string;
}

const header: FunctionComponent<HeaderProps> = props => {
  let priceOutput;
  let companyTags;
  priceOutput = (
    <div>
      <span>latestPrice: {props.latestPrice} </span>
      <span>change: {props.change} </span>
      <span>changePercent: {props.changePercent}</span>
    </div>
  );

  companyTags = (
    <div>
      <span>exchange: {props.exchange}</span>{' '}
      <span>sector: {props.sector}</span>
    </div>
  );
  return (
    <div>
      <SearchInputContainer />
      {priceOutput}
      {companyTags}
    </div>
  );
};

export default header;
