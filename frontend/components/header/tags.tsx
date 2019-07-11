import React, { FunctionComponent } from 'react';
import { HeaderProps } from '../../utilities/interfaces';

const Tags: FunctionComponent<HeaderProps> = ({
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
