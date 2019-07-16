import React, { FunctionComponent } from 'react';
import { FetchStatusElement } from '../../utilities/interfaces';
import AdaptiveLoader from '../adaptiveLoader/adaptiveLoader';

interface TopPeersProps {
  topPeers: string[];
  fetchStatus: FetchStatusElement;
}

const TopPeers: FunctionComponent<TopPeersProps> = ({
  topPeers,
  fetchStatus,
}) => {
  console.log('I got re-rendered!');
  return (
    <div className="section-peers">
      {fetchStatus.startFetching && (
        <div>
          <h2 className="heading-section">Top Peers</h2>
          {!fetchStatus.doneFetching ? (
            <AdaptiveLoader />
          ) : fetchStatus.fetchSuccess !== '' ? (
            fetchStatus.fetchSuccess
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
