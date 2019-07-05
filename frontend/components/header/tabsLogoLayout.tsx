import React, { FunctionComponent } from 'react';
import AdaptiveLogo from './adaptiveLogo';
import Tabs from './tabs';

const TabsLogoLayout: FunctionComponent = () => {
  return (
    <div>
      <AdaptiveLogo />
      <Tabs />
    </div>
  );
};

export default TabsLogoLayout;
