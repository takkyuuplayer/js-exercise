import React from 'react';
import FilterLink from './FilterLink.js';

const Footer = ({
  visibilityFilter,
  onFilterClick,
}) => (
  <p>
    Show:
    { ' ' }
    <FilterLink filter="SHOW_ALL">ALL</FilterLink>
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </p>
);

export default Footer;
