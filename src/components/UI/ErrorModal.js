import React from "react";
import Button from "./Button";
import Card from "./Card";

import styles from "./ErrorModal.module.css";

const ErrorModel = (props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onClick}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>{props.message}</div>
        <footer className={styles.actions}>
          <Button onClick={props.onClick}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};
export default ErrorModel;
