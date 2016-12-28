import React, { PropTypes }  from 'react';

const Link = ({
  active,
  onClick,
  children,
}) => (
  active ? <span>{children}</span>
    : <a onClick={onClick}>{children}</a>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Link;

