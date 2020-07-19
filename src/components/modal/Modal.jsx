import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classes from './Modal.module.scss';
import classNames from 'classnames';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: true
    };
  }

  handleClose = () =>  {
    this.setState({
      isActive: false
    });
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.handleClose();
    }
  }

  handleClickAway = (event) =>  {
    if (!this.modalDialog.contains(event.target)) {
      this.handleClose();
    }
  }

  setScrollLock = (isLocked) => {
    document.body.style.overflow = isLocked ? "hidden" : 'auto';
  }

  cleanup = () => {
    this.setScrollLock(false);

    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  componentDidMount() {
    this.setScrollLock(true);

    this.closeButton.focus();
  }

  componentWillUnmount() {
    this.cleanup();
  }

  render() {
    const { isActive } = this.state;
    const { color, size } = this.props;

    if (!isActive) {
      this.cleanup();
      return null;
    }

    return ReactDOM.createPortal(
      <aside
        className={classes.container}
        tabIndex="-1"
        onKeyDown={this.handleKeyDown}
        onClick={this.handleClickAway}
      >
        <div
          data-size={size}
          className={classes.dialog}
          ref={(modalDialog) => {this.modalDialog = modalDialog}}
        >
          <div className={classNames(classes.content, classes[color])}>
            <button
              className={classNames(classes.closeButton, classes[color])}
              onClick={this.handleClose}
              ref={(closeButton) => {this.closeButton = closeButton}}
            >
              <i className="small material-icons">close</i>
            </button>

            {this.props.children}

          </div>
        </div>
      </aside>,
      document.body
    );
  }
}

Modal.propTypes = {
  color: PropTypes.oneOf(['light', 'dark']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  color: 'light',
  size: 'medium'
};
