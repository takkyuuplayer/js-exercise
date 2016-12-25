import React from 'react';
import { connect } from 'react-redux';
import Link from './Link.js';
import { setVisibilityFilter } from '../actions/index.js';

const mapStateToLinkProps = (state, ownProps) => ({
  active: state.get('visibilityFilter') === ownProps.filter,
});
const mapDispatchToLinkProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps,
)(Link);

export default FilterLink;
