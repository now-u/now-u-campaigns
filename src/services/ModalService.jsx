import React from "react";
import { Modal } from "../components";
import ReactDOM from "react-dom";

/**
 * @param modalContentComponent The name of the component to be displayed within the modal.
 * @param contentProps          The props to be passed into the component to be displayed within the modal.
 * @param modalProps            The props to be passed into the modal.
 *
 * @see Modal for modalProps
 */
export const open = (modalContentComponent, contentProps, modalProps) => {
  const modalContent = React.createElement(
    modalContentComponent,
    contentProps
  )

  const modalElement = React.createElement(
    Modal,
    modalProps,
    modalContent
  );

  ReactDOM.render(
    modalElement,
    document.createElement("div")
  );
}

export default {
  open
}