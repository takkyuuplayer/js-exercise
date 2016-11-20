import React from 'react';
import { connect } from 'react-redux';
import Link from './Link.es6';

const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter:filter
  }
};

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
