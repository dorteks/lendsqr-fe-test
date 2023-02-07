import React from "react";
import styles from "./input.module.scss";

type Props = {
  placeholder?: string;
};

const Input = (props: Props) => {
  return <input className={styles.input} placeholder={props.placeholder} />;
};

export default Input;
