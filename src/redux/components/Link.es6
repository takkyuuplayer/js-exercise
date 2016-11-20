import React from 'react';

const Link = ({
  active,
  children,
  onClick
}) => active ?
  <span>{children}</span>
  : (
  <a href="#" onClick={e => {
    e.preventDefault();
    onClick()
  }} >
  {children}
  </a>
);

export default Link;
