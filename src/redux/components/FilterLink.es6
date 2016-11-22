import React from 'react';
import { connect } from 'react-redux';
import Link from './Link.es6';
import { setVisibilityFilter } from '../actions/index.es6';

const mapStateToLinkProps = (state, ownProps) => {
  return {
    active: state.get('visibilityFilter') === ownProps.filter
  }
};
const mapDispatchToLinkProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  }
};

const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link);

export default FilterLink;
