import React, { FunctionComponent } from 'react';

const Tabs: FunctionComponent = () => {
  return (
    <div className="header__top-tabs">
      <a href="#" className="active">
        Quotes
      </a>
      <a href="#">Markets</a>
      <a href="#">Watchlists</a>
    </div>
  );
};

export default Tabs;
