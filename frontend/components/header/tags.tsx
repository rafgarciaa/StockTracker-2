import React, { FunctionComponent } from 'react';
import { FetchStatusState } from '../../utilities/interfaces';

interface TagsProps {
  exchange: string | null;
  sector: string | null;
  fetchingStatus: FetchStatusState;
}

const Tags: FunctionComponent<TagsProps> = ({
  exchange,
  sector,
  fetchingStatus,
}) => {
  return (
    <div>
      {fetchingStatus.startFetching && (
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
