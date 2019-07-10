import React, { FunctionComponent } from 'react';
import { News } from '../../utilities/interfaces';
import NewsList from './newsList';
import ChartContainer from './chartContainer';

interface ChartNewsProps {
  newsList: News[];
}

const ChartNewsLayout: FunctionComponent<ChartNewsProps> = ({ newsList }) => {
  return (
    <div className="section-chart-news">
      <ChartContainer />
      <NewsList newsList={newsList} />
    </div>
  );
};

export default ChartNewsLayout;
