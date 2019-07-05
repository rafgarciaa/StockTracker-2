import React, { FunctionComponent } from 'react';
import NewsList from './newsList';

interface News {
  datetime: number;
  headline: string;
  source: string;
  url: string;
}

interface NewsListProps {
  newsList: News[];
}

const ChartNewsLayout: FunctionComponent<NewsListProps> = ({ newsList }) => {
  return (
    <div>
      <NewsList newsList={newsList} />
    </div>
  );
};

export default ChartNewsLayout;
