import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const modalCtn = document.getElementById("modal") as HTMLElement;
const Modal = (props: any) => {
  return (
    <>
      {ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal_cnt">
            <div className="modal_box">{props.children}</div>
          </div>
        </React.Fragment>,
        modalCtn
      )}
    </>
  );
};

export default Modal;
