import React, { FunctionComponent } from 'react';
import AdaptiveLogo from './adaptiveLogo';
import Tabs from './tabs';

const TabsLayout: FunctionComponent = () => {
  return (
    <div>
      <AdaptiveLogo />
      <Tabs />
    </div>
  );
};

export default TabsLayout;
