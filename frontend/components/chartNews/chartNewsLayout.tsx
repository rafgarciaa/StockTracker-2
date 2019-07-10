import React, { FunctionComponent } from 'react';
import { News, FetchStatusElement } from '../../utilities/interfaces';
import NewsListContainer from './newsListContainer';
import ChartContainer from './chartContainer';

interface ChartNewsProps {
  newsList: News[];
  // fetchingStatusCompanyNews: FetchStatusElement;
  // fetchingStatusChart: FetchStatusElement;
}

const tempLoader = {};

const ChartNewsLayout: FunctionComponent = () => {
  return (
    <div className="section-chart-news">
      <ChartContainer />
      <NewsListContainer />
    </div>
  );
};

export default ChartNewsLayout;
