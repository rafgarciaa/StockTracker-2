import React, { FunctionComponent } from 'react';
import NewsListContainer from './newsListContainer';
import ChartContainer from './chartContainer';

const ChartNewsLayout: FunctionComponent = () => {
  return (
    <div className="section-chart-news">
      <ChartContainer />
      <NewsListContainer />
    </div>
  );
};

export default ChartNewsLayout;
