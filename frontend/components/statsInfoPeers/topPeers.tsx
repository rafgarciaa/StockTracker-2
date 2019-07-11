import React, { FunctionComponent } from 'react';
import { FetchStatusElement } from '../../utilities/interfaces';
import AdaptiveLoader from '../adaptiveLoader/adaptiveLoader';

interface TopPeersProps {
  topPeers: string[];
  fetchingStatus: FetchStatusElement;
}

const TopPeers: FunctionComponent<TopPeersProps> = ({
  topPeers,
  fetchingStatus,
}) => {
  return (
    <div className="section-peers">
      {fetchingStatus.startFetching && (
        <div>
          <h2 className="heading-section">Top Peers</h2>
          {!fetchingStatus.doneFetching ? (
            <AdaptiveLoader />
          ) : (
            <div>
              {topPeers.map((peer, idx) => (
                <span className="section-peers__peer" key={idx}>
                  {peer}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TopPeers;
