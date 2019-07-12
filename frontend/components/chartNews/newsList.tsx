import React, { FunctionComponent } from 'react';
import NewsListItem from './newsListItem';
import { News, FetchStatusElement } from '../../utilities/interfaces';
import AdaptiveLoader from '../adaptiveLoader/adaptiveLoader';

interface NewsListProps {
  newsList: News[];
  fetchStatus: FetchStatusElement;
}

const NewsList: FunctionComponent<NewsListProps> = ({
  newsList,
  fetchStatus,
}) => {
  return (
    <div className="section-news">
      {fetchStatus.startFetching && (
        <h2 className="heading-section">Latest News</h2>
      )}
      {!fetchStatus.doneFetching && fetchStatus.startFetching ? (
        <AdaptiveLoader />
      ) : fetchStatus.startFetching && !fetchStatus.fetchSuccess ? (
        'ERROR'
      ) : (
        <ul className="section-news__list">
          {newsList.map((news, idx) => (
            <NewsListItem key={idx} news={news} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsList;
