import React from "react";
import styles from "./input.module.scss";

type Props = {
  type: any;
  value?: any;
  required: any;
  minLength: any;
  maxLength: any;
  onChange?: any;
  placeholder?: string;
};

const Input = (props: Props) => {
  return (
    <input
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      className={styles.input}
      required={props.required}
      minLength={props.minLength}
      maxLength={props.maxLength}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
