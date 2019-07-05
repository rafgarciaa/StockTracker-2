import React, { FunctionComponent } from 'react';
import { News } from '../../utilities/interfaces';
import NewsListContainer from './newsListContainer';
import { RootState } from '../../utilities/interfaces';

interface NewsListProps {
  newsList: News[];
}

const ChartNewsLayout: FunctionComponent<NewsListProps> = ({ newsList }) => {
  return (
    <div>
      <NewsListContainer newsList={newsList} />
    </div>
  );
};

export default ChartNewsLayout;
