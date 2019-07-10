import React, { FunctionComponent } from 'react';
import NewsListItem from './newsListItem';
import { News, FetchStatusElement } from '../../utilities/interfaces';

interface NewsListProps {
  newsList: News[];
  fetchingStatusCompanyNews: FetchStatusElement;
}

const NewsList: FunctionComponent<NewsListProps> = ({
  newsList,
  fetchingStatusCompanyNews,
}) => {
  return (
    <div className="section-news">
      {fetchingStatusCompanyNews.startFetching && (
        <h2 className="heading-section">Latest News</h2>
      )}
      {!fetchingStatusCompanyNews.doneFetching &&
      fetchingStatusCompanyNews.startFetching ? (
        'LOADING...'
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
