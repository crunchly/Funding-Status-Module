import React from 'react';
import ReactDOM from 'react-dom';
import Funding from './Components/fundingStatus.jsx';
import $ from 'jquery';

const renderToId = (id) => {
  ReactDOM.render(<Funding />, document.getElementById(id));
};

renderToId('funding_status');

module.exports = renderToId;

























