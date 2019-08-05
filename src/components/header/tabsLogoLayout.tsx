import React, { FunctionComponent } from 'react';
import AdaptiveLogo from './adaptiveLogo';
import Tabs from './tabs';

const TabsLogoLayout: FunctionComponent = () => {
  return (
    <div className="header__top">
      <AdaptiveLogo />
      <Tabs />
    </div>
  );
};

export default TabsLogoLayout;
