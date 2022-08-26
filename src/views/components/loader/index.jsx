import React from 'react';

import './loader.scss';

const Loader = () => (
  <div className="Loader" data-testid="Loader">
    <div className="lds-grid">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Loader;
