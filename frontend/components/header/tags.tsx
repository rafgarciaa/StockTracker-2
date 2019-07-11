import React, { FunctionComponent } from 'react';

interface TagsProps {
  exchange: string | null;
  sector: string | null;
}

const Tags: FunctionComponent<TagsProps> = ({ exchange, sector }) => {
  return (
    <div className="header__bottom-tags">
      <span>{exchange}</span>
      <span>{sector}</span>
      <span>USD</span>
    </div>
  );
};

export default Tags;
