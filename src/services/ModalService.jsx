import React from "react";
import { Modal } from "../components";
import ReactDOM from "react-dom";

/**
 * Renders a Modal component with the modalContentComponent as the contents.
 *
 * @param modalContentComponent The name of the component to be displayed within the modal.
 * @param contentProps          The props to be passed into the component to be displayed within the modal.
 * @param modalProps            The props to be passed into the modal.
 *
 * @returns RefObject           RefObject for the Modal component.
 *
 * @see Modal for modalProps
 */
export const open = (modalContentComponent, contentProps, modalProps) => {
  const modalContentElement = React.createElement(
    modalContentComponent,
    contentProps
  );

  const modalRef = React.createRef();
  const modalElement = React.createElement(
    Modal,
    {
      ...modalProps,
      ref: modalRef
    },
    modalContentElement
  );

  // Render modal in-place of the newly created div element on the body
  ReactDOM.render(
    modalElement,
    document.createElement("div")
  );

  return modalRef;
};

/**
 * Closes the open Modal attached to modalRef
 *
 * @param modalRef RefObject for the currently rendered Modal component.
 */
export const close = (modalRef) => {
  modalRef.current.handleClose();
};

export default {
  open,
  close,
};
