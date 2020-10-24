import React from "react";
import cx from "classnames";

interface ModalProps {
  show: boolean;
  onHide: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, show, onHide }) => {
  return (
    <div className={cx("modal", show ? "is-active" : "")}>
      <div className="modal-background" onClick={() => onHide()}></div>
      <div className="modal-content">
       {children}
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => onHide()}
      ></button>
    </div>
  );
};

export {Modal};