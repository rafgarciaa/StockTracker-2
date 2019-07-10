import React, { FunctionComponent } from 'react';
import { News } from '../../utilities/interfaces';
import NewsList from './newsList';
import ChartContainer from './chartContainer';

interface ChartNewsProps {
  newsList: News[];
}

const ChartNewsLayout: FunctionComponent<ChartNewsProps> = ({ newsList }) => {
  return (
    <div>
      <NewsList newsList={newsList} />
      <ChartContainer />
    </div>
  );
};

export default ChartNewsLayout;
