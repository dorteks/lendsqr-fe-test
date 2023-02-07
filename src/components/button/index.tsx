import React from "react";
import styles from "./button.module.scss";

type Props = {
  title: any;
};

const Button = (props: Props) => {
  return (
    <div>
      <button className={styles.container}>
        <h3 className={styles.title}>{props.title}</h3>
      </button>
    </div>
  );
};

export default Button;
