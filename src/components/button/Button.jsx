import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import classes from "./Button.module.scss";

const Button = ({ id, children, type, variant = "primary", disabled, size = "medium", className, onClick, to, urlToLaunch }) => {
  const history = useHistory();
  const buttonClassNames = classNames(className, classes[variant], [classes[size]], {
    [classes.disabled]: disabled,
  });
  return (
    <button
      id={id}
      name={id}
      type={type}
      className={classNames(classes.buttonContainer, buttonClassNames)}
      onClick={() => {
        if (onClick) {
          onClick();
        } 
        else if (to) {
          history.push(to);
        }
        else if (urlToLaunch) {
          window.open(urlToLaunch, "_blank");
        }
      }
      }
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  children: PropTypes.any.isRequired,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
  type: PropTypes.string,
  urlToLaunch: PropTypes.string,
};

export default Button;
