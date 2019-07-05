import React, { FunctionComponent } from 'react';
import { News } from '../../utilities/interfaces';
import NewsList from './newsList';

interface ChartNewsProps {
  newsList: News[];
}

const ChartNewsLayout: FunctionComponent<ChartNewsProps> = ({ newsList }) => {
  return (
    <div>
      <NewsList newsList={newsList} />
    </div>
  );
};

export default ChartNewsLayout;
