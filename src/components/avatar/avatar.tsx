import React from "react";
import styles from "./avatar.module.scss";

const Avatar = () => {
  return (
    <div className={styles.container}>
      <img
        alt="user profile picture"
        src="/images/user-avatar.svg"
        className={styles.userAvatar}
      />

      <span className={styles.userName}>Ayodele</span>

      <img alt="dropdown menu icon" src="/images/arrow-down.svg" />
    </div>
  );
};

export default Avatar;
