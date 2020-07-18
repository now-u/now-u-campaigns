import React from "react";
import { Modal } from "../components";
import ReactDOM from "react-dom";

export const popModal = (modalContent) => {
  const modalElement = React.createElement(
    Modal,
    {},
    modalContent
  );

  ReactDOM.render(
    modalElement,
    document.createElement("div")
  );
}

export default {
  popModal
}