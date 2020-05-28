import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './Text.module.scss';

const Text = ({ type = 'h3', className, children }) => {
  const TextComponent = type;
  return <TextComponent className={classNames(classes.text, className)}>{children}</TextComponent>;
};

Text.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.any,
};

export default Text;
