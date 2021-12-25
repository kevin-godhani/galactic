import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Modal = ({ children, trigger, isOpen, onClose, onOpen }) => {
  return (
      <Popup
        modal
        nested
        open={isOpen}
        trigger={trigger}
        onClose={onClose}
        onOpen={onOpen}
      >
        {children}
      </Popup>
  );
};

export default Modal;
