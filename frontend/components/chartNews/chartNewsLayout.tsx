import React, { FunctionComponent } from 'react';
import { News } from '../../utilities/interfaces';
import NewsList from './newsList';
import ChartContainer from './chartContainer';

interface ChartNewsProps {
  newsList: News[];
  isFetchingCompanyNews: boolean;
  isFetchSuccessCompanyNews: boolean;
  isFetchingChart: boolean;
  isFetchSuccessChart: boolean;
}

const tempLoader = {};

const ChartNewsLayout: FunctionComponent<ChartNewsProps> = ({
  newsList,
  isFetchSuccessCompanyNews,
  isFetchingCompanyNews,
  isFetchSuccessChart,
}) => {
  console.log(isFetchSuccessCompanyNews);
  return (
    <div className="section-chart-news">
      {isFetchSuccessCompanyNews && (
        <NewsList newsList={newsList} isFetching={isFetchingCompanyNews} />
      )}
      {isFetchSuccessChart && <ChartContainer />}
    </div>
  );
};

export default ChartNewsLayout;
