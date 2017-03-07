import React, { PropTypes } from 'react';
import RcPager from 'rc-pager';

import 'rc-pager/assets/bootstrap.css';

const Pager = ({
  totalPage,
  currentPage,
  handlePageChange,
}) => (
  <div>
    <RcPager total={totalPage} current={currentPage} onSkipTo={handlePageChange} />
  </div>
);

Pager.propTypes = {
  totalPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default Pager;
