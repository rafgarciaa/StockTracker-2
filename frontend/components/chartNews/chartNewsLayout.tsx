import React, { FunctionComponent } from 'react';
import { News, FetchStatusElement } from '../../utilities/interfaces';
import NewsList from './newsList';
import ChartContainer from './chartContainer';

interface ChartNewsProps {
  newsList: News[];
  fetchingStatusCompanyNews: FetchStatusElement;
  fetchingStatusChart: FetchStatusElement;
}

const tempLoader = {};

const ChartNewsLayout: FunctionComponent<ChartNewsProps> = ({
  newsList,
  fetchingStatusCompanyNews,
  fetchingStatusChart,
}) => {
  return (
    <div className="section-chart-news">
      <ChartContainer />
      {fetchingStatusCompanyNews.startFetching && (
        <NewsList
          newsList={newsList}
          fetchingStatus={fetchingStatusCompanyNews}
        />
      )}
    </div>
  );
};

export default ChartNewsLayout;
