import React, { FunctionComponent } from 'react';
import { FetchStatusElement } from '../../utilities/interfaces';

interface TagsProps {
  exchange: string | null;
  sector: string | null;
  fetchStatus: FetchStatusElement;
}

const Tags: FunctionComponent<TagsProps> = ({
  exchange,
  sector,
  fetchStatus,
}) => {
  return (
    <div>
      {fetchStatus.startFetching && (
        <div className="header__bottom-tags">
          <span>{exchange}</span>
          <span>{sector}</span>
          <span>USD</span>
        </div>
      )}
    </div>
  );
};

export default Tags;
