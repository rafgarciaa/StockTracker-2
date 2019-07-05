import React, { FunctionComponent } from 'react';
import NewsListItem from './newsListItem';
import { News } from '../../utilities/interfaces';

interface NewsListProps {
  newsList: News[];
}

const NewsList: FunctionComponent<NewsListProps> = ({ newsList }) => {
  return (
    <div className="section-news__list">
      <h2 className="heading-section">Latest News</h2>
      <ul>
        {newsList.map((news, idx) => (
          <NewsListItem key={idx} news={news} />
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
