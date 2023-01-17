import React from "react";
import cross from "../../assets/delete.png";
import "./styles.css";

const Modal = ({ onClose, children }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <img className="close" onClick={onClose} src={cross} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
