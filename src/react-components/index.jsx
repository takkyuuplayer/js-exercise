import React from 'react';
import { render } from 'react-dom';

import Pager from './Pager';

render(
  <Pager totalPage={10} currentPage={1} handlePageChange={page => console.log(page)} />,
  document.getElementById('root'),
);
