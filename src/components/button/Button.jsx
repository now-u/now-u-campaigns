import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './Button.module.scss';

const Button = ({ children, variant = 'primary', disabled, size = 'medium', className }) => {
  const buttonClassNames = classNames(className, classes[variant], [classes[size]], {
    [classes.disabled]: disabled,
  });
  return <button className={classNames(classes.buttonContainer, buttonClassNames)}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
