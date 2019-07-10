import React, { FunctionComponent } from 'react';
import NewsListItem from './newsListItem';
import { News, FetchStatusElement } from '../../utilities/interfaces';

interface NewsListProps {
  newsList: News[];
  fetchingStatus: FetchStatusElement;
}

const NewsList: FunctionComponent<NewsListProps> = ({
  newsList,
  fetchingStatus,
}) => {
  return (
    <div className="section-news">
      <h2 className="heading-section">Latest News</h2>
      {fetchingStatus.doneFetching ? (
        <ul className="section-news__list">
          {newsList.map((news, idx) => (
            <NewsListItem key={idx} news={news} />
          ))}
        </ul>
      ) : (
        'LOADING...'
      )}
    </div>
  );
};

export default NewsList;
