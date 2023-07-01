import { Fragment } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

const BackDrop = () => {
  return <div className="backdrop"></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <p>{props.value}</p>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

export const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<BackDrop />, portalElement)}
      {createPortal(<ModalOverlay onClose={props.onClose}/>,portalElement)}
    </Fragment>
  );
};