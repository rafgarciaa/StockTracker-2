import React, { FunctionComponent } from 'react';
import { News } from '../../utilities/interfaces';

const formatNewsTimeAgo = (timePublished: number) => {
  const timeAgo: Date = new Date(timePublished);
  return timeAgo.getHours() + 'hr' + timeAgo.getMinutes() + 'min ago';
};

interface NewsListItemProps {
  news: News;
}

const NewsListItem: FunctionComponent<NewsListItemProps> = ({ news }) => {
  const { datetime, url, headline, source } = news;
  const timeAgo = formatNewsTimeAgo(Date.now() - datetime);

  return (
    <li>
      <a href={url} className="section-news__list-link">
        {headline}
        <span className="section-news__list-timestamp">
          {timeAgo} - {source}
        </span>
      </a>
    </li>
  );
};

export default NewsListItem;
