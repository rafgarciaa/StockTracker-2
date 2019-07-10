import React, { FunctionComponent } from 'react';
import NewsListItem from './newsListItem';
import { News } from '../../utilities/interfaces';

interface NewsListProps {
  newsList: News[];
  isFetching: boolean;
}

const NewsList: FunctionComponent<NewsListProps> = ({
  newsList,
  isFetching,
}) => {
  return (
    <div className="section-news__list">
      <h2 className="heading-section">Latest News</h2>
      {isFetching ? (
        'LOADING...'
      ) : (
        <ul>
          {newsList.map((news, idx) => (
            <NewsListItem key={idx} news={news} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsList;
