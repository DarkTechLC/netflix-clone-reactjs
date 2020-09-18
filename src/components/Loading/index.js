import React from 'react';

import './Loading.css';
import loadingGif from '../../assets/loading.gif';

export default () => {
  return (
    <div className="loading">
      <img src={loadingGif} alt="Loading..." />
    </div>
  );
}