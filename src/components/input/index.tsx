import React from "react";
import styles from "./input.module.scss";

type Props = {
  placeholder?: string;
  value: any;
};

const Input = (props: Props) => {
  return (
    <input
      className={styles.input}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
};

export default Input;
