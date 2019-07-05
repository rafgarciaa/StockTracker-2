import React, { FunctionComponent } from 'react';
import { HeaderProps } from '../../utilities/interfaces';

const Tags: FunctionComponent<HeaderProps> = ({ exchange, sector }) => {
  return (
    <div>
      <span>{exchange}</span>
      <span>{sector}</span>
      <span>USD</span>
    </div>
  );
};

export default Tags;