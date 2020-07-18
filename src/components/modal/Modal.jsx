import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classes from './Modal.module.scss';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: true
    };

    this.handleClickAway = this.handleClickAway.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.cleanup = this.cleanup.bind(this);
  }

  handleClose() {
    this.setState({
      isActive: false
    });
  }

  handleKeyDown(event) {
    if (event.keyCode === 27) {
      this.handleClose();
    }
  }

  handleClickAway(event) {
    if (!this.modalDialog.contains(event.target)) {
      this.handleClose();
    }
  }

  setScrollLock(isLocked) {
    document.body.style.overflow = isLocked ? "hidden" : 'auto';
  }

  cleanup() {
    this.setScrollLock(false);
  }

  componentDidMount() {
    this.setScrollLock(true);

    this.closeButton.focus();
  }

  componentWillUnmount() {
    this.cleanup();
  }

  render() {
    const {isActive} = this.state;

    if (!isActive) {
      this.cleanup();

      return null;
    }

    return ReactDOM.createPortal(
      <aside
        className={classes.container} id="modal"
        onKeyDown={this.handleKeyDown}
        tabIndex="-1"
        onClick={this.handleClickAway}
      >
        <div
          className={classes.dialog}
          ref={(modalDialog) => {this.modalDialog = modalDialog}}
        >
          <div className={classes.content}>
            <button
              className={classes.closeButton}
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
  children: PropTypes.node.isRequired,
};

