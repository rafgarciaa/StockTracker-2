import React, { FunctionComponent } from 'react';
import TopPeers from './topPeers';

interface StatsInfoPeersProps {
  topPeers: string[];
}

const StatsInfoPeersLayout: FunctionComponent<StatsInfoPeersProps> = ({
  topPeers,
}) => {
  return (
    <div>
      <TopPeers topPeers={topPeers} />
    </div>
  );
};

export default StatsInfoPeersLayout;
