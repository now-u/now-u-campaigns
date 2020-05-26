import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './Button.module.scss';

const Button = ({
  id,
  children,
  variant = 'primary',
  disabled,
  size = 'medium',
  className,
  onClick,
}) => {
  const buttonClassNames = classNames(className, classes[variant], [classes[size]], {
    [classes.disabled]: disabled,
  });
  return (
    <button
      id={id}
      name={id}
      className={classNames(classes.buttonContainer, buttonClassNames)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any.isRequired,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.onClick,
};

export default Button;
