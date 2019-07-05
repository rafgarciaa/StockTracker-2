import React, { FunctionComponent } from 'react';

const formatNewsTimeAgo = (timePublished: number) => {
  let timeAgo = Math.floor(timePublished / 1000 / 60);

  if (timeAgo < 60) {
    return timeAgo + 'min ago';
  } else {
    timeAgo = Math.floor(timeAgo / 60);
    return timeAgo === 1 ? timeAgo + 'hr ago' : timeAgo + 'hrs ago';
  }
};

interface News {
  datetime: number;
  headline: string;
  source: string;
  url: string;
}

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
